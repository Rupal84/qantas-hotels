import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { fetch, fetchSuccess } from "../slices/results.slice";
import { IHotel } from "../common/types";

let callAPI = async ({ url, method = 'GET' }: {url: string; method?: 'GET'}) => {
  return await Axios({
    url,
    method
  });
};

export function* fetchDataSaga() {
  try {
    let result: {data: IHotel[]} = yield call(() =>
      callAPI({ url: "http://localhost:3001/results" })
    );
    console.log('results', result);
    yield put(fetchSuccess(result.data));
  } catch (e) {
    console.error('fetch api failed');
  }
}

export default function* rootSaga() {
  yield takeEvery(fetch.type, fetchDataSaga);
}
