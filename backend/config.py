import os
from dotenv import load_dotenv
import tempfile
import urllib

basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.env'))

class Config:
	APP_NAME='react-flask-boiler'
	BASE_DIR = os.path.abspath(os.curdir) #  os.path.abspath(os.path.dirname(__file__))
	TEMP_DIR = tempfile.gettempdir() # C:\Users\prent\AppData\Local\Temp
	JSONIFY_PRETTYPRINT_REGULAR = True # Format JSON output for the api

class Development_Config(Config):
	ENV='development'
	SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess',
	SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'database.db')
	SQLALCHEMY_TRACK_MODIFICATIONS = False
	SQLALCHEMY_ECHO = False

class Production_Config(Config):
	ENV='production'
	SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess',
	SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'database.db')
	SQLALCHEMY_TRACK_MODIFICATIONS = False
	SQLALCHEMY_ECHO = False

config={
	'development': Development_Config,
	'production': Production_Config,
}