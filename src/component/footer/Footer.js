import React,{Component} from 'react';
import './Footer.css';
import icons from './symbol-defs.svg';
import ico from './icons.svg'
import wdi from './wdi';
export default class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<>
        <div className='footer'>

            

            <div className='box'>
                <p class='title'>Venue Type</p>
                <ul>
                    <li>Banquests</li>
                    <li>Resorts</li>
                    <li>Pubs</li>
                    <li>Hotelss</li>
                </ul>
                <p class='title margin-top-middle'>Premium Services</p>
                <ul>
                    <li>Private jets</li>
                    <li>Cruise Ship</li>
                    <li>Yachts</li>
                    <li>Exotic Destination</li>
                </ul>
                <div className='social'>
                    <svg><use xlinkHref={icons+'#icon-facebook2'}></use></svg>
                    <svg><use xlinkHref={icons+'#icon-instagram'}></use></svg>
                    <svg><use xlinkHref={icons+'#icon-linkedin2'}></use></svg>
                    <svg><use xlinkHref={icons+'#icon-twitter'}></use></svg>
                </div>

            </div>

            <div className='box middle'>
                <p className='title'>Service Provider</p>
                <ul>
                    <li>DJ</li>
                    <li>Photographers</li>
                    <li>Mehandi Artist</li>
                    <li>Make-Up Artist</li>
                    <li>Flourist</li>
                    <li>Decorators</li>
                    <li>Caterers</li>
                    <li>Transportation</li>
                    <li>+more</li>
                </ul>
            </div>

            <div className='box'>
                <img className='img' alt='logo' src='https://s3.ap-south-1.amazonaws.com/venuefy.images/venuefy-logo.png'></img>
                <div class='contact'><svg><use xlinkHref={ico+'#icon-envelop'}></use></svg> info@venuefy.com</div>
                <div class='contact'><svg><use xlinkHref={ico+'#icon-phone'}></use></svg> +91 90079-67777</div>
                <p className='title' style={{'marginTop':'auto'}} >Official Event Partner</p>
                <img src='https://static.wixstatic.com/media/0cbda3_6d68eb4cafc241d08c837a2bfd5021b4~mv2.jpg/v1/fill/w_364,h_89,al_c,q_80,usm_0.66_1.00_0.01/0001%2520(3)_edited.webp' className='img' ></img>
            </div>

        </div>
        
        <div className='footer-res'>
            <div className='block'>
                <div className='r-box'>
                    <p class='title'>Venue Type</p>
                    <ul class='ul'>
                        <li>Banquests</li>
                        <li>Resorts</li>
                        <li>Pubs</li>
                        <li>Hotelss</li>
                    </ul> 
                </div>
                <div className='r-box'>
                    <p class='title margin-top-middle'>Premium Services</p>
                    <ul className='ul'>
                        <li>Private jets</li>
                        <li>Cruise Ship</li>
                        <li>Yachts</li>
                        <li>Exotic Destination</li>
                    </ul>
                </div>

                <div className='r-box'>
                    <p class='title margin-top-middle'>Premium Services</p>
                    <ul className='ul'>
                    <li>DJ</li>
                    <li>Photographers</li>
                    <li>Mehandi Artist</li>
                    <li>Make-Up Artist</li>
                    </ul>
                    <ul class='ul'>
                    <li>Flourist</li>
                    <li>Decorators</li>
                    <li>Caterers</li>
                    <li>Transportation</li>
                    <li>+more</li>
                    </ul>
                </div>

                <div className='r-box'>
                <img className='img' alt='logo' src='https://s3.ap-south-1.amazonaws.com/venuefy.images/venuefy-logo.png'></img>
                <div class='contact'><svg><use xlinkHref={ico+'#icon-envelop'}></use></svg> info@venuefy.com</div>
                <div class='contact'><svg><use xlinkHref={ico+'#icon-phone'}></use></svg> +91 90079-67777</div>
                <p className='title' style={{'marginTop':'30px'}} >Official Event Partner</p>
                <img src='https://static.wixstatic.com/media/0cbda3_6d68eb4cafc241d08c837a2bfd5021b4~mv2.jpg/v1/fill/w_364,h_89,al_c,q_80,usm_0.66_1.00_0.01/0001%2520(3)_edited.webp' className='img' ></img>
                </div>
                


                <div className='social'>
                    <svg><use xlinkHref={icons+'#icon-facebook2'}></use></svg>
                    <svg><use xlinkHref={icons+'#icon-instagram'}></use></svg>
                    <svg><use xlinkHref={icons+'#icon-linkedin2'}></use></svg>
                    <svg><use xlinkHref={icons+'#icon-twitter'}></use></svg>
                </div>

            </div>        
        </div>
        
        
        </>
        );
        
    }
}