
import ReactDOM from 'react-dom';
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import './index.css';



const Light = () => {
  const [isOn, setOff] = useState(false);
  return (
    <div className={`room ${isOn ? "true" : "false"}`}>
      <br/>
      <p>Please turn on the light! {isOn}</p>
      <br />
      <div className='button'>
        <button onClick={() => setOff(true)} className="green" >ON</button>
        <button onClick={() => setOff(false)} className="red">OFF</button>
        </div>
        <br/>
        <div className='temp'>
          Room temperature is 33 celsius
        </div>
      </div>
    
  )
}

ReactDOM.render(<Light />, document.querySelector("#root"))