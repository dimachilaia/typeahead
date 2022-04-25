import React from 'react'
import classes from './Loading.module.css'
const Loading = () => {
  return (
    <div>
    <h1 className={classes.welcome}>WELCOME...</h1>
      <div className={classes.loader}>
      </div>
      </div>
  )
}

export default Loading