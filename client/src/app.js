var Bank = require('./bank/bank.js');
var Account = require('./bank/account.js');
var sampleAccounts = require('./sample.json');
var BankView = require('./bank/bankView.js');

window.onload = function(){
 var bank = new Bank();
 var bankView = new BankView();
 
 for(account of sampleAccounts){
   bank.addAccount(new Account(account));
 }
 bankView.displayTotal(bank);
 bankView.displayAccounts(bank);
 bankView.addInterest(bank);
};







// Original::

// //HW:: create 'new' BankView and pass pass a bank object to it


// var Bank = require('./bank/bank.js');
// var sampleAccounts = require('./sample.json');
// var Account = require('./bank/account.js');
// var BankView = require('./bank/bankView.js');


// window.onload = function(){
//   console.log('loaded');
//   //setup views:
//   var bank = new Bank();
//   var bankView = new BankView();


//   for (accountData of sampleAccounts){
//     bank.addAccount( new Account(accountData));
//   }

//   bankView.displayTotal(bank);
//   bankView.populateAccountsList(bank);
//   bankView.addInterest(bank);

//   // var accountType = document.getElementById('account_type');

//   // var populateAccountsList = function() {
//   //   while (accountType.firstChild){
//   //     accountType.removeChild(accountType.firstChild);
//   //   }
//   //   for(account of bank.accounts) {
//   //     var accountTypeitem = document.createElement('li');
//   //     accountTypeitem.innerText = "Account Owner: " + " " + account.owner +" " + "£" + account.amount + " " + "Account Type: " + account.type;

//   //     accountType.appendChild(accountTypeitem);
//   //   }

//   // }
//   // populateAccountsList();

//   var interestButton = document.getElementById('pay-interest');
//   interestButton.onclick = function() {
//     bank.addInterest(5, 'business');
//     populateAccountsList();

//   };

//   // var accountList = document.getElementById('accounts');




//   // //////////

//   // for(account of bank.accounts) {
//   //   var accountListitem = document.createElement('li');
//   //   accountListitem.innerText = account.owner +":£" + account.amount;

//   //   accountList.appendChild(accountListitem);
//   // }
//   ////////////////

  

//   //   for(account of bank.accounts) {
//   //     var accountTypeitem = document.createElement('li');
//   //     accountTypeitem.innerText = account.owner + ":£" + account.amount + ":" + account.type;

//   //     accountType.appendChild(accountTypeitem);
//   // }






