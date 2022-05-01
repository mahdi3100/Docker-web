import React,{useState} from 'react';

const ExchangeContext = React.createContext({
    title:"ok",
    setTitle : (title)=>{}
  });
  
  const ExchangeContextProvider = (props)=>{
    const [title , setTitle] = useState("app title")
    return (
      <ExchangeContext.Provider value={{
        title:title,
        setTitle:(newTitle)=>{setTitle(newTitle)}
       } }>
         {props.children}
  </ExchangeContext.Provider> 
    )
  }

export {ExchangeContext,ExchangeContextProvider};