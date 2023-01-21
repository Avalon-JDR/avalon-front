import { AvatarProps } from './Avatar.d';
const Avatar = ({ image }: AvatarProps) => {
    return (
        <div className="avatar">
            <img src={image ? image : require("../../../assets/avatars/avatar_default.jfif")} alt="avatar" />
        </div>
    );
};

export default Avatar;