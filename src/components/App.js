import React, {useState, useEffect} from 'react'
import data from '../stays.json'
import Header from './Header'
import StaysContainer from './StaysContainer'

const App = () => {

    const [searchModal, setSearchModal] = useState(false);
    const [search, setSearch] = useState('');
    const [adultGuests, setAdultGuests] = useState(0);
    const [childGuests, setChildGuests] = useState(0);
    const [stays, setStays] = useState([]);
    const [location, setLocation] = useState('');

    useEffect(() => {
        setStays(data);
    }, []);

    const closeModal = () => {
        setSearchModal(false);
    }

    const toggleSearchModal = () => {
        setSearchModal(!searchModal);
    }

    const modalClass = searchModal ? (
        'is-active'
    ) : (
        ''
    );

    const handleSearchButton = () => {
        toggleSearchModal();
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
        if(e.target.value===''){
            setStays(data);
        }
    }

    const handleAdults = (e) => {
        if(e.target.innerText === "add"){
            filter(location, adultGuests+1+childGuests);
            setAdultGuests(adultGuests+1);
        }else{
            if(adultGuests > 0){
                filter(location, adultGuests-1+childGuests);
                setAdultGuests(adultGuests-1);
            }
        }
        
    }

    const handleChilds = (e) => {
        if(e.target.innerText === "add"){
            filter(location, adultGuests+childGuests+1);
            setChildGuests(childGuests+1);
        }else{
            if(childGuests > 0){
                filter(location, adultGuests+childGuests-1);
                setChildGuests(childGuests-1);
            }
        }
    }

    const filter = (locationParam, guests) => {
        if(locationParam !== ''){
            setLocation(locationParam);
            let stays = data.filter(stay => {
                return stay.city.toLowerCase().includes(location.toLowerCase()) && stay.maxGuests >= guests;
            });
            setStays(stays);
        }else{
            setLocation('');
            let stays = data.filter(stay => {
                return stay.maxGuests >= guests;
            });
            setStays(stays);
        }
    }



  return (
    <div className='app'>
        <Header 
            handleSearchButton={handleSearchButton}
            modalClass={modalClass}
            toggleSearchModal={toggleSearchModal}
            setSearch={setSearch}
            search={search}
            adultGuests={adultGuests}
            setAdultGuests={setAdultGuests}
            childGuests={childGuests}
            setChildGuests={setChildGuests}
            handleSearch={handleSearch}
            handleAdults={handleAdults}
            handleChilds={handleChilds}
            stays={stays}
            filter={filter}
            location={location}
        />
        <StaysContainer 
            stays={stays}
            closeModal={closeModal}
        />
    </div>
  )
}

export default App