import axios  from "axios";


export const getData = () => {
    return async (dispatch) => {
        return await axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        dispatch({
                type: "FETCH_DATA",
                users: res.data
            })
        })
        
    }
}

export const selectUser = (user) => {
    return {
        type: 'SELECTED_USERS',
        payload: user
    }
}


export const deleteUser = (user) => {
    return {
        type: 'DELETE_USER', 
        payload: user
}
}

export const sortAsc = () => {
    return {
        type: 'SORT_ASC', 
    }
}

export const sortDesc = () => {
    return {
        type: 'SORT_DESC'
    }
}

