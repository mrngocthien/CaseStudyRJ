import axios from "../axios";

export async function getHome() {
    try {
        const res = await axios({
            url: '/home',
            method: 'get'
        })
        return res
    } catch (error) {
        console.error(error)
    }
}