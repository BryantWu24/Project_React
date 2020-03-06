import React, { Component } from 'react';
import { Grid, } from 'semantic-ui-react';
import CarouselComponent from './carousel';
import BreadcrumbComponet from './breadcrumb';
import Content from '../homePage/content';
import Footer from '../homePage/footer'

class HomePage extends Component {
    render() {
        return (
            <Grid style={{ width: '100%', height: '100px', margin: '0 0' }}>
                <Grid.Row>
                    <Grid.Column width={16} >
                        <div style={{ display: 'flex', padding: '30px', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
                            <CarouselComponent />
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3}></Grid.Column>
                    <Grid.Column width={10}>
                        <BreadcrumbComponet />
                    </Grid.Column>
                    <Grid.Column width={3}></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Content />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16} >
                        <Footer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default HomePage
