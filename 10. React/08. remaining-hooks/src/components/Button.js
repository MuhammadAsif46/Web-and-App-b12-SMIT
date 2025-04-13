import React from 'react'

const Button = ({getData}) => {

  console.log("Button component");
  console.log(getData());
  
  
  return (
    <div>Button</div>
  )
}

export default React.memo(Button)