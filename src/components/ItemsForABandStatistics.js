import React from 'react'

const ItemsForABandStatistics = () => {

    return (
        <div className="statistics-panel">
            <h3>View Number of Items for a Band</h3>
            <p>Pick a band:</p>
            <select name="bandsList" id="bandsList">
                <option value="" selected disabled hidden>Choose here:</option>
                <option value="emmure">Emmure</option>
                <option value="adaytoremember">A day to remember</option>
            </select>
            <p>The band Emmure has <b>4</b> Items on this website</p>
        </div>
    )
}

export default ItemsForABandStatistics;