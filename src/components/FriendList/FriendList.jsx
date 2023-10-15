import "./FriendList.css"
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({friends}) =>
  <ul className="friend-list">
    {friends.map(({avatar, name, isOnline}) =>
      <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    )}
  </ul>;