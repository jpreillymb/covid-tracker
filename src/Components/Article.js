import React from 'react';
import { Card, Link, Typography, Box } from '@material-ui/core';
import '../App.css';

function Article(props) {

    var imageUrl = props.data.urlToImage;
    if (imageUrl === "") {
        imageUrl = "/placeholder.png";
    }
   
    return (
        <div>
            <Card>
                <div className="article-container">
                    <img 
                        className="article-image" 
                        src={imageUrl} 
                        title={props.data.title}
                        alt=""
                        />
                    <div className="article-text">
                        <Typography className="article-spacer" color="textPrimary" variant="overline">
                            <Box fontWeight="fontWeightBold" fontSize={12} letterSpacing={1.5} lineHeight={1}>
                                {props.data.title}
                            </Box>
                        </Typography>
                        <Typography className="article-spacer" color="textSecondary" variant="caption">
                            <Box fontSize={8} letterSpacing={1} lineHeight={1}>
                                {props.data.description}
                            </Box>
                        </Typography>
                        <Link href={props.data.url}>
                            <Typography component={'span'} color="primary">
                                <Box fontSize={8} letterSpacing={1} lineHeight={1}>
                                    Click to Read More
                                </Box>
                            </Typography>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Article;

