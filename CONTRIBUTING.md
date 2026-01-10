# 🤝 Contributing to Github-Contribution-Showcase

First of all, thank you for your interest! This project is now a **Dynamic API**, which means themes are generated on-the-fly via Vercel.

We are looking for creative **SVG Themes** to expand our gallery.

## 🎨 How to Add a New Theme?

Follow these steps to add your custom design to the API:

### Step 1: Fork and Clone
1. Fork this repository.
2. Clone it to your local machine.

### Step 2: Add Your Theme Logic
Open `src/generateTrophy.js`. You will see a `themes` object or a series of `if/else` conditions. Add your new theme like this:

```javascript
// Inside src/generateTrophy.js
const themes = {
  neon: `...`,
  cyberpunk: `...`,
  // 🚀 Add your new theme here:
  your_theme_name: `
    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="800" height="250" viewBox="0 0 800 250">
      <rect width="800" height="250" fill="#your_color" />
      <text x="400" y="125" text-anchor="middle" fill="white">
        Stats: \${data.total_contributions}
      </text>
    </svg>
  `
};
```


### **Step 3: Test Your Theme**
Since this is a Vercel project, you can test it by pushing to your fork and checking the Vercel preview URL:
`https://your-preview-url.vercel.app/api?username=your_username&theme=your_theme_name`

### **Step 4: Submit a Pull Request**
Once you are happy with the look, commit your changes and open a PR!

---
