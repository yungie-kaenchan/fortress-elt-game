# The Framework Fortress: Escape the Five Chambers
## Version 4.0 - Complete Rewrite

An interactive web-based game designed for ELT teacher professional development workshops.

---

## 🎮 Features

| Feature | Description |
|---------|-------------|
| **Character Selection** | 8 unique warrior characters with custom images |
| **Life Power System** | Each character has 2 life powers (max 8 per team) |
| **Deferred Feedback** | No immediate feedback; revealed after passcode |
| **All-or-Nothing** | All 5 answers must be correct to advance |
| **Level Aids** | 50/50, Framework Reference, Hint (3 per level) |
| **Background Music** | Adventure soundtrack with toggle |
| **Fireworks** | Celebration effects on level completion |
| **Certificates** | Downloadable HTML certificates |

---

## 📂 File Structure

```
framework_fortress_v4/
├── index.html              # Main game
├── css/
│   └── game.css            # All styles (single file, no conflicts)
├── js/
│   ├── questions.js        # 25 questions + config
│   └── game.js             # Game engine
└── assets/
    ├── images/             # Character images (PNG)
    │   ├── knight.png
    │   ├── mage.png
    │   ├── archer.png
    │   ├── healer.png
    │   ├── warrior.png
    │   ├── ranger.png
    │   ├── paladin.png
    │   └── rogue.png
    └── audio/
        └── adventure-music.mp3  # Background music
```

---

## 🖼️ REQUIRED IMAGES

Place these in `assets/images/` folder (you already have these!):

| Filename | Purpose |
|----------|---------|
| `chamber-1.png` | Level 1 background |
| `chamber-2.png` | Level 2 background |
| `chamber-3.png` | Level 3 background |
| `chamber-4.png` | Level 4 background |
| `Chamber-5.png` | Level 5 background (note capital C) |
| `crown-gold.png` | Victory screen & 1st place |
| `crown-silver.png` | 2nd place in leaderboard |
| `crown-bronze.png` | 3rd place in leaderboard |
| `hero-banner.png` | Home screen background |
| `key-chamber.png` | Passcode screen icon & background |
| `victory.png` | Victory screen background |

### Optional Character Images (8):
| `knight.png` | Knight of Knowledge |
| `mage.png` | Wisdom Mage |
| `archer.png` | Precision Archer |
| `healer.png` | Learning Healer |
| `warrior.png` | Bold Warrior |
| `ranger.png` | Swift Ranger |
| `paladin.png` | Noble Paladin |
| `rogue.png` | Clever Rogue |

---

## 🎵 BACKGROUND MUSIC INSTRUCTIONS

**YES, please upload your own audio file!**

### Option 1: Upload Your Own Music
1. Find a royalty-free adventure/epic music track
2. Name it: `adventure-music.mp3`
3. Place it in: `assets/audio/` folder
4. Upload to GitHub along with other files

### Recommended Free Music Sources:
- **Pixabay Music** (pixabay.com/music) - Free, no attribution required
- **FreePD** (freepd.com) - Public domain music
- **Incompetech** (incompetech.com) - Kevin MacLeod's music
- **YouTube Audio Library** - Free with YouTube account

### Suggested Search Terms:
- "Epic adventure orchestral"
- "Medieval fantasy game music"
- "Quest heroic soundtrack"
- "RPG battle theme"

### Audio Requirements:
- Format: MP3 (preferred) or OGG
- Size: Under 5MB recommended
- Length: 2-5 minutes (will loop)
- Style: Upbeat, adventurous, game-like

---

## 🎨 CHARACTER IMAGE PROMPTS (for Nano Banana / Gemini)

**Yes, you can create and upload character images!** 

Place them in `assets/images/` folder with these exact filenames:
- `knight.png`
- `mage.png`
- `archer.png`
- `healer.png`
- `warrior.png`
- `ranger.png`
- `paladin.png`
- `rogue.png`

### 8 Image Prompts for Nano Banana:

---

**1. knight.png - Knight of Knowledge**
```
A noble medieval knight character portrait for a fantasy game, wearing shining blue steel armor with golden trim, holding a sword and book, intelligent determined expression, heroic pose, soft magical glow around the character, purple and blue color scheme, digital art style, cute semi-realistic proportions, white background, centered composition
```

