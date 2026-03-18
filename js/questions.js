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
    title: "The Fortress of Ed Tech Frameworks",
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
        hint: "Think about HOW students are interacting with the technology. Are they active or passive? Does the video change what's possible in learning?",
        framework: "PICRAT",
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
        hint: "Look at the prompt the teacher wrote. What information did she FAIL to include? Think about what makes a good AI prompt.",
        framework: "4Ds",
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
        hint: "Notice that some students struggle despite being intelligent. Is the problem with THEM or with HOW they can access the content?",
        framework: "UDL",
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
        hint: "Look at what students DO with the vocabulary. Are they just matching and filling blanks, or are they using words at higher thinking levels?",
        framework: "Bloom's",
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
        hint: "Ask: Are students creating something original? Could this activity happen WITHOUT technology? Think about the global audience aspect.",
        framework: "PICRAT",
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
        hint: "Look at the quiz questions. 'What is the form?' and 'Choose the correct sentence' — what level of thinking do these require?",
        framework: "Bloom's",
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
        hint: "Notice students can choose between presentation, video, podcast, or drawing. What does this flexibility address? Is it about content, motivation, or demonstrating learning?",
        framework: "UDL",
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
        hint: "Look at all the details in the prompt: student level, age, topic, grammar, length. Which 4D dimension is about writing detailed, context-rich prompts?",
        framework: "4Ds",
        audioFile: "assets/audio/L2-Q4.mp3"
    }
];

