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
	try:
		if valid_login(request.args.get('username'), request.args.get('password')):
			return ("CORRECT", 200, [])
		else: return ("NOAT AUTHORIZED", 401, [])
	except Exception as a:
		print(a)
@app.route('/running')
@app.route('/vote')
@app.route('/results')

def valid_login(name, password):
    global conn
    c = conn.cursor()
    try:
        res=c.execute("SELECT pin FROM students WHERE name=%s"%name)
    except Exception as a:
        res = []
        print(a)
    resu = res if not res else res.fetchall()
    if(res):
        return resu[0]==password
    else:
        print("The user isn't in the database, so I don't know what to do with myself")
        return True

if __name__ == '__main__':

    conn = sqlite3.connect('database.db')
    print("Opened database successfully");

    #conn.execute('CREATE TABLE students (name TEXT, addr TEXT, city TEXT, pin TEXT)')
    #print("Table created successfully");
    app.run(host='0.0.0.0')
    conn.close()
