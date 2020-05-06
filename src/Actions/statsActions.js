export const FETCH_STATS_BEGIN   = 'FETCH_STATS_BEGIN';
export const FETCH_STATS_SUCCESS = 'FETCH_STATS_SUCCESS';
export const FETCH_STATS_FAILURE = 'FETCH_STATS_FAILURE';
export const FETCH_CHARTDATA_BEGIN = 'FETCH_CHARTDATA_BEGIN';
export const FETCH_CHARTDATA_SUCCESS = 'FETCH_CHARTDATA_SUCCESS';
export const FETCH_CHARTDATA_FAILURE = 'FETCH_CHARTDATA_FAILURE';

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

export const fetchStats = () => async dispatch => {
    dispatch(fetchStatsBegin());
    try {
    const res = await fetch('https://api.covid19api.com/summary');
    const json = await res.json();
    dispatch(fetchStatsSuccess(json));
    return json;
  }
  catch (error) {
    return fetchStatsFailure(error);
  }
};

export const fetchChartBegin = () => ({
  type: FETCH_CHARTDATA_BEGIN
});

export const fetchChartSuccess = chart => ({
  type: FETCH_CHARTDATA_SUCCESS,
  payload: chart
});

export const fetchChartFailure = error => ({
  type: FETCH_CHARTDATA_FAILURE,
  payload: error
});

export const fetchChartData = (country) => async dispatch => {
    dispatch(fetchChartBegin());
    try {
    var url = 'https://api.covid19api.com/total/dayone/country/' + country
    const res = await fetch(url);
    const json = await res.json();
    dispatch(fetchChartSuccess(json));
    return json;
  }
  catch (error) {
    return fetchChartFailure(error);
  }
};