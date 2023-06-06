from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/submit', methods=['POST'])
def handle_submit():
    data = request.get_json()
    input1 = data['input1']
    input2 = data['input2']

    # Process the input values here
    # ...

    # Return a response
    response = {
        'message': 'Successful'
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run()
