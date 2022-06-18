import Button from "./event/Button";

/*
function Event({ number }) {

    function myEvent() {
        alert(`I'm activated! Number ${number}!`)
    }
    */


function Event() {

    function myFirstEvent() {
        // alert(`Activating my first event!`)
        console.log(`Activating my first event!`)
    }

    function mySecondEvent() {
        console.log(`Activating my second event!`)
    }
    
    return (
        <div>   
            <p>Click here to run a event:</p>
            <Button event={ myFirstEvent } text="First Event" />
            <Button event={ mySecondEvent } text="Second Event" />
        </div>  
    );
}

export default Event;