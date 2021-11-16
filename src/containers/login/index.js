import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Button, Form } from 'react-bootstrap';
import classes from './login.module.css';

class Login extends React.Component {
    render() {
        return(
            <Container className={classes.login_container}>
                <h1>Login</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter text" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <br /><br />
                    <p>Don't have an account? <br /> <Link to='/registration'>Sign Up here</Link></p>
                </Form>
            </Container>
        );
    }
}

export default Login;