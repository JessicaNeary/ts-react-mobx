import * as React from 'react'
import { Col } from 'react-bootstrap'

import { Item } from '../interfaces'

import EditableView from '../EditableView'

export default class DescriptionView extends React.Component<{text: Item}, {}> {
  render() {
    return (
      <Col md={6}>
        <h5 className='subheading'>DESCRIPTION:</h5>
        <EditableView text={this.props.text}/>
      </Col>
    )
  }
}
