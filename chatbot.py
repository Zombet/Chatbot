import google.generativeai as genai

genai.configure(api_key="AIzaSyAAQaJyXrila2YjMnHPcX0nxUssDP5YBOI")

model = genai.GenerativeModel("models/gemini-2.5-flash")  # valid model

def chat_with_gpt(prompt):
    response = model.generate_content(prompt)
    return response.text

if __name__ == "__main__":
    print("Chatbot started! Type 'exit' to quit.\n")
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["exit", "quit", "bye"]:
            print("Exiting chat.")
            break
        gpt_response = chat_with_gpt(user_input)
        print("GPT:", gpt_response)
