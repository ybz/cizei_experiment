import os
from flask import Blueprint, render_template

def list_files_for_index(start_path, prefix=''):
    ret = []
    for r,d,f in os.walk(start_path):
        dir_list = []
        for f_name in f:
            if f_name.endswith(".html"):
                 file_path = os.path.join(r,f_name)
                 file_path = '.' + file_path.replace(start_path, '',1)
                 if prefix:
                     file_path = prefix + file_path
                 dir_list.append(file_path)
        if len(dir_list):
            dir_list.sort()
            ret.append(dir_list)
    ret.sort(key = lambda item: item[0])
    return ret

noc_bp = Blueprint('noc_bp', __name__, static_folder='files', template_folder='templates')

file_list = list_files_for_index(noc_bp.static_folder, prefix='files/')

@noc_bp.route('/')
def index():
    return render_template('noc/index.html', file_list=file_list)

