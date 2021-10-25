import { useEffect } from 'react';
import classes from './Career.module.css';
import Header from '../../component/Header/Header';
import { fetchJoke } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';

const Career = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJoke('career'));
    dispatch(fetchJoke('career'));
    dispatch(fetchJoke('career'));
    dispatch(fetchJoke('career'));
    dispatch(fetchJoke('career'));
  }, [dispatch]);

  return (
    <div className={classes.Box}>
      <Header />
      <div className={classes.Container}>
        {store.data.map((el, i) => (
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

export default Career;
