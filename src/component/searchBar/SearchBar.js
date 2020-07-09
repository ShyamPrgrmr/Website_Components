
import React,{Component} from 'react';
import './SearchBar.css';

export default class SearchBar extends Component{
    
    constructor(props){
        super(props)
    }

    state={list:[]}

    componentDidMount=()=>{ 
       this.setState({list:this.props.keywords});
    }

    componentWillReceiveProps=(newProps)=>{
        this.setState({list:newProps.keywords});
    }

    removeItem=(rmitem)=>{
        this.props.removeSearchKeyword(rmitem);
    }

    displaylist=()=>{
        let list=this.state.list.map(item=>{
            return(
            
            <li key={item}> {item} <button onClick={(e)=>{e.preventDefault(); this.removeItem(item)}}>&#10005;</button></li>
            
            )
        })
        return list;
    }
    
    render(){
        return(
        <div class='searchBar'>
            <ul>
                
                {this.displaylist()} 
                
            </ul>
        </div>);
    }
}
