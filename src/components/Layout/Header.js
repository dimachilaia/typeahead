import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import classes from './Header.module.css'
const Header = () => {
  return (
    <div>
        <div className={classes.header}> <h2 className={classes.github}>Search Github Users...
        <FaGithubSquare className={classes.im}/>
      </h2></div>        
    </div>
  )
}

export default Header