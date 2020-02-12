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
            data: responseData.data,
            page: responseData.page,
            totalPages: responseData.total_pages,
            total: responseData.total
        });

    } catch (error) {
        dispatch({
            type: 'ERROR',
            error: error
        })
    }
}