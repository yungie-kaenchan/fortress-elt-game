/**
 * THE FRAMEWORK FORTRESS: Escape the Five Chambers
 * Game Questions Data
 * 
 * Each level has questions with:
 * - id: Unique identifier
 * - title: Display title
 * - scenario: The situation/context
 * - question: What teams must answer
 * - options: Array of answer choices
 * - correct: The correct answer letter(s)
 * - audioFile: Path to audio narration (optional)
 */

const GAME_CONFIG = {
    title: "The Framework Fortress",
    subtitle: "Escape the Five Chambers of Teaching Mastery",
    
    // Valid passcodes for each level (any of 5 codes works)
    // Facilitator distributes different codes to different teams
    passcodes: {
        1: ['73921', '84562', '19847', '56283', '30974'],
        2: ['62841', '95173', '40826', '73519', '28460'],
        3: ['81594', '37260', '59481', '14723', '68035'],
        4: ['45829', '71346', '28903', '64157', '93028'],
        5: ['92746', '38519', '67402', '15683', '84927']
    },
    
    // Level metadata
    levels: {
        1: {
            name: "Chamber 1",
            title: "Framework Identification",
            subtitle: "Which framework applies?",
            color: "#10b981",
            icon: "🟢",
            description: "Identify which pedagogical framework is most relevant to diagnose each scenario."
        },
        2: {
            name: "Chamber 2", 
            title: "Framework Classification",
            subtitle: "Classify within the framework",
            color: "#3b82f6",
            icon: "🔵",
            description: "Apply your knowledge to classify activities within specific frameworks."
        },
        3: {
            name: "Chamber 3",
            title: "Diagnosis",
            subtitle: "What's wrong? Use framework language",
            color: "#f59e0b",
            icon: "🟡",
            description: "Diagnose problems using proper framework terminology."
        },
        4: {
            name: "Chamber 4",
            title: "Prescription",
            subtitle: "Prescribe using 2+ frameworks",
            color: "#f97316",
            icon: "🟠",
            description: "Design solutions that integrate multiple frameworks."
        },
        5: {
            name: "Chamber 5",
            title: "Integration Challenge",
            subtitle: "TRUE/FALSE & Multiple Choice",
            color: "#ef4444",
            icon: "🔴",
            description: "Demonstrate mastery with complex integration questions."
        }
    }
};

// ============================================
// LEVEL 1: FRAMEWORK IDENTIFICATION
// Multiple Choice - Which framework?
// ============================================
const LEVEL_1_QUESTIONS = [
    {
        id: "L1-Q1",
        title: "The Video Lecture",
        scenario: `Teacher Ping records herself explaining grammar rules for 30 minutes. Students watch passively at home and take notes. She uploads the video to Google Classroom. 

The next day in class, she's frustrated: "Why don't you remember anything from the video? I explained everything clearly!"

Students look confused. Some admit they watched at 2x speed. Others fell asleep halfway through.`,
        question: "Which framework is MOST relevant to diagnose this problem?",
        options: [
            { letter: "A", text: "Bloom's Digital Taxonomy — focusing on cognitive levels of learning activities" },
            { letter: "B", text: "UDL (Universal Design for Learning) — focusing on engagement, representation, and expression" },
            { letter: "C", text: "4Ds of AI Fluency — focusing on how teachers use AI tools effectively" },
            { letter: "D", text: "PICRAT — focusing on student roles and how technology changes teaching practice" }
        ],
        correct: "D",
        explanation: "PICRAT diagnoses this as PR (Passive-Replaces): Students are passive receivers, and the video merely replaces the teacher talking — no transformation of practice.",
        audioFile: "assets/audio/L1-Q1.mp3"
    },
    {
        id: "L1-Q2",
        title: "The Prompt Disaster",
        scenario: `Teacher Som is excited to use ChatGPT for the first time. She types:

"Make a lesson."

ChatGPT responds with a detailed lesson plan about photosynthesis for university biology students.

Teacher Som stares at the screen, confused. She teaches Grade 3 English in Bangkok. She wanted a lesson about greetings.

"AI is useless!" she concludes, closing the browser.`,
        question: "Which framework is MOST relevant to diagnose this problem?",
        options: [
            { letter: "A", text: "Bloom's Digital Taxonomy — the activity didn't reach higher cognitive levels" },
            { letter: "B", text: "UDL — the AI output wasn't accessible to all learners" },
            { letter: "C", text: "4Ds of AI Fluency — the teacher's prompt lacked essential elements" },
            { letter: "D", text: "PICRAT — the technology didn't transform teaching practice" }
        ],
        correct: "C",
        explanation: "4Ds diagnoses a failure in D2 (Description): The prompt had no context, learning objective, student level, or topic specification. Good AI fluency requires detailed, well-crafted prompts.",
        audioFile: "assets/audio/L1-Q2.mp3"
    },
    {
        id: "L1-Q3",
        title: "The Silent Struggle",
        scenario: `In Teacher Nat's English class, all reading materials are long blocks of text in 10-point font. No images. No audio options. No translations.

Nong Ploy has dyslexia — she stares at the page, letters swimming. She fails every reading test.

Nong Bank is a strong auditory learner — he understands everything when he hears it, but struggles to read. He also fails.

Teacher Nat sighs: "These students just need to try harder. I give everyone the same materials — that's fair, right?"`,
        question: "Which framework is MOST relevant to diagnose this problem?",
        options: [
            { letter: "A", text: "Bloom's Digital Taxonomy — activities are at low cognitive levels" },
            { letter: "B", text: "UDL (Universal Design for Learning) — barriers exist in how content is presented" },
            { letter: "C", text: "4Ds of AI Fluency — teacher isn't using AI to help struggling students" },
            { letter: "D", text: "PICRAT — students aren't actively creating with technology" }
        ],
        correct: "B",
        explanation: "UDL diagnoses barriers in Representation (WHAT): The teacher provides only ONE way to access information. UDL principle: Provide multiple means of representation — text, audio, visuals, translations.",
        audioFile: "assets/audio/L1-Q3.mp3"
    },
    {
        id: "L1-Q4",
        title: "The Low-Level App",
        scenario: `Teacher Joy is proud of her "high-tech" vocabulary classroom. She purchased an expensive app subscription.

Students use the app daily:
• See a word and its definition
• Hear the pronunciation  
• Match words to pictures
• Complete fill-in-the-blank exercises

"We use technology every day!" Teacher Joy tells visitors.

But after 3 months, students still can't use these words in conversations. They can match "happiness" to a smiley face, but they can't explain what makes THEM happy.`,
        question: "Which framework is MOST relevant to diagnose this problem?",
        options: [
            { letter: "A", text: "Bloom's Digital Taxonomy — all activities stay at lower cognitive levels" },
            { letter: "B", text: "UDL — students don't have enough ways to express their learning" },
            { letter: "C", text: "4Ds of AI Fluency — the app doesn't use AI effectively" },
            { letter: "D", text: "PICRAT — students are only in the Passive column" }
        ],
        correct: "A",
        explanation: "Bloom's diagnoses this as stuck at 'Remember' level: see-definition, hear-pronunciation, match-picture, fill-blank are all recall activities. No Analyze, Evaluate, or Create.",
        audioFile: "assets/audio/L1-Q4.mp3"
    }
];

