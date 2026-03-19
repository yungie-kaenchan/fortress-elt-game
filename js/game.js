/**
 * THE FORTRESS OF ED TECH FRAMEWORKS v4.2
 * Complete Game Engine with Admin Panel
 * 
 * Features:
 * - Fortress Keeper admin dashboard with analytics
 * - Enhanced massive confetti/fireworks celebrations
 * - Volume slider control
 * - Secure passcode display (masked)
 * - Team progress tracking
 */

// ============================================
// GAME STATE
// ============================================
const gameState = {
    teamName: '',
    members: [],
    characters: [],
    totalLifePowers: 0,
    currentLevel: 1,
    currentQuestion: 0,
    answers: {},
    startTime: null,
    levelAids: { fiftyFifty: 1, framework: 1, hint: 1 },
    levelAttempts: {},
    gameOver: false,
    isAdmin: false
};

// Admin credentials (encoded)
const _fk = { u: atob('eXVuZ2ll'), p: atob('eXVuZzEyMzQ=') };

// ============================================
// CHARACTERS DATA
// ============================================
const CHARACTERS = [
    { id: 'knight', name: 'Knight of Knowledge', emoji: '⚔️', color: '#3b82f6' },
    { id: 'mage', name: 'Wisdom Mage', emoji: '🧙', color: '#8b5cf6' },
    { id: 'archer', name: 'Precision Archer', emoji: '🏹', color: '#10b981' },
    { id: 'healer', name: 'Learning Healer', emoji: '💚', color: '#14b8a6' },
    { id: 'warrior', name: 'Bold Warrior', emoji: '🛡️', color: '#f59e0b' },
    { id: 'ranger', name: 'Swift Ranger', emoji: '🌲', color: '#22c55e' },
    { id: 'paladin', name: 'Noble Paladin', emoji: '✨', color: '#eab308' },
    { id: 'rogue', name: 'Clever Rogue', emoji: '🗡️', color: '#ef4444' }
];

// ============================================
// FRAMEWORK REFERENCE DATA (Fixed keys - no apostrophe)
// ============================================
const FRAMEWORKS = {
    blooms: {
        id: 'blooms',
        icon: '🧠',
        name: "Bloom's",
        title: "Bloom's Digital Taxonomy",
        color: '#8b5cf6',
        summary: "Hierarchy of cognitive thinking skills from low to high",
        levels: [
            { name: 'Remember', desc: 'Recall facts, terms, concepts' },
            { name: 'Understand', desc: 'Explain ideas, interpret meaning' },
            { name: 'Apply', desc: 'Use knowledge in new situations' },
            { name: 'Analyze', desc: 'Break down, find patterns' },
            { name: 'Evaluate', desc: 'Justify, critique, judge' },
            { name: 'Create', desc: 'Produce original work' }
        ],
        keyQuestion: "What cognitive level are students operating at?"
    },
    udl: {
        id: 'udl',
        icon: '♿',
        name: 'UDL',
        title: 'Universal Design for Learning',
        color: '#14b8a6',
        summary: "Remove barriers, provide multiple pathways",
        principles: [
            { name: 'Engagement (WHY)', desc: 'Multiple ways to motivate' },
            { name: 'Representation (WHAT)', desc: 'Multiple ways to present info' },
            { name: 'Action & Expression (HOW)', desc: 'Multiple ways to demonstrate' }
        ],
        keyQuestion: "Are there barriers preventing some learners from accessing or demonstrating learning?"
    },
    picrat: {
        id: 'picrat',
        icon: '📊',
        name: 'PICRAT',
        title: 'PICRAT Matrix',
        color: '#ec4899',
        summary: "Student relationship × Teacher tech use",
        matrix: {
            rows: ['Passive (P)', 'Interactive (I)', 'Creative (C)'],
            cols: ['Replaces (R)', 'Amplifies (A)', 'Transforms (T)']
        },
        keyQuestion: "How are students engaging? How does tech change what's possible?"
    },
    fourds: {
        id: 'fourds',
        icon: '🤖',
        name: '4Ds',
        title: '4Ds of AI Fluency',
        color: '#f59e0b',
        summary: "Framework for effective AI use in education",
        dimensions: [
            { name: 'D1: Delegation', desc: 'What to give AI vs. keep human' },
            { name: 'D2: Description', desc: 'Write detailed prompts' },
            { name: 'D3: Discernment', desc: 'Evaluate AI output critically' },
            { name: 'D4: Diligence', desc: 'Review and adapt AI output' }
        ],
        keyQuestion: "Is the teacher using AI effectively and ethically?"
    }
};

// ============================================
// LEVEL HINTS
// ============================================
const LEVEL_HINTS = {
    1: "Think about which framework BEST diagnoses the core problem in each scenario. Consider what aspect of teaching/learning is most broken.",
    2: "Pay attention to the specific terminology of each framework. Classification requires knowing the exact categories.",
    3: "Diagnosis requires using multiple frameworks together. Look for patterns across different dimensions.",
    4: "Good prescriptions integrate multiple frameworks coherently. The solution should address the root cause.",
    5: "Integration questions test nuanced understanding. Absolute statements ('always', 'never') are often false."
};

// ============================================
// SOUND ENGINE (with Volume Control)
// ============================================
const soundEngine = {
    audioContext: null,
    sfxEnabled: true,
    musicPlaying: false,
    bgMusic: null,
    volume: 0.3,
    
    init() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        this.bgMusic = document.getElementById('bg-music');
    },
    
    playTone(freqs, duration, type) {
        if (!this.sfxEnabled) return;
        this.init();
        
        freqs.forEach((freq, i) => {
            setTimeout(() => {
                const osc = this.audioContext.createOscillator();
                const gain = this.audioContext.createGain();
                osc.connect(gain);
                gain.connect(this.audioContext.destination);
                osc.frequency.value = freq;
                osc.type = type;
                gain.gain.setValueAtTime(this.volume * 0.8, this.audioContext.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
                osc.start(this.audioContext.currentTime);
                osc.stop(this.audioContext.currentTime + duration);
            }, i * duration * 700);
        });
    },
    
    play(type) {
        if (!this.sfxEnabled) return;
        this.init();
        
        switch(type) {
            case 'click': this.playTone([800], 0.05, 'sine'); break;
            case 'select': this.playTone([600, 800], 0.08, 'sine'); break;
            case 'error': this.playTone([200, 150], 0.2, 'sawtooth'); break;
            case 'success': this.playTone([523, 659, 784], 0.15, 'sine'); break;
            case 'unlock': this.playTone([392, 523, 659, 784], 0.12, 'sine'); break;
            case 'lifeLost': this.playTone([400, 300, 200], 0.2, 'triangle'); break;
            case 'gameOver': this.playTone([300, 250, 200, 150], 0.3, 'sawtooth'); break;
            case 'hint': this.playTone([400, 500, 450], 0.1, 'triangle'); break;
            case 'victory': this.playVictory(); break;
            case 'fireworks': this.playFireworks(); break;
            case 'confetti': this.playConfetti(); break;
        }
    },
    
    playVictory() {
        [523, 587, 659, 698, 784, 880, 988, 1047].forEach((f, i) => {
            setTimeout(() => this.playTone([f], 0.15, 'sine'), i * 100);
        });
    },
    
    playFireworks() {
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const f = 300 + Math.random() * 700;
                this.playTone([f, f * 1.5, f * 0.75], 0.12, 'sine');
            }, i * 150);
        }
    },
    
    playConfetti() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                this.playTone([800 + Math.random() * 400], 0.05, 'sine');
            }, i * 50);
        }
    },
    
    setVolume(value) {
        this.volume = value / 100;
        this.init(); // Ensure bgMusic reference is set
        if (this.bgMusic) {
            this.bgMusic.volume = this.volume;
        }
        // Update icon
        const icon = document.getElementById('volume-icon');
        if (icon) {
            if (value == 0) icon.textContent = '🔇';
            else if (value < 30) icon.textContent = '🔈';
            else if (value < 70) icon.textContent = '🔉';
            else icon.textContent = '🔊';
        }
        // Auto-play music if not playing and volume > 0
        if (value > 0 && this.bgMusic && !this.musicPlaying) {
            this.bgMusic.volume = this.volume;
            this.bgMusic.play().catch(e => console.log('Music play failed:', e));
            this.musicPlaying = true;
        }
        if (value == 0 && this.bgMusic) {
            this.bgMusic.pause();
            this.musicPlaying = false;
        }
    },
    
    toggleMusic() {
        this.init();
        if (this.bgMusic) {
            if (this.musicPlaying) {
                this.bgMusic.pause();
                this.musicPlaying = false;
            } else {
                this.bgMusic.volume = this.volume;
                this.bgMusic.play().catch(e => console.log('Music play failed:', e));
                this.musicPlaying = true;
            }
        }
        return this.musicPlaying;
    },
    
    toggleSFX() {
        this.sfxEnabled = !this.sfxEnabled;
        return this.sfxEnabled;
    }
};

