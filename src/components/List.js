import React from 'react'
import Item from './Item'

const List = ({stays}) => {
  return (
    <div className='list'>
        {
            stays.map((stay, index) => {
                return(
                    <Item
                        key={index}
                        stay={stay}
                    />
                )
            })
        }
    </div>
  )
}

export default List