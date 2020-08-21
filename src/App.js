import React from 'react';
import logo from './logo.svg';
import ListComponent from './component/listComponent/ListComponent';
import Navbar from './component/navbar/navbar';
import Sidebar from './component/sidebar/sidebar';
import SearchBar from './component/searchBar/SearchBar';
import Footer from './component/footer/Footer';
import './App.css'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import  Contactus from './component/contactus/contactUs';
import Home from './component/home/Home';
import AboutUs from './component/aboutus/Aboutus';
import Carousel from './component/popup-carousel/carousel';
import VenueDet from './component/venueDet/VenueDet';
import Agreement from './component/agreement/agreement';
import Firstpage from './component/agreement/firstpage/firstpage'

export default class  App extends React.Component{
    constructor(props){
      super(props)
    }
    state={
           data:[],searchkeyword:[], 
           keywordList:{venueType:[],venueFeature:[]},
           imgShow:'',
           isShowPopup:false,
           imageList:{},
           popupname:'',
           signupuser:false,
           signupbus:false,
           isloggedIn:false
        }

    addSearchKeyword=(keyword)=>{
      let list = this.state.searchkeyword;
      list.push(keyword);
      this.setState({searchkeyword:list});
    }

    showCustomerPopup=()=>{
      this.setState({signupuser:true});
    }

    showBusinessPopup=()=>{
      this.setState({signupbus:true});
    }

    popupBusiness=()=>{
      return(
        <div className={this.state.signupbus?'popup-c':'popup-c-closed'} >  
          <div className='login--popup'> 
            
            <div className='left'>
              <h1>Hey! Partner Welcome Back!</h1>
              <div className='left--container'>
                <h2>Sign In</h2>
                <label for='email'>Email/Phone</label>
                <input type='text' name='email' placeholder='Enter Email/Phone'></input>
                <label for='password'>Password</label>
                <input type='text' name='email' placeholder='Password'></input>
                <button onClick={
                  (e)=>{e.preventDefault();
                  this.setState({isloggedIn:true,signupbus:false});
                }}>Login</button>
                <div className='flex-r'>
                  <small>or<b><a href='#'> Login Via OTP</a></b></small>
                  <small><b><a href='#'>Forgot Password?</a></b></small>
                </div>
              </div>
            </div>
            <div className='right'>
              
              <div className='close'>
                <button className='closebtn' 
                  onClick={(e)=>{
                    e.preventDefault();
                    this.setState({signupbus:!this.state.signupbus})
                  }}
                >X</button>
              </div>

              <h1>Sign Up</h1>
              <div className='right--container'>
                <label for='email'>Name</label>
                <input type='text' name='email' placeholder='Enter Name'></input>
                <label for='email'>Email Id</label>
                <input type='text' name='email' placeholder='Enter Email'></input>
                
                <label for='email'>Mobile</label>
                
                <div className='mobile'>
                    <select>
                        <option>+91</option>
                        <option>+92</option>
                    </select>
                    <input type='text' placeholder='Enter Mobile number'></input>
                </div>
                
                <label for='email'>Whatsapp number</label>
                
                <div className='mobile'>
                    <select>
                        <option>+91</option>
                        <option>+92</option>
                    </select>
                    <input type='text' placeholder='Enter Whatsapp number'></input>
                </div>


                <label>City</label>
                <select>
                        <option>Kolkata</option>
                        <option>Kolkata</option>
                </select>

                <label for='password'>Password</label>
                <input type='text' name='email' placeholder='Password'></input>
                <label for='password'>Confirm Password</label>
                <input type='text' name='email' placeholder='Confirm Password'></input>
                <div className='flex'>
                  <input type='checkbox' className='checkbox'></input><small>  I agree with the <b>Terms & Condition</b></small>
                </div>
                <button>Submit</button>  
              </div>
            </div>
          </div>
        </div>
      );
    }

    popupCustomer=()=>{
      return(
        <div className={this.state.signupuser?'popup-c':'popup-c-closed'} >  
          <div className='login--popup'> 
            <div className='left'>
              <h1>Hey! User Welcome Back!</h1>
              <div className='left--container'>
                <h2>Sign In</h2>
                <label for='email'>Email/Phone</label>
                <input type='text' name='email' placeholder='Enter Email/Phone'></input>
                <label for='password'>Password</label>
                <input type='text' name='email' placeholder='Password'></input>
                <button onClick={
                  (e)=>{e.preventDefault();
                  this.setState({isloggedIn:true,signupuser:false});
                }}>Login</button>
                <div className='flex-r'>
                  <small>or<b><a href='#'> Login Via OTP</a></b></small>
                  <small><b><a href='#'>Forgot Password?</a></b></small>
                </div>
              </div>
            </div>
            <div className='right'>
            <div className='close'>
                <button className='closebtn' 
                  onClick={(e)=>{
                    e.preventDefault();
                    this.setState({signupuser:!this.state.signupuser})
                  }}
                >X</button>
              </div>
              <h1>Sign Up</h1>
              <div className='right--container'>
                <label for='email'>Name</label>
                <input type='text' name='email' placeholder='Enter Name'></input>
                <label for='email'>Email Id</label>
                <input type='text' name='email' placeholder='Enter Email'></input>
                
                <label for='email'>Mobile</label>
                
                <div className='mobile'>
                    <select>
                        <option>+91</option>
                        <option>+92</option>
                    </select>
                    <input type='text' placeholder='Enter Mobile number'></input>
                </div>
                
                <label for='email'>Whatsapp number</label>
                
                <div className='mobile'>
                    <select>
                        <option>+91</option>
                        <option>+92</option>
                    </select>
                    <input type='text' placeholder='Enter Whatsapp number'></input>
                </div>

                <label for='password'>Password</label>
                <input type='text' name='email' placeholder='Password'></input>
                <label for='password'>Confirm Password</label>
                <input type='text' name='email' placeholder='Confirm Password'></input>
                <div className='flex'>
                  <input type='checkbox' className='checkbox'></input><small>  I agree with the <b>Terms & Condition</b></small>
                </div>
                <button>Submit</button>  
              </div>
            </div>
          </div>
        </div>
      );
    }