// Volume slider function (global)
function adjustVolume(value) {
    soundEngine.setVolume(value);
    document.getElementById('volume-value').textContent = value + '%';
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initFrameworkPanel();
    soundEngine.init(); // Initialize audio system
    
    // Loading animation
    setTimeout(() => {
        showScreen('home');
    }, 2500);
});

// ============================================
// SCREEN MANAGEMENT
// ============================================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId + '-screen');
    if (screen) {
        screen.classList.add('active');
    }
}

// ============================================
// FRAMEWORK PANEL (Fixed - no apostrophe issues)
// ============================================
function initFrameworkPanel() {
    const tabsContainer = document.getElementById('framework-tabs');
    const contentContainer = document.getElementById('framework-content');
    
    if (!tabsContainer || !contentContainer) return;
    
    // Build tabs
    let tabsHTML = '';
    let contentHTML = '';
    let first = true;
    
    Object.values(FRAMEWORKS).forEach(fw => {
        tabsHTML += `
            <button class="panel-tab ${first ? 'active' : ''}" data-fw="${fw.id}">
                ${fw.icon} ${fw.name}
            </button>
        `;
        
        contentHTML += `<div class="framework-detail ${first ? 'active' : ''}" data-fw="${fw.id}" style="border-left: 4px solid ${fw.color};">`;
        contentHTML += `<h4>${fw.icon} ${fw.title}</h4>`;
        contentHTML += `<p class="framework-summary">${fw.summary}</p>`;
        
        if (fw.levels) {
            contentHTML += '<div class="framework-levels">';
            fw.levels.forEach(l => {
                contentHTML += `<div class="level-item"><strong>${l.name}</strong>: ${l.desc}</div>`;
            });
            contentHTML += '</div>';
        }
        
        if (fw.principles) {
            contentHTML += '<div class="framework-principles">';
            fw.principles.forEach(p => {
                contentHTML += `<div class="principle-item"><strong>${p.name}</strong>: ${p.desc}</div>`;
            });
            contentHTML += '</div>';
        }
        
        if (fw.matrix) {
            contentHTML += '<div class="framework-matrix"><table><thead><tr><th></th>';
            fw.matrix.cols.forEach(c => contentHTML += `<th>${c}</th>`);
            contentHTML += '</tr></thead><tbody>';
            fw.matrix.rows.forEach(r => {
                contentHTML += `<tr><th>${r}</th><td>•</td><td>•</td><td>•</td></tr>`;
            });
            contentHTML += '</tbody></table></div>';
        }
        
        if (fw.dimensions) {
            contentHTML += '<div class="framework-dimensions">';
            fw.dimensions.forEach(d => {
                contentHTML += `<div class="dimension-item"><strong>${d.name}</strong>: ${d.desc}</div>`;
            });
            contentHTML += '</div>';
        }
        
        contentHTML += `<div class="key-question">🔑 "${fw.keyQuestion}"</div>`;
        contentHTML += '</div>';
        
        first = false;
    });
    
    tabsContainer.innerHTML = tabsHTML;
    contentContainer.innerHTML = contentHTML;
    
    // Add tab click handlers (using event delegation)
    tabsContainer.addEventListener('click', (e) => {
        const tab = e.target.closest('.panel-tab');
        if (!tab) return;
        
        const fwId = tab.dataset.fw;
        
        // Update tabs
        tabsContainer.querySelectorAll('.panel-tab').forEach(t => {
            t.classList.toggle('active', t.dataset.fw === fwId);
        });
        
        // Update content
        contentContainer.querySelectorAll('.framework-detail').forEach(d => {
            d.classList.toggle('active', d.dataset.fw === fwId);
        });
    });
}

function openFrameworkPanel() {
    document.getElementById('framework-panel').classList.add('open');
    soundEngine.play('click');
    
    if (gameState.levelAids.framework > 0) {
        gameState.levelAids.framework--;
        updateAidsDisplay();
    }
}

function closeFrameworkPanel() {
    document.getElementById('framework-panel').classList.remove('open');
}

// ============================================
// SOUND CONTROLS
// ============================================
function toggleMusic() {
    const playing = soundEngine.toggleMusic();
    const btn = document.getElementById('btn-music');
    btn.classList.toggle('playing', playing);
    btn.textContent = playing ? '🎶' : '🎵';
}

function toggleSFX() {
    const enabled = soundEngine.toggleSFX();
    const btn = document.getElementById('btn-sfx');
    btn.classList.toggle('active', enabled);
    btn.textContent = enabled ? '🔊' : '🔇';
}

// ============================================
// GAME START
// ============================================
function startGame() {
    const teamName = document.getElementById('teamName').value.trim();
    const members = [
        document.getElementById('member1').value.trim(),
        document.getElementById('member2').value.trim(),
        document.getElementById('member3').value.trim(),
        document.getElementById('member4').value.trim()
    ].filter(n => n);
    
    if (!teamName) {
        alert('Please enter a team name!');
        return;
    }
    
    if (members.length < 1) {
        alert('Please enter at least one team member!');
        return;
    }
    
    gameState.teamName = teamName;
    gameState.members = members;
    gameState.characters = [];
    gameState.totalLifePowers = members.length * 2;
    gameState.startTime = Date.now();
    gameState.gameOver = false;
    
    for (let i = 1; i <= 5; i++) {
        gameState.answers[i] = {};
        gameState.levelAttempts[i] = 0;
    }
    
    soundEngine.play('success');
    
    // Start background music on first user interaction
    if (!soundEngine.musicPlaying && soundEngine.volume > 0) {
        soundEngine.init();
        if (soundEngine.bgMusic) {
            soundEngine.bgMusic.volume = soundEngine.volume;
            soundEngine.bgMusic.play().catch(e => console.log('Music autoplay blocked:', e));
            soundEngine.musicPlaying = true;
        }
    }
    
    showScreen('intro-video');
    initIntroVideo();
}

