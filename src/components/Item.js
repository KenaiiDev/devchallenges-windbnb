import React from 'react'

const Item = ({index, stay}) => {
  return (
    <div className='list__item'>
        <div className='list__img'>
            <img src={stay.photo} alt='' />
        </div>
        <div className='list__info'>
            {
                stay.superHost ?
                    <div className='list__superhost'>Super host</div>
                : null
            }
            <div className='list__details'>
                {
                    stay.beds ?
                    `${stay.type}, ${stay.beds} beds`
                    :
                    `${stay.type}`
                }
            </div>
            <div className='list__rate'><span className='material-icons list__star'>star</span> {stay.rating}</div>
        </div>
        <p className='list__description'>
            {stay.title}
        </p>
    </div>
  )
}

export default Item