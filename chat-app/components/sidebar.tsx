import { Avatar, Button, IconButton, Tooltip } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import ChatIcon from '@mui/icons-material/Chat'
import MoreVerticalIcon from '@mui/icons-material/MoreVert'
import LogoutIcon from '@mui/icons-material/Logout'
import SearchIcon from '@mui/icons-material/Search'


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
    height: 80px;
    border-bottom: 1px solid whitesmoke;
    position: sticky;
    top: 0;
    background-color: white;
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
    background: white;
`

const StyledSearchInput = styled.input`
    outline: none;
    border: none;
    flex: 1;
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
                <IconButton>
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