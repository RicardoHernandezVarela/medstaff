const INITIAL_STATE = {
    page: 0,
    totalPages: 1,
    users: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'getUsers':
            return {
                ...state, 
                page: action.page,
                totalPages: action.totalPages,
                users: [
                    ...state.users,
                    ...action.data
                ]
            };
        
        default: return state;
    }
} 