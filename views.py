from flask import render_template, url_for, abort
from os import path

def init_views(app):
    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/canvas/<page_name>')
    def canvas_page(page_name):
        js_path = "canvas/js/%s%sjs" %(page_name, path.extsep)
        page_exists = path.exists(path.join(app.static_folder, js_path))
        template_context = {
            'page_name' : page_name,
            'js_file_src' : url_for('static', filename=js_path)
        }
        if page_exists:
            return render_template('canvas/general.html', **template_context)
        else:
            abort(404)

    @app.route('/processing/test')
    def ps_test():
        return render_template('processing_js/test.html')

