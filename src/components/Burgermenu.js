import React from 'react';
import Popup from 'reactjs-popup';
import BurgerIcon from './BurgerIcon';
import Menu from './Menu';
import '../style/Burger.css';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  marginTop: '40px',
};
const contentStyle = {
  background: '#0d0c0c',
  width: '100%',
  border: 'none',
};

const BurgerMenu = () => (
  <div style={styles}>
    <Popup
      modal
      overlayStyle={{ background: '#0d0c0c', top: '79px' }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={(open) => <BurgerIcon open={open} />}
    >
      {(close) => <Menu close={close} />}
    </Popup>
  </div>
);

export default BurgerMenu;