// ============================================
// LEVEL 3: DIAGNOSIS
// All options equal length, all use frameworks correctly
// Distractors misapply frameworks in subtle ways
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
            { letter: "A", text: "PICRAT: IR (Interactive-Replaces) — clicking replaces hand-raising but same recall function; Bloom's: Stuck at Remember level; UDL: Engagement barrier — timed competition systematically excludes reflective processors" },
            { letter: "B", text: "Bloom's: Stuck at Remember/Understand — questions test recall only; PICRAT: IA (Interactive-Amplifies) — gamification adds engagement features; UDL: Engagement barrier — repetitive daily use reduces novelty" },
            { letter: "C", text: "UDL: Representation barrier — fast-moving visual text excludes processing differences; Bloom's: Apply level — students apply grammar rules under pressure; PICRAT: IR — replaces paper quiz format" },
            { letter: "D", text: "PICRAT: IA (Interactive-Amplifies) — leaderboard amplifies motivation through competition; UDL: Action barrier — only button-clicking as response mode; Bloom's: Understand level — students demonstrate comprehension" }
        ],
        correct: "A",
        explanation: "Best diagnosis: The core problem is Nong Fah stopped trying due to TIME PRESSURE (Engagement barrier), not visual representation or action mode. PICRAT correctly identifies IR (same function). Option B incorrectly claims IA — gamification is surface-level, not amplification. Option C misidentifies as Representation. Option D misidentifies as Action barrier.",
        hint: "Nong Fah stopped trying because of TIME PRESSURE affecting her motivation, not because she can't see or respond. Which UDL principle addresses motivation and self-regulation?",
        framework: "Multiple",
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
            { letter: "A", text: "UDL: Engagement barrier — students have no ownership of dialogue content; Bloom's: Apply level — students apply pronunciation skills; PICRAT: IA — AI amplifies teacher's material preparation capacity" },
            { letter: "B", text: "4Ds: Over-delegated — AI wrote the creative content students should produce; PICRAT: PR/IR — students passively consume AI content; Bloom's: Remember/Understand — reading scripts isn't communicating" },
            { letter: "C", text: "Bloom's: Analyze level — students analyze dialogue patterns through performance; 4Ds: Good Delegation — AI handles routine scripting efficiently; PICRAT: IR — digital script replaces paper script" },
            { letter: "D", text: "PICRAT: PA (Passive-Amplifies) — AI amplifies content quality beyond teacher ability; UDL: Expression options — students express through oral performance; 4Ds: Appropriate Description — context was specified" }
        ],
        correct: "B",
        explanation: "Best diagnosis: The learning goal is COMMUNICATIVE competence, but students just read scripts. 4Ds identifies over-delegation (dialogue creation IS the learning task). PICRAT shows PR/IR. Option A incorrectly claims IA — AI helping teacher isn't amplification of student learning. Option C wrongly claims Analyze level. Option D wrongly claims PA.",
        hint: "The lesson claims to be 'communicative' but students only READ a script. Who CREATED the dialogue? What should students be producing to demonstrate communicative competence?",
        framework: "Multiple",
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
            { letter: "A", text: "UDL: Engagement barrier — digital tools without pedagogical change don't motivate; Bloom's: Remember/Understand — exercises test recall; 4Ds: Missing AI integration entirely from the classroom" },
            { letter: "B", text: "PICRAT: All R (Replaces) column — PDF replaces textbook, Docs replaces paper, same pedagogical function; student roles unchanged from Passive; no Amplification or Transformation of learning" },
            { letter: "C", text: "Bloom's: Apply/Analyze levels — using digital tools requires new skills; PICRAT: IA column — tablets add accessibility features like zoom and search; UDL: Representation improved through digital formats" },
            { letter: "D", text: "4Ds: Failed Diligence — teacher didn't iterate on implementation; PICRAT: PA — students passively receive amplified content delivery; UDL: Action improved — typing easier than handwriting" }
        ],
        correct: "B",
        explanation: "Best diagnosis: PICRAT's R-A-T columns directly address this — every substitution is R (Replaces), doing the same thing with different medium. No A (new features used) or T (new possibilities). Option A adds unnecessary 4Ds criticism. Option C wrongly claims IA — search/zoom aren't being used pedagogically. Option D wrongly claims PA.",
        hint: "The visitor noticed 'nothing about the LEARNING has changed.' Has the FUNCTION changed, or just the MEDIUM? What PICRAT column describes 'same function, different tool'?",
        framework: "PICRAT",
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
            { letter: "A", text: "Bloom's: Remember/Understand only — personal narrative topic doesn't require analysis; PICRAT: Technology absence is the problem — should use word processors; 4Ds: Should allow AI assistance for equity" },
            { letter: "B", text: "UDL: Engagement barrier — assigned topic doesn't connect to all students' interests; Bloom's: Create level exists — essay writing is creation; 4Ds: Appropriate non-delegation — writing tests shouldn't use AI" },
            { letter: "C", text: "UDL: Action & Expression barrier — single modality (handwriting) creates motor barriers; single condition (timed) creates executive function barriers; spelling-as-proxy measures wrong construct" },
            { letter: "D", text: "UDL: Representation barrier — no models or examples of good essays provided; Bloom's: Evaluate level — teacher evaluates student work; PICRAT: Not applicable — no technology is involved here" }
        ],
        correct: "C",
        explanation: "Best diagnosis: UDL Action & Expression (HOW students demonstrate learning) — three capable students fail because the single assessment FORMAT creates barriers, not the content. Option A wrongly blames Bloom's level. Option B misidentifies as Engagement — the problem isn't topic interest. Option D misidentifies as Representation.",
        hint: "Three students with RICH IDEAS are failing for different reasons: motor, anxiety, spelling. The problem isn't WHAT they're learning but HOW they must demonstrate it. Which UDL principle addresses output modality?",
        framework: "UDL",
        audioFile: "assets/audio/L3-Q4.mp3"
    }
];

