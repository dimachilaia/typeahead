import React, {useEffect, useState} from 'react'

import Loading from '../Form/Loading'
import Header from '../Layout/Header'
import Form from '../Form/Form'
import classes from './Profile.module.css'

const Profile = () => {
  const URL = ('https://api.github.com/users')
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const allUser = async()=>{
      setLoading(true)
      try{
        const response = await fetch(URL)
        if(!response.ok){
          throw new Error ('Something Went Wrong...')
        }
        const responseData = await response.json()
        // console.log(responseData)
        setUsers(responseData)
        setLoading(false)

      }catch(error){
        setError(error.message)
        setLoading(false)
      }
}
    useEffect(()=>{
      allUser()
    },[])
    if(loading){
      return <main>
        <Loading/>
      </main>
    }

  return (
    <div>
      <Header/>
      {error && <p>Something Went Wrong...</p>}
      {!error &&<Form users ={users}/>}
    </div>
  )
}

export default Profile