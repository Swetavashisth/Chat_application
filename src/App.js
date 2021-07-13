import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import LoginForm from './components/LoginForm';
import './App.css';



const App = () => {
  
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height='100vh'
      userName="Kanav"
      userSecret="123123"
      projectID='07a9c294-2cbe-4c3e-8977-1063184eadbd'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} x={console.log(chatAppProps)} />}
      //renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      //onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;