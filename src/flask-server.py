from bcrypt import checkpw, gensalt, hashpw
from flask import Flask, request
from flask_cors import CORS
import sqlite3
  
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/login", methods=["POST"])

def login():
    con = sqlite3.connect('G:\cookieshop.db')
    cu = con.cursor()
    email = request.json["username"]
    password = request.json["password"].encode("utf-8")
    #request.json["password"].encode("utf-8")

    emailQuery = """Select Password From Customer Where Email = ?"""
    cu.execute(emailQuery, (email,))
    con.commit()
    response = cu.fetchall()
    print(response[0][0])
    if len(response) == 0:
        return "Invalid login.", 200
    elif checkpw(password, response[0][0]):
        return "Valid login.", 200
    else:
        return "Invalid login.", 200
    
@app.route("/register", methods=["POST"])

def Register():
    con = sqlite3.connect('G:\cookieshop.db')
    cu = con.cursor()
    email = request.json["username"]
    password = request.json["password"].encode("utf-8")
    emailQuery = "SELECT * FROM Customer WHERE Email = ?"
    cu.execute(emailQuery, (email,))
    response = cu.fetchone()
    if response:
        return "The email already exists", 200
    else:
        insertQuery = "INSERT INTO `Customer` (`Email`, `Password`) VALUES (?, ?)"
        salt = gensalt() 
        hashedPassword = hashpw(password, salt) 
        cu.execute(insertQuery, (email, hashedPassword))
        con.commit()
        con.close()
    return "Success", 200



if __name__ == "__main__":
    app.run()


