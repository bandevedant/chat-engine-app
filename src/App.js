import React, { useContext } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import { ChatContext } from "./context/ChatProvider";

const App = () => {
  const user=useContext(ChatContext);
  return (
    <div>
        {!user? <Homepage/>:<Chatpage />}
      {/* <BrowserRouter>
        <Routes>
          <ChatProvider>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/chats" element={<Chatpage />}></Route>
          </ChatProvider>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
