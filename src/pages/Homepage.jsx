import { useContext, useState } from 'react';
import { ChatContext } from '../context/ChatProvider';
// import axios from 'axios';
// import Chatpage from './Chatpage'
// const projectID = "d2aa72d0-054d-4110-9fcd-2fe71f694d7a";


const Homepage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const {user,setUser}=useContext(ChatContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated={username:username,password:password};
    user.setUser(updated);
    console.log(updated);
  //   const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

  //   try {
  //    const response= await axios.get('https://api.chatengine.io/chats', { headers: authObject });
  //    console.log(response);
  //   //dont want to save locally instead just make a protected route 
  //   <div>
  //   {<Chatpage 
  //   projectID={projectID}
  //   userName={username}
  //   userSecret={password}
  //   />}
  // </div>
  //   } catch (err) {
  //     setError('Oops, incorrect credentials.');
  //   }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        {/* <h1>{error}</h1> */}
        
      </div>
    </div>

  );
};

export default Homepage;