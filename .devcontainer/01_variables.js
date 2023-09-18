const account_Id = 144553
let account_email = "jkateja01@gmail.com"
var account_password = "12345"
account_city = "Jaipur"
let account_state;

//  account_Id = 2 not allowed //

account_email = "hc@hc.com"
account_password = "212121"
account_city = "Bengaluru"

console.log(account_Id);

// Prefer not to use var
// because of issue in block scope and futional sc

console.table ([account_Id,account_email,account_password,account_city,account_state])