// ============================================
// INTRO VIDEO PLAYER
// ============================================
function initIntroVideo() {
    const video = document.getElementById('intro-video');
    const overlay = document.getElementById('video-overlay');
    
    if (!video) return;
    
    // Reset video to beginning
    video.currentTime = 0;
    
    // Show overlay initially
    if (overlay) {
        overlay.classList.remove('hidden');
    }
    
    // Handle video events
    video.addEventListener('play', () => {
        if (overlay) overlay.classList.add('hidden');
    });
    
    video.addEventListener('pause', () => {
        if (video.currentTime > 0 && video.currentTime < video.duration) {
            // Paused mid-video - keep overlay hidden
        }
    });
    
    video.addEventListener('ended', () => {
        // Video finished - show continue prompt
        soundEngine.play('success');
    });
    
    // Check if video file exists
    video.addEventListener('error', () => {
        console.log('Video file not found or error loading');
        // Hide overlay and show message
        if (overlay) {
            overlay.innerHTML = `
                <div class="video-error">
                    <span style="font-size: 3rem;">🎬</span>
                    <p style="color: rgba(255,255,255,0.7); margin-top: 15px;">Video not available</p>
                    <p style="color: rgba(255,255,255,0.5); font-size: 0.9rem;">Click "Continue" to proceed</p>
                </div>
            `;
        }
    });
}

function playIntroVideo() {
    const video = document.getElementById('intro-video');
    const overlay = document.getElementById('video-overlay');
    
    if (video) {
        video.play().then(() => {
            if (overlay) overlay.classList.add('hidden');
        }).catch(err => {
            console.log('Video play error:', err);
        });
    }
}

function skipIntroVideo() {
    const video = document.getElementById('intro-video');
    
    // Pause and reset video
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
    
    soundEngine.play('click');
    showScreen('instructions');
}

function continueAfterVideo() {
    const video = document.getElementById('intro-video');
    
    // Pause video when continuing
    if (video) {
        video.pause();
    }
    
    soundEngine.play('success');
    showScreen('instructions');
}

// ============================================
// CHARACTER SELECTION
// ============================================
function showCharacterSelection() {
    showScreen('character');
    renderCharacterSelection();
}

function renderCharacterSelection() {
    const container = document.getElementById('character-selection-area');
    if (!container) return;
    
    let html = '';
    
    gameState.members.forEach((member, idx) => {
        const selected = gameState.characters[idx]?.id || null;
        
        html += `
            <div class="member-character-block">
                <div class="member-name-row">
                    <span class="member-number">${idx + 1}</span>
                    <span class="member-name-text">${member}</span>
                </div>
                <div class="character-options">
        `;
        
        CHARACTERS.forEach(char => {
            const isSelected = selected === char.id;
            const isUsed = gameState.characters.some((c, i) => i !== idx && c?.id === char.id);
            
            html += `
                <div class="character-option ${isSelected ? 'selected' : ''} ${isUsed ? 'disabled' : ''}"
                     onclick="selectCharacter(${idx}, '${char.id}')" ${isUsed ? 'data-disabled="true"' : ''}>
                    <img src="assets/images/${char.id}.png" 
                         class="char-image" 
                         alt="${char.name}"
                         onerror="this.classList.add('fallback-hidden'); this.nextElementSibling.classList.remove('has-image');">
                    <span class="char-emoji has-image">${char.emoji}</span>
                    <span class="char-name">${char.name}</span>
                    <span class="char-lives">❤️❤️</span>
                </div>
            `;
        });
        
        html += '</div></div>';
    });
    
    container.innerHTML = html;
    
    // Update lives display
    document.getElementById('total-lives-display').textContent = gameState.totalLifePowers;
    
    // Check if all selected
    const allSelected = gameState.members.every((_, i) => gameState.characters[i]?.id);
    document.getElementById('btn-start-adventure').disabled = !allSelected;
}

function selectCharacter(memberIdx, charId) {
    const el = event.target.closest('.character-option');
    if (el && el.dataset.disabled) return;
    
    const char = CHARACTERS.find(c => c.id === charId);
    
    gameState.characters[memberIdx] = {
        id: charId,
        name: gameState.members[memberIdx],
        charName: char.name,
        emoji: char.emoji,
        color: char.color,
        lives: 2
    };
    
    soundEngine.play('select');
    renderCharacterSelection();
}

function startAdventure() {
    if (!gameState.members.every((_, i) => gameState.characters[i]?.id)) {
        alert('All members must select a character!');
        return;
    }
    
    // Set currentLevel before updating dashboard
    gameState.currentLevel = 1;
    
    soundEngine.play('unlock');
    updateDashboard();
    startLevel(1);
}

// ============================================
// DASHBOARD
// ============================================
function updateDashboard() {
    const dashboard = document.getElementById('character-dashboard');
    if (!dashboard) return;
    
    // Calculate total lives from all characters
    const totalLives = gameState.characters.reduce((sum, c) => sum + (c?.lives || 0), 0);
    gameState.totalLifePowers = totalLives;
    
    let html = `
        <div class="dashboard-header">
            <span class="dashboard-team-name">🛡️ ${gameState.teamName}</span>
            <span class="dashboard-total-lives" id="total-lives-counter">❤️ ${totalLives}</span>
        </div>
        <div class="dashboard-characters">
    `;
    
    gameState.characters.forEach(c => {
        if (!c) return;
        const hearts = '❤️'.repeat(c.lives) + '🖤'.repeat(2 - c.lives);
        html += `
            <div class="dashboard-char ${c.lives === 0 ? 'depleted' : ''}">
                <span class="emoji">${c.emoji}</span>
                <span class="hearts">${hearts}</span>
            </div>
        `;
    });
    
    html += '</div>';
    dashboard.innerHTML = html;
    
    // Always show dashboard when game is active (not over)
    if (!gameState.gameOver && gameState.currentLevel > 0) {
        dashboard.classList.add('visible');
    } else {
        dashboard.classList.remove('visible');
    }
}

// ============================================
// LEVEL MANAGEMENT
// ============================================
function startLevel(level) {
    gameState.currentLevel = level;
    gameState.currentQuestion = 0;
    gameState.levelAids = { fiftyFifty: 1, framework: 1, hint: 1 };
    gameState.answers[level] = {};
    
    const screen = document.getElementById('level-screen');
    screen.className = 'screen active level-' + level;
    
    const config = GAME_CONFIG.levels[level];
    document.getElementById('level-badge').textContent = config.name;
    document.getElementById('level-badge').className = 'level-badge level-' + level;
    document.getElementById('level-title').textContent = config.title;
    
    updateAidsDisplay();
    updateDashboard();
    renderQuestion();
    showScreen('level');
}

function updateAidsDisplay() {
    const container = document.getElementById('aids-row');
    if (!container) return;
    
    container.innerHTML = `
        <button class="aid-btn ${gameState.levelAids.fiftyFifty > 0 ? '' : 'depleted'}" 
                onclick="useFiftyFifty()" ${gameState.levelAids.fiftyFifty > 0 ? '' : 'disabled'}>
            🎯 50/50
        </button>
        <button class="aid-btn ${gameState.levelAids.framework > 0 ? '' : 'depleted'}" 
                onclick="openFrameworkPanel()" ${gameState.levelAids.framework > 0 ? '' : 'disabled'}>
            📖 Frameworks
        </button>
        <button class="aid-btn ${gameState.levelAids.hint > 0 ? '' : 'depleted'}" 
                onclick="showHint()" ${gameState.levelAids.hint > 0 ? '' : 'disabled'}>
            💡 Hint
        </button>
    `;
}

