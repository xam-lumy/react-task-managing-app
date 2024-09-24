import { useReducer, useEffect } from "react"


const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null
}

const ACTION_TYPE = {
    FETCH_DATA: 'FETCH_DATA',
    LOADING: 'LOADING',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS'
}

const todoReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.FETCH_DATA:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }
        case ACTION_TYPE.LOADING:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPE.ERROR:
            return {
                ...state,
                error: action.payload
            }
        case ACTION_TYPE.SUCCESS:
            return {
                ...state,
                error: null,
                loading: false
            }
        default:
            break;
    }
}

const fetchData = (url, others={}) => {
    const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE)
    const useFetch = async() => {
        try {
            const apiResponse = await fetch(url, {...others})
            if(!apiResponse) throw new Error(apiResponse.status)
            if(apiResponse) {
                const newData = await apiResponse.json()
                dispatch({type: ACTION_TYPE.FETCH_DATA, payload: newData})
            }
        } catch(error) {
            console.log(error)
            dispatch({type: ACTION_TYPE.ERROR, payload: error})
        }
    }
        useEffect(() => {
            useFetch()
        },[url])
    return {
        state
    }
}

export default fetchData
//const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE) 