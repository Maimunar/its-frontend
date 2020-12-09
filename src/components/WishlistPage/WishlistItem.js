import axios from 'axios'
import React, { useState } from 'react'
import config from '../../jwtconfig'


const WishlistItem = ({ item }) => {

    const handleDelete = (e) => {
        axios.delete('/api/wishlist/' + localStorage.getItem('user'), { data: { itemName: item.itemName } }, config)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return (
        <div className="wishlist-item-container">
            <div className="wishlist-item-picture-container">
                <img src={"/api/items/itemPicture/" + item.itemPicture} />
            </div>
            <div className="wishlist-item-content-container">
                <h3>{item.itemName}</h3>
                <a className="wishlist-details" href={'/item/' + item.itemName}>Get More Details</a>
                <a className="wishlist-reseller" href={item.linkToReseller} target="_blank">Go to reseller</a>
            </div>
            <button className="delete-btn" onClick={handleDelete}><h3>X</h3></button>
        </div>
    )
}


export default WishlistItem
