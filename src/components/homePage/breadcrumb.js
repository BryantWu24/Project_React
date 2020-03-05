import React, { Component } from 'react'
import { Breadcrumb } from 'semantic-ui-react'

class BreadcrumbComponent extends Component {
    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Section link>Home</Breadcrumb.Section>
                <Breadcrumb.Divider>/</Breadcrumb.Divider>
                <Breadcrumb.Section link>Registration</Breadcrumb.Section>
                <Breadcrumb.Divider>/</Breadcrumb.Divider>
                <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
            </Breadcrumb>
        );
    }
}

export default BreadcrumbComponent