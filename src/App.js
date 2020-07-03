import React from 'react';
import logo from './logo.svg';
import FirstComponent from './component/firstcomponent/FirstComponent';

export default class  App extends React.Component{
    constructor(props){
      super(props)
    }
    render(){

      let data = {
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


      return(
      <div style={{padding:10}}>
        <FirstComponent data={data}/>
        <FirstComponent data={data}/>
      </div>);
    } 
}
