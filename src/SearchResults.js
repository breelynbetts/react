import React, { Component } from 'react'

import './style/SearchResults.css'

import NASAImage from './NASAImage'

class SearchResults extends Component {
  render() {
    return (
      <div className="search">
        {this.props.results.map(image => <NASAImage key={20} image={image.items} />)}
      </div>
    )
  }
}

export default SearchResults
