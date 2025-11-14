from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os   # <-- IMPORT OS to read environment variables

# Read API key from system environment variables
genai.configure(api_key=os.getenv("API_KEY"))

model = genai.GenerativeModel("models/gemini-2.5-flash")

app = Flask(__name__)
CORS(app)  # Allow frontend to connect

@app.post("/chat")
def chat():
    data = request.get_json()
    user_msg = data["message"]

    response = model.generate_content(user_msg)
    return jsonify({"reply": response.text})

if __name__ == "__main__":
    app.run(debug=True)
