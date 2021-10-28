from flask import Flask, render_template, request
import sqlite3 as sql

app = Flask(__name__)

@app.route('/')
def home():
    arr = ['치킨', '피자', '햄버거']
    return render_template("sample.html", datas=arr)

@app.route('/add/<int:a>/<int:b>')
def add(a, b):
    return render_template("calculator.html", method="더하기", value=a + b)

@app.route('/sub/<int:a>/<int:b>')
def sub(a, b):
    return render_template("calculator.html", method="빼기", value=a - b)

@app.route('/read')
def read():
    with sql.connect('rabbit.db') as con:  # open은 여기 내에서만 유효함 (알아서 close)
        cur = con.cursor()
        cur.execute('SELECT * FROM rabbitUser')
        result = cur.fetchall() # 결과물 받기 용
        print(result)
    return render_template("read.html", results=result)

@app.route('/register')
def register_form():
    return render_template("register.html")

@app.route('/join', methods=['POST'])
def adduser():
    name = request.form["name"]
    id = request.form["id"]
    password = request.form["password"]
    telephone = request.form["telephone"]

    with sql.connect('rabbit.db') as con:  # open은 여기 내에서만 유효함 (알아서 close)
        cur = con.cursor()
        cur.execute('INSERT INTO rabbitUser(id, password, nickname, telephone) VALUES (?, ?, ?, ?)', (id, password, name, telephone))
        con.commit()
    return "응애"

if __name__ == '__main__':
    app.run(debug=True)