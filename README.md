<<<<<<< HEAD
# Yeshwanth L M - Personal Website

A modern, responsive personal website showcasing professional journey, speaking events, and social media presence.

## 🌟 Features

- **Responsive Design** - Works perfectly on all devices
- **Dynamic Speaking Events** - Automatically loads events with image slideshows
- **Social Media Integration** - Live follower counts and direct links
- **Contact Form** - Functional contact form with email integration
- **Modern Animations** - Smooth transitions and interactive elements
- **Professional Layout** - Clean, modern design with gradient themes

## 🚀 Live Demo

Visit the live website: [https://yeshwanthlm.github.io/personal-website](https://yeshwanthlm.github.io/personal-website)

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── styles.css              # CSS styles and animations
├── script.js               # JavaScript functionality
├── load-events.js          # Dynamic event loading system
├── add-event.html          # Admin interface for adding events
├── profile-picture.jpg     # Profile image
├── speaking-events/        # Speaking events data
│   ├── README.md          # Instructions for adding events
│   ├── IEEE-NextGen-Summit-2025/
│   │   ├── event.json     # Event details
│   │   └── *.jpg          # Event images
│   └── [other-events]/
└── README.md              # This file
```

## 🎯 Sections

1. **Home** - Hero section with profile and call-to-action buttons
2. **About** - Professional journey and current roles
3. **Public Speaking** - Dynamic gallery of speaking events with slideshows
4. **Social Media** - Live follower counts for YouTube, LinkedIn, GitHub
5. **Get In Touch** - Functional contact form

## 📸 Adding New Speaking Events

### Method 1: Using Admin Interface
1. Open `add-event.html` in your browser
2. Fill out the event details form
3. Upload your event images
4. Click "Generate Event Files"
5. Follow the instructions to create the folder

### Method 2: Manual Method
1. Create a new folder in `speaking-events/` with your event name
2. Add your images (any format: jpg, png, webp, heic, etc.)
3. Create an `event.json` file with the following structure:

```json
{
  "title": "Your Event Title",
  "date": "YYYY-MM-DD",
  "location": "City, Country",
  "description": "Event description and your role...",
  "topics": ["Topic 1", "Topic 2", "Topic 3"],
  "audience": "200+",
  "type": "Keynote/Workshop/Conference"
}
```

4. Refresh the website - your event will appear automatically!

## 🔧 Customization

### Update Social Media Counts
Edit the `socialCounts` object in `script.js`:
```javascript
const socialCounts = {
    youtube: 28000,    // Update your YouTube subscribers
    linkedin: 7000,    // Update your LinkedIn connections
    github: 450        // Update your GitHub followers
};
```

### Update Contact Information
- Email: Update in the contact form handler in `script.js`
- Social links: Update URLs in the Social Media section

### Styling
- Colors: Modify the gradient colors in `styles.css`
- Fonts: Change font families in the CSS
- Layout: Adjust spacing and sizing as needed

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox/grid, animations, gradients
- **JavaScript (ES6+)** - Dynamic functionality and interactions
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter font family)

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### GitHub Pages
1. Push code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Other Hosting Options
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About

Created by **Yeshwanth L M**
- Solutions Engineer/Architect at Confluent India
- AWS Community Builder
- Microsoft Certified Trainer (MCT)
- IEEE YP AG Chair, Bangalore Section

## 🤝 Contributing

Feel free to fork this project and customize it for your own use! If you find any bugs or have suggestions for improvements, please open an issue.

---

⭐ If you found this project helpful, please give it a star on GitHub!
=======
# yeswanth-site
yeswanth-site
>>>>>>> 19ee5eff87d745e27a46b6f1693ddeed2ce0cc35
