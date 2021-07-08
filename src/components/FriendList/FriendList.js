import PropTypes from "prop-types";
import styles from "./FriendList.module.css";
import { RiEmotionLine, RiEyeOffLine } from "react-icons/ri";

const FriendList = ({ friends }) => {
  return (
    <>
      <h2 className={styles.friends}>Friends</h2>
      <ul className={styles.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id} className={styles.item}>
            <span className={styles.status}>
              {isOnline ? (
                <RiEmotionLine color="green" />
              ) : (
                <RiEyeOffLine color="red" />
              )}
            </span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
