import { useState } from 'react';
import { ItemProps } from './Item.d'
import './Item.css';
const Item = ({ item, deleteItem }: ItemProps) => {
    const [showMenu, setShowMenu] = useState(false);
    return <div className='item' onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
        <img src={item.image} alt={item.name} />
        {showMenu && <div className='menu'>
            <div className="item-name">Nom: {item.name}</div>
            <div className="item-description">Description: {item.description}</div>
            <button onClick={() => deleteItem && deleteItem(item.id)}>Supprimer</button>

        </div>}
    </div>
}

export default Item;