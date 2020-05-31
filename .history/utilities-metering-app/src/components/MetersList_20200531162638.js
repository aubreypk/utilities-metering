import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class MetersList extends Component {


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
