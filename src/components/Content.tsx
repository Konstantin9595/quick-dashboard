import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import _ from 'lodash';


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
    }
});

interface IProps {
    repositories: {};
    defaultContentAction: Function;
}

class Content extends Component<IProps> {


    componentDidMount() {
        this.props.defaultContentAction(24)
    }

    scrollPage = window.onscroll = (event) => {
        console.log("scroll event = ", event)
    }


    render() {
        const { classes }:any = this.props;
        const { repositories }:any = this.props
        const content = _.isEmpty(repositories) ? [] : repositories.nodes;

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
                        <Button className={classes.button} size="small" color="primary" fullWidth href={url}>
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
            </Container>
    </Fragment>
        );
    }
}

export default withStyles(styles)(Content);