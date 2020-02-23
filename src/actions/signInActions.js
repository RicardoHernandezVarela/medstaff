export const handleChange = (field, value) => (dispatch) => {
    if (field === "email") {
        dispatch ({
            type: 'EMAIL_INPUT',
            email: value
        });

    } else if (field === "password") {
        dispatch ({
            type: 'PASSWORD_INPUT',
            password: value
        });
    }
}

const checkStatus = async (response) => {
    const resp = await response.json();

    if (response.ok) {
        return Promise.resolve(resp);
    } else {
        return Promise.reject(new Error(resp.error));
    }
}

export const logInUser = (url, data) => async (dispatch) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
    });

    try {
        const passed = await checkStatus(response);
        dispatch({
            type: 'LOG_IN',
            token: passed.token
        })

    } catch (error) {
        dispatch({
            type: 'ERROR',
            error: error.message
        })
    }
}