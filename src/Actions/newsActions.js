export const FETCH_NEWS_BEGIN   = 'FETCH_NEWS_BEGIN';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const fetchNewsBegin = () => ({
    type: FETCH_NEWS_BEGIN
  });
  
  export const fetchNewsSuccess = news => ({
    type: FETCH_NEWS_SUCCESS,
    payload: news
  });
  
  export const fetchNewsFailure = error => ({
    type: FETCH_NEWS_FAILURE,
    payload: error
  });
  
var newsUrl = 'http://newsapi.org/v2/top-headlines?' +
  'q=COVID&' +
  'from=2020-05-05&' +
  'sortBy=publishedAt&' +
  'language=en&' +
  'apiKey=8f9a8fb03809415f9e03ba0a0caad5e2';

export const fetchNews = () => dispatch => {
    dispatch(fetchNewsBegin());
    return fetch(newsUrl)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchNewsSuccess(json));
            return json;
        })
        .catch(error => fetchNewsFailure(error));
}
