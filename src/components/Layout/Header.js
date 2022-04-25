import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import classes from './Header.module.css'
const Header = () => {
  return (
    <div>
        <div className={classes.header}>
           <h2 className={classes.github}>
        <FaGithubSquare className={classes.git} />
             Search Github Users...
      </h2></div>        
    </div>
  )
}

export default Header