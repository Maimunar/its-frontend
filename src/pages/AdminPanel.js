import React, { useState } from 'react'
import AddItem from '../components/AddItem'
import ModifyItem from '../components/ModifyItem'
import ItemsStatistics from '../components/ItemsForABandStatistics'
const AdminPanel = () => {

    const [itemMode, setItemMode] = useState('add')

    const changeItemPanel = (e) => {
        setItemMode(e.target.value)
    }

    return (
        <div className="wishlist-container">
            <div className="wishlist-subcontainer">
                <div className="item-form" onChange={changeItemPanel}>
                    <h3>Add or Update Item</h3>
                    <input type="radio" name="rbModifier" value="add" id="add" defaultChecked />
                    <label >Add</label>
                    <input type="radio" name="rbModifier" value="update" id="update" />
                    <label >Update</label>
                </div> <br />
                {itemMode === 'add' ? <AddItem /> : <ModifyItem />}
                <ItemsStatistics />
            </div>
        </div>
    )
}

export default AdminPanel;