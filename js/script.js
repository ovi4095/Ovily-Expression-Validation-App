// Collapsible mechanisom //

const collapsibles = document.querySelectorAll(".collaps-btn");

collapsibles.forEach((items) => {

    items.addEventListener("click", function(){
    items.parentElement.parentElement.classList.toggle("collapsible--expanded");
    })

});

// Expression Validator Code //

// for Email
 
    // Add Event Listeners
        // For Checking Regular Expression
            document.querySelector("#email-input").addEventListener("submit",() => selectRegularExpression('email'));
            document.querySelector("#number-input").addEventListener("submit", () => selectRegularExpression('number'));
            document.querySelector("#post_code-input").addEventListener("submit", () => selectRegularExpression('post_code'));
        // For Clearing Inputs    
            document.querySelector(".clear-email").addEventListener("click",() => cleanInput('email'));
            document.querySelector(".clear-number").addEventListener("click",() => cleanInput('number'));
            document.querySelector(".clear-post_code").addEventListener("click",() => cleanInput('post_code'));




// Functions
    // For selecteing regular expression
    function selectRegularExpression(value) {
        let reg_exp = '';

        if (value === 'email') {
            reg_exp = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
        } else if(value === 'number') {
            reg_exp = /^(\+)?(88)?01[0-9]{9}$/;
        } else {
            reg_exp = /^[0-9]{4}$/;
        }
        checkRegularExpression(value, reg_exp);
        event.preventDefault();
    }
    // For verifying regular expression
    function checkRegularExpression(value, reg_exp) {

        let input = document.querySelector(`#readOnlyInput-${value}`);
        let input_value = input.value; 
        let regularExpression = reg_exp;
        let msg = document.querySelector(`#${value}-msg`);
            if(regularExpression.test(input_value) == true) {
                input.className ="form-control input-size is-valid"
                msg.className = "msg msg_valid";
                msg.innerHTML="Valid";
            } else {
                input.className ="form-control input-size is-invalid"
                msg.className = "msg msg_invalid";
                msg.innerHTML="Inalid";
            }
        event.preventDefault();
    }
    // For Clearing the Input field and verification message
    function cleanInput(value) {
        let input = document.querySelector(`#readOnlyInput-${value}`);
        input.className = 'form-control input-size';
        input.value ='';
        let msg = document.querySelector(`#${value}-msg`);
        msg.className = "msg";
        msg.innerHTML="";

    }