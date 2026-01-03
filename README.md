# 🎾 Tennis Game

A 3D tennis game built with **Three.js** featuring dynamic physics, custom racket animations, and multiplayer controls.

## ✨ Features

- 🎮 **Two-player local multiplayer**
- 🎨 **Custom blue court** with white lines
- 🎯 **Realistic tennis physics** with ball spin and charge mechanics
- 🏸 **3D racket models** (Red & Green)
- 🔊 **Sound effects** for hits and swings
- 🌐 **Responsive 3D graphics** powered by Three.js

## 🚀 Demo

**🌍 GitHub Pages:** [https://avinav-priyadarshi.github.io/tennis/](https://avinav-priyadarshi.github.io/tennis/)

**⚡ Deploy to Vercel:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/avinav-priyadarshi/tennis)

## 🎮 Controls

### General
| Key | Action |
|-----|--------|
| `R` | Reset Game |

### Player 1 (Red Racket)
| Key | Action |
|-----|--------|
| `W` | Move Up |
| `A` | Move Left |
| `S` | Move Down |
| `D` | Move Right |
| `Spacebar` | Swing / Charge |

### Player 2 (Green Racket)
| Key | Action |
|-----|--------|
| `↑` | Move Up |
| `←` | Move Left |
| `↓` | Move Down |
| `→` | Move Right |
| `Enter` | Swing / Charge |

## 🛠️ Tech Stack

- **Three.js** - 3D graphics rendering
- **Vite** - Build tool and dev server
- **JavaScript** - Game logic
- **GLTF/GLB** - 3D model format

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/avinav-priyadarshi/tennis.git
   cd tennis
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📤 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and deploy!

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 🎨 Customization

### Change Court Color

Edit `src/court.js` and modify the `fieldMaterial` color:

```javascript
const fieldMaterial = new THREE.MeshBasicMaterial({ 
  color: 0x0066CC, // Change this hex color
  side: THREE.DoubleSide 
});
```

### Change Racket Models

Replace the `.glb` files in the `models/` directory or edit the imports in `src/racket.js`.

## 📁 Project Structure

```
tennis/
├── models/          # 3D models (.glb, .blend)
├── sounds/          # Audio files
├── src/             # Game source code
│   ├── Ball.js      # Ball physics
│   ├── Court.js     # Court rendering
│   ├── Net.js       # Net model
│   ├── Racket.js    # Racket logic
│   └── SceneManager.js
├── index.html       # Entry HTML
├── main.js          # Main game loop
├── style.css        # Styles
├── package.json     # Dependencies
└── vercel.json      # Vercel config
```

## 🎯 Gameplay Tips

- **Charge your swing** by holding the swing button longer for more powerful shots
- **Positioning matters** - move to intercept the ball's trajectory
- **Spin shots** are possible with fully charged swings
- **Smash** high balls for powerful returns

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Avinav Priyadarshi**

- GitHub: [@avinav-priyadarshi](https://github.com/avinav-priyadarshi)

---

⭐ If you enjoyed this project, please give it a star!
