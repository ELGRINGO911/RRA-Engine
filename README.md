# 🎮 RRA-Engine

**Advanced Discord Bot with AI, Leveling System, Moderation & Ticket Support**

## ✨ Features

- 🤖 **AI Engine**: Local keyword detection and toxicity detection
- 📊 **Leveling System**: Track user levels and experience
- ⚖️ **Moderation**: Ban, kick, warn, and manage users
- 🎫 **Ticket System**: Support tickets with automatic channel creation
- 🎉 **Fun Commands**: Games, 8-ball, and entertaining commands
- 📝 **Transcript System**: Log conversations and interactions
- 🛡️ **Giveaway System**: Create and manage server giveaways

## 📋 Prerequisites

- Node.js v16 or higher
- MongoDB account (free tier available)
- Discord Bot Token

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/ELGRINGO911/RRA-Engine.git
cd RRA-Engine
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory:

```env
TOKEN=your_discord_bot_token
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

### 4. Run the bot
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## 📁 Project Structure

```
RRA-ENGINE/
├── src/
│   ├── commands/          # Bot commands
│   │   ├── admin/         # Admin commands
│   │   ├── fun/           # Fun commands
│   │   ├── giveaway/      # Giveaway commands
│   │   ├── levels/        # Leveling commands
│   │   ├── moderation/    # Moderation commands
│   │   ├── setup/         # Setup commands
│   │   └── tickets/       # Ticket commands
│   ├── events/            # Discord events
│   ├── models/            # MongoDB schemas
│   ├── utils/             # Helper functions
│   ├── bot.js             # Main entry point
│   └── config.js          # Configuration
├── .env                   # Environment variables
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies
└── README.md              # This file
```

## 🛠️ Commands

### Admin Commands
- `/ban` - Ban a user from the server
- `/kick` - Kick a user from the server

### Fun Commands
- `/ping` - Check bot latency
- `/8ball` - Magic 8 ball game

### Leveling Commands
- `/rank` - Show your level and experience

### Moderation Commands
- `/warn` - Warn a user

### Setup Commands
- `/setprefix` - Change server prefix

### Ticket Commands
- `/ticket` - Create a support ticket

## 🤖 AI Engine

The AI Engine provides:
- **Keyword Detection**: Identifies specific keywords in messages
- **Toxicity Detection**: Detects harmful or toxic content

## 💾 Database Models

- **User**: Tracks user level, experience, and warnings
- **Guild**: Stores server configuration
- **Ticket**: Manages support tickets

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 👤 Author

**ELGRINGO911**

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or pull requests.

---

**Made with ❤️ by ELGRINGO911**
