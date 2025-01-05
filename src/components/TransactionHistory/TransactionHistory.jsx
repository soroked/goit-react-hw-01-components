import css from './TransactionsHistory.module.css';

import React, { Component } from 'react';

export default class TransactionHistory extends Component {
  render() {
    return (
      <div className={css.tableContainer}>
        <table className={css.transactionHistoryTable}>
          <thead className={css.tableHead}>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {this.props.items.map(({ id, type, amount, currency }) => (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
