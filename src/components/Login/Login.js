import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';
// import SPdetails from './SPdetails';


class Login extends Component {

    constructor(props) {

        super(props);

        this.state = {
            redirectToReferrer: false,
            password: "",
            email: '',

        };

        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.Login = this.Login.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    // componentDidMount() {
    //     axios.post(`https://reqres.in/api/login`, { user })
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data);
    //         })
    // }

    // {
    //     "email": "eve.holt@reqres.in",
    //     "password": "cityslicka"
    // }

    login(key, data) {
        key.preventDefault();
        const postData = {
            email: this.state.email,
            password: this.state.password

        };

        if (postData.email === 'test@test.com' && postData.password === 'test') {
            this.setState({ redirectToReferrer: true });

        } else {
            alert("User details not found");
        }

    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleChange(e) {
        localStorage.setItem('Login', e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/SPdetails'} />)
        } else if (this.state.redirectToUser) {
            return (<Redirect to={'/Login'} />)
        }

        return (
            <div className="login100">
            <div className="login sides">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label className="txt1 pb-11">User Name</label><br/>
                    <div class="wrap-input100 validate-input m-b-36">
                    <input type="text" name="email" className="input100" value={this.state.email}  onChange={this.handleChange} style={{outline:'none',border:'none',height:'40px',marginBottom:'0'}} />
                    </div>
                    <label className="txt1 pb-11">Password</label><br />
                    <div class="wrap-input100 validate-input m-b-36">
                    <input type="password" className="input100" name="password" value={this.state.password}  onChange={this.handleChange}  style={{outline:'none',border:'none',height:'40px',marginBottom:'0'}}/>
                    </div>
                    <div class="pb-l-55">
                    <input type="submit" onClick={this.login} class="submit" name="commit"  />
                    </div>
                </form>
               </div>
               </div>
        )
    }

}



export default Login;