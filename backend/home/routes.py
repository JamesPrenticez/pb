from flask import Blueprint, render_template

blueprint = Blueprint('home_blueprint', __name__)

@blueprint.route('/', methods=['GET'])
def home():
  title = "Homepage"
  return render_template("index.html", title=title)