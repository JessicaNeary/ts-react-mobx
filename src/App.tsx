import * as React from 'react'

// import { store } from './createApi'
import { dummyStore } from './interfaces'

import SupplierView from './supplier/SupplierView'

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <SupplierView supplier={dummyStore} />
      </div>
    )
  }
}
