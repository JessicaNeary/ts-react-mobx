import * as React from 'react'

import EditableView from '../supplier/EditableView'
import DescriptionView from '../supplier/DescriptionView'
import ContactInfoView from '../supplier/ContactInfoView'
import ImagesView from '../supplier/ImagesView'

import { Service } from '../interfaces'

export default class ServiceDetails extends React.Component<{service: Service}, {}> {
  render() {
    const service = this.props.service
    return (
      <div className='ServiceDetails'>
        <h5 className='name'>
          <EditableView text={service.name} />
        </h5>
      </div>
    )
  }
}
