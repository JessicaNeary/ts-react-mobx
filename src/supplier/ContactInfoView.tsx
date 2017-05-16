import * as React from 'react'
import { Col } from 'react-bootstrap'

import EditableView from '../EditableView'

import { Supplier } from '../interfaces'

export default class ContactInfoView extends React.Component<{supplier: Supplier}, {}> {
  render() {
    const supplier = this.props.supplier
    return (
      <Col md={5}>
        <ul className='ContactInfo'>
          <li className='address'><EditableView text={supplier.address} /></li>
          { (supplier.phone !== undefined) ? <li className='phone'><EditableView text={supplier.phone} /></li> : null }
          { (supplier.email !== undefined) ? <li className='email'><EditableView text={supplier.email} /></li> : null }
          { (supplier.website !== undefined) ? <li className='website'><EditableView text={supplier.website} /></li> : null }
        </ul>
      </Col>
    )
  }
}