// ============================================
// LEVEL 2: FRAMEWORK CLASSIFICATION
// Multiple Choice - Classify within framework
// ============================================
const LEVEL_2_QUESTIONS = [
    {
        id: "L2-Q1",
        title: "PICRAT Classification",
        scenario: `Teacher Kai assigns an environment project:

1. Students research environmental problems in their community using Google
2. They interview local people and take photos with their phones  
3. Using Canva, they design infographic posters with their findings
4. They publish their infographics to a class website that students from partner schools in Japan and Vietnam can view and comment on

Students are excited — their work has a real global audience!`,
        question: "What PICRAT cell BEST describes this activity?",
        options: [
            { letter: "A", text: "PR (Passive-Replaces) — Technology replaces traditional research methods" },
            { letter: "B", text: "IA (Interactive-Amplifies) — Students interact with research tools" },
            { letter: "C", text: "CT (Creative-Transforms) — Students create original content for global audience" },
            { letter: "D", text: "CA (Creative-Amplifies) — Students create content that could exist without technology" }
        ],
        correct: "C",
        explanation: "CT (Creative-Transforms): Students CREATE original infographics, and publishing globally for international peer feedback is IMPOSSIBLE without technology. This transforms what's achievable.",
        audioFile: "assets/audio/L2-Q1.mp3"
    },
    {
        id: "L2-Q2",
        title: "Bloom's Classification",
        scenario: `Teacher Dao's Present Perfect lesson:

1. Students watch a 10-minute YouTube video explaining present perfect grammar rules
2. After watching, students complete a Google Form quiz with questions like:
   • "What is the form of present perfect?" 
   • "Choose the correct sentence: a) I have went... b) I have gone..."
   • "Fill in the blank: She ___ (eat) breakfast already."

Teacher Dao marks the quiz automatically and records scores.`,
        question: "What is the HIGHEST Bloom's level reached in this activity?",
        options: [
            { letter: "A", text: "Remember — recalling grammar rules and recognizing correct forms" },
            { letter: "B", text: "Understand — explaining what present perfect means" },
            { letter: "C", text: "Apply — using present perfect in controlled exercises" },
            { letter: "D", text: "Analyze — comparing present perfect with other tenses" }
        ],
        correct: "A",
        explanation: "Remember: Both watching explanations and answering recall questions (What is the form? Choose correct sentence) are recognition and recall activities. No original application or creation.",
        audioFile: "assets/audio/L2-Q2.mp3"
    },
    {
        id: "L2-Q3",
        title: "UDL Classification",
        scenario: `Teacher Lek announces the final speaking assessment:

"You will demonstrate your ability to describe a process in English. You may choose from these options:

A) Live presentation to the class (3-5 minutes)
B) Pre-recorded video with visuals (upload to Google Classroom)
C) Audio podcast with sound effects (max 5 minutes)
D) Illustrated narration — draw while explaining (can be recorded)

All options will be graded using the same rubric: clarity, vocabulary, grammar, and fluency."`,
        question: "Which UDL principle does this assessment design address?",
        options: [
            { letter: "A", text: "Engagement (WHY) — providing multiple ways to motivate students" },
            { letter: "B", text: "Representation (WHAT) — providing multiple ways to present information" },
            { letter: "C", text: "Action & Expression (HOW) — providing multiple ways to demonstrate learning" }
        ],
        correct: "C",
        explanation: "Action & Expression (HOW): Students demonstrate the SAME learning (describing a process) through DIFFERENT modes (live, video, audio, visual). Same standard, multiple pathways to show mastery.",
        audioFile: "assets/audio/L2-Q3.mp3"
    },
    {
        id: "L2-Q4",
        title: "4Ds Classification",
        scenario: `Teacher Mai wants to create vocabulary sentences. She types this prompt:

"Create 10 vocabulary sentences about emotions for Thai Matthayom 2 students (age 13-14), CEFR level A2, using simple words they already know. 

Include these emotion words: happiness, sadness, anger, fear, surprise.

Each sentence should:
- Use present simple or present continuous
- Be about situations Thai teenagers can relate to (school, family, friends, social media)
- Be 8-12 words long"

The AI generates perfect, grade-appropriate sentences.`,
        question: "Which 4D dimension does this prompt demonstrate WELL?",
        options: [
            { letter: "A", text: "Delegation — knowing what tasks to give the AI" },
            { letter: "B", text: "Description — providing detailed context and requirements" },
            { letter: "C", text: "Discernment — evaluating whether AI output is good" },
            { letter: "D", text: "Diligence — checking for accuracy and appropriateness" }
        ],
        correct: "B",
        explanation: "Description (D2): This prompt includes context (Thai M.2), level (CEFR A2), topic (emotions), specific vocabulary, grammar constraints, relevance requirements, and length limits. Excellent description!",
        audioFile: "assets/audio/L2-Q4.mp3"
    }
];

