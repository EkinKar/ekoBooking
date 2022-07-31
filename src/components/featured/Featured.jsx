import styles from './featured.module.css';

const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.featuredItem}>
        <img
          className={styles.featuredImage}
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877"
          alt=""
        />
        <div className={styles.featuredTitles}>
          <h1>Dublin</h1>
          <h2>123Properties</h2>
        </div>
      </div>
      <div className={styles.featuredItem}>
        <img
          className={styles.featuredImage}
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/823860.webp?k=ad78ae3df378d8246dc7c5a486520020f40ea92ca3b08569514092bd1ec34750&o="
          alt=""
        />
        <div className={styles.featuredTitles}>
          <h1>Truckee</h1>
          <h2>123Properties</h2>
        </div>
      </div>
      <div className={styles.featuredItem}>
        <img
          className={styles.featuredImage}
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/689418.webp?k=d39081abcd45a070b313a85e992b6849b0503d7f1f7e4fb7effae77c9a2c019f&o="
          alt=""
        />
        <div className={styles.featuredTitles}>
          <h1>South Lake Tahoe</h1>
          <h2>123Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
