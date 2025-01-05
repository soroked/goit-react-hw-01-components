import React, { Component } from 'react';

import css from './Statistics.module.css';

export default class Statistics extends Component {
  render() {
    return (
      <div className={css.statistics}>
        <p className={css.name}>Upload Stats</p>
        <ul className={css.stats}>
          {this.props.data.map(stat => {
            return (
              <li key={stat.id} className={css.stat}>
                <p>{stat.label}</p>
                <p>{stat.percentage}%</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
