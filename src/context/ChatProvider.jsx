import { createContext,useState} from "react";

import React from 'react'

export const ChatContext=createContext(null);

const ChatProvider = (props) => {
const [user,setUser]=useState({username:'',password:''});
  return (
    <ChatContext.Provider value={{user ,setUser}}>
        {props.children}
    </ChatContext.Provider>
  )
}

export default ChatProvider
