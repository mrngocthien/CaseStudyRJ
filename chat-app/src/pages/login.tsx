import Button from '@mui/material/Button'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import WhatsAppLogo from 'assets/whatsapplogo.png'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { auth } from 'config/firebase'

const StyledContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background: whitesmoke;
`

const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background: #ffff;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px darkgray;
`

const StyledImageWrapper = styled.div`
  margin-bottom: 50px;
`

const Login = () => {
  const [signInWithGoogle, _user, _loading, _error] = useSignInWithGoogle(auth);

  const signIn = () => {
    signInWithGoogle();
  }

  return (
    <StyledContainer>
      <Head>
        <title>Login</title>
      </Head>
      <StyledLoginContainer>
        <StyledImageWrapper>
          <Image src={WhatsAppLogo} alt="WhatsApp Logo" width={150} height={150}/>
        </StyledImageWrapper>
        <Button variant='outlined' onClick={signIn}>Sign In With Google</Button>
      </StyledLoginContainer>
    </StyledContainer>
  )
}

export default Login