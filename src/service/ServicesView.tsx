import * as React from 'react'

import ServiceDetailsView from './ServiceDetailsView'

import { Service } from '../interfaces'

export default class ServicesView extends React.Component<{services: Service[]}, {}> {
  render() {
    const services = this.props.services.map(function (service, index) {
      return <ServiceDetailsView key={index} service={service} />
    })
    return (
      <div className='ServicesList'>
        <h5 className='subheading'>SERVICES:</h5>
        {services}
      </div>
    )
  }
}
