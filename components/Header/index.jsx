import styles from "./style.module.scss";

const Header = ({ menuIsActive, setMenuIsActive }) => {
  return (
    <div className={styles.header}>
      <div
        onClick={() => {
          setMenuIsActive(!menuIsActive);
        }}
        className={`${styles.burger} ${
          menuIsActive ? styles.burgerActive : ""
        } `}
      />
    </div>
  );
};

export default Header;