// ============================================
// LEVEL 3: DIAGNOSIS
// Open-ended style but presented as MC for web
// ============================================
const LEVEL_3_QUESTIONS = [
    {
        id: "L3-Q1",
        title: "Diagnose the Kahoot!",
        scenario: `Teacher Bee uses Kahoot! every day for grammar review:

• Questions appear: "What is past tense of GO?" "Choose the correct form..."
• Timer counts down: 20 seconds per question
• Same 5 students always on the podium
• Music plays, colors flash, points accumulate

Nong Fah is a thoughtful student who needs processing time. After week 3, she stops trying. "Why bother? I'm always last."

Teacher Bee wonders why only "smart" students enjoy Kahoot!`,
        question: "What is WRONG with this activity? Select the BEST diagnosis.",
        options: [
            { letter: "A", text: "PICRAT: IR (Interactive-Replaces) — students interact but tech just replaces paper quiz; Bloom's: Remember only; UDL: Engagement barrier — timed competition excludes different processors" },
            { letter: "B", text: "4Ds: Poor Description — teacher didn't write good questions" },
            { letter: "C", text: "PICRAT: CT (Creative-Transforms) — students are actively competing" },
            { letter: "D", text: "UDL: Representation barrier — questions are too difficult to read" }
        ],
        correct: "A",
        explanation: "Correct diagnosis: PICRAT shows IR (clicking replaces paper); Bloom's shows only Remember; UDL shows Engagement barrier — timed competition systematically excludes slower processors.",
        audioFile: "assets/audio/L3-Q1.mp3"
    },
    {
        id: "L3-Q2",
        title: "Diagnose the AI Lesson",
        scenario: `Teacher Art wants to create a "communicative" speaking lesson. He prompts ChatGPT:

"Create a role-play dialogue about ordering at a restaurant."

ChatGPT generates a polished dialogue between Customer and Waiter.

In class:
• Students pair up
• Partner A reads Customer lines; Partner B reads Waiter lines
• They swap roles and repeat
• Teacher grades their pronunciation of the AI-generated dialogue`,
        question: "What is WRONG with this activity? Select the BEST diagnosis.",
        options: [
            { letter: "A", text: "UDL: Representation barrier — the dialogue is only in text form" },
            { letter: "B", text: "Bloom's: Analyze level — students are analyzing dialogue structure" },
            { letter: "C", text: "PICRAT: PR or IR — students READ AI content but don't CREATE; 4Ds: Over-delegated creative element students should do themselves; Bloom's: Only Apply level at best" },
            { letter: "D", text: "4Ds: Good Description — teacher specified restaurant context clearly" }
        ],
        correct: "C",
        explanation: "Diagnosis: PICRAT shows PR/IR (students just read AI content); 4Ds shows over-delegation (dialogue creation should be student work); Bloom's shows only Apply (reading aloud), no creation.",
        audioFile: "assets/audio/L3-Q2.mp3"
    },
    {
        id: "L3-Q3",
        title: "Diagnose the 'Modern' Classroom",
        scenario: `Teacher Win proudly shows visitors his "technology-integrated" classroom:

"I replaced everything with digital versions!"

• Textbook → PDF on tablets
• Paper worksheets → Google Docs worksheets  
• Whiteboard presentation → Google Slides presentation
• Hand-raising → Google Forms polling
• Paper submissions → Google Classroom uploads

"We are a 21st century classroom!" he announces.

But a visitor notices: Students still sit in rows, listen to teacher talk, complete the same exercises, and submit individual work. Nothing about the LEARNING has changed.`,
        question: "What is WRONG with this classroom? Select the BEST diagnosis.",
        options: [
            { letter: "A", text: "UDL: Missing Engagement — students aren't motivated by digital tools" },
            { letter: "B", text: "4Ds: Failed Delegation — teacher should use AI to generate worksheets" },
            { letter: "C", text: "PICRAT: All activities in R (Replaces) column — same function, different medium; no transformation; student roles unchanged — still Passive or low Interactive" },
            { letter: "D", text: "Bloom's: Activities are at Create level because students use creative tools" }
        ],
        correct: "C",
        explanation: "Diagnosis: PICRAT shows all R column (PDF replaces textbook, Docs replaces paper — same function). No Amplification (new features) or Transformation (new possibilities). Student roles unchanged.",
        audioFile: "assets/audio/L3-Q3.mp3"
    },
    {
        id: "L3-Q4",
        title: "Diagnose the Assessment",
        scenario: `Teacher Dao's midterm writing test:

• All 35 students write the same 200-word essay
• Topic: "My Favorite Holiday" (assigned, not chosen)
• Time: 40 minutes exactly
• Format: Handwritten in blue pen on lined paper
• No dictionaries, no spell-check, no planning tools

Results:
• Nong Palm (motor difficulties) — can't write fast enough, essay incomplete
• Nong Best (rich ideas, poor spelling) — marked down heavily for spelling errors
• Nong Mild (test anxiety) — freezes under timed pressure, writes only 3 sentences`,
        question: "What is WRONG with this assessment? Select the BEST diagnosis.",
        options: [
            { letter: "A", text: "Bloom's: The essay topic is at Remember level" },
            { letter: "B", text: "4Ds: Teacher should have used AI to grade the essays" },
            { letter: "C", text: "PICRAT: Students aren't using technology to write" },
            { letter: "D", text: "UDL: Barrier in Action & Expression (HOW) — only one way to demonstrate writing ability; motor barriers, executive function barriers, designed for 'average student' who doesn't exist" }
        ],
        correct: "D",
        explanation: "Diagnosis: UDL shows Action & Expression barrier — handwriting-only excludes motor difficulties; timed-only excludes anxiety; spelling-penalties exclude those with strong ideas but weak spelling. One format ≠ fair.",
        audioFile: "assets/audio/L3-Q4.mp3"
    }
];

