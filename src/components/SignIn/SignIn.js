import React, { Component } from 'react';

const INITIAL_STATE = {
    email: '',
    password: '',
    token: '',
    error: null
};

class SignInPage extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE }
    }

    checkStatus = async (response) => {
        const resp = await response.json();

        if (response.ok) {
            return Promise.resolve(resp);
        } else {
            return Promise.reject(new Error(resp.error));
        }
    }

    logInUser = (url, data) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json'
            }
        })
        .then(response => this.checkStatus(response))
        .then(respData => {
            //Do sometthing with the token from the response, respData.token;
            console.log(respData.token);
            //redirect to home page
            this.setState({ ...INITIAL_STATE });
        })
        .catch(error => {
            this.setState({error: `${error.message}, check your email or password`});
        });
    }

    onChange = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = (event) => {
        const { email, password } = this.state;
        event.preventDefault();

        const data = {
            email,
            password
        };
        
        this.logInUser('https://reqres.in/api/login', data)
    }

    render() {
        const { email, password, error } = this.state;

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

                    {error && <p>{error}</p>}
                </form>
            </div>
        )
    }
}

export default SignInPage;