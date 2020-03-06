import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    handleMenuHeaderItem
} from '../action';


class TravelPage extends Component {
    render() {
        return (
         <div>
             TRAVEL INDEX!!
         </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TravelPage)