import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {
    handleMenuHeaderItem
} from '../action';


class MenuHeader extends Component {
    render() {
        return (
            <Menu>
                <Menu.Item
                    name='Logo'
                >
                    Bryant React
                </Menu.Item>

                <Menu.Item
                    active={this.props.menuItem === 'homePage'}
                    onClick={() => { this.props.handleMenuItem('homePage') }}
                >
                    Home Page
                </Menu.Item>
                <Menu.Item
                    active={this.props.menuItem === 'travelBlog'}
                    onClick={() => { this.props.handleMenuItem('travelBlog') }}
                >
                    Travel Blog
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='signUp'
                        active={this.props.menuItem === 'signUp'}
                        onClick={() => { this.props.handleMenuItem('signUp') }}
                    >
                        Sign Up
                   </Menu.Item>
                    <Menu.Item
                        name='sigNin'
                        active={this.props.menuItem === 'signIn'}
                        onClick={() => { this.props.handleMenuItem('signIn') }}
                    >
                        Sign In
                    </Menu.Item>
                    <Menu.Item
                        name='setting'
                        active={this.props.menuItem === 'setting'}
                        onClick={() => { this.props.handleMenuItem('setting') }}
                    >
                        <Icon loading size='big' name='setting' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuHeader)