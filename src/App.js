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

export default class  App extends React.Component{
    constructor(props){
      super(props)
    }
    state={
           data:[],searchkeyword:[], 
           keywordList:{venueType:[],venueFeature:[]}
          }

    addSearchKeyword=(keyword)=>{
      let list = this.state.searchkeyword;
      list.push(keyword);
      this.setState({searchkeyword:list});
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
        return(<ListComponent data={item}/>)
      });

      return list;
    }

    componentDidMount=()=>{
      this.fetchList();
      this.fetchVenueTypesAndVenueFeatures();
      console.log(this.props);
    }

    render(){

      

      return(
        <div>
          <Router>
            <Navbar/>
              
              <Switch>
                  <Route path='/home'>
                    <Home/>
                  </Route>
                  <Route path="/contactus">
                    <Contactus />
                  </Route>

                  <Route path="/aboutus">
                    <AboutUs/>
                  </Route>

                  <Route path="/testimonials">
                    <div className='container'>
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
                      
                    </div>    
                  </Route>
                </Switch>


              
            </Router>
            <Footer/>
        </div>
      );
    } 
}
