function Form() {

    function registerUser(e) {
        e.preventDefault();
        alert(`Registered user future binded input!`)
    }
    
    return (
        <div>
            <h1>My Form</h1>
            <form onSubmit={ registerUser }>
                <div>
                    <input type="text" placeholder="Input your name" />
                </div>
                <div>
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
}

export default Form;
