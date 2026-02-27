# 💖 Romantic Birthday Surprise Website

A beautiful multi-page birthday surprise website with countdown, cake animation, photo memories, and love letters.

## 📁 Project Structure

```
birthday-surprise/
│
├── index.html          → Countdown Page
├── birthday.html       → Birthday Cake Page
├── memories.html       → Balloon Photo Memories Page
├── letters.html        → Love Letters Page
├── style.css           → Main CSS file
├── script.js           → Main JavaScript file
├── README.md           → This file
│
└── assets/
    ├── images/
    │   ├── memory1.jpg
    │   ├── memory2.jpg
    │   ├── memory3.jpg
    │   ├── memory4.jpg
    │   ├── memory5.jpg
    │   └── memory6.jpg
    │
    ├── videos/
    │   ├── video1.mp4
    │   └── video2.mp4
    │
    └── music/
        └── birthday.mp3
```

## 🚀 Setup Instructions

### 1. Create Assets Folder Structure

Create the following folders in your project directory:
```
assets/
  ├── images/
  ├── videos/
  └── music/
```

### 2. Add Your Files

**Images (for memories page):**
- Place your photos in `assets/images/`
- Name them: `memory1.jpg`, `memory2.jpg`, `memory3.jpg`, etc.

**Special Images (for birthday page):**
- Place 2 special romantic photos in `assets/images/`
- Name them: `special1.jpg`, `special2.jpg`
- These will appear after cutting the cake

**Videos (for letters page):**
- Place your videos in `assets/videos/`
- Name them: `video1.mp4`, `video2.mp4`

**Music (for birthday page):**
- Place your birthday song in `assets/music/`
- Name it: `birthday.mp3`

### 3. Configure Settings

Open `script.js` and edit the CONFIG object at the top:

```javascript
const CONFIG = {
    // Change to your birthday date (Format: YYYY-MM-DDTHH:MM:SS)
    birthdayDate: '2026-03-15T00:00:00',
    
    // Change to your WhatsApp number (include country code)
    whatsappNumber: '919876543210',
    
    // Change your WhatsApp message
    whatsappMessage: 'Happy Birthday My Love ❤️',
    
    // Total number of memories (change if you add more)
    totalMemories: 6,
    
    // Labels for balloons (customize these)
    balloonLabels: ['First Date', 'Our Trip', 'Best Day', 'That Moment', 'Sweet Time', 'Forever']
};
```

### 4. Customize Messages

**Memories Page (`memories.html`):**
- Find each `<p class="memory-text">` tag
- Replace "Write your memory message here ❤️" with your message

**Letters Page (`letters.html`):**
- Find each `<p class="letter-message">` tag
- Replace placeholder text with your emotional messages

## 🎯 Page Flow

1. **index.html** - Countdown timer → Auto-redirects to birthday.html at midnight
2. **birthday.html** - Cake animation → Button redirects to memories.html
3. **memories.html** - Balloon memories → Button redirects to letters.html
4. **letters.html** - Love letters → Button redirects to WhatsApp

## 🎨 Features

✅ Live countdown timer with floating hearts
✅ Animated birthday cake with candles
✅ Confetti and balloons animation
✅ Birthday song plays automatically
✅ Floating balloons that pop to reveal photos
✅ Sequential photo reveal with messages
✅ 4 love letter envelopes with videos
✅ WhatsApp redirect with pre-written message
✅ Fully responsive for mobile
✅ Smooth animations throughout
✅ Romantic pastel theme

## 📱 Testing

1. Open `index.html` in your browser
2. The countdown will show time until your set date
3. To test without waiting, change `birthdayDate` to a time 1 minute from now
4. Navigate through all pages to test the flow

## 🌐 Hosting Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be live!

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Drag and drop your project folder
3. Get instant live URL

### Option 3: Vercel (Free)
1. Go to vercel.com
2. Import your project
3. Deploy with one click

## 💡 Tips

- Use compressed images for faster loading
- Keep videos under 50MB
- Test on mobile before sharing
- Make sure all file names match exactly (case-sensitive)

## 🎉 Enjoy!

Your romantic surprise is ready to share! 💕
