from flask import Flask, request, send_from_directory
import sqlite3

app = Flask(__name__, static_url_path='')

@app.route('/')
def root():
    return app.send_static_file('index.html')


@app.route('/static/style.css')
def style():
    return app.send_static_file('style.css')


@app.route('/static/main.js')
def send_js():
    return app.send_static_file('main.js')

@app.route('/login')
def test_credentials():
    print(request.form)
    if valid_login(request.args('username'), request.args.get('password')):
        return ("CORRECT", 200, [])
    else: return ("NOAT AUTHORIZED", 401, [])
@app.route('/running')
@app.route('/vote')
@app.route('/results')

def valid_login(name, password):
    return True

if __name__ == '__main__':

    conn = sqlite3.connect('database.db')
    print("Opened database successfully");

    #conn.execute('CREATE TABLE students (name TEXT, addr TEXT, city TEXT, pin TEXT)')
    #print("Table created successfully");
    app.run()
    conn.close()
