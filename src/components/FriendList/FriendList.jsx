import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';

function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
