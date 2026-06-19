# Wildlife Quiz 🦁🐨🦜

A vibrant, highly performant, and kid-friendly animal identification web application featuring **200 species** across 6 categories. Designed with modern aesthetics, micro-animations, and instant loading speeds.

## ✨ Features

- **200 Animal Species**: A comprehensive database divided into Mammals, Birds, Reptiles, Amphibians, Marine Life, and Insects.
- **Two Game Modes**:
  - **Practice Mode**: Displays a subtle name badge in the bottom-right corner of the animal card for interactive study and learning.
  - **Championship Mode**: Hides the answers to test kids' actual recognition skills against a high-precision decimal countdown timer.
- **Vibrant & Dynamic Aesthetics**:
  - **Split-Screen Cover**: Desktop split layout showing full-resolution African Savanna artwork on the left (without stretching/cropping) and the profile setup card on the right.
  - **Floating Particles**: Animated emojis (✨, 🎈, 🍃) gently drift and rotate on the setup screen.
  - **Thinking Hyena Widget**: Floating thinking hyena widget with a glowing, pulsing lightbulb animation on its head, active only during the quiz.
  - **Dynamic Theme Borders**: Quiz card borders change colors automatically on-the-fly to match the active animal's category.
  - **Hyena Particle Celebration**: Multiple cute baby hyena particles drift, spin, and bounce off screen boundaries alongside colorful confetti upon quiz completion.
- **Performance Optimized**: Scraped Wikipedia REST images are resized to a maximum of 800px width and compressed at 75% JPEG quality to ensure near-instant page loads.

---

## 🛠️ Technology Stack

- **Core**: Vanilla HTML5, JavaScript (State-driven UI lifecycle, Canvas rendering for results particles)
- **Styling**: Vanilla CSS3 (Custom properties, flexbox/grid layout, hardware-accelerated keyframe animations)
- **Tools**:
  - Python Wikipedia API image downloader script (`download_images.py`).
  - Python Pillow-based batch compressor script.

---

## 🚀 Getting Started

### 1. Prerequisites
You need **Python 3** and the **Pillow** library installed to download and compress images.
```bash
pip install Pillow
```

### 2. Scraping & Optimizing Images
The repository contains scripts to fetch the database images from Wikipedia and compress them for production:
```bash
# Download images (cached automatically if already present)
python3 download_images.py

# Compress images to <100KB sizes
python3 /Users/deepakrout/.gemini/antigravity/brain/8e0212f2-080f-4d04-91ee-1a8351a30806/scratch/compress_images.py
```

### 3. Local Development Server
Launch a local development server to test the app:
```bash
python3 -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 📂 Codebase Structure

- [index.html](file:///Users/deepakrout/Documents/codebase/personal/animal-quiz/index.html): Document layout, screen wrappers, SVG assets, and avatar widgets.
- [style.css](file:///Users/deepakrout/Documents/codebase/personal/animal-quiz/style.css): Main styling sheet, category variables, responsive design, and CSS keyframe animations.
- [app.js](file:///Users/deepakrout/Documents/codebase/personal/animal-quiz/app.js): Core runtime logic, 200 species database, timer ticking, results rendering, and canvas physics loops.
- [download_images.py](file:///Users/deepakrout/Documents/codebase/personal/animal-quiz/download_images.py): Dynamic image crawler leveraging Wikipedia REST endpoint with original file fallback.

---

## 🌐 GitHub Pages Deployment

To host this quiz on GitHub Pages:
1. Push this repository to a public GitHub repository.
2. Go to **Settings > Pages** in your GitHub repository interface.
3. Select the `main` branch and `/ (root)` folder under **Build and deployment**.
4. Click **Save**. Your website will be live at `https://<username>.github.io/<repository-name>/`!
