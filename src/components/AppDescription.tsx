import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    list: {
        textAlign: 'left'
    },
}));


const AppDescription: React.FC = () => {
    const classes = useStyles();
    return (
        <Fragment>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                            Quick dashboard for frontender
                        </Typography>
                        <div className="desc">
                            <p>
                                <strong>Тестовое задание: </strong>
                                <q>
                                    Оснавная идея заключается в быстром доступе к документации самых популярных библиотек
                                    для фронтендера.
                                </q>
                            </p>
                            <div>
                                <h2>Как это работает:</h2>
                                <ul className={classes.list}>
                                    <li>Работа происходит с gitHub GraphQL API queries.</li>
                                    <li>Запрашиваются самые популярные javaScript библиотеки и выводятся в порядке убывания.</li>
                                    <li>Имеется возможность поиска по ключевым словам</li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
        </Fragment>
    )
}

export default AppDescription