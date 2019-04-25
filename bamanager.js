mysql = require("mysql")
inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "tothefuture",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        queryProducts(userPrompt)
        
        
    });
}

function queryProducts(cb) {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | ", res[i].product_name + " | ", res[i].department_name + " |  $" +
                res[i].price + " |  Stock: " + res[i].stock_quantity)
        }
        if (typeof cb === "function"){
            cb()
        }
        

    })

}

function itemPurchase(){
    console.log("Item has been purchased!")
   
}

function userPrompt() {
    connection.query("SELECT * FROM products", function (err, res) {
        inquirer
            .prompt([
                {
                    name: "whatToBuy",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < res.length; i++) {
                            choiceArray.push(res[i].product_name);
                        }
                        return choiceArray;
                    },
                    message: "What item would you like to purchase?"
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many units would you like?"
                }
            ])
            .then(function (answer) {
                connection.query("SELECT * FROM products WHERE product_name=?", answer.whatToBuy,
                    function (err, res) {
                        minusProduct = parseInt(JSON.stringify(res[0].stock_quantity)) - answer.quantity
                        console.log(minusProduct)
                        if (minusProduct <= -1) {
                            console.log("Not Enough in Stock")
                            console.log("Only " + res[0].stock_quantity + " left.")
                            afterConnection()
                        } else {
                            connection.query(

                                "UPDATE products SET stock_quantity=? WHERE product_name=?", [minusProduct, answer.whatToBuy],
                                function (err, res) {
                                    itemPurchase()
                                    queryProducts()
                                    connection.end()
                                    
                                }
                                
                            )
                            
                            
                            
                        }
                        

                    })

                console.log(answer.whatToBuy)
                console.log(answer.quantity)
            });

    })

}

