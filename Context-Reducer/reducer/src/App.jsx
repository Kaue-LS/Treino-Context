import './App.css';
import {createContext,useReducer } from 'react';
import Child from './Child';

// useReducer é o que deixa o context muito proximo de ser um redux

export const CountContext  = createContext()
function App() {
  const countReducer = (state,action)=>{
    switch (action.type) {
      case 'INCREMENT1':
        return {
          ...state,
          count1:state.count1+action.payload,
        };
    
        case 'INCREMENT2':
          return {
            ...state,
            count2:state.count2+action.payload,
          };
      
    
        case 'DECREMENT1':
          return {
            ...state,
            count1:state.count1-action.payload,
          };
      
    
        case 'DECREMENT2':
          return {
            ...state,
            count2:state.count2-action.payload,
          };
      
      
      default:
        return state
    }
  }
  const countInitialValue= {
    count1:0,
    count2:0,
  }
  const [count,setCount]=useReducer(countReducer,countInitialValue)
    // const [count,setCount]=
  return (
    <div className="App">
      <h1>Oi</h1>
      <CountContext.Provider value={{count,setCount}}>
      <Child></Child>
      </CountContext.Provider>
    </div>
  );
}

export default App;
