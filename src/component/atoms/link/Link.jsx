import React from 'react'
import { NavLink } from 'react-router-dom'
import '../link/_main.scss';

function Link(props) {
    return (
        <>
            <div className="menu-link">
                <ul>
                    <li>
                        <NavLink to="/">{props.Homepage}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">{props.Product}</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Link;