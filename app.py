from flask import Flask, request, send_from_directory

app = Flask(__name__, static_url_path='')

@app.route('/')
def root():
    return app.send_static_file('index.html')


@app.route('/static/style.css')
def style():
    return app.send_static_file('style.css')


@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)


if __name__ == '__main__':
    app.run()
