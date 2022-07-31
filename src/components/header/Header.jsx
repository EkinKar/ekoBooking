import {
  faHotel,
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './header.module.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

function Header({ type }) {
  const [destination, setDestination] = useState('');
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === 'increase' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } });
  };

  return (
    <div className={styles.header}>
      <div
        className={
          type === 'list'
            ? `${styles.headerContainer} ${styles.listMode}`
            : `${styles.headerContainer}`
        }
      >
        <div className={styles.headerList}>
          <div className={`${styles.headerListItem} ${styles.active}`}>
            <FontAwesomeIcon icon={faHotel} />
            <span>Stays</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            <h1 className={styles.headerTitle}>
              A lifetime of discounts? It's genius.
            </h1>
            <p className={styles.headerDesc}>
              Get rewarded for your travels - unlock instant savings of %10 or
              more with a free EkoBooking account
            </p>
            <button className={styles.headerButton}>Sign in / Register</button>
            <div className={styles.headerSearch}>
              <div className={styles.headerSearchItem}>
                <FontAwesomeIcon icon={faBed} className={styles.headerIcon} />
                <input
                  type="text"
                  placeholder="Where are you going"
                  className={styles.headerSearchInput}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className={styles.headerSearchItem}>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className={styles.headerIcon}
                />
                <span
                  onClick={() => setOpenCalendar(!openCalendar)}
                  className={styles.headerSearchText}
                >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy'
                )}`}</span>
                {openCalendar && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className={styles.date}
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className={styles.headerSearchItem}>
                <FontAwesomeIcon
                  icon={faPerson}
                  className={styles.headerIcon}
                />
                <span
                  onClick={() => {
                    setOpenOptions(!openOptions);
                  }}
                  className={styles.headerSearchText}
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className={styles.options}>
                    <div className={styles.optionItem}>
                      <span className={styles.optionText}>Adult</span>
                      <div className={styles.optionCounter}>
                        <button
                          disabled={options.adult <= 1}
                          className={styles.optionCounterButton}
                          onClick={() => handleOption('adult', 'decrease')}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNumber}>
                          {options.adult}
                        </span>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption('adult', 'increase')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={styles.optionItem}>
                      <span className={styles.optionText}>Children</span>
                      <div className={styles.optionCounter}>
                        <button
                          disabled={options.children <= 0}
                          className={styles.optionCounterButton}
                          onClick={() => handleOption('children', 'decrease')}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNumber}>
                          {options.children}
                        </span>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption('children', 'increase')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={styles.optionItem}>
                      <span className={styles.optionText}>Room</span>
                      <div className={styles.optionCounter}>
                        <button
                          disabled={options.room <= 1}
                          className={styles.optionCounterButton}
                          onClick={() => handleOption('room', 'decrease')}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNumber}>
                          {options.room}
                        </span>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption('room', 'increase')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.headerSearchItem}>
                <button className={styles.headerButton} onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
