import { API_URL } from '../helper/env'
import axios from 'axios';

const Tf = {
    TRANSFER: (data,token) => {
        console.log(data)
        const headers = {
            token
        }
        return new Promise ((resolve, reject) => {
            axios.post(`${API_URL}/transfer`, data,{ headers})
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    GET_HISTORY: (token,limit) => {
        const headers = {
            token
        }
        return (dispatch) => {
            dispatch({
                type: "GET_HISTORY_PENDING"
            })
            axios.get(`${API_URL}/transactionUsers?limit=${limit}`, { headers} ).then((res) => {
                dispatch({
                    type: "GET_HISTORY_FULLFILLED",
                    payload: res.data.result.result
                })
            }).catch((err) => {
                dispatch({
                    type: "GET_HISTORY_REJECTED",
                    payload : "An error occurred!"
                })
            })
        }
    }
}

export default Tf