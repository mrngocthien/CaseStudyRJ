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

export async function getTopMusicData() {
    try {
        const res = await axios({
            url: '/top100',
            method: 'get'
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

export async function apiGetArtistSong(artistId) {
    try {
        const res = await axios({
            url: '/artistsong',
            method: 'get',
            params: {id: artistId, page: 1, count: 50}
        })
        return res
    } catch (error) {
        console.error(error)
    }
}

export async function apiGetArtist(alias) {
    try {
        const res = await axios({
            url: '/artist',
            method: 'get',
            params: {name: alias}
        })
        return res
    } catch (error) {
        console.error(error)
    }
}