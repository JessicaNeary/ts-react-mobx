import * as React from 'react'
import { Item } from '../interfaces'

import EditableView from './EditableView'

export default class DescriptionView extends React.Component<{text: Item}, {}> {
  render() {
    return (
      <div>
        <h4>DESCRIPTION</h4>
        <EditableView text={this.props.text}/>
      </div>
    )
  }
}
