from flask import Flask, request, jsonify
from flask_cors import CORS
from scraper import search_classes

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def index():
    # const data = {
    #         session,
    #         subject,
    #         matchType,
    #         matchID,
    #         career
    #     }

    form = request.json

    results = search_classes(form.get("session"), form.get("subject"), form.get("matchType"), form.get("matchID"), form.get("career"))

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)