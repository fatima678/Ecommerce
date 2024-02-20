import React from 'react'
import './ShopCategory.css'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopCategory)
  return ( 
    <div className='shop-category'>
      <img src={props.banner} alt=''></img>
      
    </div>
  )
}

export default ShopCategory
