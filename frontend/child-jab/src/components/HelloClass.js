import React, { Component } from 'react'

export default class HelloClass extends Component {

    constructor(props){
        super(props)
        this.State={ Time : new Date().toLocaleTimeString()}
    }

    componentDidMount(){
        console.log('component Did Mount')
        this.intervalId= setInterval(()=> {
           this.setState({ Time : new Date().toLocaleTimeString()})} , 1000)
    }
    
    componentWillUnmount(){
        console.log('compoment will unmount');
        clearInterval(this.intervalId);
    }
      
    render(){
        if(!this.props.isToggle){
            return null;
        }
        return (
            <div>
                <h1>Hii</h1>
                <h1> Current Time : {this.state.Time}</h1>
            </div>
        )
    }
}