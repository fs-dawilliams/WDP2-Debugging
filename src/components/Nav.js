import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <nav style={styles.nav}>
        <Link to="/Women" style={styles.padding}>Women</Link>
        <Link to="/Men" style={styles.padding}>Men</Link>
        <Link to="/Shoes" style={styles.padding}>Shoes</Link>
      </nav>
    );
  }
export default Nav

const styles = {
  nav:  {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
  padding: {
    padding: '1%'
  }
}