// ============================================
// AIDS
// ============================================
function useFiftyFifty() {
    if (gameState.levelAids.fiftyFifty <= 0) return;
    
    const q = ALL_QUESTIONS[gameState.currentLevel][gameState.currentQuestion];
    if (!q.options || q.type === 'true_false') {
        alert('50/50 not available for this question type.');
        return;
    }
    
    const wrongOpts = q.options.filter(o => o.letter !== q.correct);
    const toRemove = wrongOpts.sort(() => Math.random() - 0.5).slice(0, 2);
    
    toRemove.forEach(opt => {
        const btn = document.querySelector(`.option-btn[data-letter="${opt.letter}"]`);
        if (btn) {
            btn.classList.add('eliminated');
        }
    });
    
    gameState.levelAids.fiftyFifty--;
    soundEngine.play('click');
    updateAidsDisplay();
}

function showHint() {
    if (gameState.levelAids.hint <= 0) return;
    
    document.getElementById('hint-title').textContent = `Level ${gameState.currentLevel} Hint`;
    document.getElementById('hint-text').textContent = LEVEL_HINTS[gameState.currentLevel];
    document.getElementById('hint-modal').classList.add('visible');
    
    gameState.levelAids.hint--;
    soundEngine.play('hint');
    updateAidsDisplay();
}

function closeHintModal() {
    document.getElementById('hint-modal').classList.remove('visible');
}

// ============================================
// QUESTION RENDERING
// ============================================
function renderQuestion() {
    const questions = ALL_QUESTIONS[gameState.currentLevel];
    const q = questions[gameState.currentQuestion];
    const container = document.getElementById('question-area');
    
    // Update counter and progress
    document.getElementById('question-counter').textContent = 
        `Question ${gameState.currentQuestion + 1} of ${questions.length}`;
    document.getElementById('progress-fill').style.width = 
        `${(gameState.currentQuestion / questions.length) * 100}%`;
    
    if (q.type === 'true_false') {
        renderTrueFalse(q, container);
    } else if (q.type === 'multiple_choice_pair') {
        renderMultiPair(q, container);
    } else {
        renderStandard(q, container);
    }
    
    restoreAnswer(q);
    updateNavButtons();
}

function renderStandard(q, container) {
    container.innerHTML = `
        <div class="question-id-badge">${q.id}</div>
        <h3 class="question-title">${q.title}</h3>
        <div class="scenario-box">
            <div class="scenario-label">📖 Scenario</div>
            <div class="scenario-text">${formatText(q.scenario)}</div>
        </div>
        <p class="question-prompt">${q.question}</p>
        <div class="options-container">
            ${q.options.map(opt => `
                <button class="option-btn" data-letter="${opt.letter}" onclick="selectOption('${opt.letter}')">
                    <span class="option-letter">${opt.letter}</span>
                    <span class="option-text">${opt.text}</span>
                </button>
            `).join('')}
        </div>
    `;
}

