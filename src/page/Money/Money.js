import { useEffect } from 'react';
import classes from './Money.module.css';
import Header from '../../component/Header/Header';
import { fetchMoneyJoke } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';

const Money = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoneyJoke('money'));
    dispatch(fetchMoneyJoke('money'));
    dispatch(fetchMoneyJoke('money'));
    dispatch(fetchMoneyJoke('money'));
    dispatch(fetchMoneyJoke('money'));
  }, [dispatch]);
  return (
    <div className={classes.Box}>
      <Header />
      <div className={classes.Container}>
        {store.dataMoney.map((el, i) => (
          <div key={i} className={classes.ContainerBox}>
            <img className={classes.image} src={el.icon_url} alt="" />
            <p>Categories: {el.categories}</p>
            <p>Updated: {el.created_at.slice(0, 10)}</p>
            <p>{el.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Money;
