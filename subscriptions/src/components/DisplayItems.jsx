import React from 'react'
import SingleItem from './SingleItem'

export default function DisplayItems({subs}) {
  return (
   <>
   <h2>Subscriptions</h2>
   {
    subs.map(item => {
        <SingleItem 
        key={item.id}
        id={item.id} 
        price={item.price}
        type={item.type}/>
    })
   }
   </>
  )
}
