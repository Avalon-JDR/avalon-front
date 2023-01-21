import Avatar from "../../atoms/avatar/Avatar";
import Inventory from "../../molecules/inventory/Inventory";
import './User.css';

const User = () => {

    return (
        <div className="UserContainer">
            <div className="InventorySection">
                <Inventory />

            </div>
            <div className="ProfileSection">
                <Avatar image={undefined} />
            </div>
        </div>
    );
};


export default User;