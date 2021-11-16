import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {checkUser} from '../../actions';

import { Container, Button, Form } from 'react-bootstrap';
import classes from './login.module.css';

class Login extends React.Component {

    componentDidUpdate(prevProps) {
        const {userData} = this.props;

        //check if previous todoData.isLoading == false && todoData.isLoading == true after update
        if(prevProps.userData.isLoading && !userData.isLoading) {
            console.log("DATA IS UPDATED");
            console.log(prevProps.userData);
            // alert('Your account has been registered!');
            // setTimeout(() => {
            //     <Redirect to='/login'/>
            // }, 3000);
        } 
    }

    checkUser() {
        const usernameVal = this._usernameEle.value;
        const pwdVal = this._pwdEle.value;
        if((usernameVal !== '') && (pwdVal !== '')) {
            const data = {
                username: usernameVal,
                password: pwdVal,
                key: Date.now(),
            }
            this.props.checkUser(data);
            console.log(data);
            
            this._usernameEle.value = '';
            this._pwdEle.value = '';
        }
    }

    render() {
        return(
            <Container className={classes.login_container}>
                <h1>Login</h1>
                <Form onSubmit={e => {e.preventDefault()}}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter text" ref={(ele) => (this._usernameEle = ele)}/>
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={(ele) => (this._pwdEle = ele)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={() => {this.checkUser()}} >
                        <Link to="/home" style={{color: "#FFFFFF", textDecoration: "none"}}>Submit</Link>
                    </Button>
                    <br /><br />
                    <p>Don't have an account? <br /> <Link to='/registration'>Sign Up here</Link></p>
                </Form>
            </Container>
        );
    }
}

export default Login;