import React, {Component} from 'react';

/* staff/users url */
const usersUrl = `https://reqres.in/api/users?page=`

class AdminDashboard extends Component {
    constructor() {
        super();

        this.state = {
            page: 0,
            totalPages: 1,
            users: []
        };
    }

    getUsersPerPage = async (url) => {
        let page = this.state.page + 1;
        const usersResponse = await fetch(`${url}${page}`);
        const responseData = await usersResponse.json();
        
        this.setState(prevstate => {
            return (
                {
                    page: responseData.page,
                    totalPages: responseData.total_pages,
                    users: [
                        ...prevstate.users,
                        ...responseData.data
                    ]
                }
            )
        });
    }

    componentDidMount() {
        this.getUsersPerPage(usersUrl);
    }

    componentDidUpdate() {
        let { page, totalPages } = this.state;

        if (page < totalPages) {
            this.getUsersPerPage(usersUrl);
        }
    }

    render() {
        return (
            <h1>Staff list</h1>
        )
    }
}

export default AdminDashboard;