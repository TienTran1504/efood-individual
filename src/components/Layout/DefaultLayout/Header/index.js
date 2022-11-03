import classes from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';


function Header() {
    return (
        <div className={classes.wrapper}>

            <div className={classes.inner}>
                <div className={classes.label}>
                    <div className={classes.active}>E</div>FOOD
                </div>

                <div className={classes.search}>
                    <input placeholder="Search dishes..." spellCheck={false} />
                    <button className={classes.clear}>
                        <FontAwesomeIcon icon={faCircleXmark} />

                    </button>
                    <FontAwesomeIcon className={classes.loading} icon={faSpinner} />

                    <button className={classes['search-btn']}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />

                    </button>
                </div>

                <div className={classes.actions}>
                    <ul className={classes['menu-list']}>
                        <li className={classes['menu-item']}><a href="/" className={classes.active}>Home</a></li>
                        <li className={classes['menu-item']}><a href="/menu">Menu</a></li>
                        <li className={classes['menu-item']}><a href="/service">Service</a></li>
                        <li className={classes['menu-item']}><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Header;

// để thêm hai class dùng template literal `${} ${}`