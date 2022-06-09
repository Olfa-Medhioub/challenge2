import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
     this.state={
      tasks : [{title:'Olfa', id :Math.random(), isDone: true},
             {title:'Mahmoud', id :Math.random(), isDone: true},
             {title:'Asaad', id :Math.random(), isDone: true}],
      textT : ''
    }
  }
  handleAdd=()=> this.setState({tasks : [...this.state.tasks,{title:this.state.textT,id:Math.random(),isDone:false}]})
  handleDelete=(a)=> this.setState({tasks : this.state.tasks.filter((el)=> el.id != a)})
  handleEdit=(a)=> this.setState({tasks : this.state.tasks.map(el=> el.id == a ? {...el,isDone : !el.isDone} : el )})
  render(){
   return(
    <div>
      <h1> Challenge 2</h1>
      {/* <h2>{this.state.tasks[1].title}</h2> */}
      {
        // this.state.tasks.map((el,i)=> <h2>{el.title}</h2>)
        this.state.tasks.map((el,i)=> 
        <div key={el.id}>
        <h2 className={el.isDone && 'done'}>{el.title}</h2>
        <h2>{el.isDone ? 'True' : 'False'}</h2>
        <button onClick={()=>this.handleDelete(el.id)}>Delete</button>
        <button onClick={()=>this.handleEdit(el.id)}>{el.isdone ? 'Not Done' : 'Done'}</button>
        </div>)
  }
  <br/>
  <div>
    <input type='text' onChange={(e)=> this.setState({textT : e.target.value})}/>
    <button onClick={this.handleAdd}>Add</button>
  </div>
    </div>
  )
}
}
export default App;
