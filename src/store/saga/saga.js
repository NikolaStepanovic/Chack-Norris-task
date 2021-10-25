import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_JOKE,
  fetchJokeSuccess,
  fetchExplicitJokeSuccess,
  FETCH_EXPLICIT_JOKE,
  FETCH_MONEY_JOKE,
  fetchMoneyJokeSuccess,
} from '../action';

const apiData = category => {
  return axios.get(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );
};

function* fetchData({ payload }) {
  try {
    const { data } = yield call(apiData, payload);
    if (payload === 'career') yield put(fetchJokeSuccess(data));
    if (payload === 'explicit')
      yield put(fetchExplicitJokeSuccess(data));
    if (payload === 'money') yield put(fetchMoneyJokeSuccess(data));
  } catch (e) {
    console.log(e.message);
  }
}

function* watchDataRequest() {
  yield takeEvery(FETCH_JOKE, fetchData);
  yield takeEvery(FETCH_EXPLICIT_JOKE, fetchData);
  yield takeEvery(FETCH_MONEY_JOKE, fetchData);
}

export default watchDataRequest;
