import Link from 'next/link';
import styles from './linkMain.module.scss';

interface props_i {
    href: string,
    text: string,
    setSecondColor?: boolean
}

export const LinkMain = ({href, text, setSecondColor}: props_i) => {
  return <Link href={href}>
    <div
      className={`
      ${styles.wrapper}
      ${setSecondColor? styles.secondColor :''}
      `}>
      {text}
    </div>
  </Link>;
};
