import React, { useState } from 'react'
// import catdog from 'pets-3715733_1280.jpg'
import catdog from '../../../images/pets-3715733_1280.jpg'

const ToggleImage = () => {
    let [image, setImage] = useState(true);
  let toggleImage = () => {
    setImage(!image);
    // console.log(image);
  };
  return (
   <>
    <div className="outer">
      <div className="toggleimage inc-dec">
        <button onClick={toggleImage}>{image? "show image" : "hide image"}</button>
        <p>
           {/* <img src="./images/cat-6723256_640.jpg " alt="" /> */}
            
          {image
            ? "": <img src={catdog} height="40" width="100" />
            }
           
        </p>
      </div>
      </div>

   </>
  )
}

export default ToggleImage