import React, { useState } from 'react'

const AddItem = () => {
    const clothTypes = ["Shirt", "Sweatshirt", "Hat"]
    const [itemName, setItemName] = useState('');
    const [bandName, setBandName] = useState('');
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [sizes, setSizes] = useState({
        "XS": false,
        "S": false,
        "M": false,
        "L": false,
        "XL": false
    });
    const [itemType, setItemType] = useState();
    const [itemReseller, setItemReseller] = useState();
    const [itemPicture, setItemPicture] = useState();


    const isFilledIn = () => {
        if (itemName !== '')
            return true
        else return false
    }

    const handleCheckboxChange = (e) => {
        const target = e.target
        const value = target.checked
        const name = target.name
        const tempSizes = sizes
        tempSizes[name] = value
        setSizes(tempSizes)
    }

    return (
        <>
            <div className="item-form">
                <form method="post" enctype="multipart/form-data">
                    <div className="modify-item-form">
                        <input name="itemName" id="itemName" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                        <input name="bandName" id="bandName" placeholder="Band Name" value={bandName} onChange={(e) => setBandName(e.target.value)} />
                        <textarea name="itemDescription" id="itemDescription" placeholder="Description" rows="5"
                            value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        <input name="itemPrice" id="itemPrice" placeholder="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                        Available Sizes:
                        <div>
                            <input type="checkbox" id="XS" name="XS" onChange={handleCheckboxChange} />
                            <label>XS</label><br />
                            <input type="checkbox" id="S" name="S" onChange={handleCheckboxChange} />
                            <label>S</label><br />
                            <input type="checkbox" id="M" name="M" onChange={handleCheckboxChange} />
                            <label>M</label><br />
                            <input type="checkbox" id="L" name="L" onChange={handleCheckboxChange} />
                            <label>L</label><br />
                            <input type="checkbox" id="XL" name="XL" onChange={handleCheckboxChange} />
                            <label>XL</label><br />
                        </div> <br />
                        <label>Choose a clothing type: </label>
                        <select name="itemType" value="Choose a clothing type:" id="itemType">
                            {clothTypes.map((type) =>
                                <option value={type.toLowerCase()}>{type}</option>
                            )}
                        </select>
                        <input name="buyLink" id="buyLink" type="url" placeholder="Link to a Seller" />

                        <label for="itemPicture" className="custom-file-upload">
                            <b>Click To Upload A Picture of the Clothing Item</b>
                        </label>
                        <input name="itemPicture" type="file" id="itemPicture" />
                        <input type="submit" name="submitBtn" id="submitBtn" /> <br />

                    </div>

                </form>
            </div>
        </>
    )
}

export default AddItem