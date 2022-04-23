import React, { useEffect, useState } from 'react'
import classes from './Form.module.css'

const Form = ({users}) => {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState([])
    

    useEffect(()=>{
      setOutput([])
      {users.filter((u)=>{
        if(u.login.toLowerCase().includes(input.toLowerCase(''))){
          setOutput(output=>[...output, u])
        }
      })}
    },[input])

  return (
    <div>
      <div className={classes.inputData}>
       <input 
       className={classes.input}
      required
      type='text'
       placeholder='Search...'
        onChange={(e)=>{
        setInput(e.target.value)
      }}/> 
      <div className={classes.underline}></div>
      </div>
      
     <div className={classes.container}>
      {output.map((user)=>{
        return (
          <div key={user.id} className={classes.box}>
              <div className={classes.container1}>
                <img src={user.avatar_url} alt = {user.id}/>
                <div className={classes.usnm}>{user.login}</div>
                <div className={classes.url}>{user.url}</div>
                <a href={user.html_url} target="_blank" className={classes.showMore}>Show Profile</a>
              </div>
              
          </div>
        )
     })
     }
       </div>
     </div>
  )
}

export default Form