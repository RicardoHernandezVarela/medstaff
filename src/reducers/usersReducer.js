const INITIAL_STATE = {
    page: 1,
    totalPages: 1,
    total: 0,
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
                users: [
                    ...state.users,
                    ...action.data
                ],
                page: action.page,
                totalPages: action.totalPages,
                total: action.total,
                loading: false
            };
        
        case 'ERROR':
            return { ...state, error: action.error, loading: false}
            
        default: return state;
    }
} 