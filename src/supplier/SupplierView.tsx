import * as React from 'react'

import EditableView from './EditableView'
import DescriptionView from './DescriptionView'
import ContactInfoView from './ContactInfoView'
import ImagesView from './ImagesView'
import ServicesList from '../service/ServicesView'

import { Supplier } from '../interfaces'

export default class SupplierView extends React.Component<{supplier: Supplier}, {}> {
  render() {
    const supplier = this.props.supplier
    return (
      <div className='SupplierDetails'>
        <h1 className='name'>
          <EditableView text={supplier.name} />
        </h1>
        <DescriptionView text={supplier.description} />
        <ContactInfoView supplier={supplier} />
        <ImagesView images={supplier.images} />
        <ServicesList services={supplier.services} />
      </div>
    )
  }
}
