import PropTypes from "prop-types";
import styles from "./Statistic.module.css";

const Statistic = ({ title = "", stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: `${randomBgColor()}` }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function randomBgColor() {
  return `rgb(${Math.floor(Math.random() * (255 - 0) + 0)},
    ${Math.floor(Math.random() * (255 - 0) + 0)},
   ${Math.floor(Math.random() * (255 - 0) + 0)})`;
}

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistic;
