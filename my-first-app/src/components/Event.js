function Event({ number }) {

    function myEvent() {
        alert(`I'm activated! Number ${number}!`)
    }
    
    return (
        <div>   
            <p>Click here to run a event:</p>
            <button onClick={ myEvent }>Activate!</button>
        </div>
    );
}

export default Event;