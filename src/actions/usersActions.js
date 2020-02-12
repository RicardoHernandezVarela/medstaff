export const getUsersData = (urlPage) => async (dispatch) => {
    const usersUrl = `https://reqres.in/api/users?page=`

    const usersResponse = await fetch(`${usersUrl}${urlPage}`);
    const responseData = await usersResponse.json();

    dispatch ({
        type: 'getUsers',
        page: responseData.page,
        totalPages: responseData.total_pages,
        data: responseData.data
    });
}