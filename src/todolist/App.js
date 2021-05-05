//import logo from './logo.svg';
import React , { Component } from "react"
import ReactDOM, { render } from "react-dom"
 import "./style.css"
 import DatePicker from 'react-datepicker'
 // import itemtodo from './itemtodo.js'
import "react-datepicker/dist/react-datepicker.css";
 import "react-datepicker/dist/react-datepicker.min.js"

 
 
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
    list: [],
    flag: false,
    tempData :[],
    AtempData :'',
    startDate: new Date(),
    currDate :new Date().toDateString(),
    datesave:[],
    isChecked: 0

  }
  this.handleChange = this.handleChange.bind(this);
 
  }

 addclick=()=>{
this.setState({list:[...this.state.list,this.state.AtempData +" .  DUE DATE :-" + this.state.startDate.toDateString()] ,AtempData :'' })

this.setState({datesave:[...this.state.datesave,this.state.startDate]})

 }
 
 deleteitem = (index)=>{
   this.setState({list:[...this.state.list.slice(0, index), ...this.state.list.slice(index+1)]})
  // console.log(index)                               
  }

 
 handleChange(date) {
  this.setState({
    startDate: date
  }) 
  
    this.state.list.map((itm ,ix)=>
 {if (this.state.currDate < this.state.startDate.toDateString() ) {
  this.state.list[ix]= <label className="duedate">{itm}  Due Date is Passed</label>  
 console.log(itm)
 
    }})
 
   

}
checkitem=(index)=>{
 
  this.setState({isChecked: index})
  
  this.state.list.map((it ,i)=>
  {if (i === index) {
   this.state.list[index]= <a>{it}</a>  
     }})
 
}

 
  render(){
   
 
    

    return(
      <div >
        <div className="card">
        <div className="main_div">
          <div className="center_div">
        <label for="amount"><b> ToDoList </b></label><br/>
        <label>Add Your Daily Task</label>
 
       <button type="button" className='btn' onClick ={() =>{ this.setState({flag : true}) }} >+</button><br/>

 {this.state.flag === true && <div style={{border: '1px solid',margin: '10px' }}><input className="inputs" type="text" placeholder="Enter task description "  value= {this.state.AtempData} onChange={(evt) => {this.setState({ AtempData: evt.target.value })}}  required />
 <br/><label> Please Select task completion Date.</label><br/>
 <DatePicker  selected={ this.state.startDate } minDate={new Date()}   onChange={ this.handleChange }name="startDate"dateFormat="MM/dd/yyyy"/>
 </div> }

 
 {this.state.AtempData.length > 0  && <div> <input type="button" value="add" onClick={()=>{this.addclick()}}/> 
  <br>   

  </br>
    <label >List of task.</label>  </div>}    
<br/>

<div >
    <ul> 
   
   {this.state.list.map((item ,index)=>
    {return  <li  key ={index}>  <input type="checkbox" 
    onChange= {()=>{this.checkitem(index)}}/> {item}
    <button  onClick={()=>
    {this.deleteitem(index) }}>Delete</button> </li>
     })} 

   </ul>



</div>
</div>
</div>
</div>


   </div>
  )
}}

export default App;
