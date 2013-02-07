from flask import render_template, url_for, abort
import os

def init_views(app):
    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/canvas')
    def canvas_index():
        is_js_file = lambda name: name.endswith(os.extsep+"js")
        files_list = filter(is_js_file, os.listdir(os.path.join(app.static_folder, "canvas", "js")))
        pages = []
        for filename in files_list:
            name = os.path.splitext(filename)[0]
            url  = url_for('js_page', app_name='canvas', page_name=name)
            pages.append({ 'name': name, 'url': url})
        return render_template('canvas/index.html', pages=pages)

    @app.route('/<app_name>/<page_name>')
    def js_page(app_name, page_name):
        if not app_name in ['canvas', 'processing']:
            abort(404)
        js_filename = "%s%sjs" %(page_name, os.path.extsep)
        js_path = os.path.join(app_name, "js", js_filename)
        page_exists = os.path.exists(os.path.join(app.static_folder, js_path))
        template_context = {
            'page_name' : page_name,
            'js_file_src' : url_for('static', filename=js_path)
        }
        if page_exists:
            return render_template('%s/js_page.html' %(app_name), **template_context)
        else:
            abort(404)
