var BankView = function(){

 this.displayTotal = function(bank){
   var totalDisplay = document.getElementById('total');
   totalDisplay.innerText = "Total: £" + bank.totalCash();
 },

 this.createItemForAccount = function(account){
   var accountListItem = document.createElement('li');
   accountListItem.innerText = account.owner + ": £" + account.amount;
   return accountListItem;
 },

 this.populateAccountList = function(listElement, accounts){
   for(account of accounts){
     listElement.appendChild(this.createItemForAccount(account));
 }
},

 this.displayAccounts = function(bank){
   var businessTotalDisplay = document.getElementById('business-total');
   var personalTotalDisplay = document.getElementById('personal-total');

   businessTotalDisplay.innerHTML = "";
   personalTotalDisplay.innerHTML = "";

   businessTotalDisplay.innerText = "Total Business: £" + bank.totalCash('business');
   personalTotalDisplay.innerText = "Total Personal: £" + bank.totalCash('personal');

   var businessAccountList = document.getElementById('business-accounts');
   var personalAccountList = document.getElementById('personal-accounts');

   businessAccountList.innerHTML = "";
   personalAccountList.innerHTML = "";

   this.populateAccountList(businessAccountList, bank.filteredAccounts('business'))
   this.populateAccountList(personalAccountList, bank.filteredAccounts('personal'))
 },

 this.addInterest = function(bank){
   var button = document.getElementById('pay-interest');
   button.onclick = function(){
     bank.addInterest(10);
     this.displayAccounts(bank);
     this.displayTotal(bank);
   }.bind(this)
 }

}

module.exports = BankView;

//Original

// //create BankView constructor that takes in bank object as an argument and just deals with DOM interactions

// //create method that will render the bank details to the browser

// var BankView = function() {
//   this.displayTotal = function(bank){
//     var totalDisplay = document.getElementById('total');
//     totalDisplay.innerText = "Total Amount in Bank: " + "£" + bank.totalCash();
//   }
// },

//   this.populateAccountsList = function() {
//     var accountType = document.getElementById('account_type');

//       while (accountType.firstChild){
//         accountType.removeChild(accountType.firstChild);
//       }
//       for(account of bank.accounts) {
//         var accountTypeitem = document.createElement('li');
//         accountTypeitem.innerText = "Account Owner: " + " " + account.owner +" " + "£" + account.amount + " " + "Account Type: " + account.type;

//         accountType.appendChild(accountTypeitem);
//       }

//     }
//     populateAccountsList();
//   },

//   this.addInterest = function() {

//     var interestButton = document.getElementById('pay-interest');
//     interestButton.onclick = function() {
//       bank.addInterest(5, 'business');
//       populateAccountsList();

//     }.bind(this);
//   }

// }

// module.exports = BankView;
