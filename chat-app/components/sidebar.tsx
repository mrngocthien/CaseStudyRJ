import { Avatar, Button, Icon, IconButton, Tooltip } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import ChatIcon from '@mui/icons-material/Chat'
import MoreVerticalIcon from '@mui/icons-material/MoreVert'
import LogoutIcon from '@mui/icons-material/Logout'
import SearchIcon from '@mui/icons-material/Search'
import { signOut } from 'firebase/auth';
import { auth } from 'config/firebase';


const StyledContainer = styled.div`
    height: 100vh;
    min-width: 300px;
    max-width: 350px;
    overflow-y: scroll;
    border-right: 1px solid whitesmoke;
`

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 60px;
    border-bottom: 1px solid whitesmoke;
    position: sticky;
    top: 0;
    background-color: wheat;
    z-index: 1;
`

const StyledUserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
        border: 1px solid black;
    }
`

const StyledSearch = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 2px;
`

const StyledSearchInput = styled.input`
    outline: none;
    border: none;
    flex: 1;
    background: #ffff;
`
const StyledSideBarButton = styled(Button)`
    width: 100%;
    border-bottom: 1px solid whitesmoke;
    border-top: 1px solid whitesmoke;
    :hover {
        background: lightgreen;
        color: black;
    }
`

const Sidebar = () => {
    const logout =async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <StyledContainer>
        <StyledHeader>
            <Tooltip title="User Email" placement='right'>
                <StyledUserAvatar></StyledUserAvatar>
            </Tooltip>
            <div>
                <IconButton>
                    <ChatIcon></ChatIcon>
                </IconButton>
                <IconButton>
                    <MoreVerticalIcon></MoreVerticalIcon>
                </IconButton>
                <IconButton onClick={logout}>
                    <LogoutIcon></LogoutIcon>
                </IconButton>
            </div>
        </StyledHeader>
        <StyledSearch>
            <SearchIcon></SearchIcon>
            <StyledSearchInput placeholder = "Search in conversations"></StyledSearchInput>
        </StyledSearch>
        <StyledSideBarButton>
            start new conversation
        </StyledSideBarButton>

        {/* list of conversations */}
    </StyledContainer>
  )
}

export default Sidebar;