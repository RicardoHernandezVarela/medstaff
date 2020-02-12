import React, {Component} from 'react';
import { connect } from 'react-redux';

/* Import actions */
import * as usersActions from '../../actions/usersActions';

class Admin extends Component {

    componentDidMount() {
        this.props.getUsersData(this.props.page);
    }

    componentDidUpdate() {
       let { page, totalPages, loading } = this.props;

       if (!loading) console.log(page, totalPages);

       if (page < totalPages && !loading) {
           this.props.getUsersData(this.props.page + 1);
       }        
    }

    render() {
        const loading = this.props.loading;

        if (loading) {
            return (
                <h1>Loading...</h1>
            )
        }

        return (
            <h1>Staff list - Admin</h1>
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Admin);