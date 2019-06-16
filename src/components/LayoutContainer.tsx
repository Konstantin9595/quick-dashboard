import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import { ContentState } from '../store/content/types'
import { Action } from 'typesafe-actions';
import { fetchDefaultContent } from '../store/actions'

interface IProps {
    nodes: {};
    defaultContentAction?: Function;
}

class LayoutContainer extends Component<IProps> {

    render() {
        return (
            <Fragment>
                <Layout props={this.props} />     
            </Fragment>
        );
    }
}

const mapStateToProps = ({content: {nodes} }: {content:{nodes: [] } }):ContentState => ({
    nodes
});

const mapDispatchToProps = (dispatch:Function):{} => ({
    defaultContentAction: (count:number) => dispatch(fetchDefaultContent(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);