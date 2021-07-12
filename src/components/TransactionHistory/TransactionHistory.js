import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";
import { Fragment } from "react";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <h2 className={styles.transaction}>Transactions</h2>
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ type, amount, currency, id }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired)
    .isRequired,
};

export default TransactionHistory;
