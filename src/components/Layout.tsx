import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header'
import AppDescription from './AppDescription'
import Content from './Content'

const Layout: React.FC = () => {
    return (
        <Fragment>
            <CssBaseline />
            <Header />
            <main>
               <AppDescription />
               <Content />
            </main>
        </Fragment>
    );
}

export default Layout

