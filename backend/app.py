from flask import Flask, jsonify

# 1. Initialize the Flask application
#from flask_cors import CORS # 1. Import CORS

app = Flask(__name__)
#CORS(app) # 2. Initialize CORS with your app

# 2. Define the route and the function to handle it
@app.route('/get_one')
def get_one():
    # 3. Return the number 1. 
    # Flask will automatically convert this to a string response.
    # For a more standard API, returning JSON is better.
    return jsonify(result=1)

# 4. Run the app when the script is executed
if __name__ == '__main__':
    # The app will run on http://127.0.0.1:5000
    app.run(host="127.0.0.1", port=5000)
