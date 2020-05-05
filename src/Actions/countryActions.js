export const UPDATE_CURRENT_COUNTRY   = 'UPDATE_CURRENT_COUNTRY';

export const updateCurrentCountry = (country) => ({
    type: UPDATE_CURRENT_COUNTRY,
    payload: country
  });