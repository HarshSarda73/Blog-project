import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "mysqlaf@1234",
  database:"blog"
})