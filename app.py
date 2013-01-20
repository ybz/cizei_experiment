import os

from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
db = SQLAlchemy(app)

app.jinja_env.filters['static'] = lambda name: url_for('static', filename=name)

@app.route('/')
def index():
    return 'Welcome'

@app.route('/canvas')
def canvas():
    return render_template('canvas.html')

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
