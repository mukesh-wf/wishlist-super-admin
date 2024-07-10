import React, { useState } from 'react';
import { HeartFill, Heart } from 'react-bootstrap-icons';


const HeartIcon = () => {
  const [color, setColor] = useState(false);


  const handleColor = (e) => {
    setColor(!color)
  }

  return (
    <span>
      {color
        ?
        <span onClick={(e) => handleColor(e)}><HeartFill style={{ color: "red" }} /></span>
        :
        <span onClick={(e) => handleColor(e)}><Heart style={{color:'#FF4D4F'}}/></span>}
    </span>
  )

}

export default HeartIcon;