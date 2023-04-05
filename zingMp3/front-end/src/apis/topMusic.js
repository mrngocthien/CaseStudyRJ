import axios from "../axios";

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