// ============================================
// LEVEL 4: PRESCRIPTION — "MATCH THE DISASTER"
// 7 Real-World EdTech Failure Scenarios
// Design solutions using 2+ frameworks
// ============================================
const LEVEL_4_QUESTIONS = [
    {
        id: "L4-Q1",
        title: "The Billion-Dollar iPad Disaster",
        scenario: `🔥 REAL CASE: Los Angeles Unified School District (2013)

The district spent $1.3 BILLION to give every student an iPad loaded with Pearson curriculum software.

What happened:
• Students hacked the security within ONE WEEK to access social media and games
• Teachers received ZERO training on how to use the devices pedagogically
• The Pearson curriculum was incomplete and buggy
• iPads sat unused in closets; some were sold on eBay
• The superintendent resigned; FBI investigated the contract
• Only $6 million was recovered

The core problem: Leadership asked "How can we get devices to students?" instead of "What will students DO with these devices?"`,
        question: "Which prescription would have PREVENTED this disaster?",
        options: [
            { letter: "A", text: "Buy cheaper tablets and save money on the hardware budget" },
            { letter: "B", text: "PICRAT First: Design learning activities BEFORE purchasing (What PICRAT cell are we targeting?); then Teacher PD: Extensive training on pedagogical integration; then 4Ds: Train teachers to use AI/tech tools with clear delegation boundaries; then UDL: Ensure curriculum works for ALL learners, not just 'average' students" },
            { letter: "C", text: "Install stronger security software to prevent student hacking" },
            { letter: "D", text: "Start with a pilot program of 100 iPads before scaling up" }
        ],
        correct: "B",
        explanation: "The LA iPad disaster is a textbook case of technology-first thinking. Option B addresses the ROOT cause: no pedagogical plan. PICRAT forces the question 'What will students DO?' BEFORE purchasing. Teacher PD ensures implementation. 4Ds guides AI/tech use. UDL ensures accessibility. Technology + No Pedagogical Plan = Expensive Paperweight.",
        audioFile: "assets/audio/L4-Q1.mp3"
    },
    {
        id: "L4-Q2",
        title: "The Interactive Whiteboard Graveyard",
        scenario: `A school spent ฿2.5 million installing interactive whiteboards (IWBs) in every classroom.

Two years later, a consultant visits and observes:
• 80% of teachers use the IWB ONLY as a projector screen for PowerPoint
• The interactive features (touch, annotation, games) are never used
• Some boards have "Do Not Touch" signs posted by teachers
• Students sit passively watching slides — same as before the IWBs
• The school proudly shows the IWBs to parents on Open House day
• Teachers say: "I don't have time to learn all those features"

The expensive technology changed NOTHING about how students learn.`,
        question: "Which prescription BEST transforms this situation?",
        options: [
            { letter: "A", text: "Replace teachers who refuse to use technology with younger, tech-savvy teachers" },
            { letter: "B", text: "Create a rule requiring teachers to use at least 3 IWB features per lesson" },
            { letter: "C", text: "PICRAT Diagnosis: Current use = PR (Passive-Replaces) — no change in practice; Prescription: Move to IA/IT minimum → Design activities where STUDENTS touch the board (sorting, matching, annotation); Bloom's Progression: Use IWB for Apply/Analyze activities, not just Remember; UDL (HOW): Students demonstrate learning BY USING the board (kinesthetic expression); Teacher Support: Peer coaching, not just one-time training" },
            { letter: "D", text: "Add gamification apps like Kahoot! to make the IWB more fun" }
        ],
        correct: "C",
        explanation: "Option C diagnoses the problem using PICRAT (stuck at PR), then prescribes movement toward Interactive-Transforms. Bloom's ensures higher-order use. UDL adds expression options. The key insight: the technology isn't the problem — the PEDAGOGY is. Shiny New Tool + Same Old Teaching = Digital Worksheet.",
        audioFile: "assets/audio/L4-Q2.mp3"
    },
    {
        id: "L4-Q3",
        title: "The Copy-Paste Catastrophe",
        scenario: `Teacher Suda excitedly introduces ChatGPT to her M.4 English class:

Assignment: "Use ChatGPT to help you write a 300-word essay about climate change."

Results after grading:
• 28 out of 32 students submitted nearly IDENTICAL essays
• Perfect grammar, sophisticated vocabulary — but zero personal voice
• When asked follow-up questions, students couldn't explain their own essays
• Students who wrote honestly felt cheated and demotivated
• One student proudly said: "I finished in 2 minutes! AI is amazing!"
• Teacher Suda now wants to BAN all AI tools

The AI did the learning. The students did the clicking.`,
        question: "Which prescription BEST addresses this AI integration failure?",
        options: [
            { letter: "A", text: "Use AI detection software (GPTZero, Turnitin) to catch cheaters and give them zero marks" },
            { letter: "B", text: "4Ds Framework — D1 (Delegation): Explicitly define what AI CAN do (brainstorm ideas, check grammar, suggest vocabulary) vs. what STUDENTS MUST do (personal stories, opinions, evidence from their life); D3 (Discernment): Require students to evaluate and edit AI suggestions; D4 (Diligence): Mandatory process portfolio showing drafts, revisions, AI prompts used; Bloom's: Add Evaluate level — students critique AI output before using it; UDL (HOW): Options for final product — written essay, video diary, podcast, infographic" },
            { letter: "C", text: "Ban ChatGPT completely and return to handwritten essays with no technology" },
            { letter: "D", text: "Change the topic to something more personal that AI can't write about" }
        ],
        correct: "B",
        explanation: "Option B works WITH AI, not against it. The 4Ds framework (especially D1-Delegation) establishes clear human-AI boundaries. D3/D4 require critical engagement. Bloom's adds evaluation of AI output. UDL provides expression options. The key: AI + Copy-Paste Mindset = Outsourced Thinking. But AI + Clear Boundaries + Critical Thinking = Amplified Learning.",
        audioFile: "assets/audio/L4-Q3.mp3"
    },
    {
        id: "L4-Q4",
        title: "The Kahoot! Addiction",
        scenario: `Teacher Somchai uses Kahoot! in EVERY English lesson. Students love it!

Observations over one semester:
• Students get excited, competitive, and highly engaged
• The classroom is loud, energetic, and "fun"
• Students memorize answers to win points but forget them the next day
• Grammar quiz scores improved, but speaking/writing skills declined
• Students now complain when ANY activity isn't a game
• One student said: "Why do we have to write? Just make it a Kahoot!"
• Teacher proudly reports: "My students are so engaged!"

High engagement. Low learning. Students became addicted to the dopamine, not the content.`,
        question: "Which prescription BEST rebalances this classroom?",
        options: [
            { letter: "A", text: "Limit Kahoot! to once per week and add more writing assignments" },
            { letter: "B", text: "Bloom's Audit: Current activities stuck at Remember level (recall facts for points); Prescription: Design Kahoot! for higher levels — Analyze (categorize examples), Evaluate (judge best answers); PICRAT Check: Current = IR (Interactive-Replaces quiz); Move to IA/IT — Kahoot! as formative assessment that CHANGES instruction; UDL (WHY): Diversify engagement strategies — not just competition, add collaboration, choice, relevance; 4Ds: Use AI to generate varied question types beyond simple recall" },
            { letter: "C", text: "Replace Kahoot! with Quizizz or Blooket for variety" },
            { letter: "D", text: "Add prizes and bigger rewards to motivate students even more" }
        ],
        correct: "B",
        explanation: "Option B doesn't abandon Kahoot! but TRANSFORMS its use. Bloom's moves beyond Remember. PICRAT shifts from Replace to Amplify/Transform. UDL diversifies engagement beyond competition. The key insight: Student Engagement ≠ Student Learning. High scores on games don't mean deep understanding.",
        audioFile: "assets/audio/L4-Q4.mp3"
    },
    {
        id: "L4-Q5",
        title: "The Language Lab Ghost Town",
        scenario: `A school invested ฿5 million in a state-of-the-art language laboratory:
• 40 computers with headsets and microphones
• Licensed pronunciation software
• Recording and playback capabilities
• Teacher control console

Five years later:
• Only 8 computers still work; the rest have viruses or broken headsets
• No IT staff trained to maintain the equipment
• Teachers use the room for "free computer time" — students play games
• The pronunciation software license expired 3 years ago; no one renewed it
• The room is now nicknamed "The Ghost Lab" — students avoid it
• Original training teachers have all transferred to other schools

The investment died not from lack of technology, but lack of sustainability planning.`,
        question: "If you could go back in time, which prescription would SAVE this investment?",
        options: [
            { letter: "A", text: "Buy higher-quality computers that last longer without breaking" },
            { letter: "B", text: "Hire a full-time IT technician dedicated to the language lab" },
            { letter: "C", text: "PICRAT Design: Before purchase, define target cells (IA: pronunciation practice with feedback; CA: student-created audio projects); Teacher Sustainability: Train multiple teachers + document procedures + annual refresher; Budget Planning: Include 5-year maintenance, software renewal, hardware replacement in ORIGINAL budget; UDL Integration: Design activities using the lab for multiple purposes (listening, speaking, recording portfolios); Assessment Alignment: Connect lab activities to course grades so usage is mandatory, not optional" },
            { letter: "D", text: "Make language lab time a compulsory 2 hours per week for all classes" }
        ],
        correct: "C",
        explanation: "Option C addresses the SYSTEMIC failure. PICRAT ensures pedagogical purpose. Teacher training creates sustainability. Budget planning prevents abandonment. UDL maximizes utility. Assessment alignment ensures usage. The equation: More Devices + Less Training + Zero Maintenance Budget = Expensive Ghost Town.",
        audioFile: "assets/audio/L4-Q5.mp3"
    },
    {
        id: "L4-Q6",
        title: "The One-Device Classroom War",
        scenario: `Teacher Nida has ONE tablet for her class of 45 students.

Her current approach:
• Teacher holds the tablet and shows videos to the whole class
• Sometimes a "good student" is allowed to touch the tablet as a reward
• Other students crowd around trying to see the small screen
• Students in the back say they can't see or hear properly
• Arguments break out over whose turn it is to hold the tablet
• Teacher says: "At least we have SOME technology!"

One device. 45 students. Zero equity. Maximum frustration.`,
        question: "Which prescription MAXIMIZES learning with this limited resource?",
        options: [
            { letter: "A", text: "Request funding for more tablets — one device isn't enough for real integration" },
            { letter: "B", text: "UDL (WHAT — Representation): Use tablet to PROJECT onto wall/screen so ALL students can see; (WHY — Engagement): Rotate device responsibility fairly with clear schedule; (HOW — Expression): BYOD option — students can use their own phones for parallel activities; PICRAT Station Rotation: Create 4 stations — 1 tablet station (small group), 3 non-tech stations (role-play, writing, peer practice); students rotate every 15 minutes; Bloom's Differentiation: Tablet station for Create/Analyze activities; other stations for Apply/Practice; 4Ds: Students research on phones, curate findings on class tablet" },
            { letter: "C", text: "Only use the tablet for teacher demonstration; don't let students touch it" },
            { letter: "D", text: "Designate the tablet for the lowest-performing students as intervention support" }
        ],
        correct: "B",
        explanation: "Option B maximizes a limited resource through smart design. UDL ensures access for all. Station rotation gives everyone meaningful tablet time. BYOD leverages existing devices. Bloom's ensures the tablet is used for higher-order tasks. The principle: 1 Device ÷ Smart Design = Learning for 45. It's not about the quantity of devices — it's about the quality of the design.",
        audioFile: "assets/audio/L4-Q6.mp3"
    },
    {
        id: "L4-Q7",
        title: "The Zoom Zombie Apocalypse",
        scenario: `During emergency remote teaching, Teacher Pranee conducts English classes via Zoom:

Every lesson looks the same:
• Teacher talks for 45 minutes with slides shared on screen
• Students have cameras OFF (required by school policy to save bandwidth)
• Teacher asks "Any questions?" — silence
• Chat box empty except for attendance replies
• Teacher can't tell if students are listening, sleeping, or playing games
• Assignment submission rate: 30%
• Teacher says: "I'm exhausted. I'm teaching to black boxes."

When students returned to school, they had learned almost nothing from 4 months online.`,
        question: "Which prescription would have RESURRECTED this dead Zoom classroom?",
        options: [
            { letter: "A", text: "Require all students to turn cameras ON so teacher can monitor attention" },
            { letter: "B", text: "Record all lessons so students can re-watch later if they missed something" },
            { letter: "C", text: "PICRAT Redesign: Break 45-min lecture into 10-min chunks with INTERACTION: polls, chat responses, breakout rooms; Move from PA → IA minimum: Students respond every 5-7 minutes; Bloom's Chunking: Each chunk targets one level — mini-lecture (Understand), poll (Apply), breakout (Analyze), share-back (Evaluate); UDL (WHAT): Lesson recording + transcript + visual summary; (WHY): Vary activities to maintain attention — chat, voice, movement breaks; (HOW): Multiple ways to participate — chat, emoji reactions, Padlet, voice; 4Ds: Use AI to summarize discussions, generate follow-up questions" },
            { letter: "D", text: "Shorten lessons to 30 minutes since students can't focus online" }
        ],
        correct: "C",
        explanation: "Option C transforms passive Zoom into interactive online learning. PICRAT moves from PA to IA through frequent interaction. Bloom's structures content into cognitive chunks. UDL provides multiple access points and participation modes. The key: 45-Minute Lecture + Black Boxes = Zero Learning. But Chunked Content + Frequent Interaction + Multiple Modalities = Engaged Remote Learners.",
        audioFile: "assets/audio/L4-Q7.mp3"
    }
];

