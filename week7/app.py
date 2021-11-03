from flask import *     # Flask, jsonify, render_template

app = Flask(__name__)

@app.route('/', methods=["GET"])
def elice_html():
    name = request.args.get("name", "이름")
    result = "Hello, " + name
    return result

@app.route("/admin")
def elice_admin():
    return jsonify("admin page")

@app.route("/student")
def elice_student():
    return jsonify("student Page")

@app.route("/student/<name>")
def elice_user(name):
    user = { "name" : name }
    return jsonify(user)

if __name__ == "__main__":
    app.run(debug=True)