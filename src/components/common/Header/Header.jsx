import styles from './Header.module.scss';
import { Container } from '../Container';
import 'styles/common/common.scss';
// import { useMediaQuery } from 'react-responsive';
import { AudiophileLogo } from './AudiophileLogo';
import { Cart } from './Cart';
import Navigation from './Navigation/Navigation';

const Header = ({ isTransparent = false, screen = 'desktop' }) => {
  return (
    <header
      className={`${styles.header} ${
        isTransparent && styles.header__transparent
      }`}
    >
      <Container classNameProp={styles.headerContainer}>
        {screen === 'mobile' && <div>=</div>}
        <AudiophileLogo classNameProp={styles.logo} />
        {screen === 'desktop' && (
          <Navigation
            navItems={['Home', 'Headphones', 'Speakers', 'Earphones']}
          />
        )}
        <button className={styles.CartButton} type="button">
          <Cart />
        </button>
        
      </Container>
    </header>
  );
};

export default Header;
