from flask import Blueprint, jsonify


api = Blueprint("api", __name__)


@api.route('/get_one')
def get_one():
    print("HERE")
    return jsonify(result=3000)
