from flask import Blueprint

noc_bp = Blueprint('noc_bp', __name__, static_folder='files')
