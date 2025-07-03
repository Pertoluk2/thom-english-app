document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // --- DATA ---
    // ===================================================================

    const wordList = [
        // UNIT 1
        { vietnamese: "Nhìn", english: "see", unit: 1 }, { vietnamese: "Giáo viên", english: "teacher", unit: 1 }, { vietnamese: "Làm ơn", english: "please", unit: 1 }, { vietnamese: "Ăn", english: "eat", unit: 1 }, { vietnamese: "Con cừu", english: "sheep", unit: 1 }, { vietnamese: "Chỗ ngồi", english: "seat", unit: 1 }, { vietnamese: "Ngủ", english: "sleep", unit: 1 }, { vietnamese: "Nói", english: "speak", unit: 1 }, { vietnamese: "Tiếng Việt", english: "Vietnamese", unit: 1 }, { vietnamese: "Cảm thấy", english: "feel", unit: 1 }, { vietnamese: "Con heo", english: "pig", unit: 1 }, { vietnamese: "Con cá", english: "fish", unit: 1 }, { vietnamese: "Con gà", english: "chicken", unit: 1 }, { vietnamese: "Mèo con", english: "kitten", unit: 1 }, { vietnamese: "Lắng nghe", english: "listen", unit: 1 }, { vietnamese: "Chiếc nhẫn", english: "ring", unit: 1 }, { vietnamese: "Đá (bóng)", english: "kick", unit: 1 }, { vietnamese: "Ngồi", english: "sit", unit: 1 }, { vietnamese: "Con tàu", english: "ship", unit: 1 }, { vietnamese: "Thành phố", english: "city", unit: 1 }, { vietnamese: "Ngầu", english: "cool", unit: 1 }, { vietnamese: "Màu xanh da trời", english: "blue", unit: 1 }, { vietnamese: "Đôi giày", english: "shoe", unit: 1 }, { vietnamese: "Di chuyển", english: "move", unit: 1 }, { vietnamese: "Nhóm", english: "group", unit: 1 }, { vietnamese: "Hồ bơi", english: "pool", unit: 1 }, { vietnamese: "Phim", english: "movie", unit: 1 }, { vietnamese: "Thức ăn", english: "food", unit: 1 }, { vietnamese: "Cây tre", english: "bamboo", unit: 1 }, { vietnamese: "Tốt", english: "good", unit: 1 }, { vietnamese: "Nấu ăn", english: "cook", unit: 1 }, { vietnamese: "Quyển sách", english: "book", unit: 1 }, { vietnamese: "Đường", english: "sugar", unit: 1 }, { vietnamese: "Bánh pudding", english: "pudding", unit: 1 }, { vietnamese: "Nhìn", english: "look", unit: 1 }, { vietnamese: "Gỗ", english: "wood", unit: 1 }, { vietnamese: "Bàn chân", english: "foot", unit: 1 }, { vietnamese: "Bóng đá", english: "football", unit: 1 },
        { vietnamese: "Người mới", english: "newbie", unit: 1 }, { vietnamese: "Rất là", english: "really", unit: 1 }, { vietnamese: "Hào hứng", english: "excited", unit: 1 }, { vietnamese: "Xuất sắc", english: "excellent", unit: 1 }, { vietnamese: "Nhất định", english: "certain", unit: 1 }, { vietnamese: "Tuyệt", english: "great", unit: 1 },
        // UNIT 2
        { vietnamese: "Số mười", english: "ten", unit: 2 }, { vietnamese: "Đàn ông", english: "men", unit: 2 }, { vietnamese: "Màu đỏ", english: "red", unit: 2 }, { vietnamese: "Cái bút", english: "pen", unit: 2 }, { vietnamese: "Bạn bè", english: "friend", unit: 2 }, { vietnamese: "Cái đầu", english: "head", unit: 2 }, { vietnamese: "Gửi", english: "send", unit: 2 }, { vietnamese: "Lá thư", english: "letter", unit: 2 }, { vietnamese: "Sẵn sàng", english: "ready", unit: 2 }, { vietnamese: "Màu đen", english: "black", unit: 2 }, { vietnamese: "Cái mũ", english: "hat", unit: 2 }, { vietnamese: "Con rồng", english: "dragon", unit: 2 }, { vietnamese: "Cái quạt", english: "fan", unit: 2 }, { vietnamese: "Quả táo", english: "apple", unit: 2 }, { vietnamese: "Vui vẻ", english: "happy", unit: 2 }, { vietnamese: "Buồn", english: "sad", unit: 2 }, { vietnamese: "Tồi tệ", english: "bad", unit: 2 }, { vietnamese: "Người đàn ông", english: "man", unit: 2 }, { vietnamese: "Kì thi", english: "exam", unit: 2 }, { vietnamese: "Tuyệt vời", english: "wonderful", unit: 2 }, { vietnamese: "Anh/em trai", english: "brother", unit: 2 }, { vietnamese: "Mùa hè", english: "summer", unit: 2 }, { vietnamese: "Gia đình", english: "family", unit: 2 }, { vietnamese: "Album", english: "album", unit: 2 }, { vietnamese: "Đồng ý", english: "agree", unit: 2 }, { vietnamese: "Kẻ thù", english: "enemy", unit: 2 }, { vietnamese: "Sự tự do", english: "freedom", unit: 2 }, { vietnamese: "Quả chuối", english: "banana", unit: 2 }, { vietnamese: "Con số", english: "number", unit: 2 }, { vietnamese: "Lo lắng", english: "nervous", unit: 2 }, { vietnamese: "Tóc xoăn", english: "curly", unit: 2 }, { vietnamese: "Cô gái", english: "girl", unit: 2 }, { vietnamese: "Học", english: "learn", unit: 2 }, { vietnamese: "Làm việc", english: "work", unit: 2 }, { vietnamese: "Bẩn", english: "dirty", unit: 2 }, { vietnamese: "Con chim", english: "bird", unit: 2 }, { vietnamese: "Lướt sóng", english: "surf", unit: 2 }, { vietnamese: "Làm đau", english: "hurt", unit: 2 }, { vietnamese: "Đốt cháy", english: "burn", unit: 2 },
        { vietnamese: "Đất liền", english: "mainland", unit: 2 }, { vietnamese: "Ảnh hưởng", english: "influence", unit: 2 }, { vietnamese: "Thời gian rỗi", english: "spare time", unit: 2 },
        // UNIT 3
        { vietnamese: "Con trai", english: "son", unit: 3 }, { vietnamese: "Mẹ", english: "mother", unit: 3 }, { vietnamese: "Chồng", english: "husband", unit: 3 }, { vietnamese: "Chú/Bác", english: "uncle", unit: 3 }, { vietnamese: "Con khỉ", english: "monkey", unit: 3 }, { vietnamese: "Cún con", english: "puppy", unit: 3 }, { vietnamese: "Mật ong", english: "honey", unit: 3 }, { vietnamese: "Cái cốc", english: "cup", unit: 3 }, { vietnamese: "Nắng", english: "sunny", unit: 3 }, { vietnamese: "Xe buýt", english: "bus", unit: 3 }, { vietnamese: "Bố", english: "father", unit: 3 }, { vietnamese: "Nông dân", english: "farmer", unit: 3 }, { vietnamese: "Vết sẹo", english: "scar", unit: 3 }, { vietnamese: "Cánh tay", english: "arm", unit: 3 }, { vietnamese: "Trái tim", english: "heart", unit: 3 }, { vietnamese: "Bữa tiệc", english: "party", unit: 3 }, { vietnamese: "Quán bar", english: "bar", unit: 3 }, { vietnamese: "Chợ", english: "market", unit: 3 }, { vietnamese: "Xa", english: "far", unit: 3 }, { vietnamese: "Xe hơi", english: "car", unit: 3 }, { vietnamese: "Số bốn", english: "four", unit: 3 }, { vietnamese: "Cao", english: "tall", unit: 3 }, { vietnamese: "Mạnh mẽ", english: "strong", unit: 3 }, { vietnamese: "Con gái", english: "daughter", unit: 3 }, { vietnamese: "Quả bóng", english: "ball", unit: 3 }, { vietnamese: "Con ngựa", english: "horse", unit: 3 }, { vietnamese: "Cánh cửa", english: "door", unit: 3 }, { vietnamese: "Sàn nhà", english: "floor", unit: 3 }, { vietnamese: "Lờ đi", english: "ignore", unit: 3 }, { vietnamese: "Mùa thu", english: "autumn", unit: 3 },
        { vietnamese: "Thú vị", english: "interesting", unit: 3 }, { vietnamese: "Phụ thuộc vào", english: "depend on", unit: 3 }, { vietnamese: "Tình huống", english: "situation", unit: 3 }, { vietnamese: "Hẹn hò", english: "date", unit: 3 }, { vietnamese: "Cuộc hội thoại", english: "conversation", unit: 3 }, { vietnamese: "Hy vọng là", english: "hopefully", unit: 3 }, { vietnamese: "Lựa chọn", english: "option", unit: 3 }, { vietnamese: "Thay vì", english: "instead of", unit: 3 },
        // UNIT 4
        { vietnamese: "Số tám", english: "eight", unit: 4 }, { vietnamese: "Bánh ngọt", english: "cake", unit: 4 }, { vietnamese: "Nho", english: "grape", unit: 4 }, { vietnamese: "Trò chơi", english: "game", unit: 4 }, { vietnamese: "Đợi", english: "wait", unit: 4 }, { vietnamese: "Máy bay", english: "plane", unit: 4 }, { vietnamese: "Sóng", english: "wave", unit: 4 }, { vietnamese: "Kỳ nghỉ", english: "vacation", unit: 4 }, { vietnamese: "Hoàng gia", english: "royal", unit: 4 }, { vietnamese: "Cậu bé", english: "boy", unit: 4 }, { vietnamese: "Ồn ào", english: "noisy", unit: 4 }, { vietnamese: "Giọng nói", english: "voice", unit: 4 }, { vietnamese: "Đồ chơi", english: "toy", unit: 4 }, { vietnamese: "Làm hỏng", english: "spoil", unit: 4 }, { vietnamese: "Lựa chọn", english: "choice", unit: 4 }, { vietnamese: "Nhà vệ sinh", english: "toilet", unit: 4 }, { vietnamese: "Tìm thấy", english: "find", unit: 4 }, { vietnamese: "Tạm biệt", english: "bye", unit: 4 }, { vietnamese: "Nhút nhát", english: "shy", unit: 4 }, { vietnamese: "Mệt mỏi", english: "tired", unit: 4 }, { vietnamese: "Bay", english: "fly", unit: 4 }, { vietnamese: "Bầu trời", english: "sky", unit: 4 }, { vietnamese: "Hòn đảo", english: "island", unit: 4 }, { vietnamese: "Biểu tượng", english: "icon", unit: 4 }, { vietnamese: "Chắc chắn", english: "sure", unit: 4 }, { vietnamese: "Nghèo", english: "poor", unit: 4 }, { vietnamese: "Tức giận", english: "furious", unit: 4 }, { vietnamese: "Du khách", english: "tourist", unit: 4 }, { vietnamese: "Chuyến du lịch", english: "tour", unit: 4 }, { vietnamese: "Châu Âu", english: "Europe", unit: 4 }, { vietnamese: "Trưởng thành", english: "mature", unit: 4 },
        { vietnamese: "Bối rối", english: "confused", unit: 4 }, { vietnamese: "Khó", english: "difficult", unit: 4 }, { vietnamese: "Tốt nghiệp", english: "graduate", unit: 4 }, { vietnamese: "Dường như", english: "seem to", unit: 4 }, { vietnamese: "Bổ sung", english: "extra", unit: 4 }, { vietnamese: "Vừa mới", english: "already", unit: 4 },
        // UNIT 5
        { vietnamese: "Nỗi sợ", english: "fear", unit: 5 }, { vietnamese: "Con hươu", english: "deer", unit: 5 }, { vietnamese: "Cái tai", english: "ear", unit: 5 }, { vietnamese: "Râu", english: "beard", unit: 5 }, { vietnamese: "Bia", english: "beer", unit: 5 }, { vietnamese: "Cổ vũ", english: "cheer", unit: 5 }, { vietnamese: "Sự nghiệp", english: "career", unit: 5 }, { vietnamese: "Năm", english: "year", unit: 5 }, { vietnamese: "Thề", english: "swear", unit: 5 }, { vietnamese: "Quan tâm", english: "care", unit: 5 }, { vietnamese: "Chia sẻ", english: "share", unit: 5 }, { vietnamese: "Cặp/Đôi", english: "pair", unit: 5 }, { vietnamese: "Con gấu", english: "bear", unit: 5 }, { vietnamese: "Tóc", english: "hair", unit: 5 }, { vietnamese: "Không khí", english: "air", unit: 5 }, { vietnamese: "Tầng trên", english: "upstairs", unit: 5 }, { vietnamese: "Màu nâu", english: "brown", unit: 5 }, { vietnamese: "Con bò", english: "cow", unit: 5 }, { vietnamese: "Bông hoa", english: "flower", unit: 5 }, { vietnamese: "Đám mây", english: "cloud", unit: 5 }, { vietnamese: "Tòa tháp", english: "tower", unit: 5 }, { vietnamese: "Tải xuống", english: "download", unit: 5 }, { vietnamese: "Vòi sen", english: "shower", unit: 5 }, { vietnamese: "Giờ", english: "hour", unit: 5 }, { vietnamese: "Chậm", english: "slow", unit: 5 }, { vietnamese: "Già/Cũ", english: "old", unit: 5 }, { vietnamese: "Giữ", english: "hold", unit: 5 }, { vietnamese: "Cái bát", english: "bowl", unit: 5 }, { vietnamese: "Điện thoại", english: "phone", unit: 5 }, { vietnamese: "Vai", english: "shoulder", unit: 5 }, { vietnamese: "Xin chào", english: "hello", unit: 5 }, { vietnamese: "Trò đùa", english: "joke", unit: 5 }
    ];
    const sentenceList = [
        { sentence: "You look pretty good today.", unit: 1 }, { sentence: "Please take a seat.", unit: 1 }, { sentence: "What do you mean?", unit: 1 }, { sentence: "He eats like a pig.", unit: 1 }, { sentence: "Can you speak Vietnamese?", unit: 1 }, { sentence: "Can you move to another group?", unit: 1 }, { sentence: "I am into blue shoes.", unit: 1 }, { sentence: "Everyone listen to me and repeat.", unit: 1 },
        { sentence: "Jack is having an apple for his snack.", unit: 2 }, { sentence: "That person works with my brother.", unit: 2 }, { sentence: "The man plans to take his exam on Wednesday.", unit: 2 }, { sentence: "Are you having fun?", unit: 2 }, { sentence: "My favourite fruit is the banana.", unit: 2 }, { sentence: "I am the number one fan of the show.", unit: 2 }, { sentence: "G-Dragon is a handsome rapper and singer.", unit: 2 }, { sentence: "You stepped on my feet.", unit: 2 }, { sentence: "It hurts.", unit: 2 },
        { sentence: "How far is it from the market to the bar?", unit: 3 }, { sentence: "We went to the wrong restaurant.", unit: 3 }, { sentence: "It is not on the top of the box.", unit: 3 }, { sentence: "She falls in love with a tall man.", unit: 3 }, { sentence: "The ball went between the car and the bus.", unit: 3 }, { sentence: "Harry Potter has a scar on his forehead.", unit: 3 }, { sentence: "What is the weather like today?", unit: 3 }, { sentence: "It is so hot and sunny.", unit: 3 }, { sentence: "Mr Paul is going to the shopping mall in the morning.", unit: 3 }, { sentence: "I promise to love you with all my heart.", unit: 3 }, { sentence: "I miss my wonderful puppy.", unit: 3 },
        { sentence: "The noisy boy over there is very spoiled.", unit: 4 }, { sentence: "Jane and Kate made eight cakes.", unit: 4 }, { sentence: "Roy's choice was to broil the meat in tin foil.", unit: 4 }, { sentence: "I will take a tour to Kuala Lumpur.", unit: 4 }, { sentence: "I can't wait to join you.", unit: 4 }, { sentence: "The boy found his noisy toy.", unit: 4 }, { sentence: "The poor child had to wait for a long time.", unit: 4 }, { sentence: "The four shy boys from the island were annoying.", unit: 4 },
        { sentence: "I don't know what you are talking about.", unit: 5 }, { sentence: "Please give me my phone over there.", unit: 5 }, { sentence: "I swear I was just joking.", unit: 5 }, { sentence: "Honey you can cry on my shoulder.", unit: 5 }, { sentence: "Have a beer! Cheers!", unit: 5 }, { sentence: "You can count on me.", unit: 5 }, { sentence: "My dear friend you should take better care of yourself.", unit: 5 }, { sentence: "The more you share the more you get.", unit: 5 }
    ];
