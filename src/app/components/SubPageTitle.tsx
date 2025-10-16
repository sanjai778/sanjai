import styles from './SubPageTitle.module.css';

interface SubPageTitleProps {
  title: string;
}

const SubPageTitle: React.FC<SubPageTitleProps> = ({ title }) => {
  return (
    <div className={styles.green_bg}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default SubPageTitle;
