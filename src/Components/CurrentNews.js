import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../Actions/newsActions';
import { Article } from '.';
import { Typography, Paper } from '@material-ui/core';
import '../App.css';

const CurrentNews = (props) => {

    useEffect(() => {
        props.fetchNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (props.loadingNews) {
        return (
        <div>
            <Typography variant="h6" className="recent-news"> 
                Most Recent COVID-19 News
            </Typography>
            <Paper elevation={1} className="news-container" style={{overflow: 'auto'}}>
                <Typography variant="caption"> 
                    Loading...
                </Typography>
            </Paper>
        </div>
        );
    }

    return (
        <div>
            <Typography variant="h6" className="recent-news"> 
                Most Recent COVID-19 News
            </Typography>
            <Paper className="news-container" style={{overflow: 'auto'}}>
                { props.news.articles.map((article) => 
                    <Article key={article.url} data={article} />
                )}
            </Paper> 
        </div>
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
