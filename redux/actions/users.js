import { API_URL } from '../helper/env'
import axios from 'axios';

const user = {
    LOGIN : (data) => {
        return new Promise ((resolve, reject) => {
            axios.post(`${API_URL}/login`, data)
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    REGISTER : (data) => {
        console.log(data)
        return new Promise ((resolve, reject) => {
            axios.post(`${API_URL}/register`, data)
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    INSERTPIN : (data,token) => {
        console.log(data)
        return new Promise ((resolve, reject) => {
            const headers = {
                token
            }
            axios.post(`${API_URL}/insertPin`, data,{headers})
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    ACTION_GET_DETAILS_USER : (id,token) => {
        return (dispatch) => {
            dispatch({
                type: "GET_DETAILS_USERS_PENDING"
            })
            const headers = {
                token
            }
            console.log(token)
            axios.get(`${API_URL}/detailUser/${id}`, {headers}).then((res) => {
                dispatch({
                    type: "GET_DETAILS_USER_FULLFILLED",
                    payload: res.data.result[0]
                })
            }).catch((err) => {
                dispatch({
                    type: "GET_DETAILS_USER_REJECTED",
                    payload : "An error occurred!"
                })
            })
        }
    },    
    ACTION_GET_USERS : (token,user) => {
        const headers = {
            token
        }
    
        return (dispatch) => {
            dispatch({
                type: "GET_USERS_PENDING"
            })
            axios.get(`${API_URL}/users?search=${user}`, { headers} ).then((res) => {
                console.log(res.data.result)
                dispatch({
                    type: "GET_USERS_FULLFILLED",
                    payload: res.data.result.result
                })
            }).catch((err) => {
                dispatch({
                    type: "GET_USER_REJECTED",
                    payload : "An error occurred!"
                })
            })
        }
    },
    ACTION_GET_RECEIVER : (id,token) => {
        return (dispatch) => {
            dispatch({
                type: "GET_RECEIVER_USERS_PENDING"
            })
            const headers = {
                token
            }
            console.log(token)
            axios.get(`${API_URL}/detailUser/${id}`, {headers}).then((res) => {
                dispatch({
                    type: "GET_RECEIVER_USER_FULLFILLED",
                    payload: res.data.result[0]
                })
            }).catch((err) => {
                dispatch({
                    type: "GET_RECEIVER_USER_REJECTED",
                    payload : "An error occurred!"
                })
            })
        }
    },
    TOPUP : (total, token ) => {
          const headers = {
            token
        }
        return new Promise ((resolve, reject) => {
            axios.post(`${API_URL}/topUp`, total,{ headers})
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    LOGINPIN : (pin, token ) => {
          const headers = {
            token
        }
        return new Promise ((resolve, reject) => {
            axios.post(`${API_URL}/loginPin`, pin,{ headers})
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    
}

export default user