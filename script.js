// BANK ACCOUNT

// REQUIREMENTS
// Create an object called account that has the following properties:
// - accountName, should be the data type string
// this property should contain the name of the account holder
//OBJECT called account HANDLES LOGIC
const account = {
    accountName: "Rosie Burnett",
    balance: 1000,
    
    //define function and call for balance check 
    //calling the function?
    calcBalance: function () {
        alert(`The balance of this account is ${this.balance}`);
        atm();
    },


    withdrawValue: function (){
        const withdrawValue = parseInt(prompt(`Your balance is ${this.balance}. 
        Please enter the ammount you would like to withdraw?`));

        if (withdrawValue !== "" && withdrawValue !== null && !isNaN(withdrawValue)) {
            account.balance -= withdrawValue;
            alert(`You have successfully added ${withdrawValue} to your account.
            Your new balance is ${this.balance}`);
            atm();

        } else {
            alert(`Sorry that is not a valid number, please try again`);
            withdrawValue();
        }
    },

    depositValue: function (){
        const depositValue = parseInt(prompt(`Your balance is ${this.balance}. 
        Please enter the amount you would like to deposit`));

            if (depositValue !== "" && depositValue !== null && !isNaN(depositValue)) {
                account.balance += depositValue;
                alert(`You have successfully added ${depositValue} to your account.
                Your new balance is ${account.balance}`);
                atm();

            } else {
                alert(`Sorry that is not a valid number, please try again`);
                depositValue();
            }    
    },

    calcName: function (){
        alert(`The account holder is ${this.accountName}`);
        atm();
    },

    exit: function (){
        alert(`Thankyou for using the ATM`);
        atm();
    },
}
//the function called ATM has inside all of the messages for the user to see
//IF user enters number 1-5 a different message for each number selection is shown
//which is handled by SWITCH that calls account functions from inside account object
//ELSE they get a seperate error message {see ELSE brackets}
//i do not know why it is ParseFloat I used ParseInt because the input is a number?!
function atm() {//open function with curly and backticks for template literal means I can create line breaks with [ENTER]
    const chosenInput = parseInt(prompt(`Hello ${account.accountName} please type the number of the funtion you would like 
    1. Check Balance 
    2. Deposit 
    3. Withdraw 
    4. Check account name 
    5. Exit`));
    //you can make a switch or IF ELSE maybe calling for the menu on ELSE
    //below if statement brackets () handle input errors: Error 1 input is not a string, Error 2 input is not empty, Error 3 input is not "not a number"
    if (chosenInput !=="" && chosenInput !==null && !isNaN(chosenInput)) {  
    //I chose to use SWITCH here as it seemed the most concise to use DEFAULT so I dont have to repeat 'ELSE' 5x
    switch (chosenInput) {
        case 1://code executes if chosenInput = 1 here I call function calcBalance from account object
            account.calcBalance();
            //OR this to allow an input?!
            //console.log(account[info]);
            break;
        case 2://code executes if chosenInput = 2 here I call function makeDeposit from account object
            account.depositValue();
            break;
        case 3://code executes if  chosenInput = 3 here I call function makeWithdraw from account object
            account.makeWithdraw();
            break;
        case 4: //code executes if  chosenInput = 4 here I call function calcName from account object
            account.calcName();
            break;
        case 5: //code executes if  chosenInput = 5 here I call function exit from account object
            account.exit();
            break;
    default://code to excute if the input doesnt match one of the number options
            //relavent if used enters number value so it gets through the IF perameters
            //but it is not between 1-5 so still not valid
        alert("Input not valid. Please input a numnber between 1-5");
            //helpful user experience to resend the alert for atm functions - they can make new choice
        atm();
    }

} else {
    //error message
    alert("Please enter a valid number");
    //helpful user experience to resend alert for atm functions again so they can make new choice 
    atm();
}
}//close function with curly
atm();


