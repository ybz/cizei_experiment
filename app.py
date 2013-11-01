import os
from flask import Flask

app = None

def init_app():
    global app

    app = Flask(__name__)
    app.config['DEBUG'] = bool(int(os.environ.get('DEBUG', 0)))
    app.config['ASSETS_DEBUG'] = bool(int(os.environ.get('ASSETS_DEBUG', 0)))

    import views; views

    return app
