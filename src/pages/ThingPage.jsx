import style from '../styles/thing-page.module.css';
import React from 'react';

const ThingPage = () => {
  return (
    <main className={style.wrapped}>
      <div className={style.card}>
        <div className={style.card__column1}>
          <h3 className={style.title}>Summary</h3>
        </div>
        <div className={style.card__column1}>
          <h3 className={style.title}>Temperature</h3>
        </div>
        <div className={style.card__column1}>3</div>
      </div>

      <div className={style.card__center}>
        <div className={style.card_center__row1}>
          <h3 className={style.title}>Building</h3>
        </div>
        <div className={style.card_center__row2}>5</div>
      </div>

      <div className={style.card}>
        <div className={style.card__column2}>6</div>
        <div className={style.card__column2}>
          <h3 className={style.title}>Humidity</h3>
        </div>
        <div className={style.card__column2}>8</div>
      </div>
    </main>
  );
};

export default ThingPage;
