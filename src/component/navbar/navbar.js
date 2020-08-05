import React,{Component} from 'react';
import './navbar.css';
import toggler from './toggler.png';
import { Link,Redirect } from 'react-router-dom';

import icons from './icons.svg';

export default class Sidebar extends Component {
    constructor(props){
        super(props);
    }  
    
    state={togglenavbar:false,routes:{
        home:'/home',
        contactus:'/contactus',
        venue:'/venue',
        testimonials:'/',
        about:'/aboutus',
        blogs:'/',
        signinup:'/',
        vendors:'/',
        joinnow:'/',
        agreement:'/agreement'
    },
    currentRoute:'home'};

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



    redirect=()=>{
        if(this.state.currentRoute==='contact'){
            return (<Redirect to={this.state.routes.contactus}></Redirect>);
        }
        else if(this.state.currentRoute==='home'){
            return (<Redirect to={this.state.routes.home}></Redirect>);
        }
        else if(this.state.currentRoute==='venue'){
            return (<Redirect to={this.state.routes.venue}></Redirect>);
        }
        else if(this.state.currentRoute==='vendor'){
            return (<Redirect to={this.state.routes.vendors}></Redirect>);
        }
        else if(this.state.currentRoute==='testimonial'){
            return (<Redirect to={this.state.routes.testimonials}></Redirect>);
        }

        else if(this.state.currentRoute==='about'){
            return (<Redirect to={this.state.routes.about}></Redirect>);
        }
        else if(this.state.currentRoute==='blogs'){
            return (<Redirect to={this.state.routes.blogs}></Redirect>);
        }
        else if(this.state.currentRoute==='agreement'){
            return (<Redirect to={this.state.routes.agreement}></Redirect>);
        }
    }

    handleClick=(clicked)=>{
        clicked.preventDefault();
        let name = clicked.target.name;
        
        if(name==='contact'){
            this.setState({currentRoute:'contact'})
        }
        else if(name==='home'){
            this.setState({currentRoute:'home'})
        }
        else if(name==='venue'){
            this.setState({currentRoute:'venue'})
        }
        else if(name==='testimonial'){
            this.setState({currentRoute:'testimonial'})
        }
        else if(name==='vendor'){
            this.setState({currentRoute:'vendor'})
        }
        else if(name==='about'){
            this.setState({currentRoute:'about'})
        }
        else if(name==='blogs'){
            this.setState({currentRoute:'blogs'})
        }
        else if(name==='agreement'){
            this.setState({currentRoute:'agreement'})
        }
    }

    render(){
        return(
            <> 
            <div className='navbar'>
                {this.redirect()}
                <div className='navbar--row__1'>
                    

                    <a role='button'  className='flex-div navbar--a margin-left-small font-small'
                        href='#'     
                    >
                        <svg className='nav-svg' style={{marginRight:'10px'}}><use style={{fill:'lightgreen'}} xlinkHref={icons+'#icon-whatsapp'}></use></svg>
                        <svg className='nav-svg' style={{marginRight:'10px'}}><use xlinkHref={icons+'#icon-phone'}></use></svg>
                        +91 9002003434
                    </a>
                </div>

                <div className='navbar--row__2'>
                    <div className='navbar--brand'>
                        <img src='https://s3.ap-south-1.amazonaws.com/venuefy.images/venuefy-logo.png'></img>
                    </div>
                    <div className="navbar--right">
                        <ul>
                            <li><Link to={this.state.routes.home}
                                 name='home'
                                 className={
                                     this.state.currentRoute==="home"?'navbar--a navbar--active':'navbar--a navbar--inactive'
                                    }
                                 onClick={this.handleClick}     
                            >Home</Link></li>
                            
                            <li><Link name='venue'
                                className={
                                    this.state.currentRoute==="venue"?'navbar--a navbar--active':'navbar--a navbar--inactive'
                                }
                                onClick={this.handleClick} to={this.state.routes.venue}>Venue</Link></li>
                            <li><Link name='testimonial'
                                className={
                                    this.state.currentRoute==="testimonial"?'navbar--a navbar--active':'navbar--a navbar--inactive'
                                   }
                                onClick={this.handleClick} to={this.state.routes.testimonials}>Testimonials</Link></li>
                            <li><Link name='vendor' 
                                onClick={this.handleClick} to={this.state.routes.vendors} 
                                className={
                                    this.state.currentRoute==="vendor"?'navbar--a navbar--active':'navbar--a navbar--inactive'
                                }>Vendors</Link></li>
                            <li><Link name='about' onClick={this.handleClick} to={this.state.routes.about} 
                            className={
                                this.state.currentRoute==="about"?'navbar--a navbar--active':'navbar--a navbar--inactive'
                            }>About Us</Link></li>
                            
                            <li><Link name='blogs' onClick={this.handleClick}  to={this.state.routes.blogs} 
                            className={
                                this.state.currentRoute==="blogs"?'navbar--a navbar--active':'navbar--a navbar--inactive'
                            }>Blogs</Link></li>
                            <li><Link name='contact' onClick={this.handleClick} 
                            className={
                                this.state.currentRoute==="contact"?'navbar--a navbar--active':'navbar--a navbar--inactive'
                            }
                                to={this.state.routes.contactus}
                                
                                >Contact Us</Link>
                            </li>

                            <li><Link name='agreement' onClick={this.handleClick} to={this.state.routes.agreement} 
                            className={
                                this.state.currentRoute==="agreement"?'navbar--a navbar--active':'navbar--a navbar--inactive'
                            }>Agreement</Link></li>

                            <li><Link to={this.state.routes.signinup} className="a">Sign In/Up</Link></li>
                            
                        </ul>
                    </div>
                </div>
                </div>


            <div className='nc-navbar'>
                <div></div>
                <div className='nc-brand'>
                    <img src='https://s3.ap-south-1.amazonaws.com/venuefy.images/venuefy-logo.png'></img>
                    <button className='nc-button' onClick={(e)=>{
                    e.preventDefault();
                    this.navbartoggle();
                    }}>
                        <img src={toggler}></img>
                    </button>
                </div>
                
                
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