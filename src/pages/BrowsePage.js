import React from 'react'
import axios from 'axios'

const BrowsePage = () => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    };
    axios.get('/api/users/authuseronly', config).then((res) => { console.log(res) })
    axios.get('/api/users/adminonly', config).then((res) => { console.log(res) })
    return (
        "browse page"
    )
}

export default BrowsePage;