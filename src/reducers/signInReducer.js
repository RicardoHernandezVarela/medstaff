const INITIAL_STATE = {
    email: '',
    password: '',
    token: null,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'EMAIL_INPUT':
            return {
                ...state,
                email: action.email
            };
        
        case 'PASSWORD_INPUT':
            return {
                ...state,
                password: action.password
            };

        case 'LOG_IN':
            return {
                ...state,
                token: action.token,
                email: '',
                password: '',
                error: null
            };
        
        case 'ERROR':
            return {
                ...state,
                error: action.error
            }
        
        default: return state;
    }
}