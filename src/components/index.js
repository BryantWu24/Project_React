import React, { Component } from 'react';
import { Menu, Icon, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {
    handleMenuHeaderItem
} from './action';
import HomePage from './homePage/index';
import TravelCreate from './travelCreate/index';
import TravelPage from './travelIndex/index';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class MainIndex extends Component {
    render() {
        return (
            <Router>
                <Grid style={{ width: '100%', height: '100px', margin: '0 0' }}>
                    <Grid.Row >
                        <Menu style={{ width: '100%', height: '70px' }}>
                            <Menu.Item
                                name='Logo'>
                                Bryant React
                            </Menu.Item>
                            <Menu.Item
                                active={this.props.menuItem === 'homePage'}
                                onClick={() => { this.props.handleMenuItem('homePage') }}>
                                <Link to="/"> Home Page</Link>
                            </Menu.Item>
                            <Menu.Item
                                active={this.props.menuItem === 'travelBlog'}
                                onClick={() => { this.props.handleMenuItem('travelBlog') }}>
                                <Link to="/TravelCreate"> Travel Create</Link>
                            </Menu.Item>
                            <Menu.Item
                                active={this.props.menuItem === 'travelBlog'}
                                onClick={() => { this.props.handleMenuItem('travelBlog') }}>
                                <Link to="/TravelPage"> Travel Page</Link>
                            </Menu.Item>
                            <Menu.Menu position='right'>
                                <Menu.Item
                                    name='signUp'
                                    active={this.props.menuItem === 'signUp'}
                                    onClick={() => { this.props.handleMenuItem('signUp') }}>
                                    Sign Up
                            </Menu.Item>
                                <Menu.Item
                                    name='sigNin'
                                    active={this.props.menuItem === 'signIn'}
                                    onClick={() => { this.props.handleMenuItem('signIn') }}>
                                    Sign In
                            </Menu.Item>
                                <Menu.Item
                                    name='setting'
                                    active={this.props.menuItem === 'setting'}
                                    onClick={() => { this.props.handleMenuItem('setting') }}>
                                    <Icon loading size='big' name='setting' />
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                    </Grid.Row>
                    <Grid.Row>
                        <div style={{ width: '100%' }}>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/HomePage" component={HomePage} />
                            <Route path="/TravelCreate" component={TravelCreate} />
                            <Route path="/TravelPage" component={TravelPage} />
                        </div>
                    </Grid.Row>
                </Grid>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuItem: state.handleMenuHeaderItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMenuItem: (val) => {
            dispatch(handleMenuHeaderItem(val))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainIndex)