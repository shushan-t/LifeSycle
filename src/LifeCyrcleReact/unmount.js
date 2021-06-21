import {useState} from 'react';
import Header from './header';

const Unmount = () => {
    const [bool, changeBool] = useState(false)

    const unmount = () => {
      changeBool(true)
    }
 
    const mount = () => {
        changeBool(false)
      }

    return(
      <div>
        {bool? null : <button className={`${bool && "button"}`} onClick={unmount}>Click to unmount</button>}
        {bool? <button className={`${!bool && "button"}`} onClick={mount}>Reset</button> : <Header favcol="CornflowerBlue"/>}
      </div>
    )
  }
  
    
  
  export default Unmount; 