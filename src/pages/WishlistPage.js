import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WishlistItem from '../components/WishlistPage/WishlistItem'
import config from '../jwtconfig'

const WishlistPage = () => {
    const [wishlist, setWishlist] = useState([])

    const clearWishlist = (e) => {
        axios.post('/api/wishlist/clearWishlist/' + localStorage.getItem('user'), config)
            .then((res) => {
                console.log(res)
                setWishlist([])
            })
            .catch((err) => console.log(err))
    }


    const getWishlist = () => {
        axios.get('/api/wishlist/' + localStorage.getItem('user'), config)
            .then((res) => {
                setWishlist(res.data.wishlistItems)
            })
            .catch((err) => console.log(err))
    }

    useEffect(getWishlist, [wishlist])
    return (
        <div className="wishlist-container">
            <div className="wishlist-subcontainer">
                <div className="wishlist-title">
                    <h1>Your Wishlist</h1>
                    <button className="clear-wishlist-btn" onClick={clearWishlist}>Clear Wishlist</button>
                </div>
                <div className="wishlist-content">
                    {wishlist ? wishlist.map((item, key) =>
                        <WishlistItem item={item} key={key} />) : <p>Your Wishlist is empty! Consider adding some items?</p>}
                </div>
            </div>
        </div>
    )
}

export default WishlistPage;
