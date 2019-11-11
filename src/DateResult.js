import React from 'react'

import APODImage from './APODImage.js'

const DateResult = props => (
    <div className="DateResult">
      {props.results.map(image => <APODImage image={image} key={image.title}/>)}
    </div>
)

export default DateResult