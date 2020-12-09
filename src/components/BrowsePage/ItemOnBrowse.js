import React from 'react'
import { Link } from 'react-router-dom';

const ItemOnBrowse = ({ item }) => {

    return (
        <Link to={'/item/' + item.itemName}>
            <div className="item-card">
                <div className='product-item-picture-container'>
                    <img src={"/api/items/itemPicture/" + item.itemPicture} alt={item.itemName} />
                </div>
                <div className="product-item-title">
                    <h4>{item.itemName}</h4>
                </div>
                <div className="product-item-price">
                    <p>{item.price} $</p>
                </div>
            </div>
        </Link>
    )
}

export default ItemOnBrowse;