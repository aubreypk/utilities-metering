import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'

import Course from '../components/Course'

const SPACE_ID = '[INSERT CONTENTFUL SPACE ID]'
const ACCESS_TOKEN = '[INSERT CONTENTFUL ACCESS TOKEN]'

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class MetersList extends Component {

    state = {
        meters: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getMeters()
    }

    getMeters = () => {
        client.getEntries({
            content_type: 'meter',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({meters: response.items})
            console.log(this.state.meters)
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }

    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getMeters()
    }

    render() {
        return (
            <div>
                { this.state.meters ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Meters"   
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.meters.map(currentMeter => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course meter={currentMeter} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}

export default MetersList;
