import "./FriendList.css"

export const FriendList = ({friends}) =>
  <ul className="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => {
      const arr = ["friend-list-status"];
      isOnline && arr.push("green");
      return <li key={id} className="friend-list-item">
        <span className={arr.join(" ")}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    })}
  </ul>;