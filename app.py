import os

from flask import Flask, url_for
from flask_sqlalchemy import SQLAlchemy
from views import init_views

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
db = SQLAlchemy(app)

app.jinja_env.filters['static'] = lambda name: url_for('static', filename=name)

init_views(app)

app.debug = True

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
