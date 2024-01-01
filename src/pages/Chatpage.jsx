import React, {  useContext } from 'react'
// import Homepage from "./pages/Homepage"
import { 
    ChatEngine, 
    ChatList, ChatCard, NewChatForm,
    ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, NewMessageForm,
    ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings
} from 'react-chat-engine'
import { ChatContext } from '../context/ChatProvider'


const TheSameChatUI = props => {

  const user=useContext(ChatContext);
  console.log("hello",user)
    return (
      <>

      {/* <Homepage/> */}
        <ChatEngine 
            height='100vh'
            projectID="d2aa72d0-054d-4110-9fcd-2fe71f694d7a"//{props.projectID} 
            userName={user.username} 
            userSecret={user.password} 
            // development={props.development} 
            // Customize UI
            renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
            renderChatCard={(chat, index) => <ChatCard key={`${index}`} chat={chat} />}
            renderNewChatForm={(creds) => <NewChatForm creds={creds} />} 
            renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
            renderChatHeader={(chat) => <ChatHeader />}
            renderIceBreaker={(chat) => <IceBreaker />}
            renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <MessageBubble lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />}
            renderIsTyping={(typers) => <IsTyping />}
            // renderConnectionBar={(chat) => <ConnectionBar />}
            renderNewMessageForm={(creds, chatID) => <NewMessageForm />}
            renderChatSettings={(chatAppState) => <ChatSettings {...chatAppState} />}
            renderChatSettingsTop={(creds, chat) => <ChatSettingsTop />}
            renderPeopleSettings={(creds, chat) => <PeopleSettings />}
            renderPhotosSettings={(chat) => <PhotosSettings />}
            renderOptionsSettings={(creds, chat) => <OptionsSettings />}
        />
      </>

    )
}

export default TheSameChatUI