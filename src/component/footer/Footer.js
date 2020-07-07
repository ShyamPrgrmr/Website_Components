import React,{Component} from 'react';
import './Footer.css';
import icons from './symbol-defs.svg';
export default class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='social'>
                    <div>
                        <a href='#'>
                            <svg>
                                <use xlinkHref={icons+'#icon-facebook2'}></use>
                            </svg>
                        </a>
                        
                        <a href='#'>
                            <svg>
                                <use xlinkHref={icons+'#icon-instagram'}></use>
                            </svg>
                        </a>
                        
                        <a href='#'>
                            <svg>
                                <use xlinkHref={icons+'#icon-linkedin2'}></use>
                            </svg>
                        </a>
                        
                        <a href='#'>
                            <svg>
                                <use xlinkHref={icons+'#icon-twitter'}></use>
                            </svg>
                        </a>
                        
                    </div>
                </div>
                <div> 
                <div className='col'>
                    <div class='col-heading'>Vendors</div>
                    <ul>
                        <li><a href='#'>Photographers</a></li>
                        <li><a href='#'>Mehendi Artist</a></li>
                        <li><a href='#'>Bribe mackup</a></li>
                        <li><a href='#'>Designer</a></li>
                    </ul>
                </div>
                <div className='col'>
                <div class='col-heading'>Contact us</div>
                    <div class='address'>
                        <div class='heading'>Address:</div>
                        <div class='text'>SHAPOORJI, Action Area 3,NewTown,Koakata,<br/>West Bengal 700156 </div>
                    </div>
                    <div class='phone'>
                        <div class='heading'>Phone:</div>
                        <div class='text'> { ' +91 1234567890' }</div>
                    </div>
                    <div class='phone'>
                        <div class='heading'>Email:</div>
                        <div class='text'> { ' info.venuefy@gmail.com' }</div>
                    </div>
                </div>
                </div>
                
            </div>
            <div className='copyright'>Copyright 2020 Venuefy.in</div>
        </div>);
    }
}