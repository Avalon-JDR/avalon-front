import { useState } from "react";
import Slot from "../slot/Slot";
import { SlotItem } from "../slot/Slot.d";
import './Inventory.css';

const Inventory = () => {
    const [items, setItems] = useState<Array<SlotItem>>([

        {
            name: 'test',
            image: 'https://i.imgur.com/AUWSaoW.png',
            description: 'test',
            id: "1"
        },
        {
            name: 'test',
            image: 'https://i.imgur.com/zyEeCxo.png',
            description: 'test',
            id: "2"
        },
    ])
    const maxSlots = 10;
    return (
        <div className="inventory">
            {Array.from(Array(maxSlots).keys()).map((slot) => {
                return <div className="item"><Slot deleteItem={(id) => setItems(oldState => oldState.filter(item => item.id !== id))} item={items[slot]} /></div>;
            })}
        </div>
    );
};
export default Inventory;