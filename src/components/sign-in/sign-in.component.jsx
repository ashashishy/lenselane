import React from 'react';
import './sign-in.style.scss';
import CustomButton from '../custom-button/cutom-button.component';
import FormInput from '../form-input/form-input.component';
class SIgnIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange=(event)=>{
        const {value, name}=event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput handleChange={this.handleChange} type="email" value={this.state.email} required name="email" label="email"/>
                    <FormInput handleChange={this.handleChange} type="password" value={this.state.password} required name="password" label="password"/>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                </form>
            </div>
        )
    }
}
export default SIgnIn;