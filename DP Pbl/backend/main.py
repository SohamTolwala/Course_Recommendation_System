from flask import Flask, request, jsonify
from difflib import SequenceMatcher
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/compare-strings', methods=['POST'])
def compare_strings():
    # Get the two strings from the request
    string1 = str(request.json['string1'])
    string2 = str(request.json['string2'])

    # Use SequenceMatcher to compare the strings
    match = SequenceMatcher(None, string1, string2)
    result = match.ratio() * 100

    # Return the result as JSON
    return jsonify({'result': int(result)})
if __name__ == '__main__':
    app.run(debug=True)

    