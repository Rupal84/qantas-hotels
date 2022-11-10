import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import { rootReducer } from '../slices';
import rootSaga from '../sagas/resultsSaga';
const sagaMiddleware = createSagaMiddleWare();
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
})

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>