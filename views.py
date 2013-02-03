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
            url  = url_for('canvas_page', page_name = name)
            pages.append({ 'name': name, 'url': url})
        return render_template('canvas/index.html', pages=pages)

    @app.route('/canvas/<page_name>')
    def canvas_page(page_name):
        js_filename = "%s%sjs" %(page_name, os.path.extsep)
        js_path = os.path.join("canvas", "js", js_filename)
        page_exists = os.path.exists(os.path.join(app.static_folder, js_path))
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

