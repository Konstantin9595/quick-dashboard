import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header'
import AppDescription from './AppDescription'
import Content from './Content'

interface ILayout {
    props: {}
}

const Layout: React.FC<ILayout> = ({props: {nodes, defaultContentAction}}:any) => {
    return (
        <Fragment>
            <CssBaseline />
            <Header />
            <main>
               <AppDescription />
               <Content repositories={nodes} defaultContentAction={defaultContentAction}/>
            </main>
        </Fragment>
    );
}

export default Layout