import styles from './Navigation.module.scss';
import 'styles/common/common.scss';

const Navigation = ({ navItems }) => {
  return (
    <nav>
      <ul className={`list ${styles.navList}`}>
        {navItems.map(itemName => {
          return (
            <li key={itemName} className={styles.navItem}>
              <a className={`${styles.navLink} link`} href="">
                {itemName}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
