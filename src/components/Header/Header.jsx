import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import {Link} from 'react-scroll'

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={Logo} alt="" className="Logo" />

        <ul className='header-menu'>
            <li>
            <Link>Home</Link>
            </li>
            <li><Link
            to='Programs'
            span={true}
            smooth={true}
            >Programs</Link></li>
            <li><Link
            to='Reason'
            span={true}
            smooth={true}
            >Why us</Link></li>
            <li><Link
            to='Plans'
            span={true}
            smooth={true}
            >Plans</Link></li>
            <li><Link
            to='Testimonials'
            span={true}
            smooth={true} 
            >Testimonials</Link></li>
            <li><Link
            to='Footer-container'
            span={true}
            smooth={true}
            >About Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
