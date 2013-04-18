from .app import app
from flask import render_template

from utils.flaskutils import route_static_path

@app.route('/')
def index():
    return render_template("index.html")

route_static_path(app, '/noc', 'noc')
