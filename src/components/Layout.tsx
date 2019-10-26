import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header'
import Content from './Content'

interface ILayout {
    props: {}
}

const Layout: React.FC<ILayout> = ({props: {content, defaultContentAction, searchContentAction} }:any) => {
    return (
        <Fragment>
            <CssBaseline />
            <Header searchContentAction={searchContentAction}/>
            <main>
               <Content repositories={content} defaultContentAction={defaultContentAction}/>
            </main>
        </Fragment>
    );
}

export default Layout