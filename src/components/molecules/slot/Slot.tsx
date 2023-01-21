import { SlotProps } from './Slot.d';
import './Slot.css';
import Item from '../../atoms/item/Item';
const Slot = ({ item, deleteItem }: SlotProps) => {
    return <div className='slot'>
        {item && <Item item={item} deleteItem={deleteItem} />}
    </div>
}

export default Slot;