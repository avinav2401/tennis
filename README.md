# 🎾 Tennis Game

An interactive 3D tennis game built with Three.js featuring both desktop and mobile controls.

**Live Demo:** [Play on Vercel](https://tennis-avinav2401s-projects.vercel.app/)

## ✨ Features

### Desktop Controls
- **Player 1**: WASD keys + Space to swing
- **Player 2**: Arrow keys + Enter to swing
- **Reset Game**: Press R

### Mobile Touch Controls 📱
- **Virtual joysticks** for player movement
- **Swing buttons** for both players
- Automatically shows on touch devices
- Optimized camera view for mobile screens

### Game Features
- 🎵 **Sound effects** - Ball bounce, racket hits, swing sounds, and scoring
- 📊 **Live scoring** - Real-time score tracking
- 🎨 **3D graphics** - Smooth animations and realistic physics
- 🎯 **Control hints** - Auto-fading instructions for new players (10 seconds)
- 📱 **Responsive design** - Works on desktop, tablet, and mobile

## 🎮 How to Play

1. **Desktop**: Use keyboard controls to move and swing
2. **Mobile**: Use virtual joysticks and tap swing buttons
3. Hit the ball over the net to score points
4. First player to score wins!

## 🚀 Getting Started

### Prerequisites
- Node.js installed

### Installation

```bash
# Clone the repository
git clone https://github.com/avinav2401/tennis.git

# Navigate to project directory
cd tennis

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
npm run build
```

## 🛠️ Technologies Used

- **Three.js** - 3D graphics rendering
- **Vite** - Fast build tool and dev server
- **Vanilla JavaScript** - No framework overhead
- **CSS3** - Responsive styling and animations

## 📁 Project Structure

```
tennis/
├── src/
│   ├── Ball.js          # Ball physics and collision
│   ├── Court.js         # Tennis court rendering
│   ├── Net.js           # Net rendering
│   ├── Racket.js        # Player racket controls
│   ├── SceneManager.js  # 3D scene setup
│   └── TouchControls.js # Mobile touch input
├── models/              # 3D model files (.glb)
├── sounds/              # Sound effects (.mp3)
├── index.html
├── main.js             # Main game loop
├── style.css           # Styles and mobile UI
└── package.json
```

## 🎯 Game Controls Summary

| Action | Player 1 | Player 2 |
|--------|----------|----------|
| Move Up | W / Joystick | ↑ / Joystick |
| Move Down | S / Joystick | ↓ / Joystick |
| Move Left | A / Joystick | ← / Joystick |
| Move Right | D / Joystick | → / Joystick |
| Swing | Space / Button | Enter / Button |
| Reset | R | R |

## 🎨 Features Highlights

- **Auto-fading Instructions**: Control hints appear for 10 seconds then fade out
- **Mobile Optimization**: Reduced zoom and optimized controls for smaller screens
- **Sound System**: Imported sound files work correctly in production builds
- **Movement Boundaries**: Rackets stay within playable area (±40 units)
- **Smooth Animations**: 60 FPS gameplay with realistic physics

## 📱 Mobile Experience

The game automatically detects touch devices and:
- Shows virtual joysticks in bottom corners
- Hides keyboard control instructions
- Adjusts camera zoom for better court visibility
- Provides touch-optimized swing buttons

## 🐛 Known Issues

None at the moment! Report issues on GitHub.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Pull requests are welcome! Feel free to:
- Report bugs
- Suggest new features
- Improve documentation
- Add new game modes

## 👤 Author

**Avinav Priyadarshi**
- GitHub: [@avinav2401](https://github.com/avinav2401)

---

Made with ❤️ and Three.js
