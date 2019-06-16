import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import { ContentState } from '../store/content/types'
import { fetchDefaultContent } from '../store/actions'
import { searchContentAction } from '../store/content/actions';

class LayoutContainer extends Component {

    render() {
        return (
            <Fragment>
                <Layout props={this.props} />
            </Fragment>
        );
    }
} 

const mapStateToProps = ({ content, filteredContent }:any):ContentState => ({
    content,
    filteredContent
});

const mapDispatchToProps = (dispatch:Function):{} => ({
    defaultContentAction: (count: number) => dispatch(fetchDefaultContent(count)),
    searchContentAction: (text: string) => dispatch(searchContentAction(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);