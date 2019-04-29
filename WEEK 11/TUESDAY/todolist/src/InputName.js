import React,{Component} from 'react';

export class InputName extends Component
{
    constructor()
    {
        super()
        this.state = 
        {
            name: ''
        }
    }

    handleText = (e) =>
    {
        this.setState({name: e.target.value})
        console.log(e.target.value)
    }
    
    saveName = () =>
    {
        console.log(this.state.name)
        this.props.nameHandler(this.state.name)
    }
    
    
    
        render()
    {   return  (<div>
                <input onChange={this.handleText} type="text" />
                <button onClick={this.saveName}>Input name</button>
                </div>)
    }
}