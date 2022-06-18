import { useState } from "react";

function Form() {

    const [ name, setName ] = useState()
    const [ password, setPassword ] = useState()

    function registerUser(e) {
        e.preventDefault();
        console.log(`User ${name} was registered with the password ${password}.`)
    }

    return (
        <div>
            <h1>My Form</h1>
            <form onSubmit={ registerUser }>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Input your name"
                    onChange={ (e) => setName(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Input your password"
                    onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
}

export default Form;
