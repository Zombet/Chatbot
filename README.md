# Gemini AI Chatbot (Flask + HTML/CSS/JS)

A simple and modern AI chatbot built using **Google Gemini API**, **Flask (Python backend)**, and a **responsive HTML/CSS/JavaScript frontend**.

This project supports:

✔ Dark Mode  
✔ Typing Indicator  
✔ Clear Chat Button  
✔ Voice Input (Speech-to-Text)  
✔ Modern UI Layout  
✔ Gemini 2.5 Flash Model  
✔ Local Flask server  
✔ Easy deployment options  

---

## 🚀 Features

### **1. User-Friendly Interface**
- Clean chat layout
- Smooth message animations
- Responsive design

### **2. Advanced UX Enhancements**
- Dark/Light mode toggle
- Typing animation ("Gemini is typing…")
- Clear chat button
- Voice input (🎤 microphone button)

### **3. Backend Powered by Gemini AI**
- Uses `models/gemini-2.5-flash` for fast responses  
- Flask API endpoint: `/chat`

---

## 🛠️ **Tech Stack**

### **Frontend**
- HTML  
- CSS  
- JavaScript (Fetch API)

### **Backend**
- Python 3  
- Flask  
- Flask-CORS  
- Google Generative AI SDK  
- Gemini API

---

## 📦 **Installation & Setup**

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/Zombet/Chatbot.git
cd Chatbot
```
## **2️⃣ Install Python Dependencies**
```bash
pip install flask flask-cors google-generativeai
```

## **3️⃣ Add Your Gemini API Key**
open this file:
```bash
app.py
```
find this line:
```bash
genai.configure(api_key="YOUR_API_KEY")
```
add youe api key:
```bash
🔗 https://aistudio.google.com/apikey
```

## **▶️ Run the Backend Server**

In your project directory:
```bash
python app.py
```
## **🌐 Run the Frontend**


## **Project Structure**
```bash
/your-project
│── app.py          # Flask backend (Gemini API)
│── index.html      # Chat UI page
│── style.css       # UI styling
│── script.js       # Frontend logic & fetch API
│── README.md       # Documentation
```