// ============================================
// LEVEL 5: INTEGRATION CHALLENGE
// TRUE/FALSE and Multiple Choice combined
// ============================================
const LEVEL_5_QUESTIONS = [
    {
        id: "L5-Q1",
        title: "The Framework Conflict",
        type: "true_false",
        instructions: "Mark each statement TRUE or FALSE. You must get ALL 4 correct to pass.",
        scenario: "These statements test your deep understanding of framework principles and common misconceptions.",
        statements: [
            {
                id: "L5-Q1-A",
                text: "According to PICRAT, teachers should ALWAYS aim for CT (Creative-Transforms) in every activity.",
                correct: false,
                explanation: "FALSE: All 9 PICRAT cells are valid for different purposes. CT is not always the goal — sometimes PA or IR is appropriate."
            },
            {
                id: "L5-Q1-B",
                text: "A lesson can intentionally move through multiple PICRAT cells (e.g., PA → IA → CA) as a designed learning pathway.",
                correct: true,
                explanation: "TRUE: Lessons are journeys through cells. A warm-up might be PA, practice might be IA, and final project might be CA/CT."
            },
            {
                id: "L5-Q1-C",
                text: "If students use AI to brainstorm ideas but write the final essay in their own voice, this is AI misuse according to the 4Ds framework.",
                correct: false,
                explanation: "FALSE: This is APPROPRIATE delegation. Students delegated brainstorming (acceptable) but created the final product themselves."
            },
            {
                id: "L5-Q1-D",
                text: "UDL means making learning EASIER by lowering standards for struggling students.",
                correct: false,
                explanation: "FALSE: UDL means making learning ACCESSIBLE, not easier. Same high standards, multiple pathways to demonstrate mastery."
            }
        ],
        audioFile: "assets/audio/L5-Q1.mp3"
    },
    {
        id: "L5-Q2",
        title: "The Complete Redesign",
        type: "multiple_choice_pair",
        scenario: `Teacher Kai's current "Present Perfect" lesson:

• Warm-up (5 min): Teacher explains on whiteboard
• Practice (15 min): Students complete 50 gap-fill sentences from workbook
• Production (20 min): Students write 5 sentences using present perfect
• Assessment (5 min): Teacher reads answers aloud, students self-check

You need to analyze this lesson and suggest improvements.`,
        questions: [
            {
                id: "L5-Q2-A",
                text: "Using PICRAT analysis, what cells does this lesson currently occupy?",
                options: [
                    { letter: "A", text: "PR → IR → CA → IA" },
                    { letter: "B", text: "PA → IR → CR → PA" },
                    { letter: "C", text: "PR → PR → CR → PR" },
                    { letter: "D", text: "PA → IA → CA → IT" }
                ],
                correct: "C",
                explanation: "PR (passive watching) → PR (passive doing worksheets, no tech interaction) → CR (writing sentences creates, but could be done without tech) → PR (passive listening to answers)"
            },
            {
                id: "L5-Q2-B",
                text: "Which combination would MOST effectively transform this lesson?",
                options: [
                    { letter: "A", text: "Add Kahoot! quiz + Show YouTube grammar video" },
                    { letter: "B", text: "Use AI chatbot for practice (IA→IT) + UDL expression options + Create personal life timelines for real audience (Bloom's: Create)" },
                    { letter: "C", text: "Replace whiteboard with PowerPoint + More gap-fill practice" },
                    { letter: "D", text: "Use ChatGPT to generate more worksheets + Add timer competition" }
                ],
                correct: "B",
                explanation: "B integrates: PICRAT transformation (AI chatbot = IT); UDL (multiple expression); Bloom's (Create level with real audience). Comprehensive improvement."
            }
        ],
        audioFile: "assets/audio/L5-Q2.mp3"
    },
    {
        id: "L5-Q3",
        title: "The Ethical Dilemma",
        type: "multiple_choice_pair",
        scenario: `A teacher designs a speaking activity using AI voice technology:

1. Students write scripts for a "How to..." tutorial (e.g., "How to make pad thai")
2. They upload scripts to ElevenLabs AI voice generator
3. AI creates professional voiceovers with perfect pronunciation
4. Students add their AI voices to video presentations
5. Teacher grades the pronunciation quality of the final videos

The teacher calls this "innovative speaking practice."`,
        questions: [
            {
                id: "L5-Q3-A",
                text: "What is the PRIMARY problem with this assessment design?",
                options: [
                    { letter: "A", text: "AI voice technology is too expensive for schools" },
                    { letter: "B", text: "Students might plagiarize their scripts from the internet" },
                    { letter: "C", text: "Grading AI-generated pronunciation doesn't measure STUDENT speaking ability" },
                    { letter: "D", text: "The activity is only at PICRAT level CA, not CT" }
                ],
                correct: "C",
                explanation: "The fundamental problem: Grading AI pronunciation doesn't assess student speaking. The AI speaks perfectly regardless of student ability."
            },
            {
                id: "L5-Q3-B",
                text: "How could this activity be IMPROVED while still using AI voice technology meaningfully?",
                options: [
                    { letter: "A", text: "Remove AI voice entirely and grade student recordings only" },
                    { letter: "B", text: "Grade the written script instead of the pronunciation" },
                    { letter: "C", text: "Students record THEMSELVES speaking, compare to AI model, then set improvement goals based on differences" },
                    { letter: "D", text: "Use AI to automatically grade student pronunciation recordings" }
                ],
                correct: "C",
                explanation: "C uses AI as a MODEL, not a replacement. Students compare their own speaking to the AI, identify gaps, and set goals. AI becomes a learning tool, not a substitute."
            }
        ],
        audioFile: "assets/audio/L5-Q3.mp3"
    },
    {
        id: "L5-Q4",
        title: "Framework Integration Check",
        type: "true_false",
        instructions: "Mark each statement TRUE or FALSE. You must get ALL 4 correct to pass.",
        scenario: "Final check of your framework integration knowledge.",
        statements: [
            {
                id: "L5-Q4-A",
                text: "A Kahoot! quiz with recall questions is classified as IT (Interactive-Transforms) because students interact with technology.",
                correct: false,
                explanation: "FALSE: It's IR (Interactive-Replaces) — clicking replaces raising hands, but it's the same recall function. 'Interactive' in PICRAT means student engagement level, not just clicking."
            },
            {
                id: "L5-Q4-B",
                text: "Providing students a choice between submitting an essay, video, or infographic (all meeting the same rubric) is an example of UDL's multiple means of Action & Expression (HOW).",
                correct: true,
                explanation: "TRUE: Same learning outcome, different pathways to demonstrate it. This is textbook Action & Expression."
            },
            {
                id: "L5-Q4-C",
                text: "If a teacher uses ChatGPT to generate a complete lesson plan and teaches it without reviewing or adapting it, they have demonstrated strong AI fluency.",
                correct: false,
                explanation: "FALSE: This shows WEAK fluency — failed D3 (Discernment) by not evaluating output, and failed D4 (Diligence) by not adapting to context."
            },
            {
                id: "L5-Q4-D",
                text: "An activity where students watch a video with captions, speed control, and transcript access available is PA (Passive-Amplifies) in PICRAT.",
                correct: true,
                explanation: "TRUE: Students are passive receivers (watching), but technology Amplifies with features impossible without it (captions, speed control, transcript)."
            }
        ],
        audioFile: "assets/audio/L5-Q4.mp3"
    },
    {
        id: "L5-Q5",
        title: "The Priority Question",
        type: "single_choice",
        scenario: `Teacher Nok's reading comprehension lesson:

• All 32 students read the same text (printed handout only)
• All students answer the same written questions (handwritten only)
• 45-minute time limit, same for everyone

Student challenges:
• Nong Pleem has dyslexia — struggles to decode printed text
• Nong Bank is an auditory learner — comprehends better when listening
• Both students consistently fail reading assessments despite being intelligent and motivated

Teacher Nok can make ONE change to her lesson. Resources are limited.`,
        question: "Which SINGLE change would address the MOST barriers according to UDL?",
        options: [
            { letter: "A", text: "Add a Kahoot! quiz at the end for engagement" },
            { letter: "B", text: "Provide text in multiple formats: print + audio recording + digital with text-to-speech" },
            { letter: "C", text: "Let students choose which text to read from a list of options" },
            { letter: "D", text: "Replace written questions with whole-class discussion" }
        ],
        correct: "B",
        explanation: "B addresses Representation (WHAT) — multiple formats help both dyslexic learner (audio/TTS) and auditory learner (audio). One change, maximum barrier reduction.",
        audioFile: "assets/audio/L5-Q5.mp3"
    }
];

// Combine all questions
const ALL_QUESTIONS = {
    1: LEVEL_1_QUESTIONS,
    2: LEVEL_2_QUESTIONS,
    3: LEVEL_3_QUESTIONS,
    4: LEVEL_4_QUESTIONS,
    5: LEVEL_5_QUESTIONS
};

// Export for use in game.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GAME_CONFIG, ALL_QUESTIONS };
}
