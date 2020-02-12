import React, {Component} from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        console.log(this.props.page)
        return (
            <h1>Staff list - Admin</h1>
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.usersReducer
}

export default connect(mapStateToProps, {})(Admin);