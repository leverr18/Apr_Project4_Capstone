#app.py
import pandas as pd
from flask import Flask, jsonify, render_template, redirect, request
#from modelHelper import ModelHelper
import numpy as np

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


#modelHelper = ModelHelper()

#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    return render_template("home.html")

@app.route("/tableau1")
def dashboard():
    return render_template("tableau1.html")

@app.route("/tableau2")
def map():
    return render_template("tableau2.html")

@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/report")
def report():
    return render_template("report.html")

@app.route("/about_us")
def about_us():
    return render_template("about_us.html")

@app.route("/sources")
def sources():
    return render_template("sources.html")


##############################################################

@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers['X-UA_Compatible'] = 'IE=Edge,chrome=1'
    r.headers["Cache-Control"] = "no-chace, no-store, must-revalidate, public, max-age=0"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    return r

if __name__ == '__main__':
    app.run(debug=True)