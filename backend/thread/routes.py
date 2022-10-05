from flask import Blueprint, render_template

blueprint = Blueprint('customers_blueprint', __name__)

@blueprint.route('/thread', methods=['GET'])
def customers():
  title = "Thread"
  return render_template('index.html', title=title)