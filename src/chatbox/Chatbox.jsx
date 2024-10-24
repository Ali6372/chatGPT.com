import React from 'react';
import './chatbox.css'
import { IoMdSend } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Chatbox = () => {
  return (
    <>
    <section className="nav">
      <div className="navBar">
        <image className="image">
          <img src="https://static.vecteezy.com/system/resources/previews/022/841/114/non_2x/chatgpt-logo-transparent-background-free-png.png" alt="" width={100} height={100} /><span className="brands">ChatGPT</span>
        </image>

        <div className="sideBarIcon">
        <TbGridDots size={30} cursor='pointer'/>
        </div>

      </div>
    </section>
    <div className="chat">

    </div>

    <div className="chat-footer">
        <div className="inp">
            <input type="text" placeholder='Sent Message.....'/>
            <button className="sentChat"><IoMdSend size={30} cursor='pointer'/> </button>
        </div>
    </div>

  
      
    </>
  );
}

export default Chatbox;
