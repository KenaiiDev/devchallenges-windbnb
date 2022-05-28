import React from 'react'
import List from './List';
import StaysData from './StaysData';

const StaysContainer = ({stays, closeModal}) => {
  return (
    <section className='stays' onClick={() => closeModal()}>
        <StaysData />
        <List stays={stays} />
    </section>
  )
}

export default StaysContainer