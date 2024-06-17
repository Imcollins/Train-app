import mysql.connector

db_config = {
    "host": "localhost",
    "user": "root",
    "password": "collins",
    "database": "Train_app"
}

db = mysql.connector.connect(**db_config)