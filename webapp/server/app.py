from flask import Flask, request, jsonify, render_template
from flask_cors import CORS  # Import the CORS module
import pickle

app = Flask(__name__)
CORS(app)

model = pickle.load(open('C:\Storage\webapp\server\inal.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  # Get the JSON data from the request body
    p1 = int(data['age'])
    p2 = int(data['income'])
    p3 = int(data['score'])

    # Rest of the code remains the same
    result = model.predict([[p1, p2, p3]])

    cato = {
        0: "Sensible group",
        1: "Target group",
        2: "Careful group",
        3: "Careless group",
        4: "Standard group"
    }

    labels = {
        0: "Low income and low spenders",
        1: "Middle-to-high income and high spenders (should be targeted by mall)",
        2: "High income but low spenders",
        3: "Low income but high spenders (should be avoided because of possible credit risk)",
        4: "Middle income and medium spenders(to be moderately targeted)"
    }
    
    prediction = {
        'cluster': int(result),
        'label': labels[int(result)],
        "cat" : cato[int(result)]
    }

    return jsonify(prediction)  # Return the prediction as JSON response
    
if __name__ == '__main__':
    app.run(debug=True, port=9000)
