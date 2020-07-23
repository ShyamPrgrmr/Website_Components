import React from 'react';
import signature from './signature.jpg';
import './../agreement.css';
import './firstpage.css'; 
import {Link} from 'react-router-dom';

export default class FirstPage extends React.Component{
    constructor(props){
        super(props);
        this.state={checked:false}
    }
    render(){
        return( 
        <div className='agreement'>
            <div className='agreement__logo'>
                <img className='image' src='https://s3.ap-south-1.amazonaws.com/venuefy.images/venuefy-logo.png'></img>
            </div>
            <h1 className='agreement__heading'>
                VENUEFY NON-VENUE SERVICE PROVIDER AGREEMENT
            </h1>
            <div className='agreement__box flex-verticle'>
                <label className='agreement__box--label'>Type of Service Provider<span>*</span></label>
                <select type='text' className='agreement__box--select'>
                    <option value="" disabled="" selected="" hidden="">Photographer, Decorator, Caterers, Mehendi, etc.</option><option>Event Fragrance Service</option>
                    <option>Event Management Comapany</option>
                    <option>Anchor/Host</option>
                    <option>Balloons Service</option>
                    <option>Band/Baja/Ghodiwalla</option>
                    <option>Bride/Groom Designer</option>
                    <option>Caterers</option>
                    <option>Choreographer</option>
                    <option>Clothes Rental Service</option>
                    <option>Corporate Event Equipments Service</option>
                    <option>DJ's</option>
                    <option>Decorators</option>
                    <option>Event Entertainers</option>
                    <option>Firework Service</option>
                    <option>Florist</option>
                    <option>Gifting Service</option>
                    <option>Honeymoon Package Provider</option>
                    <option>Invitation Card Designer</option>
                    <option>Jewellery Designer</option>
                    <option>Makeup Artist</option>
                    <option>Mehendi Artist</option>
                    <option>Photographer</option>
                    <option>Priest</option>
                    <option>Security Service</option>
                    <option>Special Category</option>
                    <option>Transport Service</option>
                </select>
           
                <label className='agreement__box--label'>Name<span>*</span></label>
                <input type='text' placeholder='Full name' className='agreement__box--input'></input>

                <label className='agreement__box--label'>Name of Comapany<span>*</span></label>
                <input type='text' className='agreement__box--input' placeholder='Company name'></input>

                <label className='agreement__box--label'>Address<span>*</span></label>
                <input type='text' className='agreement__box--input' placeholder='Company name'></input>

                <label className='agreement__box--label'>Email<span>*</span></label>
                <input type='text' className='agreement__box--input' placeholder='Company name'></input>
                
                <label className='agreement__box--label'>Contact Number<span>*</span></label>
                <input type='text' className='agreement__box--input' placeholder='Company name'></input>

                <label className='agreement__box--label'>Whatsapp Number<span>*</span></label>
                <input type='text' className='agreement__box--input' placeholder='Company name'></input>
                <br/>
                <br/>
                <label className='agreement__box--label'>PAn<span>*</span></label>
                <input type='text' className='agreement__box--input' placeholder='Company name'></input>

                <label className='agreement__box--label'>PAN front<span>*</span></label>
                <input type='file' className='agreement__box--input' placeholder='Company name'></input>

                <label className='agreement__box--label'>GSTIN<span>*</span></label>
                <input type='text' className='agreement__box--input' placeholder='Company name'></input>

                <label className='agreement__box--label'>Bank Account Number<span>*</span></label>
                <input type='text' className='agreement__box--input' placeholder='Company name'></input>

                <label className='agreement__box--label'>Cancelled Check<span>*</span></label>
                <input type='file' className='agreement__box--input' placeholder='Company name'></input>

                <label className='agreement__box--label'>Signature<span>*</span></label>
                <input type='file' className='agreement__box--input' placeholder='Company name'></input>

                <img src={signature} alt='signature' style={{width:'30%',height:'100px',marginTop:'10px',marginBottom:'10px'}}></img>
                <div className='checkbox'>
                    <input id='checked' type='checkbox' checked={this.state.checked} onClick={()=>{this.setState({checked:!this.state.checked})}}></input>
                    <label for='checked'>The Details filled in this form are true and to the best of my knowledge</label>
                </div>

                <Link className={!this.state.checked ? 'agreement__box--btn margin-top-small':'agreement__box--btn agreement__box--btn--active margin-top-small'}>Send OTP</Link>
                
            </div>
        </div>)
    }
}