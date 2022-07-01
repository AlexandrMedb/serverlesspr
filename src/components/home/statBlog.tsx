import styles from './statBlog.module.scss';

interface props_i {
    title: string
    text: string
    icon: any
}

export const StatBlog = (props: props_i) => {
  const {title, text, icon}=props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>{icon}</div>
      <div className={styles.right}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
