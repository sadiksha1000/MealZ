import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
      <>
        <header className={classes.header}>
            <h1>MealZ</h1>
            <HeaderCartButton onClicked={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Table full of delicious food!"/>
        </div>
      </>
  );
};

export default Header;
