import React from 'react'
import { useLocation, Link } from 'react-router-dom'


export default function NavBarLink(propse) {
    const location = useLocation();
    const isActive = location.pathname == propse.to;
    const btnClass = isActive ? "font-bold" : "font-extralight";
    return (

        <Link to={propse.to}>
            <div className={btnClass}>{propse.title}</div>
        </Link>

    )
}
