import React from 'react'

import Place from '../Place'
import places from '../../data/places'

export default () => (
  <div>
    {
      places.map((place, idx) => (
        <Place place={place} key={idx} />
      ))
    }
  </div>
)