function renderTrueFalse(q, container) {
    container.innerHTML = `
        <div class="question-id-badge">${q.id}</div>
        <h3 class="question-title">${q.title}</h3>
        <div class="scenario-box">
            <div class="scenario-label">📋 Instructions</div>
            <div class="scenario-text">${q.instructions}</div>
        </div>
        <div class="tf-statements">
            ${q.statements.map((stmt, i) => `
                <div class="tf-statement" data-id="${stmt.id}">
                    <div class="tf-text">${String.fromCharCode(65 + i)}. ${stmt.text}</div>
                    <div class="tf-buttons">
                        <button class="tf-btn tf-true" onclick="selectTF('${stmt.id}', true)">TRUE</button>
                        <button class="tf-btn tf-false" onclick="selectTF('${stmt.id}', false)">FALSE</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderMultiPair(q, container) {
    container.innerHTML = `
        <div class="question-id-badge">${q.id}</div>
        <h3 class="question-title">${q.title}</h3>
        <div class="scenario-box">
            <div class="scenario-label">📖 Scenario</div>
            <div class="scenario-text">${formatText(q.scenario)}</div>
        </div>
        ${q.questions.map((sq, i) => `
            <div class="sub-question" data-idx="${i}">
                <p class="question-prompt">Part ${i + 1}: ${sq.text}</p>
                <div class="options-container">
                    ${sq.options.map(opt => `
                        <button class="option-btn" data-letter="${opt.letter}" data-sub="${i}" 
                                onclick="selectSubOption(${i}, '${opt.letter}')">
                            <span class="option-letter">${opt.letter}</span>
                            <span class="option-text">${opt.text}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `).join('')}
    `;
}

function formatText(text) {
    return text.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
}

function restoreAnswer(q) {
    const ans = gameState.answers[gameState.currentLevel][q.id];
    if (!ans) return;
    
    if (q.type === 'true_false') {
        Object.entries(ans).forEach(([id, val]) => {
            const btn = document.querySelector(`.tf-statement[data-id="${id}"] .tf-${val ? 'true' : 'false'}`);
            if (btn) btn.classList.add('selected');
        });
    } else if (q.type === 'multiple_choice_pair') {
        Object.entries(ans).forEach(([idx, letter]) => {
            const btn = document.querySelector(`.sub-question[data-idx="${idx}"] .option-btn[data-letter="${letter}"]`);
            if (btn) btn.classList.add('selected');
        });
    } else {
        const btn = document.querySelector(`.option-btn[data-letter="${ans}"]`);
        if (btn) btn.classList.add('selected');
    }
}

// ============================================
// ANSWER SELECTION (No immediate feedback)
// ============================================
function selectOption(letter) {
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    document.querySelector(`.option-btn[data-letter="${letter}"]`).classList.add('selected');
    soundEngine.play('click');
    
    const q = ALL_QUESTIONS[gameState.currentLevel][gameState.currentQuestion];
    gameState.answers[gameState.currentLevel][q.id] = letter;
    updateNavButtons();
}

function selectSubOption(idx, letter) {
    const subQ = document.querySelector(`.sub-question[data-idx="${idx}"]`);
    subQ.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    subQ.querySelector(`.option-btn[data-letter="${letter}"]`).classList.add('selected');
    soundEngine.play('click');
    
    const q = ALL_QUESTIONS[gameState.currentLevel][gameState.currentQuestion];
    if (!gameState.answers[gameState.currentLevel][q.id]) {
        gameState.answers[gameState.currentLevel][q.id] = {};
    }
    gameState.answers[gameState.currentLevel][q.id][idx] = letter;
    updateNavButtons();
}

function selectTF(stmtId, value) {
    const stmt = document.querySelector(`.tf-statement[data-id="${stmtId}"]`);
    stmt.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('selected'));
    stmt.querySelector(`.tf-${value ? 'true' : 'false'}`).classList.add('selected');
    soundEngine.play('click');
    
    const q = ALL_QUESTIONS[gameState.currentLevel][gameState.currentQuestion];
    if (!gameState.answers[gameState.currentLevel][q.id]) {
        gameState.answers[gameState.currentLevel][q.id] = {};
    }
    gameState.answers[gameState.currentLevel][q.id][stmtId] = value;
    updateNavButtons();
}

// ============================================
// NAVIGATION
// ============================================
function updateNavButtons() {
    const questions = ALL_QUESTIONS[gameState.currentLevel];
    const q = questions[gameState.currentQuestion];
    const ans = gameState.answers[gameState.currentLevel][q.id];
    
    let hasAnswer = false;
    if (q.type === 'true_false') {
        hasAnswer = ans && Object.keys(ans).length === q.statements.length;
    } else if (q.type === 'multiple_choice_pair') {
        hasAnswer = ans && Object.keys(ans).length === q.questions.length;
    } else {
        hasAnswer = !!ans;
    }
    
    const isFirst = gameState.currentQuestion === 0;
    const isLast = gameState.currentQuestion === questions.length - 1;
    
    document.getElementById('btn-prev').style.visibility = isFirst ? 'hidden' : 'visible';
    document.getElementById('btn-next').style.display = isLast ? 'none' : 'inline-flex';
    document.getElementById('btn-next').disabled = !hasAnswer;
    document.getElementById('btn-submit').style.display = isLast ? 'inline-flex' : 'none';
    document.getElementById('btn-submit').disabled = !hasAnswer;
}

function prevQuestion() {
    if (gameState.currentQuestion > 0) {
        gameState.currentQuestion--;
        renderQuestion();
    }
}

function nextQuestion() {
    const questions = ALL_QUESTIONS[gameState.currentLevel];
    if (gameState.currentQuestion < questions.length - 1) {
        gameState.currentQuestion++;
        renderQuestion();
    }
}

function submitLevel() {
    // Check all answered
    const questions = ALL_QUESTIONS[gameState.currentLevel];
    const allAnswered = questions.every(q => {
        const ans = gameState.answers[gameState.currentLevel][q.id];
        if (!ans) return false;
        if (q.type === 'true_false') return Object.keys(ans).length === q.statements.length;
        if (q.type === 'multiple_choice_pair') return Object.keys(ans).length === q.questions.length;
        return true;
    });
    
    if (!allAnswered) {
        alert('Please answer all questions!');
        return;
    }
    
    gameState.levelAttempts[gameState.currentLevel] = (gameState.levelAttempts[gameState.currentLevel] || 0) + 1;
    showPasscodeScreen();
}

// ============================================
// PASSCODE SCREEN
// ============================================
function showPasscodeScreen() {
    showScreen('passcode');
    
    // Keep dashboard visible
    document.getElementById('character-dashboard').classList.add('visible');
    
    const questions = ALL_QUESTIONS[gameState.currentLevel];
    let html = '';
    
    questions.forEach(q => {
        const ans = gameState.answers[gameState.currentLevel][q.id];
        let display = '';
        
        if (q.type === 'true_false') {
            display = Object.entries(ans).map(([id, val]) => {
                const idx = q.statements.findIndex(s => s.id === id);
                return `${String.fromCharCode(65 + idx)}:${val ? 'T' : 'F'}`;
            }).join(' ');
        } else if (q.type === 'multiple_choice_pair') {
            display = Object.entries(ans).map(([idx, letter]) => 
                `P${parseInt(idx) + 1}:${letter}`
            ).join(' ');
        } else {
            display = ans;
        }
        
        html += `
            <div class="answer-row">
                <span class="answer-qid">${q.id}</span>
                <span class="answer-title">${q.title}</span>
                <span class="answer-value">${display}</span>
            </div>
        `;
    });
    
    document.getElementById('answers-summary').innerHTML = html;
    document.getElementById('passcode-input').value = '';
    document.getElementById('passcode-error').style.display = 'none';
}

function goBackToLevel() {
    showScreen('level');
    gameState.currentQuestion = 0;
    renderQuestion();
}

function checkPasscode() {
    const code = document.getElementById('passcode-input').value.trim();
    const validCodes = GAME_CONFIG.passcodes[gameState.currentLevel];
    
    if (!validCodes.includes(code)) {
        soundEngine.play('error');
        document.getElementById('passcode-error').innerHTML = `
            <span class="error-icon">⚠️</span>
            <p>Incorrect passcode! Check with your facilitator.</p>
        `;
        document.getElementById('passcode-error').style.display = 'block';
        document.getElementById('passcode-input').value = '';
        return;
    }
    
    // Check if all answers correct
    const allCorrect = checkAllAnswersCorrect();
    
    if (allCorrect) {
        soundEngine.play('success');
        showFeedbackScreen(true);
    } else {
        loseLifePower();
        soundEngine.play('error');
        
        // Show remaining lives in error message
        const remainingLives = gameState.totalLifePowers;
        const livesDisplay = remainingLives > 0 
            ? `<p style="font-size: 1.5rem; margin: 0.5rem 0;">❤️ ${remainingLives} lives remaining</p>`
            : `<p style="font-size: 1.5rem; margin: 0.5rem 0; color: #f87171;">💀 No lives remaining!</p>`;
        
        document.getElementById('passcode-error').innerHTML = `
            <span class="error-icon">❌</span>
            <p><strong>Some answers are incorrect!</strong></p>
            <p>You lost 1 Life Power!</p>
            ${livesDisplay}
            ${remainingLives > 0 ? '<button class="btn btn-secondary" onclick="goBackToLevel()">← Review & Try Again</button>' : ''}
        `;
        document.getElementById('passcode-error').style.display = 'block';
        document.getElementById('passcode-input').value = '';
    }
}

function checkAllAnswersCorrect() {
    const questions = ALL_QUESTIONS[gameState.currentLevel];
    
    return questions.every(q => {
        const ans = gameState.answers[gameState.currentLevel][q.id];
        
        if (q.type === 'true_false') {
            return q.statements.every(stmt => ans[stmt.id] === stmt.correct);
        } else if (q.type === 'multiple_choice_pair') {
            return q.questions.every((sq, i) => ans[i] === sq.correct);
        } else {
            return ans === q.correct;
        }
    });
}

// ============================================
// LIFE POWER SYSTEM
// ============================================
function loseLifePower() {
    // Find a character with remaining lives
    const charWithLives = gameState.characters.find(c => c && c.lives > 0);
    
    if (charWithLives) {
        charWithLives.lives--;
        
        // Recalculate total lives from all characters
        gameState.totalLifePowers = gameState.characters.reduce((sum, c) => sum + (c?.lives || 0), 0);
        
        console.log('Life lost! Remaining:', gameState.totalLifePowers);
        
        soundEngine.play('lifeLost');
        
        // Update dashboard with visual shake effect
        updateDashboard();
        
        // Add shake animation to dashboard
        const dashboard = document.getElementById('character-dashboard');
        if (dashboard) {
            dashboard.classList.add('shake');
            setTimeout(() => dashboard.classList.remove('shake'), 500);
        }
        
        // Check for game over
        if (gameState.totalLifePowers <= 0) {
            setTimeout(() => gameOver(), 1500);
        }
    }
}

function gameOver() {
    gameState.gameOver = true;
    soundEngine.play('gameOver');
    
    document.getElementById('gameover-level').textContent = gameState.currentLevel;
    document.getElementById('gameover-attempts').textContent = 
        Object.values(gameState.levelAttempts).reduce((a, b) => a + b, 0);
    
    document.getElementById('character-dashboard').classList.remove('visible');
    showScreen('gameover');
}

// ============================================
// FEEDBACK SCREEN
// ============================================
function showFeedbackScreen() {
    showScreen('feedback');
    
    // MASSIVE CELEBRATION when level is completed!
    triggerMassiveCelebration();
    
    const questions = ALL_QUESTIONS[gameState.currentLevel];
    
    let html = `
        <div class="feedback-header">
            <h2>✅ Level ${gameState.currentLevel} Complete!</h2>
            <p>Review your answers:</p>
        </div>
        <div class="feedback-list">
    `;
    
    questions.forEach(q => {
        const ans = gameState.answers[gameState.currentLevel][q.id];
        let correct = '';
        
        if (q.type === 'true_false') {
            correct = q.statements.map((s, i) => `${String.fromCharCode(65 + i)}:${s.correct ? 'T' : 'F'}`).join(' ');
        } else if (q.type === 'multiple_choice_pair') {
            correct = q.questions.map((sq, i) => `Part ${i + 1}: ${sq.correct}`).join(', ');
        } else {
            correct = q.correct;
        }
        
        html += `
            <div class="feedback-item correct">
                <div class="feedback-item-header">
                    <span class="feedback-item-icon">✅</span>
                    <span class="feedback-item-title">${q.id}: ${q.title}</span>
                </div>
                <div class="feedback-item-explanation">
                    <strong>Answer:</strong> ${correct}<br>
                    ${q.explanation || ''}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    
    if (gameState.currentLevel < 5) {
        html += `
            <button class="btn btn-primary btn-large feedback-continue-btn" onclick="proceedToNextLevel()">
                Continue to Level ${gameState.currentLevel + 1} →
            </button>
        `;
    } else {
        html += `
            <button class="btn btn-primary btn-large feedback-continue-btn" onclick="showVictory()">
                🏆 Claim Victory!
            </button>
        `;
    }
    
    document.getElementById('feedback-content').innerHTML = html;
}

function proceedToNextLevel() {
    gameState.currentLevel++;
    startLevel(gameState.currentLevel);
}

// ============================================
// VICTORY
// ============================================
function showVictory() {
    const totalTime = Math.floor((Date.now() - gameState.startTime) / 1000);
    const mins = Math.floor(totalTime / 60);
    const secs = totalTime % 60;
    
    // MASSIVE CELEBRATION for victory!
    soundEngine.play('victory');
    triggerMassiveCelebration();
    setTimeout(() => triggerMassiveCelebration(), 2500);
    
    document.getElementById('victory-team-name').textContent = gameState.teamName;
    document.getElementById('victory-time').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    document.getElementById('victory-lives').textContent = gameState.totalLifePowers;
    
    let charsHTML = '';
    gameState.characters.forEach(c => {
        const hearts = '❤️'.repeat(c.lives) + '🖤'.repeat(2 - c.lives);
        charsHTML += `
            <div class="victory-char">
                <span class="emoji">${c.emoji}</span>
                <span class="name">${c.name}</span>
                <span class="hearts">${hearts}</span>
            </div>
        `;
    });
    document.getElementById('victory-characters').innerHTML = charsHTML;
    
    document.getElementById('character-dashboard').classList.remove('visible');
    showScreen('victory');
    
    // Save to leaderboard
    saveToLeaderboard(totalTime);
    
    // Remove from active teams
    removeFromActiveTeams();
}

function saveToLeaderboard(totalTime) {
    let lb = JSON.parse(localStorage.getItem('frameworkFortressLeaderboard') || '[]');
    lb.push({
        teamName: gameState.teamName,
        members: gameState.members,
        totalTime,
        livesRemaining: gameState.totalLifePowers,
        timestamp: Date.now(),
        completedAt: new Date().toISOString()
    });
    lb.sort((a, b) => a.totalTime - b.totalTime);
    localStorage.setItem('frameworkFortressLeaderboard', JSON.stringify(lb));
}

function removeFromActiveTeams() {
    const activeTeams = JSON.parse(localStorage.getItem('frameworkFortressActiveTeams') || '[]');
    const filtered = activeTeams.filter(t => t.teamName !== gameState.teamName);
    localStorage.setItem('frameworkFortressActiveTeams', JSON.stringify(filtered));
}

// ============================================
// LEADERBOARD
// ============================================
function viewLeaderboard() {
    const lb = JSON.parse(localStorage.getItem('frameworkFortressLeaderboard') || '[]');
    const body = document.getElementById('leaderboard-body');
    
    if (lb.length === 0) {
        body.innerHTML = '<p class="leaderboard-empty">No teams have completed the fortress yet!</p>';
    } else {
        body.innerHTML = `
            <table class="leaderboard-table">
                <thead>
                    <tr><th>Rank</th><th>Team</th><th>Time</th><th>Lives</th></tr>
                </thead>
                <tbody>
                    ${lb.slice(0, 10).map((entry, i) => {
                        const mins = Math.floor(entry.totalTime / 60);
                        const secs = entry.totalTime % 60;
                        let rank = '';
                        if (i === 0) {
                            rank = '<img src="assets/images/crown-gold.png" class="rank-crown" alt="1st" onerror="this.outerHTML=\'🥇\'">';
                        } else if (i === 1) {
                            rank = '<img src="assets/images/crown-silver.png" class="rank-crown" alt="2nd" onerror="this.outerHTML=\'🥈\'">';
                        } else if (i === 2) {
                            rank = '<img src="assets/images/crown-bronze.png" class="rank-crown" alt="3rd" onerror="this.outerHTML=\'🥉\'">';
                        } else {
                            rank = `<span class="rank-text">${i + 1}</span>`;
                        }
                        return `
                            <tr class="${i < 3 ? 'top-three' : ''}">
                                <td>${rank}</td>
                                <td>${entry.teamName}</td>
                                <td>${mins}:${secs.toString().padStart(2, '0')}</td>
                                <td>❤️${entry.livesRemaining}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }
    
    document.getElementById('leaderboard-modal').classList.add('visible');
}

function closeLeaderboard() {
    document.getElementById('leaderboard-modal').classList.remove('visible');
}

// ============================================
// FIREWORKS & CONFETTI CELEBRATION
// ============================================
function triggerFireworks() {
    soundEngine.play('fireworks');
    const container = document.getElementById('fireworks-container');
    
    // More fireworks!
    for (let i = 0; i < 25; i++) {
        setTimeout(() => createFirework(container), i * 100);
    }
}

function triggerMassiveCelebration() {
    // HUGE celebration with fireworks and confetti explosion!
    soundEngine.play('victory');
    soundEngine.play('fireworks');
    
    const fwContainer = document.getElementById('fireworks-container');
    const confettiContainer = document.getElementById('confetti-container');
    
    // Clear any existing
    fwContainer.innerHTML = '';
    confettiContainer.innerHTML = '';
    
    // Add celebration overlay
    document.body.classList.add('celebration-active');
    
    // WAVE 1: Initial burst - 30 fireworks
    for (let i = 0; i < 30; i++) {
        setTimeout(() => createFirework(fwContainer), i * 60);
    }
    
    // WAVE 2: Second burst - 25 more
    setTimeout(() => {
        soundEngine.play('fireworks');
        for (let i = 0; i < 25; i++) {
            setTimeout(() => createFirework(fwContainer), i * 70);
        }
    }, 2000);
    
    // WAVE 3: Grand finale - 35 fireworks
    setTimeout(() => {
        soundEngine.play('fireworks');
        for (let i = 0; i < 35; i++) {
            setTimeout(() => createFirework(fwContainer), i * 50);
        }
    }, 4000);
    
    // MASSIVE confetti rain - 300 pieces
    for (let i = 0; i < 300; i++) {
        setTimeout(() => createConfetti(confettiContainer), i * 20);
    }
    
    // More confetti waves
    setTimeout(() => {
        for (let i = 0; i < 200; i++) {
            setTimeout(() => createConfetti(confettiContainer), i * 25);
        }
    }, 3000);
    
    // Screen flash effects
    document.body.classList.add('celebration-flash');
    setTimeout(() => document.body.classList.remove('celebration-flash'), 300);
    
    setTimeout(() => {
        document.body.classList.add('celebration-flash');
        setTimeout(() => document.body.classList.remove('celebration-flash'), 200);
    }, 1500);
    
    // Remove celebration class after 8 seconds
    setTimeout(() => {
        document.body.classList.remove('celebration-active');
    }, 8000);
}

function createFirework(container) {
    const fw = document.createElement('div');
    fw.className = 'firework';
    fw.style.left = (5 + Math.random() * 90) + '%';
    fw.style.top = (5 + Math.random() * 70) + '%';
    
    const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#ff9ff3', '#54a0ff', '#5f27cd', '#ff6348', '#2ed573', '#ffa502', '#ff4757', '#7bed9f', '#70a1ff', '#eccc68'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // MORE particles per firework for bigger explosion
    const particleCount = 20 + Math.floor(Math.random() * 12);
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 8px ${color}, 0 0 15px ${color}`;
        particle.style.transform = `rotate(${i * (360/particleCount)}deg) translateY(-${40 + Math.random() * 50}px)`;
        fw.appendChild(particle);
    }
    
    container.appendChild(fw);
    setTimeout(() => fw.remove(), 2000);
}

function createConfetti(container) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd700', '#ff9ff3', '#54a0ff', '#5f27cd', '#2ed573', '#ffa502', '#ff4757', '#1e90ff', '#7bed9f', '#eccc68', '#ff6348', '#70a1ff'];
    const shapes = ['square', 'circle', 'rectangle', 'diamond'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.backgroundColor = color;
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDuration = (2.5 + Math.random() * 4) + 's';
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    
    // Bigger confetti
    const size = 8 + Math.random() * 12;
    confetti.style.width = size + 'px';
    confetti.style.height = (shape === 'rectangle' ? size * 2 : size) + 'px';
    
    if (shape === 'circle') {
        confetti.style.borderRadius = '50%';
    } else if (shape === 'diamond') {
        confetti.style.transform = 'rotate(45deg)';
    }
    
    container.appendChild(confetti);
    setTimeout(() => confetti.remove(), 7000);
}

// ============================================
// CERTIFICATE
// ============================================
function downloadCertificate() {
    const totalTime = Math.floor((Date.now() - gameState.startTime) / 1000);
    const mins = Math.floor(totalTime / 60);
    const secs = totalTime % 60;
    const members = gameState.characters.map(c => c.name).join(', ');
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    const html = `<!DOCTYPE html>
<html><head><title>Certificate - ${gameState.teamName}</title>
<style>
body { font-family: Georgia, serif; margin: 0; padding: 40px; background: linear-gradient(135deg, #1e1b4b, #312e81); min-height: 100vh; }
.cert { background: linear-gradient(135deg, #fef3c7, #fffbeb); border: 8px double #b45309; border-radius: 20px; padding: 50px; max-width: 750px; margin: 0 auto; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
.crown { font-size: 70px; }
h1 { font-size: 42px; color: #7c2d12; margin: 15px 0; text-transform: uppercase; letter-spacing: 3px; }
h2 { font-size: 28px; color: #92400e; margin: 10px 0; }
.team { font-size: 36px; color: #1e1b4b; font-weight: bold; margin: 25px 0; padding: 15px; border-top: 2px solid #b45309; border-bottom: 2px solid #b45309; }
.members { font-size: 18px; color: #44403c; margin: 15px 0; }
.stats { display: flex; justify-content: center; gap: 40px; margin: 25px 0; }
.stat { text-align: center; }
.stat-val { font-size: 32px; font-weight: bold; color: #7c2d12; }
.stat-lbl { font-size: 13px; color: #78716c; text-transform: uppercase; }
.date { font-size: 16px; color: #78716c; margin-top: 30px; }
.seal { font-size: 50px; margin-top: 15px; }
</style></head><body>
<div class="cert">
<div class="crown">👑</div>
<h1>Certificate of Achievement</h1>
<h2>Framework Fortress Master</h2>
<div class="team">${gameState.teamName}</div>
<p class="members"><strong>Warriors:</strong> ${members}</p>
<p>has successfully conquered all Five Chambers<br>and demonstrated mastery of pedagogical frameworks</p>
<div class="stats">
<div class="stat"><div class="stat-val">${mins}:${secs.toString().padStart(2, '0')}</div><div class="stat-lbl">Time</div></div>
<div class="stat"><div class="stat-val">${gameState.totalLifePowers}</div><div class="stat-lbl">Lives Left</div></div>
<div class="stat"><div class="stat-val">5/5</div><div class="stat-lbl">Chambers</div></div>
</div>
<p class="date">Awarded on ${date}</p>
<div class="seal">🏆</div>
</div></body></html>`;
    
    const blob = new Blob([html], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Framework_Fortress_Certificate_${gameState.teamName.replace(/\s+/g, '_')}.html`;
    a.click();
}

// ============================================
// RESTART
// ============================================
function restartGame() {
    localStorage.removeItem('frameworkFortressStateV4');
    location.reload();
}

// ============================================
// ADMIN PANEL (Fortress Keeper)
// ============================================
function showAdminLogin() {
    document.getElementById('admin-login-modal').classList.add('visible');
    document.getElementById('admin-username').value = '';
    document.getElementById('admin-password').value = '';
    document.getElementById('admin-login-error').style.display = 'none';
}

function closeAdminLogin() {
    document.getElementById('admin-login-modal').classList.remove('visible');
}

function adminLogin() {
    const username = document.getElementById('admin-username').value.trim();
    const password = document.getElementById('admin-password').value;
    
    if (username === _fk.u && password === _fk.p) {
        gameState.isAdmin = true;
        closeAdminLogin();
        showAdminPanel();
        soundEngine.play('unlock');
    } else {
        document.getElementById('admin-login-error').textContent = '❌ Invalid credentials';
        document.getElementById('admin-login-error').style.display = 'block';
        soundEngine.play('error');
    }
}

function showAdminPanel() {
    showScreen('admin-panel');
    document.getElementById('character-dashboard').classList.remove('visible');
    loadAdminAnalytics();
    loadAdminLeaderboard();
    loadTeamProgress();
}

function logoutAdmin() {
    gameState.isAdmin = false;
    showScreen('home');
}

function loadAdminAnalytics() {
    const leaderboard = JSON.parse(localStorage.getItem('frameworkFortressLeaderboard') || '[]');
    const activeTeams = JSON.parse(localStorage.getItem('frameworkFortressActiveTeams') || '[]');
    
    const totalCompletions = leaderboard.length;
    const avgTime = totalCompletions > 0 
        ? Math.floor(leaderboard.reduce((sum, e) => sum + e.totalTime, 0) / totalCompletions)
        : 0;
    const avgMins = Math.floor(avgTime / 60);
    const avgSecs = avgTime % 60;
    const avgLives = totalCompletions > 0
        ? (leaderboard.reduce((sum, e) => sum + e.livesRemaining, 0) / totalCompletions).toFixed(1)
        : 0;
    
    document.getElementById('analytics-grid').innerHTML = `
        <div class="analytics-card">
            <div class="analytics-value">${totalCompletions}</div>
            <div class="analytics-label">Teams Completed</div>
        </div>
        <div class="analytics-card">
            <div class="analytics-value">${avgMins}:${avgSecs.toString().padStart(2, '0')}</div>
            <div class="analytics-label">Average Time</div>
        </div>
        <div class="analytics-card">
            <div class="analytics-value">${avgLives}</div>
            <div class="analytics-label">Avg Lives Remaining</div>
        </div>
        <div class="analytics-card">
            <div class="analytics-value">${activeTeams.length}</div>
            <div class="analytics-label">Active Sessions</div>
        </div>
    `;
}

function loadTeamProgress() {
    const activeTeams = JSON.parse(localStorage.getItem('frameworkFortressActiveTeams') || '[]');
    
    if (activeTeams.length === 0) {
        document.getElementById('team-progress-table').innerHTML = `
            <p class="no-data">No active teams currently playing.</p>
        `;
        return;
    }
    
    let html = `
        <table class="admin-table">
            <thead>
                <tr><th>Team</th><th>Level</th><th>Lives</th><th>Started</th></tr>
            </thead>
            <tbody>
    `;
    
    activeTeams.forEach(team => {
        const startTime = new Date(team.startTime).toLocaleTimeString();
        html += `
            <tr>
                <td>${team.teamName}</td>
                <td>Level ${team.currentLevel}</td>
                <td>❤️ ${team.livesRemaining}</td>
                <td>${startTime}</td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    document.getElementById('team-progress-table').innerHTML = html;
}

function loadAdminLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('frameworkFortressLeaderboard') || '[]');
    
    if (leaderboard.length === 0) {
        document.getElementById('admin-leaderboard').innerHTML = `
            <p class="no-data">No teams have completed the game yet.</p>
        `;
        return;
    }
    
    let html = `
        <table class="admin-table">
            <thead>
                <tr><th>Rank</th><th>Team</th><th>Time</th><th>Lives</th><th>Date</th><th>Action</th></tr>
            </thead>
            <tbody>
    `;
    
    leaderboard.forEach((entry, i) => {
        const mins = Math.floor(entry.totalTime / 60);
        const secs = entry.totalTime % 60;
        const date = new Date(entry.timestamp).toLocaleDateString();
        html += `
            <tr>
                <td>${i + 1}</td>
                <td>${entry.teamName}</td>
                <td>${mins}:${secs.toString().padStart(2, '0')}</td>
                <td>❤️ ${entry.livesRemaining}</td>
                <td>${date}</td>
                <td><button class="btn btn-small btn-danger" onclick="deleteEntry(${i})">🗑️</button></td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    document.getElementById('admin-leaderboard').innerHTML = html;
}

function deleteEntry(index) {
    if (!confirm('Delete this entry?')) return;
    
    const leaderboard = JSON.parse(localStorage.getItem('frameworkFortressLeaderboard') || '[]');
    leaderboard.splice(index, 1);
    localStorage.setItem('frameworkFortressLeaderboard', JSON.stringify(leaderboard));
    loadAdminLeaderboard();
    loadAdminAnalytics();
    soundEngine.play('click');
}

function confirmResetLeaderboard() {
    document.getElementById('reset-confirm').style.display = 'block';
}

function cancelReset() {
    document.getElementById('reset-confirm').style.display = 'none';
}

function resetLeaderboard() {
    localStorage.removeItem('frameworkFortressLeaderboard');
    localStorage.removeItem('frameworkFortressActiveTeams');
    document.getElementById('reset-confirm').style.display = 'none';
    loadAdminLeaderboard();
    loadAdminAnalytics();
    loadTeamProgress();
    soundEngine.play('success');
}

function exportScores() {
    const leaderboard = JSON.parse(localStorage.getItem('frameworkFortressLeaderboard') || '[]');
    
    if (leaderboard.length === 0) {
        alert('No data to export!');
        return;
    }
    
    // Create CSV content
    let csv = 'Rank,Team Name,Members,Time (seconds),Time (formatted),Lives Remaining,Date,Timestamp\n';
    
    leaderboard.forEach((entry, i) => {
        const mins = Math.floor(entry.totalTime / 60);
        const secs = entry.totalTime % 60;
        const timeFormatted = `${mins}:${secs.toString().padStart(2, '0')}`;
        const date = new Date(entry.timestamp).toLocaleDateString();
        const members = entry.members ? entry.members.join('; ') : 'N/A';
        
        csv += `${i + 1},"${entry.teamName}","${members}",${entry.totalTime},"${timeFormatted}",${entry.livesRemaining},"${date}","${entry.timestamp}"\n`;
    });
    
    // Download CSV
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Framework_Fortress_Scores_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    
    soundEngine.play('success');
}

// Track active teams (for admin analytics)
function trackActiveTeam() {
    const activeTeams = JSON.parse(localStorage.getItem('frameworkFortressActiveTeams') || '[]');
    
    // Remove any existing entry for this team
    const filtered = activeTeams.filter(t => t.teamName !== gameState.teamName);
    
    // Add current team
    filtered.push({
        teamName: gameState.teamName,
        currentLevel: gameState.currentLevel,
        livesRemaining: gameState.totalLifePowers,
        startTime: gameState.startTime
    });
    
    localStorage.setItem('frameworkFortressActiveTeams', JSON.stringify(filtered));
}

// Update team tracking when level changes
const originalStartLevel = startLevel;
startLevel = function(level) {
    originalStartLevel(level);
    if (gameState.teamName) {
        trackActiveTeam();
    }
};

// ============================================
// VOLUME SLIDER CONTROL
// ============================================
function adjustVolume(value) {
    const vol = parseInt(value);
    soundEngine.setVolume(vol);
    
    document.getElementById('volume-value').textContent = vol + '%';
    
    // Update slider visual fill
    const slider = document.getElementById('volume-slider');
    slider.style.setProperty('--value', vol + '%');
    
    // Update icon based on volume level
    const icon = document.getElementById('volume-icon');
    if (vol === 0) {
        icon.textContent = '🔇';
    } else if (vol < 30) {
        icon.textContent = '🔈';
    } else if (vol < 70) {
        icon.textContent = '🔉';
    } else {
        icon.textContent = '🔊';
    }
}

// Initialize volume slider visual on page load
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('volume-slider');
    if (slider) {
        slider.style.setProperty('--value', slider.value + '%');
    }
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', function(e) {
    // Enter key on passcode input
    if (e.key === 'Enter' && document.activeElement.id === 'passcode-input') {
        checkPasscode();
    }
    
    // Enter key on admin login
    if (e.key === 'Enter' && document.activeElement.id === 'admin-password') {
        adminLogin();
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        closeFrameworkPanel();
        closeHintModal();
        closeLeaderboard();
        closeAdminLogin();
    }
});
