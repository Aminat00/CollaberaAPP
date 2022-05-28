import React, { useState } from 'react';
import './cart.css'
import './textbuttons';
import BasicButtons from './textbuttons';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import ComboBox from './autocomplete';
import CustomizedButtons from './custombutton';

export const Cart = (props) => {
    const[count, setCount]=useState(0);


    return(
        <div>

        
        <div className='container_left'>
        <div className='header_text'>
        <h2><strong>Shopping Cart</strong></h2>
        <p>3items</p>
        <hr/>
        </div>
        <div className='headers'>
        <h5 className='first'>Product Details</h5>
        <h5 className='second'>Quantity</h5>
        <h5>Price</h5>
        <h5>Total</h5>
        </div>
        <div className='row'>
        <div className='info'>
        <div className='img'>
        <img src='https://th.bing.com/th/id/R.047cb4654216ddd55bb4bf776f96a6d3?rik=b1g1ZWmqQmEmDg&pid=ImgRaw&r=0'></img>
        </div>
       
        <ul className='text'>
            <li className='first'>Name</li>
            <li>Brand</li>
            <li><Button className='rem' variant="text">Remove</Button></li>
        </ul>
        </div>
        <div className='quantity'>
        <Button className='btn' variant="text">+</Button>
        <TextField className='textfield' id="outlined-basic" label="Outlined" variant="outlined" />
        <Button className='btn' variant="text">-</Button>
        </div>
        <div className='column'>
            <p>200</p>
        </div>
        <div className='column'>
            <p>600</p>
        </div>
        
        </div>
        <div className='row'>
        <div className='info'>
        <div className='img'>
        <img src='https://th.bing.com/th/id/R.047cb4654216ddd55bb4bf776f96a6d3?rik=b1g1ZWmqQmEmDg&pid=ImgRaw&r=0'></img>
        </div>
       
        <ul className='text'>
            <li className='first'>Name</li>
            <li>Brand</li>
            <li><Button className='rem' variant="text">Remove</Button></li>
        </ul>
        </div>
        <div className='quantity'>
        <Button className='btn' variant="text">+</Button>
        <TextField className='textfield' id="outlined-basic" label="Outlined" variant="outlined" />
        <Button className='btn' variant="text">-</Button>
        </div>
        <div className='column'>
            <p>200</p>
        </div>
        <div className='column'>
            <p>600</p>
        </div>
        
        </div>
        <div className='row'>
        <div className='info'>
        <div className='img'>
        <img src='https://th.bing.com/th/id/R.047cb4654216ddd55bb4bf776f96a6d3?rik=b1g1ZWmqQmEmDg&pid=ImgRaw&r=0'></img>
        </div>
       
        <ul className='text'>
            <li className='first'>Name</li>
            <li>Brand</li>
            <li><Button className='rem' variant="text">Remove</Button></li>
        </ul>
        </div>
        <div className='quantity'>
        <Button  className='btn' variant="text">+</Button>
        <TextField className='textfield' id="outlined-basic" label="Outlined" variant="outlined" />
        <Button className='btn' variant="text">-</Button>
        </div>
        <div className='column'>
            <p>200</p>
        </div>
        <div className='column'>
            <p>600</p>
        </div>
        
        </div>
        <div className='row'>
        <div className='info'>
        <div className='img'>
        <img src='https://th.bing.com/th/id/R.047cb4654216ddd55bb4bf776f96a6d3?rik=b1g1ZWmqQmEmDg&pid=ImgRaw&r=0'></img>
        </div>
       
        <ul className='text'>
            <li className='first'>Name</li>
            <li>Brand</li>
            <li><Button className='rem' variant="text">Remove</Button></li>
        </ul>
        </div>
        <div className='quantity'>
        <Button className='btn' variant="text">+</Button>
        <TextField className='textfield' id="outlined-basic" label="Outlined" variant="outlined" />
        <Button className='btn' variant="text">-</Button>
        </div>
        <div className='column'>
            <p>200</p>
        </div>
        <div className='column'>
            <p>600</p>
        </div>
        
        </div>
        <div className='row'>
        <div className='info'>
        <div className='img'>
        <img src='https://th.bing.com/th/id/R.047cb4654216ddd55bb4bf776f96a6d3?rik=b1g1ZWmqQmEmDg&pid=ImgRaw&r=0'></img>
        </div>
       
        <ul className='text'>
            <li className='first'>Name</li>
            <li>Brand</li>
            <li><Button className='rem' variant="text">Remove</Button></li>
        </ul>
        </div>
        <div className='quantity'>
        <Button className='btn' variant="text">+</Button>
        <TextField className='textfield' id="outlined-basic" label="Outlined" variant="outlined" />
        <Button className='btn' variant="text">-</Button>
        </div>
        <div className='column'>
            <p>200</p>
        </div>
        <div className='column'>
            <p>600</p>
        </div>
        
        </div>
        <Button variant="text" className='text_btn'>
          Continue shopping
        </Button>
       
        </div> 
         <div className='container_right'>
         <div className='headers'><h2><strong>Order Summary</strong></h2></div>
         <hr/>
         <div className='headers'>
             <strong className='left'>ITEMS </strong>
             <strong className='right'> Amount</strong>
             
         </div>
         <h5>Shipping</h5>
         <ComboBox/>
         <h5>Promo Code</h5>
         <TextField className='textfield' id="outlined-basic" label="Outlined" variant="outlined" />
         <hr className='last'/>
         <div className='headers'>
             <strong className='left'>ITEMS </strong>
             <strong className='right'> Amount</strong>
            
         </div>
             <Button variant="contained" size="large" className='large'>
          Large
        </Button>
     </div>
</div>
    )
};
