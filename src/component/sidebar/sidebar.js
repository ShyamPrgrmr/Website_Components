
import React,{Component} from 'react';
import './sidebar.css';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


export default class Sidebar extends Component {

    state={sliderValue:10,featureList:[],typeList:[],allKeywords:[]}

    constructor(props){
        super(props);
    }   

    componentDidMount=(props=this.props)=>{
        let types = props.keywords.venueType;
        let features = props.keywords.venueFeature;
        let searchedList = props.searchedkeyword;

        let templist=[];
        templist.push(...types);
        templist.push(...features);
        

        let tempKeyword =  templist.map(item=>{
            if(searchedList.indexOf(item)===-1){
                return {value:item,status:false}
            }else{
                return {value:item,status:true};
            }
        })
        this.setState({typeList:types,featureList:features,allKeywords:tempKeyword});
    }

    componentWillReceiveProps=(props)=>{
        let types = props.keywords.venueType;
        let features = props.keywords.venueFeature;
        let searchedList = props.searchedkeyword;

        let templist=[];
        templist.push(...types);
        templist.push(...features);
        

        let tempKeyword =  templist.map(item=>{
            if(searchedList.indexOf(item)===-1){
                return {value:item,status:false}
            }else{
                return {value:item,status:true};
            }
        })
        this.setState({typeList:types,featureList:features,allKeywords:tempKeyword});
    }

    checkedStatus=(it)=>{
        let list = this.state.allKeywords;
        
        for(let i=0;i<list.length;i++){
            let item = list[i];
            if(item.value===it){
                return (item.status)
            }
        }
        
    }

    handleSliderChange = (event, newValue) => {
        this.setState({sliderValue:newValue})
    };

    addSerchKeyword=(key)=>{
       this.props.addSearchKeyword(key);
    }
    removeSearchKeyWord=(key)=>{
        this.props.removeSearchKeyword(key);
    }

    checkboxchecked=(e,value)=>{
        
        let name = e.target.name;


        if(e.target.checked){
            this.addSerchKeyword(value);
        }else{
            this.removeSearchKeyWord(value);
        }

       
    }

    displayVenueTypeList=()=>{
        let list = this.state.typeList;

        let types = list.map(item=>{
        return <div><input id={item+''} onChange={(e)=>{
           this.checkboxchecked(e,item);
        }} type='checkbox' name={item+''} checked={this.checkedStatus(item)}/><label for={item+''}>{item}</label></div>
        });
        return types;
    }

    displayVenueFeatureList=()=>{
        let list = this.state.featureList;
        let features = list.map(item=>{
        
        return <div><input id={item+''} onChange={(e)=>{    
            this.checkboxchecked(e,item);
        }} type='checkbox'  name={item+''} checked={this.checkedStatus(item)}/><label for={item+''}>{item}</label></div>
        });

        return features;
    }
    
    clearTypesList=(e)=>{
        e.preventDefault();
        this.props.clearSearch('types')
    }

    clearFeaturesList=(e)=>{
        e.preventDefault();
        this.props.clearSearch('features')
    }

    clearAll=(e)=>{
        e.preventDefault();
        this.props.clearSearch('all')
    }

    render(){
        return(
            <div class='sidebar'>
                <div className='sidebar--menubar'>
                    <button>Filter</button>
                    <button onClick={this.clearAll}>Clear All</button>
                </div>
                <select name='location'>
                    <option>location-1</option>
                    <option>location-2</option>
                    <option>location-3</option>
                </select>

                <div className='filter'> 
                    <div className='filter--heading'>
                        <div className='head'>Guest Capacity
                        </div> 
                    </div>
                    <div className='filter--body'>  
                        <Slider
                            value={this.state.sliderValue}
                            onChange={this.handleSliderChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            color='secondary'
                            max={5000}
                            min={10}
                        />
                    </div>
                </div>


                <div className='filter'> 
                    <div className='filter--heading'>
                        <div className='head'>Venue Type</div>
                        <button className='head' onClick={this.clearTypesList}>Clear</button>
                    </div>
                    {this.displayVenueTypeList()}
                </div>

                <div className='filter'> 
                    <div className='filter--heading'>
                        <div className='head'>Venue Feature</div>
                        <button className='head' onClick={this.clearFeaturesList}>Clear</button>
                    </div>
                    {this.displayVenueFeatureList()}
                </div>
           
           
            </div>
        );
    }
}