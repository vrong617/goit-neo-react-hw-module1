function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <span>{friend.isOnline ? 'Online' : 'Offline'}</span>
          <img src={friend.avatar} alt={friend.name} />
          <p>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;