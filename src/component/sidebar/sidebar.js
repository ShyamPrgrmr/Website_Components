
import React,{Component} from 'react';
import './sidebar.css';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


export default class Sidebar extends Component {

    state={value:10,setValue:37,featureList:[],typeList:[]}

    constructor(props){
        super(props);
    }   

    componentDidMount=()=>{
       
    }

    componentWillReceiveProps=(props)=>{
        let types = props.keywords.venueType;
        let features = props.keywords.venueFeature;
        this.setState({typeList:types,featureList:features});
    }

    handleSliderChange = (event, newValue) => {
        this.setState({value:newValue})
    };

    addSerchKeyword=(key)=>{
       this.props.addSearchKeyword(key);
    }
    removeSearchKeyWord=(key)=>{
        this.props.removeSearchKeyword(key);
    }

    displayVenueTypeList=()=>{
        let list = this.state.typeList;

        let types = list.map(item=>{
        return <div><input id={item+''} onChange={(e)=>{
            if(e.target.checked){
                this.addSerchKeyword(item);
            }else{
                this.removeSearchKeyWord(item);
            }
        }} type='checkbox'/><label for={item+''}>{item}</label></div>
        });
        return types;
    }

    displayVenueFeatureList=()=>{
        let list = this.state.featureList;
        
        let features = list.map(item=>{
        return <div><input id={item+''} onChange={(e)=>{
            if(e.target.checked){
                this.addSerchKeyword(item);
            }else{
                this.removeSearchKeyWord(item);
            }
        }} type='checkbox'/><label for={item+''}>{item}</label></div>
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
                            value={this.state.value}
                            onChange={this.handleSliderChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            color='secondary'
                            max={1000}
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