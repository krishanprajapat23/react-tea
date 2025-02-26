import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return (<div className='text-danger text-center fs-6 fw-bold'>Please Login</div>)

    return (<div className='text-success text-center fs-6 fw-bold'>Welcome: {user.email}</div>)
}

export default Profile
