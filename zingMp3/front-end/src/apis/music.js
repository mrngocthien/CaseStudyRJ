import axios from "../axios";

export async function apiGetSong(songId) {
    try {
        const res = await axios({
            url: '/song',
            method: 'get',
            params: {id: songId}
        })
        return res
    } catch (error) {
        console.error(error)
    }
}

export async function apiGetDetailSong(songId) {
    try {
        const res = await axios({
            url: '/infosong',
            method: 'get',
            params: {id: songId}
        })
        return res
    } catch (error) {
        console.error(error)
    }
}

export async function apiGetDetailPlaylist(playlistId) {
    try {
        const res = await axios({
            url: '/detailplaylist',
            method: 'get',
            params: {id: playlistId}
        })
        return res
    } catch (error) {
        console.error(error)
    }
}

export async function apiSearch(keyword) {
    try {
        const res = await axios({
            url: '/search',
            method: 'get',
            params: {keyword}
        })
        return res
    } catch (error) {
        console.error(error)
    }
}