import React, {Component} from 'react';
import { connect } from 'react-redux';

/* Import actions */
import * as signInActions from '../../actions/signInActions';

class LogIn extends Component {

    onChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;

        this.props.handleChange(field, value);
    }

    onSubmit = (event) => {
        const { email, password } = this.props;
        event.preventDefault();

        const data = {
            email,
            password
        };
        
        this.props.logInUser('https://reqres.in/api/login', data)
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const { email, password, token, error } = this.props;

        const isInvalid = password === '' || email === '';

        return (

            <div>
                <h1>Sign In</h1>
                
                <form onSubmit={this.onSubmit}>
                    <input 
                        name='email'
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    <input 
                        name='password'
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    <button disabled={isInvalid} type="submit">
                        Sign In
                    </button>

                    {token && <p>Welcome!!! {email}</p>}

                    {error && <p>{error}</p>}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.signInReducer;
}

export default connect(mapStateToProps, signInActions)(LogIn);