import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import WhatsAppLogo from 'assets/whatsapplogo.png'
import CircularProgress from '@mui/material/CircularProgress'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`
const StyledImageWrapper = styled.div`
  margin-bottom: 20px;
`

const Loading = () => {
  return (
    <StyledContainer>
        <h1>LOADING...</h1>
        <StyledImageWrapper>
          <Image src={WhatsAppLogo} alt="WhatsApp Logo" width={150} height={150}/>
        </StyledImageWrapper>
        <CircularProgress />
        
    </StyledContainer>
  )
}

export default Loading