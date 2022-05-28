import React, {useEffect, useState} from 'react'
import Logo from '../img/logo.svg'
import SearchModal from './SearchModal'




const Header = ({location, filter, stays, handleSearchButton, toggleSearchModal, modalClass, setSearch, search, adultGuests, setAdultGuests, childGuests, setChildGuests, handleSearch, handleAdults, handleChilds}) => {

  const [recommendations, setRecommendations] = useState([]);

  useEffect( () => {
    if(search !== ''){
        const searchRes = stays.filter(stay => {
            if((stay.city.toLowerCase().includes(search.toLowerCase())) || (stay.country.toLowerCase().includes(search.toLowerCase()))){
                return true;
            }
            return false;
        })
        //Eliminar los objetos que tengan city o country repetidos de searchRes
        const uniqueSearchRes = searchRes.filter( (stay, index) => {
            const city = stay.city.toLowerCase();
            const country = stay.country.toLowerCase();
            const cityIndex = searchRes.findIndex( (stay, index) => {
                return stay.city.toLowerCase() === city;
            });
            const countryIndex = searchRes.findIndex( (stay, index) => {
                return stay.country.toLowerCase() === country;
            });
            if(cityIndex === index && countryIndex === index){
                return true;
            }
            return false;
        })

        setRecommendations(uniqueSearchRes);
    }else{
        setRecommendations([
            {
                "city": "Helsinki",
                "country": "Finland"
            },
            {
                "city": "Turku",
                "country": "Finland"
            },
            {
                "city": "Vaasa",
                "country": "Finland"
            },
            {
                "city": "Oulu",
                "country": "Finland"
            }
        ]);
    }
  }, [stays, search]);

  return (
    <header className="header">
        <div className="header__logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="header__search">
            <div className='search-container' onClick={() => toggleSearchModal()}>
                <input className="search-container__input" autoComplete='off' type="text" placeholder="location" name="location" value={location} />
                <input className="search-container__input" type="text" placeholder="guests" name="guests" value={(adultGuests+childGuests) === 0 ? '' : adultGuests+childGuests} />
                <button className="search-container__button">Search</button>
            </div>
        </div>
        <SearchModal 
            modalClass={modalClass}
            toggleSearchModal={toggleSearchModal}
            handleSearch={handleSearch}
            search={search}
            adultGuests={adultGuests}
            setAdultGuests={setAdultGuests}
            childGuests={childGuests}
            setChildGuests={setChildGuests}
            handleAdults={handleAdults}
            handleChilds={handleChilds}
            handleSearchButton={handleSearchButton}
            recommendations={recommendations}
            filter={filter}
        />
    </header>
  )
}

export default Header