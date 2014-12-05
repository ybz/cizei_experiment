from app import app
from flask import render_template
from datetime import datetime, timedelta

@app.route('/favicon.ico')
def favicon():
    return app.send_static_file('favicon.ico')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ember_todo/')
def ember_todo():
    return render_template('ember_todo.html')

@app.route('/timer/')
def nov_timer():
    days_count = (datetime.now() - datetime(2014, 11, 1)).days + 1
    return render_template('nov_timer.html', days_count=days_count)
