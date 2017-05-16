import * as React from 'react'
import { Row } from 'react-bootstrap'

import EditableView from '../EditableView'
import DescriptionView from './DescriptionView'
import ContactInfoView from './ContactInfoView'
import ImagesView from './ImagesView'
import ServicesView from '../service/ServicesView'

import { Supplier } from '../interfaces'

export default class SupplierView extends React.Component<{supplier: Supplier}, {}> {
  render() {
    const supplier = this.props.supplier
    return (
      <div className='SupplierDetails'>
        <h1 className='name'>
          <EditableView text={supplier.name} />
        </h1>
        <Row>
          <DescriptionView text={supplier.description} />
          <ContactInfoView supplier={supplier} />
        </Row>
        <ImagesView images={supplier.images} />
        <ServicesView services={supplier.services} />
      </div>
    )
  }
}
