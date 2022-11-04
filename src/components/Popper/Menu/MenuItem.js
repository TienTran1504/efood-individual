import Button from '~/components/Button'
import classes from './Menu.module.scss'
function MenuItem({ data }) {
    return (
        <Button className={classes['menu-item']} leftIcon={data.icon} to={data.to} disabled={data.disabled}>{
            data.title
        }</Button>
    );
}

export default MenuItem;