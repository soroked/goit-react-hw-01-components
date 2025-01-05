import css from './FriendList.module.css';

import React, { Component } from 'react';

export default class FriendList extends Component {
  render() {
    return (
      <ul className={css.friendList}>
        {this.props.friends.map(({ id, isOnline, avatar, name }) => (
          <li key={id} className={css.friendListItem}>
            <span
              className={`${css.status} ${isOnline ? css.online : css.offline}`}
            ></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
    );
  }
}
