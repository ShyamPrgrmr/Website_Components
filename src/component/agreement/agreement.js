import React,{ Component } from 'react';
import './agreement.css';
import {Link, Redirect} from 'react-router-dom'

export default class Agreement extends Component{
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
            <div className='agreement__box'>
                <p className='agreement__box--heading'>
                    VENUEFY NON-VENUE SERVICE PROVIDER AGREEMENT
                </p>
                <p className='agreement__box--paragraph'>This service agreement (Hereinafter the “Agreement”) is made on Thursday, July 23rd, 2020 (“Execution Date”) between: Venuefy Services Private Limited (CIN : U55101WB2020PTC237175), a company incorporated in India under the Companies Act 1956 having its registered office M 25/A-17, Moon Beam Housing Complex, Action Area - 2C, Near Akhanka More, Newtown Parganas North West Bengal 700156 (Hereinafter referred to as ‘Venuefy’, which expression shall unless repugnant to the content thereof, include its successors and assigns), of the FIRST PART AND "your company name", a company incorporated under the companies Act, 1956 / 2013, having its registered office at "address" (hereinafter referred to as “Service Provider” which expression shall unless repugnant to the context thereof, mean and include its successors and assigns), of the SECOND PART.</p>
                <p className='agreement__box--paragraph'>The Service Provider and Venuefy are referred to individually as a “Party” and collectively as the “Parties”.</p>
                <p className='agreement__box--paragraph'>Whereas:</p>
                <p className='agreement__box--paragraph'>A. The Service Provider is in the business of Anchor/Host or Balloons Service or Band/Baja/Ghodiwalla or Bride/Groom Designer or Caterers or Choreographer or Clothes Rental Service or Corporate Event Equipments Service or DJ's or Decorators or Event Entertainers or Event Fragrance Service or Event Management Comapany or Firework Service or Florist or Gifting Service or Honeymoon Package Provider or Invitation Card Designer or Jewellery Designer or Makeup Artist or Mehendi Artist or Photographer or Priest or Security Service or Special Category or Transport Service.</p>
                <p className='agreement__box--paragraph'>B. Venuefy operates and manages a website www.venuefy.in (“Website”), which is a technology enabled wedding planning platform whereby users can explore, choose and book from over a thousand listed venues that cater to social, corporate and other such events, and offer such other related services to customers as specified hereinbelow.</p>
                <p className='agreement__box--paragraph'>C. Venuefy is desirous of engaging the Service Provider for the provision of using Service Provider’s requisite skills, knowledge and expertise.</p>
                <p className='agreement__box--paragraph'>D. The Service Provider has represented to Venuefy that it has the requisite expertise, experience and resources to undertake and provide the Services to Venuefy’s satisfaction.</p>
                <p className='agreement__box--paragraph'>E. Venuefy has agreed to avail the Services of the Service Provider and also list the service provider on Venuefy’s website and the Service Provider has agreed to provide the Services to Venuefy, on the terms and conditions appearing hereinafter. NOW, THEREFORE, in consideration of the representations, mutual promises, covenants and undertakings set forth herein and other good and valuable consideration, the receipt and sufficiency of which is hereby acknowledged, the Parties agree as follows:</p>
                <p className='agreement__box--paragraph'>1. TERM OF THE AGREEMENT:</p>
                <p className='agreement__box--paragraph'>This Agreement shall come into force from Thursday, July 23rd, 2020 (“Commencement Date”) and shall be in force for a period of 5 years from the commencement date unless terminated earlier as per provisions of Clause 4. The Parties hereby agree that upon expiry of the Term, this Agreement shall automatically renew for a further term of [1 Year] with mutual consent of both the Parties..</p>
                <p className='agreement__box--paragraph'>2. SERVICES:</p>
                <p className='agreement__box--paragraph'>2.1. The Service Provider shall generate leads which will include without limitation social and corporate gatherings (“Event”) as per instructions of Venuefy on an exclusive basis and shall provide all the Services to Venuefy which fall under the Service Provider’s Category. The Service Provider shall assume and maintain personal control, management and supervision of the Services to be performed by the Service Provider’s employees, consultants, representatives or subcontractors (hereinafter referred to as “Personnel”).</p>
                <p className='agreement__box--paragraph'>2.2. This Agreement is on a principal–to–principal basis between the Parties hereto. The Service Provider shall perform all the Services hereunder as an independent service provider and nothing contained herein shall be deemed to create any association, Service Providership, joint venture or relationship of principal and agent or master and servant or employer and employee between the Parties hereto or any affiliates thereof or to provide either Party with the right, power or authority, whether express or implied to create any such duty or obligation on behalf of the other Party.</p>
                <p className='agreement__box--paragraph'>2.3. The Service Provider acknowledges that its rendering of the Services is solely within its own control subject to the terms and conditions agreed upon and agrees not to hold itself out to be an employee, agent or servant of Venuefy or affiliate thereof.</p>
                <p className='agreement__box--paragraph'>2.4. The Services delivered by Service Provider will go through Quality Control Department of Venuefy to ensure that Venuefy’s Customers get good quality of service without any false commitments. In case of false commitments or poor-quality service, the service provider will be liable to provide discount on the total bill of the client as a penalty of upto 10% depending upon the decision of the Quality Control Department of Venuefy.</p>
                <p className='agreement__box--paragraph'>3. PAYMENT OF SERVICES:</p>
                <p className='agreement__box--paragraph'>3.1. Venuefy will make the payment to the Service Provider post Event completed in the system via NEFT/ RTGS or any other mode as may be mutually agreed between the Parties.</p>
                <p className='agreement__box--paragraph'>3.2. The Service Provider shall raise an invoice to Venuefy for the Services provided within [5] business days from the date of Event completed. Post receipt of invoice, Venuefy shall clear the payment within [7] business days from the date of receipt of invoice.</p>
                <p className='agreement__box--paragraph'>3.3. The Service Provider shall not be liable to claim for the payment until and unless Venuefy has received its full payment for the Event from the client/ customer.</p>
                <p className='agreement__box--paragraph'>4. TERMINATION:</p>
                <p className='agreement__box--paragraph'>4.1. Either Party can terminate this Agreement without any cause upon giving written notice of termination to the other party of at least thirty (30) days.</p>
                <p className='agreement__box--paragraph'>4.2. Either Party shall have the right to terminate this Agreement for cause with immediate effect upon giving written notice of termination to the other party if the other party commits a material breach of this Agreement which is incapable of remedy or which in the case of a breach capable of remedy shall not have been remedied within seven (7) days of the receipt by it of a written notice from the party identifying the breach and requiring its remedy.</p>
                <p className='agreement__box--paragraph'>4.3. Venuefy shall have the right to terminate this Agreement with immediate effect upon giving written notice of termination to Service Provider if the Service Provider becomes insolvent.</p>
                <p className='agreement__box--paragraph'>Upon termination or expiry of this Agreement:</p>
                <p className='agreement__box--paragraph'>a. The Parties shall immediately take steps to bring the performance of their obligations under this Agreement to a halt in a safe and orderly manner but with all reasonable speed and economy</p>
                <p className='agreement__box--paragraph'>b. No Party shall have the right to use any confidential information provided to perform its obligations under this Agreement for any purpose whatsoever</p>
                <p className='agreement__box--paragraph'>c. The Service Provider shall on receipt of written request from Venuefy (emails permitted), and immediately deliver to Venuefy within a period of 10 (ten) days, all confidential information provided to Service Provider to perform its obligations under this Agreement, the Venuefy IP and documents containing information thereof and correspondence, minutes of meetings, records, reports and / or any other documents or data of any kind in its possession, custody or control relating to the Services</p>
                <p className='agreement__box--paragraph'>d. Any license granted to the Service Provider under the Agreement shall terminate.</p>
                <p className='agreement__box--paragraph'>5. COMMISSION MODEL FOR LEADS PROVIDED TO SERVICE PROVIDER BY VENUEFY</p>
                <p className='agreement__box--paragraph'>5.1 For every lead or query provided to the Service Provider under the service provider’s category by Venuefy, Venuefy will charge a commission of 10% of GMV (Gross Merchandise Value, it refers to the overall money collected from the customer, excluding taxes) after the lead gets closed.</p>
                <p className='agreement__box--paragraph'>6. COMMISSION MODEL FOR LEADS PROVIDED BY SERVICE PROVIDER TO VENUEFY</p>
                <p className='agreement__box--paragraph'>6.1 If the service provider brings lead of either Venue, Event or any other segment covered by Venuefy, the lead rate after closing it will be as follows:</p>
                <p className='agreement__box--paragraph'>
                Upto 1 lakhs- Rs. 1000<br/>
                More than 1 lakhs and less than or equal to 5 lakhs- Rs 2500<br/>
                More than 5 lakhs and less than or equal to 10 lakhs- Rs 6000<br/>
                More than 10 lakhs and less than or equal to 15 lakhs- Rs 7500<br/>
                More than 15 lakhs and less than or equal to 20 lakhs- Rs 10000<br/>
                More than 20 lakhs and less than or equal to 25 lakhs- Rs 12500<br/>
                More than 25 lakhs and less than or equal to 30 lakhs- Rs 15000<br/>
                More than 30 lakhs- Rs 25000
                </p>
                <p className='agreement__box--paragraph'>6.2 If the lead count provided by the service provider exceeds the count of [8] in 6 consecutive months, the service provider will get Free of Cost Marketing on Venuefy’s Platforms for the next 6 months with some compulsory additional benefits by Venuefy.</p>
                <p className='agreement__box--paragraph'>6.3 Venuefy shall release the commission payment to the Service Provider post consumption and collection of 100% outstanding on an event, post deducting TDS on the commission payout, as per Government rules.</p>
                <p className='agreement__box--paragraph'>6.4 Reconciliation of all the dues shall be done on event to event basis, within 15 days of event consumption.</p>
            
            </div>
            <div className='agreement__confirm'>
                <div className='checkbox'>
                    <input id='checked' 
                        type='checkbox' 
                        onClick={()=>{
                            this.setState({checked:!this.state.checked})
                        }}
                        checked={this.state.checked}>

                        </input>
                    <label for='checked'>I have read and agree the Terms of Services</label>
                </div>
                <Link className={!this.state.checked ? 'btn':'btn btn--active'} 
                    to={!this.state.checked?'/agreement':'/agreement/step1'}
                >Check to Proceed</Link>
            </div>
        </div>
        );
    }
}