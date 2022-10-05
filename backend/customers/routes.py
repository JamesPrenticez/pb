from flask import Blueprint, render_template

blueprint = Blueprint('customers_blueprint', __name__)

@blueprint.route('/customers', methods=['GET'])
def customers():
  title = "Customers"
  return render_template('index.html', title=title)