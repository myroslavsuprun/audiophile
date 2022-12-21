import styles from './Header.module.scss';
import { Container } from '../Container';
import 'styles/common/common.scss';
// import { useMediaQuery } from 'react-responsive';


const Header = ({ isTransparent = false }) => {
  return (
    <header className={`${styles.header} ${isTransparent&&styles.header__transparent}`}>
      <Container>
        {/* need to unite thisdiv with container */}
        <div className={styles.headerContainer}>
          <div>=</div>
          <span className={styles.logo}>audiophile</span>
          {/* <nav>
            <ul className={`list ${styles.navList}`}>
              <li>Home</li>
              <li>Headphones</li>
              <li>Speakers</li>
              <li>Earphones</li>
            </ul>
          </nav> */}
          <button type="button"></button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
