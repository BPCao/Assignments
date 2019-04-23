import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { Tasklist } from './Tasklist';

class App extends Component 
{
  constructor()
  {
    super()
    this.state =
    {
      itemName: '',
      pendingItems: [],
      completedItems: []
    }
  }

  handleSaveClick = () => 
  {
    let itemName = this.state.itemName
    this.setState({pendingItems: this.state.pendingItems.concat(itemName)})
  }

  handleTextChange = (e) => 
  {
    console.log(e.target.value)
    this.setState({itemName: e.target.value})
  }

  markComplete = () =>
  {
    console.log("fired")
    let itemName = this.state.itemName
    this.setState({completedItems: this.state.completedItems.concat(itemName)})
    this.setState({pendingItems: this.state.pendingItems.filter((pending) =>
    {
      return pending != itemName
    })}) 
  }   

  render()
  {
  return (
    <div className="App">
    <input onChange={this.handleTextChange} type="text" />
    <button onClick={this.handleSaveClick}>Save</button>
    <Tasklist pendingItems={this.state.pendingItems} completedItems={this.state.completedItems} markComplete={this.markComplete}/>
    </div>
  )
  }
}

export default App;
