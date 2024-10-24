import './App.css'
import { IoMdHome } from "react-icons/io";
import { CiSaveUp2 } from "react-icons/ci";
import { MdUpgrade } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { CiChat1 } from "react-icons/ci";
import Chatbox from './chatbox/Chatbox';


function App() {


  




  

  return (
    <>
      <div className="App">

        <div className="sidebar">

          <div className="upperSide">

            <div className="upperSideTop"><img src="https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-on-transparent-background-png.png" alt="logo" className="logo" width={100} height={100}/><span className="brand">ChatGPT</span></div>

            <div className="subButton">
            <button className="midBtn"><FiPlus size={20} cursor='pointer'/>New Chat</button>
            <div className="upperSideBottom">
              <button className="query"><CiChat1 size={23} cursor='pointer' />What is programming ?</button>
              <button className="query1"><CiChat1 size={23} cursor='pointer' />How to use an API ?</button>
            </div>

            </div>
        
          </div>

          <div className="lowerSide">

            <div className="listItems">
              <ul className='ulist'>
                <li className='listss1'><IoMdHome size={25} cursor="pointer"/> Home</li>
                <li className='listss2'><CiSaveUp2 size={25} cursor="pointer"/>Saved</li>
                <li className='listss3'><MdUpgrade size={25} cursor="pointer"/>Upgrade to Pro</li>
              </ul>
            </div>

          </div>

        </div>

        <div className="main">
          <Chatbox/>
        </div>

      </div>
        
    </>
  )
}

export default App
