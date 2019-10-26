import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import _ from 'lodash';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme: Theme) => createStyles({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
    button: {
        background: '#3f51b5',
        color: "#fff",
        "&:hover": {
            color: "#3f51b5"
        }
    },
    preLoader: {
        marginTop: "50px",
        justifyContent: "center"
    }
});

interface IPropsContent {
    repositories: {};
    defaultContentAction: Function;
}

class Content extends Component<IPropsContent> {

    state = {
        count: 12,
        isFetchLoading: false,
        content: [],
        initialLoading: false
    }

    componentDidMount() {
        this.props.defaultContentAction(this.state.count)
    }

    componentDidUpdate(prevProps:{}) {
        
        if(!_.isEqual(prevProps, this.props)) {
            this.loadContent();

        }

    }

    loadContent = () => {
		this.setState((state) => {
			const {count: prevCount}: any = state;
			const {
				repositories: {content, filteredContent},
			}: any = this.props;

			const result = !_.isEmpty(filteredContent) ? filteredContent : content;

			return {
				...state,
				count: prevCount + 3,
				content: [...result],
			};
		});
	};

    pageScroll = window.onscroll = () => {
        
        const { repositories: {searchMode} }:any =  this.props;

        if(searchMode) {
            this.setState({isFetchLoading: false})
        } else {
            const userScrollHeight = document.documentElement.scrollHeight;
            const userOffsetHeigh = document.documentElement.offsetHeight;
            
            if( userOffsetHeigh === userScrollHeight) {
                this.setState({isFetchLoading: true})
                this.props.defaultContentAction(this.state.count)
            }
        }

    }

    render() {
        const { classes }:any = this.props;
        const { content } = this.state;
        const contentPreLoader = (this.state.isFetchLoading ? <CircularProgress className={classes.preLoader} disableShrink /> : null)

        const result = content.map(({id, name, url, description, openGraphImageUrl: image}:any) => (
            <Grid item key={id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={image}
                        title={name}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            { name }
                        </Typography>
                        <Typography>
                            { description }
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className={classes.button} target="_blank" size="small" color="primary" fullWidth href={url}>
                            Перейти...
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        ))

        

        return (
            <Fragment>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    { result }
                </Grid>
                { contentPreLoader }
            </Container>
    </Fragment>
        );
    }
}

export default withStyles(styles)(Content);