'use client';

import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

class Recaptcha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ''
        };
    }

    onChange = (value) => {
        this.setState({token: value});
        this.props.onToken(value);
    }

    render() {
        return (
            <div>
                <ReCAPTCHA
                    sitekey="6LeoqCYpAAAAAONJMVHxzJh7NhaJZTZ8xX_t1013"
                    onChange={this.onChange}
                    className='recaptchasize'
                />
            </div>
        );
    }
}

export default Recaptcha;