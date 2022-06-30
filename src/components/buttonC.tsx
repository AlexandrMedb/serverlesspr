import styles from './buttonCustom.module.scss';

interface props_i{
    text:string
    onClick:()=>void
}

export const ButtonC=({text, onClick}:props_i)=>{
  return (
    <div className={styles.wrapper} onClick={onClick}>
      {text}
    </div>
  );
};
