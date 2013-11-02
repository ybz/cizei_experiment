import os
from flask import Flask

app = None

def init_app():
    global app

    app = Flask(__name__)
    app.config['DEBUG'] = bool(int(os.environ.get('DEBUG', 0)))

    import utils; utils
    import views; views
    from utils import jinja_utils
    jinja_utils.init_jinja_env()

    return app
