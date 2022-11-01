import './style.css'
function Header() {
    return (
        <div className="header">
            <span class="label">
                <span className="active">E</span>FOOD
            </span>

            <ul className="menu-list">
                <li className="menu-item active">Home</li>
                <li className="menu-item ">Menu</li>
                <li className="menu-item ">Service</li>
                <li className="menu-item ">Contact</li>
            </ul>

        </div>

    );
}

export default Header;