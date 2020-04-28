import React from 'react'

class Lifecycles extends React.Component{
    constructor(){
        super();
        console.log('constructor!');
    }

    componentDidMount(){
        console.log('componentDidMount!');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUpdate!');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate!', nextProps);
        return true; // is set this as False, it will not go further.

        // return nextProps.text != this.props.text; 
        // it will used for performance, because if states are same everytime it will not not required to go further and re-rendered.

    }

    render(){
        console.log('render!');
        return(
            <div className='lifestyles'>
                <h3> LIFECYCLES COMPONENT</h3>
                {this.props.text}
            </div>
        )
    }
}