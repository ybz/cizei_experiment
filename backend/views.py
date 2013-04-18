import json
from .app import app
from flask import render_template

from utils.flaskutils import route_static_path

@app.route('/')
def index():
    return render_template("index.html")

def lister(file_list):
    return json.dumps(file_list)

route_static_path(app, '/noc', 'noc', index_view_func=lister)
