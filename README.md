# 🎮 Rock, Paper, Scissors - JavaScript Game

This is a clean, responsive and interactive **Rock, Paper, Scissors** game built using **HTML, CSS, and JavaScript**. It's a beginner-friendly project showcasing dynamic DOM manipulation, styling techniques, and user interaction logic.

🔗 **Live Preview:** [Click to Play](https://rock-paper-scissors-lilac-tau.vercel.app/)

---

## 🧠 What You'll Learn

- Dynamic DOM selection and updates with `document.querySelector()` and `getElementById()`
- Conditional logic to determine game outcomes
- Responsive design with **media queries**
- UI/UX feedback using background color changes
- Display toggling for screens using `.style.display`
- Using `clamp()` and `vw` for font responsiveness

---

## 🛠️ Features

✅ **Player vs Computer** logic  
✅ **Score Tracking**  
✅ **Name Input for Personalization**  
✅ **Result Message + Color Feedback**  
✅ **Reset / End / Restart** buttons  
✅ **Responsive Layout for Mobile Screens**  
✅ **Modern UI with Gradient Background**

---

## 🧩 Folder/File Structure

```plaintext
📁 Rock-Paper-Scissors/
├── index.html      # Main game structure and script
├── style.css       # All styles (or inline in <style>)
├── script.js       # JS logic 
````

---

## 💡 Main Concepts Highlighted

### 📌 1. DOM Manipulation

```js
document.getElementById("player").innerHTML = `${name} : ${score_p}`;
document.querySelector(".play").style.display = "block";
```

This is used to **update score**, switch screens, and show/hide components dynamically.

---

### 📌 2. Game Logic

```js
if (computer === option) {
  // It's a tie
} else if (
  (computer === 'rock' && option === 'scissor') ||
  ...
) {
  // Computer wins
} else {
  // Player wins
}
```

Simple but effective logic to **determine winners** using conditionals.

---

### 📌 3. Responsive Design

```css
@media (max-width: 479px) {
  .startScreen {
    flex-wrap: wrap;
  }
  h1 {
    font-size: 6vw;
  }
}
```

Uses **mobile-first responsive design**, improving usability across screen sizes.

---

### 📌 4. Visual Feedback (Result Box Color)

```js
document.getElementById("result").style.backgroundColor = 'green'; // win
document.getElementById("result").style.backgroundColor = 'red';   // lose
```

Instant feedback on the result enhances user engagement.

---

## 🚀 Getting Started

1. Clone the repo or download files
2. Open `index.html` in your browser
3. Enter your name and start playing!

---

## 🔧 Future Improvements (Try These!)

* Add **sound effects**
* Animate buttons or result card
* Add **score limit** to auto-end game
* Add **emoji icons** for Rock 🪨, Paper 📄, Scissors ✂️
* Add **confetti** on win using [`canvas-confetti`](https://www.npmjs.com/package/canvas-confetti)

---

## 👨‍💻 Built With

* HTML5
* CSS3 (Flexbox, Gradients, Media Queries)
* JavaScript (DOM Manipulation, Event Handling)

---

## 🙌 Author

Made by \[Muhammad Saad Abbasi]
🔗 [GitHub Profile]([https://github.com/yourusername](https://github.com/MuhammadSaadAbbasi/))
📬 Feel free to star the repo or share feedback!

---
