from app import app
from flask import render_template

@app.route('/favicon.ico')
def favicon():
    return app.send_static_file('favicon.ico')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ember_todo/')
def ember_todo():
    return render_template('ember_todo.html')
