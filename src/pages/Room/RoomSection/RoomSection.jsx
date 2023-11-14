import { useState, useEffect } from 'react';
import './RoomSection.css';

import { NavLink } from 'react-router-dom'

import {AiFillCloseCircle, AiOutlineMenu,} from "react-icons/ai";

function RoomSection() {


  const [sidebarWidth, setSidebarWidth] = useState('0');
  const [mainMargin, setMainMargin] = useState('0');

  const openNav = () => {
    setSidebarWidth('250px');
    setMainMargin('250px');
  };

  const closeNav = () => {
    setSidebarWidth('0');
    setMainMargin('0');
  };


  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the messages when a new message is added
    const messagesContainer = document.getElementById('messages-container');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  return (

    <>

<div id='mySidebar' className="sidebar" style={{ width: sidebarWidth }}>

<a href="#" className="closebtn" onClick={closeNav}> <AiFillCloseCircle/> </a>

  <a>
    <NavLink to={'/'}> Home </NavLink>
  </a>

  <a>
    <NavLink to={'/room'}> Room </NavLink>
  </a>

  <a>
    <NavLink to={'/lesson'}> Lesson </NavLink>
  </a>

    <a href=""></a>

  <a>
    <NavLink to={'/public'}> Public</NavLink>
  </a>

  <a>
    <NavLink to={'/private'}> Private </NavLink>
  </a>

</div>

  <br />
<div id="main" style={{ marginLeft: mainMargin }}>
    <button className="openbtn" onClick={openNav}><AiOutlineMenu /></button>
  <br />
  <br />


    <div className="messenger-box">
      <div className="chat-header">
        <h2>Chat Room</h2>
      </div>
      <div className="messages" id="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <span className="sender">{message.sender === 'user' ? 'You' : 'Other Person'}:</span> {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
    </div>
    </>
  );
}

export default RoomSection;
