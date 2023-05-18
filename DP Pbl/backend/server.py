from flask import Flask, request, jsonify
from util import recommend_by_course_title_1
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/recommend', methods=['POST'])
def get_recommendation_details():
    # get the input from the request
    topic = str(request.json['topic'])
    level = str(request.json['level'])
    language = str(request.json['language'])
    uni = str(request.json['uni'])
    course_type = str(request.json['course_type'])

    course_name = topic+level+language+uni+course_type
    print(course_name)


    # call the recommendation system
    top_5_courses_json = recommend_by_course_title_1(course_name)
    
    # return the result as JSON
    return jsonify(top_5_courses_json)
    

if __name__ == '__main__':
    app.run(debug=True)