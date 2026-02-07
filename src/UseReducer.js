import React, { useReducer } from 'react'


function NameList() {
  const [state,dispatch] =useReducer((state,action) =>{
switch(action.type){
    case "setname":
        return{...state,name:action.payload};
        case 'addname':
          return {...state,names:[...state.names,state.name],name:''};

}
}
,{
    names :[],
    name:''
})


  return (
    <>
    <h1 style={{textAlign:'center'}}>UseReducer</h1>
<p>Name list {state.names.join(', ')}</p>
    <input type="text" value={state.name} onChange={(e) => dispatch({type:"setname",payload:e.target.value})}/>
    <p>{state.name}</p>
    <button onClick={()=> dispatch({type:'addname'})}>Add Name</button>
    </>
  )
}


function EasyReducer() {

  const [state,dispatch] =useReducer((state,action) => ({
    ...state,
    ...action
  }),{
    first:'',
    last:''
  })

  return(<div>
    <input value={state.first} onChange={(e)=> dispatch({first:e.target.value})}/>
    <input value={state.last} onChange={(e) => dispatch({last:e.target.value})}/>
    <p>Full name: {state.first} {state.last}</p>
  </div>)
}
export default function UseReducer() {

return(
  <div>
<NameList/>
<EasyReducer/>
  </div>
)
}
