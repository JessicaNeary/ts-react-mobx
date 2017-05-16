import * as React from 'react'
import { Row, Col } from 'react-bootstrap'

import EditableView from '../EditableView'

import { Service } from '../interfaces'

export default class ServiceDetailsView extends React.Component<{service: Service}, {}> {
  render() {
    const service = this.props.service
    return (
      <Row className='ServiceDetails'>
        <Col>
          <img src='http://placehold.it/150x150' />
        </Col>
        <Col>
          <h5 className='name'>
            <EditableView text={service.name} />
          </h5>
        </Col>
      </Row>
    )
  }
}
