import React from 'react'
import classes from"./Footer.module.css"
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About The App</h2>
          <p>Delevry app and menu of food using nextjs and mongooDb
          Delevry app and menu of food using nextjs and mongooDb
          Delevry app and menu of food using nextjs and mongooDb
          Delevry app and menu of food using nextjs and mongooDb
          Delevry app and menu of food using nextjs and mongooDb
           
          </p>
        </div>
        <div className={classes.col}>
          <h2> Contacts</h2>
          <span>Phone +31223344556 </span>
          <span>GitHub:Aboomar Aboammar</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent:Egypt</span>
          <span>Country:Giza</span>
          <span>Current Location:Giza</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer