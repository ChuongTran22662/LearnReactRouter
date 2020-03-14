import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Liên hệ',
        to: '/Contact',
        exact: false
    },
    {
        name: 'Giới Thiệu',
        to: '/About',
        exact: false
    },
    {
        name: 'Sản Phẩm',
        to: '/Products',
        exact: false
    },
    {
        name: 'Đăng Nhập',
        to: '/Login',
        exact: false
    }
]

const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? "active" : '';
            return (
                <li className={`my-li ${active}`}>
                    <Link to={to} className="my-link">
                        {lable}
                    </Link>
                </li>
            );
        }} />
    );
}

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <ul className="nav navbar-nav">
                        {this.showMenu(menus)}
                    </ul>
                </nav>
            </div>
        )
    }

    showMenu = (menus) => {
        var result = null;
        result = menus.map((menu, index) => {
            return (
                <MenuLink key={index} lable={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
            );
        })
        return result;
    }

}

export default Menu;
