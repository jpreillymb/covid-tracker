export const FETCH_STATS_BEGIN   = 'FETCH_STATS_BEGIN';
export const FETCH_STATS_SUCCESS = 'FETCH_STATS_SUCCESS';
export const FETCH_STATS_FAILURE = 'FETCH_STATS_FAILURE';

export const fetchStatsBegin = () => ({
  type: FETCH_STATS_BEGIN
});

export const fetchStatsSuccess = stats => ({
  type: FETCH_STATS_SUCCESS,
  payload: stats
});

export const fetchStatsFailure = error => ({
  type: FETCH_STATS_FAILURE,
  payload: error
});

export const fetchStats = () => dispatch => {
    dispatch(fetchStatsBegin());
    return fetch('https://api.covid19api.com/summary')
        .then(res => res.json())
        .then(json => {
            dispatch(fetchStatsSuccess(json));
            return json;
        })
        .catch(error => fetchStatsFailure(error));
}