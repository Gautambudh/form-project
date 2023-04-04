// import './App.css';     
import React from 'react';  
import CountryDropdown from 'country-dropdown-with-flags-for-react';  

function PhoneInput() {    
  return (  
    	<CountryDropdown  
        id="country-code" className='form-control' 
        preferredCountries={['in', 'us']}  
        value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>   
  );    
}   

export default PhoneInput;