const scrambledWordList = [
    { correct: "ring", image: "images/ring.png", unit: 1 },
    { correct: "sheep", image: "images/sheep.png", unit: 1 },
    { correct: "city", image: "images/city.png", unit: 1 },
    { correct: "please", image: "images/please.png", unit: 1 },
    { correct: "blue", image: "images/blue.png", unit: 1 },
    { correct: "facebook", image: "images/facebook.png", unit: 1 },
    { correct: "sugar", image: "images/sugar.png", unit: 1 },
    { correct: "seat", image: "images/seat.png", unit: 1 },
    { correct: "soup", image: "images/soup.png", unit: 1 },
    { correct: "group", image: "images/group.png", unit: 1 }
    ];

    // --- ELEMENTEN & STATE ---
    const mainMenu = document.getElementById('main-menu');
    const levelSelectionContainer = document.getElementById('level-selection-container');
    const wordsGameContainer = document.getElementById('words-game-container');
    const sentenceGameContainer = document.getElementById('sentence-game-container');
    const scrambleGameContainer = document.getElementById('scramble-game-container');
    let selectedLevel = 0;
    let selectedGameType = '';

    // --- NAVIGATIE ---
    function initializeApp() {
        document.getElementById('start-words-btn').addEventListener('click', () => selectGameType('words'));
        document.getElementById('start-sentences-btn').addEventListener('click', () => selectGameType('sentences'));
        document.getElementById('start-scramble-btn').addEventListener('click', () => selectGameType('scramble'));
        
        document.getElementById('level-back-btn').addEventListener('click', showMenu);
        document.getElementById('words-back-btn').addEventListener('click', showLevelSelection);
        document.getElementById('sentences-back-btn').addEventListener('click', showLevelSelection);
        document.getElementById('scramble-back-btn').addEventListener('click', showMenu);
        
        initializeLevelButtons();
        initializeSentenceGame();
        initializeScrambleGame();
    }
    
    function selectGameType(gameType) {
        selectedGameType = gameType;
        if (gameType === 'scramble') {
            showGameContainer();
        } else {
            showLevelSelection();
        }
    }

    function showLevelSelection() {
        mainMenu.classList.add('hidden');
        wordsGameContainer.classList.add('hidden');
        sentenceGameContainer.classList.add('hidden');
        scrambleGameContainer.classList.add('hidden');
        levelSelectionContainer.classList.remove('hidden');
    }

    function showMenu() {
        levelSelectionContainer.classList.add('hidden');
        wordsGameContainer.classList.add('hidden');
        sentenceGameContainer.classList.add('hidden');
        scrambleGameContainer.classList.add('hidden');
        mainMenu.classList.remove('hidden');
    }

    function showGameContainer() {
        mainMenu.classList.add('hidden');
        levelSelectionContainer.classList.add('hidden');
        wordsGameContainer.classList.add('hidden');
        sentenceGameContainer.classList.add('hidden');
        scrambleGameContainer.classList.add('hidden');

        if (selectedGameType === 'words') {
            wordsGameContainer.classList.remove('hidden');
            startWordsGame();
        } else if (selectedGameType === 'sentences') {
            sentenceGameContainer.classList.remove('hidden');
            startSentenceGame();
        } else if (selectedGameType === 'scramble') {
            scrambleGameContainer.classList.remove('hidden');
            startScrambleGame();
        }
    }
    
    function initializeLevelButtons() {
        const levelList = document.getElementById('level-list');
        const maxUnit = 5;
        levelList.innerHTML = '';
        for (let i = 1; i <= maxUnit; i++) {
            const levelButton = document.createElement('button');
            levelButton.className = 'level-btn';
            levelButton.textContent = 'Unit ' + i;
            levelButton.dataset.level = i;
            levelButton.addEventListener('click', (e) => {
                selectedLevel = parseInt(e.target.dataset.level, 10);
                showGameContainer();
            });
            levelList.appendChild(levelButton);
        }
    }
    
    function speak(text) {
        if ('speechSynthesis' in window) {
            speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            speechSynthesis.speak(utterance);
        }
    }

    // --- WOORDENSPEL LOGICA ---
    let wordsToPractice = [];
    let currentWordIndex = 0;
    let wordGameIsAnswered = false;

    function startWordsGame() {
        wordsToPractice = wordList.filter(word => word.unit <= selectedLevel);
        wordsToPractice.sort(() => 0.5 - Math.random());
        currentWordIndex = 0;
        loadWordQuestion();
    }

    function loadWordQuestion() {
        const vietnameseWordEl = document.getElementById('vietnamese-word');
        const optionsContainerEl = document.getElementById('options-container');
        const feedbackTextEl = document.getElementById('feedback-text');
        if (wordsToPractice.length === 0) {
            alert("Geen woorden gevonden voor dit niveau.");
            showLevelSelection();
            return;
        }
        wordGameIsAnswered = false;
        const currentWord = wordsToPractice[currentWordIndex];
        vietnameseWordEl.textContent = currentWord.vietnamese;
        feedbackTextEl.textContent = "";
        feedbackTextEl.className = 'feedback';
        optionsContainerEl.innerHTML = "";
        const options = [currentWord.english];
        const allWordsForLevel = wordList.filter(word => word.unit <= selectedLevel);
        while (options.length < 4 && options.length < allWordsForLevel.length) {
            const randomWord = allWordsForLevel[Math.floor(Math.random() * allWordsForLevel.length)].english;
            if (!options.includes(randomWord)) {
                options.push(randomWord);
            }
        }
        options.sort(() => 0.5 - Math.random());
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => checkWordAnswer(option, button));
            optionsContainerEl.appendChild(button);
        });
    }

    function checkWordAnswer(selectedOption, button) {
        const feedbackTextEl = document.getElementById('feedback-text');
        if (wordGameIsAnswered) return;
        wordGameIsAnswered = true;
        const correctOption = wordsToPractice[currentWordIndex].english;
        if (selectedOption === correctOption) {
            feedbackTextEl.textContent = "Chính xác!";
            feedbackTextEl.className = 'feedback correct';
            button.classList.add('correct');
            speak(correctOption);
            setTimeout(() => {
                currentWordIndex++;
                if (currentWordIndex >= wordsToPractice.length) {
                    alert("Tuyệt vời! Alle woorden gehad. We beginnen opnieuw!");
                    startWordsGame();
                } else {
                    loadWordQuestion();
                }
            }, 1500);
        } else {
            feedbackTextEl.textContent = "Không đúng, thử lại nhé.";
            feedbackTextEl.className = 'feedback incorrect';
            button.classList.add('incorrect');
            setTimeout(() => {
                wordGameIsAnswered = false;
                button.classList.remove('incorrect');
                feedbackTextEl.textContent = "";
            }, 1500);
        }
    }

    // --- ZINNENSPEL LOGICA ---
    let sentencesToPractice = [];
    let currentSentence = "";
    
    function initializeSentenceGame() {
        document.getElementById('check-sentence-btn').addEventListener('click', checkSentenceAnswer);
        document.getElementById('next-sentence-btn').addEventListener('click', startSentenceGame);
    }
    
    function startSentenceGame() {
        sentencesToPractice = sentenceList.filter(item => item.unit <= selectedLevel);
        loadSentenceQuestion();
    }

    function loadSentenceQuestion() {
        const answerArea = document.getElementById('sentence-answer-area');
        const scrambleArea = document.getElementById('sentence-scramble-area');
        const sentenceFeedback = document.getElementById('sentence-feedback-text');
        const checkBtn = document.getElementById('check-sentence-btn');
        const nextBtn = document.getElementById('next-sentence-btn');
        
        nextBtn.classList.add('hidden');
        checkBtn.classList.remove('hidden');

        if (sentencesToPractice.length === 0) {
            alert("Geen zinnen gevonden voor dit niveau.");
            showLevelSelection();
            return;
        }
        const randomIndex = Math.floor(Math.random() * sentencesToPractice.length);
        currentSentence = sentencesToPractice[randomIndex].sentence;
        
        let words = currentSentence.replace(/[.?,!]/g, '').split(' ');
        words.sort(() => 0.5 - Math.random());
        answerArea.innerHTML = '';
        scrambleArea.innerHTML = '';
        sentenceFeedback.textContent = '';
        sentenceFeedback.className = 'feedback';
        
        words.forEach(word => {
            if (word === "") return;
            const chip = document.createElement('span');
            chip.textContent = word;
            chip.className = 'word-chip';
            chip.addEventListener('click', moveWord);
            scrambleArea.appendChild(chip);
        });
    }

    function moveWord(event) {
        const chip = event.target;
        const answerArea = document.getElementById('sentence-answer-area');
        const scrambleArea = document.getElementById('sentence-scramble-area');
        if (chip.parentElement.id === 'sentence-scramble-area') {
            answerArea.appendChild(chip);
        } else {
            scrambleArea.appendChild(chip);
        }
    }
    
    function checkSentenceAnswer() {
        const answerArea = document.getElementById('sentence-answer-area');
        const sentenceFeedback = document.getElementById('sentence-feedback-text');
        const checkBtn = document.getElementById('check-sentence-btn');
        const nextBtn = document.getElementById('next-sentence-btn');

        let userAnswer = [];
        answerArea.querySelectorAll('.word-chip').forEach(chip => userAnswer.push(chip.textContent));
        const finalAnswer = userAnswer.join(' ');
        const correctAnswer = currentSentence.replace(/[.?,!]/g, '');

        if (finalAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            sentenceFeedback.textContent = "Chính xác!";
            sentenceFeedback.className = 'feedback correct';
            speak(currentSentence);
            checkBtn.classList.add('hidden');
            nextBtn.classList.remove('hidden');
        } else {
            sentenceFeedback.textContent = "Không đúng, thử lại nhé.";
            sentenceFeedback.className = 'feedback incorrect';
        }
    }

    // --- WOORDPUZZEL SPEL LOGICA ---
    let scrambleToPractice = [];
    let currentScrambleIndex = 0;

    function initializeScrambleGame() {
        document.getElementById('check-scramble-btn').addEventListener('click', checkScrambleAnswer);
        document.getElementById('next-scramble-btn').addEventListener('click', () => {
            currentScrambleIndex++;
            loadScrambleQuestion();
        });
    }

    function startScrambleGame() {
        scrambleToPractice = [...scrambledWordList].sort(() => 0.5 - Math.random());
        currentScrambleIndex = 0;
        loadScrambleQuestion();
    }

    function loadScrambleQuestion() {
        const imageEl = document.getElementById('scramble-image');
        const lettersEl = document.getElementById('scrambled-letters-area');
        const inputEl = document.getElementById('scramble-input');
        const feedbackEl = document.getElementById('scramble-feedback-text');
        const nextBtn = document.getElementById('next-scramble-btn');
        const checkBtn = document.getElementById('check-scramble-btn');
        
        if (currentScrambleIndex >= scrambleToPractice.length) {
            alert("Super! Alle puzzels gehad. We beginnen opnieuw!");
            currentScrambleIndex = 0;
        }
        
        const currentPuzzle = scrambleToPractice[currentScrambleIndex];
        
        imageEl.src = currentPuzzle.image;
        
        // Correcte logica om letters te schudden
        let letters = currentPuzzle.correct.split('');
        do {
            letters.sort(() => 0.5 - Math.random());
        } while (letters.join('') === currentPuzzle.correct && letters.length > 1); // Zorg dat het niet hetzelfde is
        
        lettersEl.textContent = letters.join(' ');

        inputEl.value = '';
        feedbackEl.textContent = '';
        feedbackEl.className = 'feedback';
        nextBtn.classList.add('hidden');
        checkBtn.classList.remove('hidden');
        inputEl.disabled = false;
    }

    function checkScrambleAnswer() {
        const inputEl = document.getElementById('scramble-input');
        const feedbackEl = document.getElementById('scramble-feedback-text');
        const nextBtn = document.getElementById('next-scramble-btn');
        const checkBtn = document.getElementById('check-scramble-btn');
        const correctAnswer = scrambleToPractice[currentScrambleIndex].correct;
        
        if (inputEl.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            feedbackEl.textContent = "Chính xác!";
            feedbackEl.className = 'feedback correct';
            speak(correctAnswer);
            checkBtn.classList.add('hidden');
            nextBtn.classList.remove('hidden');
            inputEl.disabled = true;
        } else {
            feedbackEl.textContent = "Không đúng, probeer opnieuw!";
            feedbackEl.className = 'feedback incorrect';
            inputEl.focus();
        }
    }

    // --- Start de app ---
    initializeApp();
});