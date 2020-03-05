import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

class FooterComponent extends Component {
    render() {
        return (
            <Segment inverted style={{height:'200px'}} >Footer content.</Segment>
        );
    }
}

export default FooterComponent