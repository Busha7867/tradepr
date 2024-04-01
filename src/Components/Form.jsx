'use client';

import React, { Component } from 'react';

import axios from 'axios';
import Recaptcha from './Recaptcha';
import '@/app/form.css';
import { FaSeedling } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { LuBuilding2 } from "react-icons/lu";


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_name: '',
            email: '',
            shipment_type: '',
            quantity_type: '',
            quantity: '',
            company_name: '',
            query: '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { product_name, email, shipment_type, quantity_type, quantity, company_name, query } = this.state;

        let formData = new FormData();
        formData.append('product_name', product_name);
        formData.append('email', email);
        formData.append('shipment_type', shipment_type);
        formData.append('quantity_type', quantity_type);
        formData.append('quantity', quantity);
        formData.append('company_name', company_name);
        formData.append('query', query);

        axios.post('https://trade-pros.org/TradeEmail/sendEmail.php', formData)
            .then(response => {
                alert('Thank you for contacting us! Email sent successfully!');
                window.location.reload();
            })
            .catch(error => {
                // console.log(error);
                // // Display an error message
                alert('Error sending email!');
                window.location.reload();
            });
    }


    render() {
        return (

            <div>
                <div className="form_block" style={{ padding: "" }}>
                    <h3 className='form_head'>ENQUIRY NOW</h3>
                    <form action="" className='form ' onSubmit={this.handleSubmit}>
                        <div class="inputWithIcon">
                            <FaSeedling className='form_icon'/>
                            <input type="text" placeholder="Product Name" name="product_name" onChange={this.handleChange} required />
                       

                          
                        </div>

                        <div class="inputWithIcon">
                            <IoMdMailUnread className='form_icon'/>
                            <input type="email" placeholder="Email" name="email" onChange={this.handleChange} required />
                            <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
                        </div>


                        <div class="inputWithIcon">
                            <select name="shipment_type" onChange={this.handleChange}>
                                <option selected disabled defaultValue="Shipment Type">Shipment Type</option>
                                <option defaultValue="20DV">20&quotDV</option>
                                <option defaultValue="40HQ">40&quotHQ</option>
                                <option defaultValue="40RF">40&quotRF</option>
                                <option defaultValue="20Break Bulk">Break Bulk</option>
                                <option defaultValue="Bulk">Bulk</option>
                            </select>
                        </div>

                        <div class="inputWithIcon inputIconBg">
                            <div className="radio_box">
                                <label htmlFor="">Quantity In :  &nbsp; </label>
                                <input type="radio" name="quantity_type" value="KGS" onChange={this.handleChange} />
                                <label for="KGS">  &nbsp; KGS  &nbsp; </label>

                                <input type="radio" name="quantity_type" value="MTS" onChange={this.handleChange} />
                                <label for="MTS">  &nbsp; MTS</label>
                            </div>
                        </div>


                        <div class="inputWithIcon ">
                            <MdOutlineProductionQuantityLimits  className='form_icon'/>
                            <input type="number" placeholder="Quantity Required" name="quantity" onChange={this.handleChange} />
                          
                        </div>

                        <div class="inputWithIcon">
                            <LuBuilding2  className='form_icon'/>
                            <input type="text" placeholder="Company Name" name="company_name" onChange={this.handleChange} required />
                           
                        </div>
                        <div class="inputWithIcon">
                            <textarea placeholder="Write Your Query " name="query" onChange={this.handleChange} cols="5" rows="4" aria-invalid="false" style={{ padding: "10px", width: "100%" }} required></textarea>
                        </div>
                        <Recaptcha onToken={this.onToken}/>
                     

                        <div class="inputWithIcon">
                            <button type="submit" className='Form_btn' ><span>Send Enquiry </span></button>
                        </div>
                    </form>
                </div>

            </div>

        )
    }
}


export default Form