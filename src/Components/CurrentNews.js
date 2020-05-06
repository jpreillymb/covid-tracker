import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../Actions/newsActions';
import { Article } from '.';
import { Typography, ThemeProvider, Paper} from '@material-ui/core';
import '../App.css';

const CurrentNews = (props) => {

    useEffect(() => {
        // props.fetchNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (props.loadingNews) {
        return (
            <Paper className="news-container" style={{overflow: 'auto'}}>
                <Typography variant="caption"> 
                    Loading...
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper className="news-container" style={{overflow: 'auto'}}>
            { props.news.articles.map((article) => 
                <Article key={article.url} data={article} />
            )}
        </Paper>  
        
    )
}

const mapStateToProps = (state) => ({
    news: state.newsapi.news,
    loadingNews: state.newsapi.loadingNews
})

const mapDispatchToProps = dispatch => {
    return {
        fetchNews: () => {
            dispatch(fetchNews())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentNews)
