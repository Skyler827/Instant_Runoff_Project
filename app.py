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


if __name__ == '__main__':

    conn = sqlite3.connect('database.db')
    print("Opened database successfully");

    #conn.execute('CREATE TABLE students (name TEXT, addr TEXT, city TEXT, pin TEXT)')
    #print("Table created successfully");
    app.run()
    conn.close()
