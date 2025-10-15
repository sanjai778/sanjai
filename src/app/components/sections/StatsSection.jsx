import styles from './StatsSection.module.css';
var stats = [
    { number: "1M+", label: "People managed" },
    { number: "10K+", label: "Spaces under management" },
    { number: "100K+", label: "Assets handled" },
    { number: "100+", label: "Presence in countries" }
];
var StatsSection = function () {
    return (<section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsContainer}>
          {stats.map(function (stat, index) { return (<div key={index} className={styles.statBlock} style={{ animationDelay: "".concat(0.2 + index * 0.3, "s") }}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>); })}
        </div>
      </div>
    </section>);
};
export default StatsSection;
