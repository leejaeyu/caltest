from flask import Flask, request, jsonify
app = Flask(__name__)

users = {}
broadcasts = {}
chat_messages = {}

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    username = data['username']
    password = data['password']
    if username in users:
        return jsonify({"success": False, "error": "User exists"}), 400
    users[username] = password
    return jsonify({"success": True, "userId": len(users)})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data['username']
    password = data['password']
    if users.get(username) == password:
        return jsonify({"success": True, "token": "dummy-token"})
    return jsonify({"success": False, "error": "Invalid credentials"}), 401

@app.route('/api/broadcasts', methods=['POST'])
def create_broadcast():
    data = request.json
    broadcast_id = len(broadcasts) + 1
    broadcasts[broadcast_id] = {"id": broadcast_id, "title": data['title'], "viewers": 0}
    chat_messages[broadcast_id] = []
    return jsonify({"success": True, "broadcastId": broadcast_id})

@app.route('/api/broadcasts', methods=['GET'])
def list_broadcasts():
    return jsonify(list(broadcasts.values()))

@app.route('/api/broadcasts/<int:broadcast_id>', methods=['GET'])
def get_broadcast(broadcast_id):
    broadcast = broadcasts.get(broadcast_id)
    if not broadcast:
        return jsonify({"error": "Not found"}), 404
    return jsonify(broadcast)

@app.route('/api/chat/<int:broadcast_id>', methods=['GET'])
def get_chat(broadcast_id):
    messages = chat_messages.get(broadcast_id, [])
    return jsonify(messages)

if __name__ == '__main__':
    app.run(debug=True)
