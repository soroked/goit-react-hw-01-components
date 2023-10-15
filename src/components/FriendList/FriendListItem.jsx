export const FriendListItem = ({ avatar, name, isOnline }) => {
  
  const arr = ["friend-list-status"];
  isOnline && arr.push("green");

  return (
    <li className="friend-list-item">
      <span className={arr.join(" ")}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  )
}