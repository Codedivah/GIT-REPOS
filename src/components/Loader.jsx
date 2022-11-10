import React from 'react'
import FadeLoader from "react-spinners/FadeLoader";


const Loader = () => {
  return (
    <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
    }}>
      <FadeLoader color="dodgerBlue" size={100} />
    </div>
  )
}

export default Loader
