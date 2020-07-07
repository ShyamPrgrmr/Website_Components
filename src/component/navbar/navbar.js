import React,{Component} from 'react';
import './navbar.css';

import brandImage from './brand.jpeg';

export default class Sidebar extends Component {
    constructor(props){
        super(props);
    }   
    render(){
        return(
            <div class='navbar'>

                <div className='navbar--row__1'>
                    <a className='navbar--a font-small' href='#'>Join Now</a>
                    <a className='navbar--a margin-left-small font-small' href='#'>Contact Us</a>
                </div>

                <div className='navbar--row__2'>
                    <div className='navbar--brand'>
                        <img src={brandImage}></img>
                    </div>
                    <div className="navbar--right">
                        <ul>
                            <li><a href='#' className='navbar--a navbar--active'>Home</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>Venue</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>Testimonials</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>Vendors</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>About Us</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>Blogs</a></li>
                            <li><a href='#' className="a">Sign In/Up</a></li>
                        </ul>
                    </div>
                </div>
                
        
            </div>
        );
    }
}