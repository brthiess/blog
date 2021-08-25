This is a bit of an older topic for me, but it is something that always confused me as a younger developer so I thought I'd take a deep dive into Javascript closures to learn more about them.  

## So what are Javascript closures?

To put it simply, a javascript closure is a function with references to it's surrounding variables.  Basically a closure gives you access to the scope outside the function from within the function.  

Here is a quick example:

```
function outer() {
    let country = 'Mexico';
    function showCountry() {
        console.log(country);
    }
    showCountry(); 
}
outer(); //logs 'Mexico'
```

The function `outer` creates a variable called `country` which is set to 'Mexico'.  `showCountry`, which is a closure, has access to its surrounding variables, so when `showCountry` is called, it is able to access the `country` variable which was set outside its scope.

This is a pretty trivial example but hopefully it gets the point across.

## Why would I want to use closures?

Good question!  One practical use case is to create private methods.  For example, let's say we wanted to create a bank account function which could add or remove money from an account.

```
let createBankAccount = function() {
    var balance = 0;
    function updateBalance(amount) { //Private method
        if (balance + amount < 0){
            throw 'Negative amount error';
        }
        balance += amount;
    }

    return {
        addMoney: function(amount) {
            updateBalance(amount);
        },
        removeMoney: function(amount) {
            updateBalance(-amount);
        },
        getBalance: function() {
            return balance;
        }
    }
}

let account1 = createBankAccount();
let account2 = createBankAccount();

account1.addMoney(100); //Account 1 has $100
account2.addMoney(200); //Account 2 has $200
account1.removeMoney(10); //Account 1 has $90
account2.removeMoney(500); //Throws an error
```

In this example, functions addMoney, removeMoney, and getBalance are able to access the scope just outside their function and keep a reference to it through its own closure.  Very cool!