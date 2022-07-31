import { useState } from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import styles from './list.module.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className={styles.listContainer}>
        <div className={styles.listWrapper}>
          <div className={styles.listSearch}>
            <h1 className={styles.lsTitle}>Search</h1>
            <div className={styles.lsItem}>
              <label htmlFor="">Destination</label>
              <input type="text" name="" id="" placeholder={destination} />
            </div>
            <div className={styles.lsItem}>
              <label htmlFor="">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                'MM/dd/yyyy'
              )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate(item.selection)}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className={styles.lsItem}>
              <label>Options</label>
              <div className={styles.lsOptions}>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className={styles.lsOptionInput} />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className={styles.lsOptionInput} />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Adult</span>
                  <input
                    type="number"
                    min={1}
                    className={styles.lsOptionInput}
                    placeholder={options.adult}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Children</span>
                  <input
                    type="number"
                    min={0}
                    className={styles.lsOptionInput}
                    placeholder={options.children}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Room</span>
                  <input
                    type="number"
                    min={1}
                    className={styles.lsOptionInput}
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className={styles.listResult}>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
