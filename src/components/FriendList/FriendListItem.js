import PropTypes from "prop-types";
import styles from "./FriendList.module.css";
import { RiEmotionLine, RiEyeOffLine } from "react-icons/ri";
import defaultImg from "../Profile/default-user.png";

const FriendListItem = ({ avatar = defaultImg, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={styles.status}>
        {isOnline ? (
          <RiEmotionLine color="green" />
        ) : (
          <RiEyeOffLine color="red" />
        )}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="60" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