// ============================================
// LEVEL 4: PRESCRIPTION
// All options equal length, all use frameworks correctly
// Distractors are plausible but miss the core problem
// ============================================
const LEVEL_4_QUESTIONS = [
    {
        id: "L4-Q1",
        title: "Treat the Vocabulary Flashcards",
        scenario: `Current situation:

Teacher uses Quizlet flashcards for vocabulary:
• Students see word → see definition → see image
• Then: matching quiz, fill-in-the-blank quiz
• Teacher says "Great app! Very expensive subscription!"

Problem: After 3 months, students can match words to definitions but cannot use the words in their own sentences or conversations. Retention is poor.

Your task: Prescribe a better activity using at least 2 frameworks.`,
        question: "Which prescription BEST addresses this problem using multiple frameworks?",
        options: [
            { letter: "A", text: "Bloom's: Add Analyze — students categorize words by semantic fields and usage contexts; PICRAT: Move to IA — sorting features amplify categorization; UDL: Representation — add audio pronunciation and example sentences" },
            { letter: "B", text: "Bloom's: Move to Create — students design OWN flashcards with personal sentences; PICRAT: CA/CT — share with partner schools for authentic feedback; UDL: Expression — choose flashcards, recordings, or comics" },
            { letter: "C", text: "UDL: Engagement — add spaced repetition algorithms for optimal review timing; Bloom's: Apply — use words in controlled sentence frames; PICRAT: IA — adaptive algorithms amplify memorization efficiency" },
            { letter: "D", text: "4Ds: AI generates personalized vocabulary based on student interests; PICRAT: IT — AI transforms word selection to individual needs; UDL: Engagement — personalization increases relevance and motivation" }
        ],
        correct: "B",
        explanation: "The problem is students can't USE words productively. Option B directly addresses this: Bloom's Create (students produce original content), PICRAT CA/CT (authentic audience transforms purpose), UDL Expression (multiple creation modes). Option A stays at Analyze — still receptive. Option C improves memorization but doesn't address production. Option D personalizes input but not output.",
        hint: "Students can MATCH but can't USE. Which prescription moves from RECEIVING vocabulary to PRODUCING with it? Look for Create level + authentic audience + production.",
        framework: "Multiple",
        audioFile: "assets/audio/L4-Q1.mp3"
    },
    {
        id: "L4-Q2",
        title: "Treat the AI Writing Assignment",
        scenario: `Current situation:

Teacher's assignment: "Use ChatGPT to help you write a 200-word essay about your favorite holiday."

Results:
• Many students copy-paste AI output directly
• Essays are well-written but sound identical
• Teacher can't tell who actually learned anything
• Students who wrote honestly feel cheated

Your task: Prescribe a better assignment using at least 2 frameworks.`,
        question: "Which prescription BEST addresses this problem using multiple frameworks?",
        options: [
            { letter: "A", text: "4Ds: Define delegation boundaries — AI for brainstorming/grammar, student for content/voice; require process portfolio; UDL: Expression options — essay, video, photo story; Bloom's: Add metacognitive reflection" },
            { letter: "B", text: "Bloom's: Move to Evaluate — students critique AI essays for authenticity and voice; PICRAT: IA — interact with AI as analytical tool; 4Ds: Strengthen Discernment — teach identifying AI patterns" },
            { letter: "C", text: "4Ds: Strengthen Description — teach effective prompt engineering for quality output; PICRAT: CA — students create prompts and curate responses; Bloom's: Analyze — examine prompt-output relationships" },
            { letter: "D", text: "UDL: Engagement — student choice of topic increases intrinsic motivation to write authentically; Bloom's: Create — essay writing is creation; PICRAT: CT — AI transforms the revision process" }
        ],
        correct: "A",
        explanation: "The problem is students SUBSTITUTING AI for their own work. Option A directly addresses this: 4Ds delegation boundaries define human vs. AI roles, process portfolio proves human work, UDL offers alternatives, Bloom's adds metacognition. Option B teaches critique but doesn't ensure student writing. Option C improves AI use but doesn't ensure learning. Option D assumes topic choice prevents copying.",
        hint: "Students are SUBSTITUTING AI output for their own writing. Which prescription clearly defines what AI CAN help vs. what students MUST do themselves, with evidence?",
        framework: "Multiple",
        audioFile: "assets/audio/L4-Q2.mp3"
    },
    {
        id: "L4-Q3",
        title: "Treat the Grammar Video",
        scenario: `Current situation:

Teacher records a 20-minute video explaining present continuous tense:
• Teacher talks to camera explaining rules
• Shows examples on whiteboard
• Students watch at home, take notes
• In class: complete workbook exercises (fill-in-the-blank)

Problems:
• Students zone out during long explanation
• No way to check understanding during video
• Class time spent on low-level exercises
• Students can recite rules but can't use them naturally

Your task: Prescribe a better design using at least 2 frameworks.`,
        question: "Which prescription BEST addresses this problem using multiple frameworks?",
        options: [
            { letter: "A", text: "UDL: Representation — chunk into 5-min segments with captions and subtitles; Engagement — add self-check after each chunk; Bloom's: Move to Understand — comprehension checks during video" },
            { letter: "B", text: "PICRAT: Embedded quizzes move PA→IA; student-created videos move to CA/CT; UDL: Representation (video+transcript+diagrams) AND Engagement (relevant contexts); Bloom's: Progress Remember→Apply→Create" },
            { letter: "C", text: "4Ds: AI generates adaptive practice matching each student's error patterns; PICRAT: IT — AI transforms practice through personalization; Bloom's: Analyze — students examine their own grammar mistakes" },
            { letter: "D", text: "Bloom's: Skip to Create — inductive discovery replaces explicit instruction; PICRAT: CT — student-led inquiry transforms learning; UDL: Expression — students explain grammar in their own words" }
        ],
        correct: "B",
        explanation: "Multiple problems require comprehensive solution. Option B addresses ALL: PICRAT progression (PA→IA→CA/CT), UDL Representation AND Engagement, Bloom's cognitive progression to Create. Option A improves video but stays at Understand — doesn't reach application/creation. Option C adds AI but doesn't fix the video or reach Create. Option D skips scaffolding entirely.",
        hint: "FOUR problems: too long, passive, no checks, can't apply. Which prescription addresses ALL of these with a coherent progression from passive viewing to active creation?",
        framework: "Multiple",
        audioFile: "assets/audio/L4-Q3.mp3"
    },
    {
        id: "L4-Q4",
        title: "Treat the Reading Comprehension",
        scenario: `Current situation:

Teacher's reading lesson for Matthayom 3:
• All students read the same 2-page article about climate change
• Format: printed text only, same font size throughout
• Task: Answer 10 comprehension questions individually
• Time: 30 minutes for all students
• Assessment: Count correct answers out of 10

Problems:
• Nong Ploy (dyslexic) struggles to decode the dense text
• Nong Bank (advanced reader) finishes in 10 minutes, bored
• Nong Fern (visual learner) can't picture the concepts described
• Most students answer surface-level questions correctly but can't discuss the article's argument

Your task: Prescribe a better design using at least 2 frameworks.`,
        question: "Which prescription BEST addresses this problem using multiple frameworks?",
        options: [
            { letter: "A", text: "UDL: Representation — text + audio + infographic versions address input diversity; Engagement — topic choices within theme; Bloom's: Add Analyze/Evaluate questions; PICRAT: IA — multimedia interaction" },
            { letter: "B", text: "Bloom's: Ensure Remember/Understand mastery before higher levels; PICRAT: PA — provide multiple passive format options; 4Ds: AI simplifies text for struggling readers; UDL: Representation — leveled texts" },
            { letter: "C", text: "UDL: Action & Expression — choose essay, diagram, or presentation to show understanding; Bloom's: Evaluate — judge article credibility; PICRAT: CT — collaborative annotation transforms reading" },
            { letter: "D", text: "4Ds: AI generates differentiated questions for each reading level; PICRAT: IT — personalized assessment transforms evaluation; UDL: Engagement — self-paced completion reduces anxiety" }
        ],
        correct: "A",
        explanation: "Four students struggle for different INPUT and DEPTH reasons. Option A addresses both: UDL Representation solves Ploy (audio), Fern (infographic), Bank (engagement/choice); Bloom's higher questions address surface-level problem. Option B stays low-level. Option C addresses output but not input barriers. Option D personalizes assessment but not instruction.",
        hint: "Four problems: decoding difficulty, boredom, visual needs, surface-level thinking. Which prescription addresses BOTH the input barrier AND the cognitive level problem?",
        framework: "Multiple",
        audioFile: "assets/audio/L4-Q4.mp3"
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
        hint: "Read each statement carefully. Think about whether the claim is absolute ('ALWAYS', 'NEVER') or nuanced. Frameworks usually have nuanced applications.",
        framework: "Multiple",
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
        hint: "For Part A: Trace each activity through PICRAT. Watching = P; Worksheets without tech = P or low I; Writing sentences = C; Listening to answers = P. For Part B: Look for transformation, not just technology addition.",
        framework: "PICRAT",
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
        hint: "The teacher grades AI-generated pronunciation, not student pronunciation. What is actually being assessed? For improvement, think: How can AI become a MODEL for comparison rather than a replacement?",
        framework: "Multiple",
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
        hint: "For each statement, think about the EXACT framework definition. Kahoot clicking = Interactive? UDL = lowering standards? AI without review = good fluency? Video with controls = Amplifies?",
        framework: "Multiple",
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
        hint: "Both students are intelligent but failing. One has dyslexia (text issues), one is auditory (needs to hear). What ONE change helps BOTH? Think UDL Representation.",
        framework: "UDL",
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
