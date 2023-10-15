import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) =>
  <section className={css.statistics}>
    {title && <h2 className={css.title}>Upload stats</h2>}

    <ul className={css.statList}>
      {stats.map(item => 
        <li key={item.id} className={css.item}>
          <span className={css.label}>{item.label}</span>
          <span className={css.percentage}>{item.percentage}%</span>
        </li>
      )}
    </ul>
  </section>;