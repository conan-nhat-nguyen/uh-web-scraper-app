from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'Server is running!'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)