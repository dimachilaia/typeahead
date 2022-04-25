import React, { useEffect, useRef, useState } from 'react'
import classes from './Form.module.css'

const Form = ({users}) => {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState([])
    const searchUser = useRef('')
  useEffect(()=>{
    searchUser.current.focus()
  },[])

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
       ref = {searchUser}
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
                <div className={classes.foll}>
                  <p>Followers: {Math.floor(Math.random()*15000)}</p>
                <p>Following: {Math.floor(Math.random()*100)}</p>
                </div>
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