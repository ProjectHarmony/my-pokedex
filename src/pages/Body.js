import React from 'react'

import PokeAPI from './Components/PokeAPI'

const styles = {
  paperContainer: {
      minHeight: '100vh',
      backgroundImage: `url(${"/images/bg1.jpg"})`,
      width: "100%",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",


  }
};


const Body = () => {
  return (
    <div style={styles.paperContainer}>

        <PokeAPI />


    </div>
  )
}

export default Body