---

**2. mage.png - Wisdom Mage**
```
A wise wizard character portrait for a fantasy game, wearing flowing purple robes with silver stars, holding a glowing staff with a crystal orb, white beard, kind wise eyes, magical sparkles floating around, mystical aura, digital art style, cute semi-realistic proportions, white background, centered composition
```

---

**3. archer.png - Precision Archer**
```
An elven archer character portrait for a fantasy game, wearing green leather armor with leaf patterns, holding a elegant wooden bow, pointed ears, sharp focused eyes, emerald green color scheme, forest theme, digital art style, cute semi-realistic proportions, white background, centered composition
```

---

**4. healer.png - Learning Healer**
```
A gentle healer character portrait for a fantasy game, wearing white and teal robes with nature motifs, holding a glowing healing staff with green crystals, compassionate warm smile, soft golden light emanating from hands, peaceful serene expression, digital art style, cute semi-realistic proportions, white background, centered composition
```

---

**5. warrior.png - Bold Warrior**
```
A brave warrior character portrait for a fantasy game, wearing orange and bronze battle armor, holding a large round shield with sun emblem, confident powerful stance, battle scars showing experience, fiery orange color scheme, digital art style, cute semi-realistic proportions, white background, centered composition
```

---

**6. ranger.png - Swift Ranger**
```
A forest ranger character portrait for a fantasy game, wearing green and brown leather gear with a hooded cloak, holding twin daggers, agile athletic build, keen observant eyes, forest and nature theme, earth tones with green accents, digital art style, cute semi-realistic proportions, white background, centered composition
```

---

**7. paladin.png - Noble Paladin**
```
A holy paladin character portrait for a fantasy game, wearing gleaming golden armor with white cape, holding a radiant golden sword, noble dignified expression, divine light halo effect, gold and white color scheme, angelic heroic theme, digital art style, cute semi-realistic proportions, white background, centered composition
```

---

**8. rogue.png - Clever Rogue**
```
A cunning rogue character portrait for a fantasy game, wearing dark red and black leather armor with hood, holding throwing daggers, mischievous clever smirk, shadows partially obscuring face, red and black color scheme, stealthy mysterious vibe, digital art style, cute semi-realistic proportions, white background, centered composition
```

---

### Image Requirements:
- **Size**: 400x400 pixels (square)
- **Format**: PNG with transparent or white background
- **Style**: Consistent across all 8 characters

---

## 🔑 Passcodes (Facilitator Reference)

| Level | Valid Codes |
|-------|-------------|
| 1→2 | 73921, 84562, 19847, 56283, 30974 |
| 2→3 | 62841, 95173, 40826, 73519, 28460 |
| 3→4 | 81594, 37260, 59481, 14723, 68035 |
| 4→5 | 45829, 71346, 28903, 64157, 93028 |
| 5→Win | 92746, 38519, 67402, 15683, 84927 |

---

## 🚀 GitHub Pages Deployment

1. **Extract the ZIP** (don't upload the .zip itself)
2. Upload all contents to your repository ROOT
3. **Settings → Pages → Deploy from branch → main → /(root)**
4. Wait 2-3 minutes
5. Access at: `https://USERNAME.github.io/REPO-NAME/`

### Important:
- `index.html` must be in the ROOT directory
- NOT inside a subfolder like `framework_fortress_v4/`

---

## 🛠️ Fixes in v4.0

| Issue | Fix |
|-------|-----|
| Framework panel not clickable | Removed apostrophe from "Bloom's" key, using data attributes |
| CSS conflicts | Single combined stylesheet (game.css) |
| Layout issues | Proper flexbox centering, fixed positioning |
| Level display broken | Correct screen management system |
| Audio not working | Added proper HTML5 audio element with loop |

---

## 📱 Browser Support

- Chrome 80+ ✅
- Firefox 75+ ✅
- Safari 13+ ✅
- Edge 80+ ✅

---

## 👨‍🏫 Credits

Designed for the ELT Professional Development Workshop:
**"The Healer's Kitchen: Technology as Medicine and Poison in Your ELT Classroom"**

Faculty of Liberal Arts, Mahidol University
