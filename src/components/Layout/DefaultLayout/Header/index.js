import classes from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faCircleQuestion, faCircleXmark, faCloudArrowUp, faCoins, faEllipsisVertical, faMagnifyingGlass, faSignIn, faSignOut, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { Link } from 'react-router-dom'
import FoodItem from '~/components/FoodItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const USER_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Help',
        to: '/service',
    },

    {
        icon: <FontAwesomeIcon icon={faCloudArrowUp} />,
        title: 'Upload',
        to: '/upload',
    },
    {
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        title: 'Shopping cart',
    },
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Sign out',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Bonus point: 100',
        disabled: true,
    }


]
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0)
    }, [])
    const currentUser = true;

    return (
        <div className={classes.wrapper}>

            <div className={classes.inner}>
                <div className={classes.label}>
                    <div className={classes.active}>E</div>FOOD
                </div>

                <span>
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
                </span>

                <div className={classes.actions}>
                    <ul className={classes['menu-list']}>
                        <li className={classes['menu-item']}><Link to="/" className={classes.active}>Home</Link></li>
                        <li className={classes['menu-item']}><Link to="/menu">Menu</Link></li>
                        <li className={classes['menu-item']}><Link to="/service">Service</Link></li>
                        <li className={classes['menu-item']}><Link to="/contact">Contact</Link></li>
                    </ul>


                    {currentUser ? (
                        <Menu
                            items={USER_ITEMS}
                        >
                            {/* <button className={classes['more-btn']}>
                                <FontAwesomeIcon icon={faBars} />
                            </button> */}
                            <div className={classes['current-user']}>
                                <img
                                    className={classes['user-avatar']}
                                    src="data:image/jpeg;base64,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"
                                    alt="avatar"
                                />
                            </div>
                        </Menu>
                    ) : (
                        <Button
                            primary
                            rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                            medium
                            to='/login'
                            onClick={() => alert('Hiện khung đăng nhập')}>
                            Sign in
                        </Button>
                    )}



                </div>
            </div>
        </div>

    );
}

export default Header;

// để thêm hai class dùng template literal `${} ${}`