import React from 'react';
import './App.css';
import ListItems from './ListItems.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!=="")
    {
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items:filteredItems
    })
  }

  render(){
    return(
        <div className="heading">
          <h1 style={{textAlign: "center"}}> <u> To Do List </u></h1>
          <div className ="App"> 
            <header>
              <form id="todoform" onSubmit={this.addItem}>
                <input type= "text" placeholder="Enter Text Here..." value={this.state.currentItem.text} 
                onChange={this.handleInput} />
                <button type="submit">ADD</button>
              </form>
            </header>
            <ListItems items= {this.state.items} 
            deleteItem = {this.deleteItem}> </ListItems>
          </div>
          <h4 style={{textAlign: "center"}} > Github - shereenabidi </h4>
        </div>
    )
  }
}
export default App;

