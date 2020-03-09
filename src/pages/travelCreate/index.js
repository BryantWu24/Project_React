import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    handleMenuHeaderItem
} from '../../components/action';


class TravelCreate extends Component {
    render() {
        return (
            <div>
                TRAVEL CREATE!!
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

export default connect(mapStateToProps, mapDispatchToProps)(TravelCreate)