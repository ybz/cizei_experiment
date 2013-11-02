import os
from flask import Flask
from noc import noc_bp

app = None

def init_app():
    global app

    app = Flask(__name__)
    app.config['DEBUG'] = bool(int(os.environ.get('DEBUG', 0)))

    import utils; utils
    import views; views
    from utils import jinja_utils
    jinja_utils.init_jinja_env()

    app.register_blueprint(noc_bp, url_prefix='/noc')

    return app
