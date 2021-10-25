export const FETCH_JOKE = 'FETCH_JOKE';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_EXPLICIT_JOKE = 'FETCH_EXPLICIT_JOKE';
export const FETCH_EXPLICIT_JOKE_SUCCESS =
  'FETCH_EXPLICIT_JOKE_SUCCESS';
export const FETCH_MONEY_JOKE = 'FETCH_MONEY_JOKE';
export const FETCH_MONEY_JOKE_SUCCESS = 'FETCH_MONEY_JOKE_SUCCESS';

export const fetchJoke = payload => ({
  type: FETCH_JOKE,
  payload,
});

export const fetchJokeSuccess = payload => ({
  type: FETCH_JOKE_SUCCESS,
  payload,
});

export const fetchExplicitJoke = payload => ({
  type: FETCH_EXPLICIT_JOKE,
  payload,
});

export const fetchExplicitJokeSuccess = payload => ({
  type: FETCH_EXPLICIT_JOKE_SUCCESS,
  payload,
});

export const fetchMoneyJoke = payload => ({
  type: FETCH_MONEY_JOKE,
  payload,
});

export const fetchMoneyJokeSuccess = payload => ({
  type: FETCH_MONEY_JOKE_SUCCESS,
  payload,
});
