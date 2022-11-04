import classes from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { Link } from 'react-router-dom'
import FoodItem from '~/components/FoodItem';
import Button from '~/components/Button';

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0)
    }, [])

    return (
        <div className={classes.wrapper}>

            <div className={classes.inner}>
                <div className={classes.label}>
                    <div className={classes.active}>E</div>FOOD
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={classes['search-result']} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={classes['search-title']}>FOOD</h4>
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>

                <div className={classes.actions}>
                    <ul className={classes['menu-list']}>
                        <li className={classes['menu-item']}><Link to="/" className={classes.active}>Home</Link></li>
                        <li className={classes['menu-item']}><Link to="/menu">Menu</Link></li>
                        <li className={classes['menu-item']}><Link to="/service">Service</Link></li>
                        <li className={classes['menu-item']}><Link to="/contact">Contact</Link></li>
                        <li className={classes['menu-item']}>
                            <FontAwesomeIcon icon={faCartShopping} className={classes['cart']} />
                        </li>
                    </ul>
                    <Button primary medium to='/login' onClick={() => alert('Hiện khung đăng nhập')}>Log in</Button>
                </div>
            </div>
        </div>

    );
}

export default Header;

// để thêm hai class dùng template literal `${} ${}`