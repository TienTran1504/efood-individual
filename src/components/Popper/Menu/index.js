import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import classes from './Menu.module.scss';
function Menu({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }
    return (
        <Tippy
            interactive
            delay={[0, 500]}
            placement='bottom-end'
            render={attrs => (
                <div className={classes['menu-list']} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={classes['menu-popper']}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;