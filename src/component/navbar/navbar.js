import React,{Component} from 'react';
import './navbar.css';
import toggler from './toggler.png';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    constructor(props){
        super(props);
    }  
    
    state={togglenavbar:false,routes:{
        home:'/home',
        contactus:'/contactus',
        venue:'/',
        testimonials:'/testimonials',
        about:'/aboutus',
        blogs:'/',
        signinup:'/',
        vendors:'/',
        joinnow:'/'
    },
    currentRoute:'/home'};

    componentDidMount=()=>{
        
    }

    componentWillReceiveProps=(props)=>{
        
    }

    navbartoggle=()=>{
        this.setState({togglenavbar:!this.state.togglenavbar});
    }

    displayNavbar=()=>{
        return this.state.togglenavbar?'flex':'none';
    }

    render(){
        return(
            <> 
            <div className='navbar'>
                <div className='navbar--row__1'>
                    <Link className='navbar--a font-small' to={this.state.routes.joinnow}>Join Now</Link>
                    <Link className='navbar--a margin-left-small font-small' to={this.state.routes.contactus}>Contact Us</Link>
                </div>

                <div className='navbar--row__2'>
                    <div className='navbar--brand'>
                        <img src='https://s3.ap-south-1.amazonaws.com/venuefy.images/venuefy-logo.png'></img>
                    </div>
                    <div className="navbar--right">
                        <ul>
                            <li><Link to={this.state.routes.home} className='navbar--a navbar--active'>Home</Link></li>
                            <li><Link to={this.state.routes.venue} className='navbar--a navbar--inactive'>Venue</Link></li>
                            <li><Link to={this.state.routes.testimonials} className='navbar--a navbar--inactive'>Testimonials</Link></li>
                            <li><Link to={this.state.routes.vendors} className='navbar--a navbar--inactive'>Vendors</Link></li>
                            <li><Link to={this.state.routes.about} className='navbar--a navbar--inactive'>About Us</Link></li>
                            <li><Link to={this.state.routes.blogs} className='navbar--a navbar--inactive'>Blogs</Link></li>
                            <li><Link to={this.state.routes.signinup} className="a">Sign In/Up</Link></li>
                        </ul>
                    </div>
                </div>
                </div>


            <div className='nc-navbar'>
                <div></div>
                <div className='nc-brand'>
                    <img src='https://s3.ap-south-1.amazonaws.com/venuefy.images/venuefy-logo.png'></img>
                </div>
                <button className='nc-button' onClick={(e)=>{
                    e.preventDefault();
                    this.navbartoggle();
                }}>
                    <img src={toggler}></img>
                </button>
                
                <div className='nc-container' style={{display:this.displayNavbar()}}>
                    <ul>
                    <li><Link to={this.state.routes.home} className='navbar--a navbar--active'>Home</Link></li>
                        <li><Link to={this.state.routes.venue} className='navbar--a navbar--inactive'>Venue</Link></li>
                        <li><Link to={this.state.routes.testimonials} className='navbar--a navbar--inactive'>Testimonials</Link></li>
                        <li><Link to={this.state.routes.vendors} className='navbar--a navbar--inactive'>Vendors</Link></li>
                        <li><Link to={this.state.routes.about} className='navbar--a navbar--inactive'>About Us</Link></li>
                        <li><Link to={this.state.routes.blogs} className='navbar--a navbar--inactive'>Blogs</Link></li>
                        <li><Link className='navbar--a navbar--inactive' to={this.state.routes.joinnow}>Join Now</Link></li>
                        <li><Link className='navbar--a navbar--inactive' to={this.state.routes.contactus}>Contact Us</Link></li>
                        <li><Link to={this.state.routes.signinup} className="a">Sign In/Up</Link></li>
                </ul>
                </div>
            
            </div>
            
            </>
        );
    }
}