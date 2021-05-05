import React from 'react'


class itemtodo extends React.Component{
constructor(probs){
    super(probs)
}

render(){
    return(
<div>
<ul> 
   
   {this.probs.iteminfo.map(item => <li> <input type="checkbox" /> {item} </li>)} 
   </ul>
</div>
    )
}

}export default itemtodo ;