    clearSearch=(remove)=>{
      let prevKeywords = this.state.searchkeyword;
      let types = this.state.keywordList.venueType;
      let features = this.state.keywordList.venueFeature; 
     
      if(remove==='types'){
         
        let newKeyword=prevKeywords.filter(keyword=>{
            return types.indexOf(keyword)===-1;
         });

         this.setState({searchkeyword:newKeyword});

      }else if(remove==='features'){
      
        let newKeyword=prevKeywords.filter(keyword=>{
          return features.indexOf(keyword)===-1;
        });

       this.setState({searchkeyword:newKeyword});

      }else if(remove==='all'){
        this.setState({searchkeyword:[]})
      }
    }

    removeSearchKeyword=(keyword)=>{
      let list =  this.state.searchkeyword.filter(key=>{
        return key!==keyword;
      })
      this.setState({searchkeyword:list});
    }

    fetchVenueTypesAndVenueFeatures=()=>{
      let types = ['Barquete hall','Pubs','Resorts','Hotel Barquete'];
      let features = ['Only Veg','Ac','Valet Parking','Changing Room'];
      this.setState({keywordList:{venueType:types,venueFeature:features}})
    }

    fetchList=()=>{
      let data = [{
        id:'1',
        images:{
          img_1 : 'https://images.oyoroomscdn.com/uploads/hotel_image/16810/large/62cab65986879859.jpg',
          img_2 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3iXmITbVs6pb5Aoay2ETR9CJYV6s18Wee7A&usqp=CAU',
          img_3 : 'https://dec1osz9a7g7e.cloudfront.net/o_hotel_pune_new_o_hotel_pune_new_ODeluxe.png',
          img_4 : 'https://r-cf.bstatic.com/images/hotel/max1024x768/248/248013744.jpg'
        },
        venueName:'Jayanta Banquests',
        address:'Axis Mall, Newtown, Kolkata',
        facilities:['AC','Changing Room','Valet Parking','Outside Alcohol','Catering','Veg/Non-Veg'],
        price:'699'
      },
    
      {
        id:'2',
        images:{
          img_1 : 'https://images.oyoroomscdn.com/uploads/hotel_image/16810/large/62cab65986879859.jpg',
          img_2 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3iXmITbVs6pb5Aoay2ETR9CJYV6s18Wee7A&usqp=CAU',
          img_3 : 'https://dec1osz9a7g7e.cloudfront.net/o_hotel_pune_new_o_hotel_pune_new_ODeluxe.png',
          img_4 : 'https://r-cf.bstatic.com/images/hotel/max1024x768/248/248013744.jpg'
        },
        venueName:'Jayanta Banquests',
        address:'Axis Mall, Newtown, Kolkata',
        facilities:['AC','Changing Room','Valet Parking','Outside Alcohol','Catering','Veg/Non-Veg'],
        price:'699'
      }
    ]
    this.setState({data:data});    
    }

    displayList = ()=>{
      
      const list = this.state.data.map(item=>{
        return(<ListComponent data={item} onImageClick={this.showImg}/>)
      });

      return list;
    }

    showImg=(link,list,name)=>{
      this.setState({isShowPopup:true,imgShow:link,imageList:list,popupname:name});
    }

    closeButton=(e)=>{
      e.preventDefault();
      this.setState({isShowPopup:!this.state.isShowPopup});
    }

    componentDidMount=()=>{
      
      this.fetchList();
      this.fetchVenueTypesAndVenueFeatures();
    }

    showPopup=()=>{
      return this.state.isShowPopup?'popup':'popup-disable';
    }

    venue = () => {return (<div className='container'>                  
          <Sidebar 
              addSearchKeyword={this.addSearchKeyword}
              removeSearchKeyword={this.removeSearchKeyword}
              keywords={this.state.keywordList}
              searchedkeyword={this.state.searchkeyword}
              clearSearch={this.clearSearch}
          />
          
          <div class='search-list'>
            <SearchBar keywords={this.state.searchkeyword} 
                removeSearchKeyword={this.removeSearchKeyword}
            />
            {this.displayList()}
          </div>
          
        </div> )}

    render(){

      return(
        <div>
          {this.popupCustomer()}
          {this.popupBusiness()}
          <div className={this.showPopup()} >
            <Carousel data={this.state.imgShow} name={this.state.popupname} list={this.state.imageList}></Carousel>
            <button className='popup-close' onClick={this.closeButton}>&#10005;</button>
          </div>
          <Router>
            <Navbar isLoggedIn={this.state.isloggedIn} showCustomerPopup={this.showCustomerPopup} showBusinessPopup={this.showBusinessPopup} />
             
                  <Route exact path='/home'>
                    <Home/>
                  </Route>
                  <Route exact  path="/contactus" component={Contactus}>
                  </Route>

                  <Route exact path="/aboutus" component={AboutUs}>
               
                  </Route>

                  <Route exact path="/agreement" component={Agreement}>
                  </Route>

                  <Route exact path="/agreement/step1" component={Firstpage}>                    
                  </Route>

                  <Route exact path="/venue/:id" component={VenueDet}></Route>

                  <Route exact path="/venue" component={this.venue}>
                       
                  </Route>
             
            </Router>
            <Footer/>
        </div>
      );
    } 
}
