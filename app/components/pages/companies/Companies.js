//@flow
import React, { PropTypes as pt } from 'react'

import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import FlatButton from 'material-ui/FlatButton'

import { Container } from './CompaniesStyle'

const Companies = React.createClass({
  propTypes: {
    getCompanies: pt.func.isRequired,
    companies: pt.arrayOf(pt.object).isRequired,
    router: pt.object.isRequired,
  },

  componentDidMount() {
    this.props.getCompanies()
  },

  onAddCompany() {
    this.props.router.push('/companies/new')
  },

  render() {
    const { companies } = this.props

    return <Container>
      <AppBar title={'Companies'}
        iconElementRight={<FlatButton label={'Add Company'} onClick={this.onAddCompany} />} />
      <List>
        {companies.map(c =>
          <div key={c.id}>
            <ListItem primaryText={c.name} />
            <Divider />
          </div>
        )}
      </List>
    </Container>
  }
})

export default Companies
