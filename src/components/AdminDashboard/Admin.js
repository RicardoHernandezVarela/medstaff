import React, {Component} from 'react';
import { connect } from 'react-redux';

/* Import actions */
import * as usersActions from '../../actions/usersActions';

class Admin extends Component {

    componentDidMount() {
        this.props.getUsersData(this.props.page + 1);
    }

    componentDidUpdate() {
        let { page, totalPages } = this.props;

        if (page < totalPages) {
            this.props.getUsersData(this.props.page + 1);
        }
    }

    render() {
        return (
            <h1>Staff list - Admin</h1>
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Admin);