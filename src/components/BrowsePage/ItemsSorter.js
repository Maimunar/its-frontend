import React, { useEffect, useState } from 'react'

const ItemsSorter = ({ items, setItems }) => {
    const [bands, setBands] = useState()
    const [selectedBand, setSelectedBand] = useState('default')
    const [XS, setXS] = useState(false)
    const [S, setS] = useState(false)
    const [M, setM] = useState(false)
    const [L, setL] = useState(false)
    const [XL, setXL] = useState(false)

    const getBands = () => {
        let bandsList = items.map(item => item.bandName)
        bandsList = [...new Set(bandsList)]
        setBands(bandsList)
    }


    const getSizes = () => {
        const tempSizes = { "XS": XS, "S": S, "M": M, "L": L, "XL": XL }
        let returnSizes = []
        for (const [key, value] of Object.entries(tempSizes)) {
            if (value) returnSizes.push(key)
        }
        return returnSizes
    }

    const filterItems = () => {
        let tempItems = items
        let searchQuery = '?'
        //Sort by Band Check
        if (selectedBand !== 'default') {
            console.log('Band filter')
            console.log(`selectedBand`)
        }
        let sizes = getSizes()
        if (sizes.length > 0) {
            console.log('Sizes filter')
            console.log(sizes)
        }


        setItems(tempItems)
    }

    useEffect(getBands, [items])
    useEffect(filterItems, [XS, S, M, L, XL, selectedBand])
    return (
        <div className="search-container">
            <h3>Search for a specific Item</h3>
            <div className="sort-by-band">
                <h4>Sort by band:</h4>
                <select name="bandsList" value={selectedBand} id="bandsList" onChange={(e) => setSelectedBand(e.target.value)} >
                    <option value="default" hidden>Choose Here:</option>
                    {bands ? bands.map((item, index) =>
                        <option value={item} key={index}>{item}</option>
                    ) : ""}
                </select>
            </div>
            <div className="sort-by-size">
                <h4>Find items in your size</h4>
                <input type="checkbox" id="XS" name="XS" checked={XS} onChange={(e) => setXS(e.currentTarget.checked)} />
                <label>XS</label><br />
                <input type="checkbox" id="S" name="S" checked={S} onChange={(e) => setS(e.currentTarget.checked)} />
                <label>S</label><br />
                <input type="checkbox" id="M" name="M" checked={M} onChange={(e) => setM(e.currentTarget.checked)} />
                <label>M</label><br />
                <input type="checkbox" id="L" name="L" checked={L} onChange={(e) => setL(e.currentTarget.checked)} />
                <label>L</label><br />
                <input type="checkbox" id="XL" name="XL" checked={XL} onChange={(e) => setXL(e.currentTarget.checked)} />
                <label>XL</label><br />
            </div>
            <div className="sort-by-price">
                <h4>Find all items above this price:</h4>
                <div class="slidecontainer">
                    <input type="range" min="1" max="100" class="slider" id="myRange" />
                </div>
                <p id="priceTag"></p>
            </div>
        </div>
    )
}


// <div class="sort-by-price">

// </div>
// </div>

export default ItemsSorter;