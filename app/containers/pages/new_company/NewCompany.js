//@flow
import { connect } from 'react-redux'
import NewCompany from '~/app/components/pages/new_company/NewCompany'
import { createAction } from 'redux-actions'
import { SAGA_CREATE_COMPANY } from '~/app/reducers/Company'
import { reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  const requiredFields = ['name']

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (values.name && values.name.length < 3) {
    errors.name = 'Company Name should not be shorter than 3 characters.'
  }

  return errors
}

export const mapDispatchToProps = (dispatch: Function): Object => ({
  createCompany: (payload) => dispatch(createAction(SAGA_CREATE_COMPANY)(payload))
})

export default reduxForm({
  form: 'newCompany',
  validate
})(connect(null, mapDispatchToProps)(NewCompany))
