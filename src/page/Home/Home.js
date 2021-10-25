import classes from './Home.module.css';
import Header from '../../component/Header/Header';
import image from '../../assets/Chack.jpg';

const Home = () => {
  return (
    <div className={classes.Box}>
      <Header />
      <div className={classes.Container}>
        <img className={classes.image} src={image} alt={''} />
        <p className={classes.p}>See jokes about Chuck Norris!</p>
      </div>
    </div>
  );
};

export default Home;
