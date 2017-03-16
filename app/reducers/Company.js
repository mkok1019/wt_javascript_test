// @flow
import type Action from '~/app/Types'
import update from 'immutability-helper'

export const ADD_COMPANY = 'company/ADD_COMPANY'
export const SET_COMPANIES = 'company/SET_COMPANIES'
export const SAGA_GET_COMPANIES = 'company/SAGA_GET_COMPANIES'
export const SAGA_CREATE_COMPANY = 'company/SAGA_CREATE_COMPANY'

const initialState = {
  companies: []
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload

  switch (action.type) {
    case ADD_COMPANY: {
      const companies = state.companies.slice(0)

      companies.push(p.company)
      return update(state, { companies: { $set: companies } })
    }
    case SET_COMPANIES:
      return update(state, { companies: { $set: p.companies } })
    default:
      return state
  }
}
