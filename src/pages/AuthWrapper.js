import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Loading } from '../components'

const AuthWrapper = ({children}) => {
  const {isLoading, error} = useAuth0()

  if(isLoading){
    return <Loading/>
  }
  if(error){
    return <div>{error.message}</div>
  }
  return (
    <div>{children}
    </div>
  )
}

export default AuthWrapper