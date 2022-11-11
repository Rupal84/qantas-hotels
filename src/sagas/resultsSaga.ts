import { call, takeEvery, put } from 'redux-saga/effects';
import Axios from 'axios';
import { fetch, fetchSuccess } from '../slices/results.slice';
import { IHotel } from '../common/types';

const callAPI = async ({
    url,
    method = 'GET',
}: {
    url: string;
    method?: 'GET';
}) => {
    return await Axios({
        url,
        method,
    });
};

export function* fetchDataSaga() {
    try {
        const result: { data: IHotel[] } = yield call(() =>
            callAPI({ url: 'http://localhost:3001/results' })
        );
        yield put(fetchSuccess(result.data));
    } catch (e) {
        console.error('fetch api failed');
    }
}

export default function* rootSaga() {
    yield takeEvery(fetch.type, fetchDataSaga);
}
