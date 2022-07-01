import React from 'react'
import Recommendation from './Recommendation'

const SearchModal = ({filter,  recommendations, modalClass, toggleSearchModal, handleSearch, search, adultGuests, childGuests, handleSearchButton, handleAdults, handleChilds}) => {
  return (
    <div className={`search-modal ${modalClass}`}>
            <div className='search-modal__header'>
                <h3 className='search-modal__title'>Edit your search</h3>
                <button className='material-icons search-modal__close' onClick={() => toggleSearchModal()}>close</button>
            </div>
            <div className='search-modal__inputs'>
                <div className='search-modal__input-container'>
                    <label className='search-modal__label'>Location</label>
                    <input className='search-modal__input' type="text" placeholder="location" name="location" onChange={(e) => handleSearch(e)} value={search} />
                </div>
                <div className='search-modal__input-container'>
                    <label className='search-modal__label'>Guests</label>
                    <input className='search-modal__input' type="text" placeholder="guests" name="guests" value={(adultGuests+childGuests) === 0 ? '' : adultGuests+childGuests}/>
                </div>
                <div className='search-modal__input-container'>
                    <button className='search-modal__search' onClick={() => handleSearchButton()}><span className="material-icons">search</span>Search</button>
                </div>
            </div>
            <div className='search-modal__recommendations'>
                <div className='search-modal__recommendation' onClick={() => filter("", adultGuests+childGuests)}>
                    <span className='material-icons search-modal__icon'>place</span> All
                </div>
                {
                    recommendations.map(stay => {
                        return <Recommendation key={stay.city} stay={stay} filter={filter} adultGuests={adultGuests} childGuests={childGuests} />
                    })
                }
            </div>
            <div className='search-modal__guests'>
                <div className='search-modal__guests-count'>
                    <h4 className='search-modal__guests-count-title'>Adults</h4>
                    <span className='search-modal__guests-count-definition'>Age 13 or above</span>
                    <div className='search-modal__guests-count-inputs'>
                        <button className='search-modal__guests-button' onClick={(e) => handleAdults(e)}><span className="material-icons">remove</span></button>
                        <span className='search-modal__guests-count-value'>{adultGuests}</span>
                        <button className='search-modal__guests-button' onClick={(e) => handleAdults(e)}><span className="material-icons">add</span></button>
                    </div>
                </div>
                <div className='search-modal__guests-count'>
                    <h4 className='search-modal__guests-count-title'>Children</h4>
                    <span className='search-modal__guests-count-definition'>Age 2 - 12</span>
                    <div className='search-modal__guests-count-inputs'>
                        <button className='search-modal__guests-button' onClick={(e) => handleChilds(e)}><span className="material-icons">remove</span></button>
                        <span className='search-modal__guests-count-value'>{childGuests}</span>
                        <button className='search-modal__guests-button' onClick={(e) => handleChilds(e)}><span className="material-icons">add</span></button>
                    </div>
                </div>
            </div>
            <div className='search-modal__footer'>
            <button className='search-modal__button' onClick={() => handleSearchButton()}><span className="material-icons">search</span>Search</button>
            </div>
        </div>
  )
}

export default SearchModal