import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth, provider } from './firebase'
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux'
const Login = () => {
    const dispatch = useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user}) =>{
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoURL:user.photoURL
            }))
        }).catch(err =>alert(err.message))
    }
  return (
    <div className='login'>
        <div className="login__container">
            <img src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/06/pic.jpg?fit=1200%2C900&ssl=1" alt="" />
            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login