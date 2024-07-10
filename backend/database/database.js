const mysql = require('mysql2')

const database = mysql.createConnection({
    // host: "127.0.0.1",
    // user: "wishlist-user",
    // password: "wishlist.@102!",
    // database: "wishlist"

    host: "localhost",
    user: "root",
    password: "",
    database: "Mwishlist"
})

database.connect(() => {
    try {
        console.log('Connected to the SQL server  :)')
    } catch (err) {
        console.log(err);
    }
})
module.exports = database;
