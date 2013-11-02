from flask import url_for

from app import app

def init_jinja_env():
    app.jinja_env.filters['static'] = lambda name: url_for('static', filename=name)
