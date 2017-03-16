//@flow
import React, { PropTypes as pt } from 'react'
import { Field, propTypes } from 'redux-form'

import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { Container } from '../companies/CompaniesStyle'

const renderTextField = ({ input, label, meta: { touched, error } }) => ( // eslint-disable-line
  <TextField hintText={label}
    floatingLabelText={label}
    fullWidth={true}
    errorText={touched && error} {...input} />
)

const style = {
  marginRight: 12,
  marginTop: 10,
}

const NewCompany = React.createClass({
  propTypes: {
    ...propTypes,
    createCompany: pt.func.isRequired,
    handleSubmit: pt.func.isRequired,
    router: pt.object.isRequired,
  },

  handleSubmit(values) {
    const { createCompany } = this.props

    createCompany({
      body: values,
      success: () => {
        this.props.router.push('/companies')
      }
    })
  },

  onCancel() {
    this.props.router.push('/companies')
  },

  render() {
    const { handleSubmit, pristine, submitting } = this.props

    return <Container>
      <AppBar title={'New Company'} />
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div>
          <Field name={'name'}
            component={renderTextField}
            label={'Company Name'} />
        </div>
        <div>
          <RaisedButton label={'Cancel'}
            default={true}
            type={'button'}
            onClick={this.onCancel}
            style={style} />
          <RaisedButton label={'Add'}
            primary={true}
            type={'submit'}
            disabled={pristine || submitting} />
        </div>
      </form>
    </Container>
  }
})

export default NewCompany
