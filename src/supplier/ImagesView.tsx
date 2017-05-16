import * as React from 'react'

export default class ImagesView extends React.Component<{images: string[]}, {}> {
  render() {
    const imageDisplay = this.props.images.map(function (image, index) {
      return <img key={index} src={image} />
    })
    return (
      <div className='Images'>
        <h5 className='subheading'>IMAGES:</h5>
        {imageDisplay}
      </div>
    )
  }
}
