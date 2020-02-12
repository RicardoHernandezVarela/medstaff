export const getUsersData = (urlPage) => async (dispatch) => {

    dispatch ({
        type: 'LOADING'
    });

    try {
        const usersUrl = `https://reqres.in/api/users?page=`

        const usersResponse = await fetch(`${usersUrl}${urlPage}`);
        const responseData = await usersResponse.json();

        dispatch ({
            type: 'GET_USERS',
            page: responseData.page,
            totalPages: responseData.total_pages,
            data: responseData.data
        });

    } catch (error) {
        dispatch({
            type: 'ERROR',
            error: error
        })
    }
}