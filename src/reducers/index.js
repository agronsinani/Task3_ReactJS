let defaultState = {
    users: [],
    selectedUsers: []
}

export const mainReducer = (state=defaultState, action) => {
    switch (action.type){
        case 'FETCH_DATA':
            return {
                ...state,
                users: action.users,
            }

        case 'SELECTED_USERS':
            return {
                ...state,
                selectedUsers: [...state.selectedUsers, action.payload],
                users: [...state.users].filter(user => user.id !== action.payload.id)
            }

        case 'DELETE_USER':
            const userToDeleteFromSelected = state.selectedUsers.find( user => {
                return user.id === action.payload
            })
            return {
                ...state,
                selectedUsers:[...state.selectedUsers].filter(user => user.id !== userToDeleteFromSelected.id),
                users:  [...state.users, userToDeleteFromSelected]
            }
            
        case 'SORT_ASC':
            return {
                ...state,
                selectedUsers:[...state.selectedUsers].sort((a,b) => b.company.name > a.company.name ? -1 : 0)
            }
            
        case 'SORT_DESC':
            return {
                ...state,
                selectedUsers: [...state.selectedUsers].sort((a,b) => a.company.name > b.company.name ? -1 : 0) 
            }
                
    default:

        return state;
    }
}

