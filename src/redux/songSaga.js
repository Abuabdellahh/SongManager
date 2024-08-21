import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../api/songApi";
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongStart,
  createSongSuccess,
  createSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
} from "./songSlice";

function* fetchSongs() {
  try {
    const response = yield call(api.fetchSongs);
    yield put(fetchSongsSuccess(response.data));
    yield put({ type: "songs/setSearchTerm", payload: "" });
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* createSong(action) {
  try {
    const response = yield call(api.createSong, action.payload);
    yield put(createSongSuccess(response.data));
  } catch (error) {
    yield put(createSongFailure(error.message));
  }
}

function* updateSong(action) {
  try {
    const response = yield call(api.updateSong, action.payload);
    yield put(updateSongSuccess(response.data));
  } catch (error) {
    yield put(updateSongFailure(error.message));
  }
}

function* deleteSong(action) {
  try {
    yield call(api.deleteSong, action.payload);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

export function* songSaga() {
  yield takeLatest(fetchSongsStart.type, fetchSongs);
  yield takeLatest(createSongStart.type, createSong);
  yield takeLatest(updateSongStart.type, updateSong);
  yield takeLatest(deleteSongStart.type, deleteSong);
}
