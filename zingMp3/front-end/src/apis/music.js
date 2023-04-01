import axios from "../axios";

export async function getSong(songId) {
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

export async function getDetailSong(songId) {
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