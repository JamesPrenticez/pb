from flask import Blueprint, render_template, redirect, url_for

blueprint = Blueprint('errors', __name__)

@blueprint.app_errorhandler(404)
def not_found_error(error):
    return redirect(url_for('errors.not_found'))

@blueprint.route('/error/404', methods=['GET'])
def not_found():
    return render_template('index.html'), 404

@blueprint.app_errorhandler(500)
def internal_server_error(error):
    return redirect('/errors.internal_server')

@blueprint.route('/error/500', methods=['GET'])
def internal_server():
    return render_template('index.html'), 500