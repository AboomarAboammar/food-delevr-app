import React, { useState } from 'react'
import classes from "../styles/login.module.css"

import Footer from '../../components/footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import NavBar from '../../components/navbar/NavBar';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await signIn('credentials', {
                username,
                password,
                redirect: false
            })

          
            if (res?.error === null) {
                router.push('/')
            }
           
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <NavBar/>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit'>Post</button>
                    </form>
                </div>
                <ToastContainer />
            </div>
            <Footer />
        </>
    )
}

export default Login