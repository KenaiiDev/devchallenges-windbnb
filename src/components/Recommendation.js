import React from 'react'

const Recommendation = ({stay, filter, adultGuests, childGuests}) => {
  return (
    <div className='search-modal__recommendation' onClick={() => filter(stay.city, adultGuests+childGuests)}>
        <span className='material-icons search-modal__icon'>place</span> {stay.city}, {stay.country}
    </div>
  )
}

export default Recommendation