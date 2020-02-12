const INITIAL_STATE = {
    page: 0,
    totalPages: 1,
    users: [], 
    loading: false,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: true };

        case 'GET_USERS':
            return {
                ...state,
                page: action.page,
                totalPages: action.totalPages,
                users: [
                    ...state.users,
                    ...action.data
                ],
                loading: false
            };
        
        case 'ERROR':
            return { ...state, error: action.error}
            
        default: return state;
    }
} 