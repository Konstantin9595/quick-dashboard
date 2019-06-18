import React, { Component, Fragment } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles, withStyles, createStyles, Theme} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

const styles = (theme:Theme) => createStyles({
    appBar: {
      justifyContent: 'space-between'
    },
    logo: {
        color: "#fff",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none"
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

interface IPropsHeader {
    searchContentAction: Function;
};

class Header extends Component<IPropsHeader> {
    
    state = {
        searchText: ""
    }

    search = (event:any) => {
        const { searchContentAction } = this.props;
        this.setState({searchText: event.target.value});
        searchContentAction(event.target.value);
    }

    render() {
        const { classes, searchContentAction }:any = this.props;

        return (
            <Fragment>
                    <AppBar position="sticky">
                    <Container maxWidth="md">
                        <Toolbar className={classes.appBar}>
                            <Typography variant="h6" color="inherit" noWrap >
                            <Link href="#" className={classes.logo} >Quick dashboard </ Link>
                            </Typography>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    value={this.state.searchText}
                                    placeholder="Поиск…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                    onChange={this.search}
                                />
                            </div>
                        </Toolbar>
                        </Container>
                    </AppBar>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Header);