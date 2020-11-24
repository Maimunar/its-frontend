import React from 'react'

const AddItem = () => {

    return (
        <>
            <div className="item-form">
                <form method="post" enctype="multipart/form-data">
                    <div className="modify-item-form">
                        <select name="itemsList" id="itemsList">
                            <option value="" selected disabled hidden>Choose an item to modify:</option>
                            <option value="emmureShirt">Emmure Longsleeve</option>
                            <option value="emmureShirt">Emmure Longsleeve</option>
                            <option value="emmureShirt">Emmure Longsleeve</option>
                            <option value="emmureShirt">Emmure Longsleeve</option>
                        </select>
                        <input name="itemName" id="itemName" placeholder="Item Name" />
                        <input name="bandName" id="bandName" placeholder="Band Name" />
                        <textarea name="itemDescription" id="itemDescription" placeholder="Description" rows="5"></textarea>
                        <input name="itemPrice" id="itemPrice" placeholder="Price" type="number" />
                        Available Sizes:
                        <div>
                            <input type="checkbox" id="xs" name="xs" value="XS" />
                            <label>XS</label><br />
                            <input type="checkbox" id="s" name="s" value="S" />
                            <label>S</label><br />
                            <input type="checkbox" id="m" name="m" value="M" />
                            <label>M</label><br />
                            <input type="checkbox" id="l" name="l" value="L" />
                            <label>L</label><br />
                            <input type="checkbox" id="xl" name="xl" value="XL" />
                            <label>XL</label><br />
                        </div>
                        <select name="itemType" id="itemType">
                            <option value="" selected="selected" disabled="disabled" hidden="hidden">Choose here:</option>
                            <option value="shirt">Shirt</option>
                            <option value="sweatshirt">Sweatshirt</option>
                            <option value="hat">Hat</option>
                        </select>
                        <input name="buyLink" id="buyLink" type="url" placeholder="Link to a Seller" />

                        <label for="itemPicture" className="custom-file-upload">
                            <b>Click To Upload A Picture of the Clothing Item</b>
                        </label>
                        <input name="itemPicture" type="file" id="itemPicture" />

                        <input type="button" name="removeBtn" id="removeBtn" value="Remove Item" />
                        <input type="submit" name="submitBtn" id="submitBtn" /> <br />

                    </div>

                </form>
            </div>
        </>
    )
}

export default AddItem