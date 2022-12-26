import style from '../styles/header.module.css';
import headerLogo from '../assets/headerLogo.svg';

export function Header() {
  return (
    <header className={style.header}>
      <img
        src={headerLogo}
        alt="Logo todo list"
      />
    </header>
  );
}
