import React, {useState} from 'react';
import './Registration.css';
import { withRouter } from "react-router-dom";

function RegistrationForm(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    
    
    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login'); 
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            
        } else {
            props.showError('Passwords do not match');
        }
    }
    return(
    <div style = {{backgroundColor:"#fffff0"}}>
         <form style={{border:"1px solid #ccc"}}>
  			<div class="container">
    		<h1>Sign Up</h1>
    

			<label for="email"><b>Email</b></label>
			<input type="text" placeholder="Enter Email" name="email" required value = {state.email} onChange={handleChange}/>

			<label for="psw"><b>Password</b></label>
			<input type="password" placeholder="Enter Password" name="psw" required values={state.password} onChange ={handleChange}/>

			<label for="psw-repeat"><b>Repeat Password</b></label>
			<input type="password" placeholder="Repeat Password" name="psw-repeat" required value={state.confirmPassword} onChange={handleChange}/>

			<label>
			  <input type="checkbox" checked="checked" name="remember" style={{marginBottom:"15px"}}/> Remember me
			</label>

			<p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

			<div class="clearfix">
			  <button type="button" class="cancelbtn">Cancel</button>
			  <button type="submit" class="signupbtn">Sign Up</button>
			</div>
		  </div>
		</form> 
	</div>	
    )
}

export default withRouter(RegistrationForm);
