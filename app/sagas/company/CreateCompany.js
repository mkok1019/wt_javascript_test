import { put, takeEvery } from 'redux-saga/effects'
import * as api from '~/app/api'
import { SAGA_CREATE_COMPANY, ADD_COMPANY } from '~/app/reducers/Company'
import { createAction } from 'redux-actions'

function* perform(_action) {
  try {
    const company = yield api.createCompany(_action.payload.body)
    const success = _action.payload.success
    yield put(createAction(ADD_COMPANY)({ company }))
    if (success) yield success()
  } catch (err) { console.log(err) }
}

function* watch() {
  yield takeEvery(SAGA_CREATE_COMPANY, perform)
}

export default watch
