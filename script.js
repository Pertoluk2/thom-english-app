document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // --- DATA (Woorden en Zinnen) ---
    // ===================================================================

    const wordList = [
    // === Gevoelens & Emoties ===
    { vietnamese: "Hạnh phúc", english: "Happy" },
    { vietnamese: "Buồn", english: "Sad" },
    { vietnamese: "Phấn khích", english: "Excited" },
    { vietnamese: "Tức giận", english: "Angry" },
    { vietnamese: "Lo lắng", english: "Nervous" },
    { vietnamese: "Sợ hãi", english: "Scared" },
    { vietnamese: "Tự hào", english: "Proud" },
    { vietnamese: "Mệt mỏi", english: "Exhausted" },
    { vietnamese: "Chán nản", english: "Bored" },
    { vietnamese: "Ghen tị", english: "Jealous" },
    { vietnamese: "Hài lòng", english: "Pleased" },
    { vietnamese: "Thoải mái", english: "Comfortable" },
    { vietnamese: "Biết ơn", english: "Grateful" },
    { vietnamese: "Thích thú", english: "Amused" },

    // === Mensen & Familie ===
    { vietnamese: "Giáo viên", english: "Teacher" },
    { vietnamese: "Bạn bè", english: "Friend" },
    { vietnamese: "Gia đình", english: "Family" },
    { vietnamese: "Anh/em trai", english: "Brother" },
    { vietnamese: "Con trai", english: "Son" },
    { vietnamese: "Mẹ", english: "Mother" },
    { vietnamese: "Chồng", english: "Husband" },
    { vietnamese: "Chú/Bác", english: "Uncle" },
    { vietnamese: "Bố", english: "Father" },
    { vietnamese: "Nông dân", english: "Farmer" },
    { vietnamese: "Con gái", english: "Daughter" },
    { vietnamese: "Người", english: "Person" },
    { vietnamese: "Đàn ông", english: "Men" },
    { vietnamese: "Ca sĩ", english: "Singer" },
    { vietnamese: "Rapper", english: "Rapper" },

    // === Dieren ===
    { vietnamese: "Cún con", english: "Puppy" },
    { vietnamese: "Khỉ", english: "Monkey" },
    { vietnamese: "Lợn", english: "Pig" },
    { vietnamese: "Cá", english: "Fish" },
    { vietnamese: "Gà", english: "Chicken" },
    { vietnamese: "Mèo con", english: "Kitten" },
    { vietnamese: "Cừu", english: "Sheep" },
    { vietnamese: "Rồng", english: "Dragon" },
    { vietnamese: "Chim", english: "Bird" },
    { vietnamese: "Ngựa", english: "Horse" },

    // === Eten & Drinken ===
    { vietnamese: "Mật ong", english: "Honey" },
    { vietnamese: "Cốc/Tách", english: "Cup" },
    { vietnamese: "Táo", english: "Apple" },
    { vietnamese: "Chuối", english: "Banana" },
    { vietnamese: "Đồ ăn vặt", english: "Snack" },
    { vietnamese: "Đồ ăn", english: "Food" },
    { vietnamese: "Bánh pudding", english: "Pudding" },

    // === Objecten & Dingen ===
    { vietnamese: "Ghế", english: "Seat" },
    { vietnamese: "Nhẫn", english: "Ring" },
    { vietnamese: "Tàu", english: "Ship" },
    { vietnamese: "Thành phố", english: "City" },
    { vietnamese: "Giày", english: "Shoe" },
    { vietnamese: "Hồ bơi", english: "Pool" },
    { vietnamese: "Phim", english: "Movie" },
    { vietnamese: "Sách", english: "Book" },
    { vietnamese: "Cây gỗ", english: "Wood" },
    { vietnamese: "Bút", english: "Pen" },
    { vietnamese: "Mũ", english: "Hat" },
    { vietnamese: "Quạt", english: "Fan" },
    { vietnamese: "Album", english: "Album" },
    { vietnamese: "Vết sẹo", english: "Scar" },
    { vietnamese: "Cánh tay", english: "Arm" },
    { vietnamese: "Trái tim", english: "Heart" },
    { vietnamese: "Quán bar", english: "Bar" },
    { vietnamese: "Chợ", english: "Market" },
    { vietnamese: "Xe hơi", english: "Car" },
    { vietnamese: "Bóng", english: "Ball" },
    { vietnamese: "Cửa", english: "Door" },
    { vietnamese: "Sàn nhà", english: "Floor" },

    // === Abstracte Concepten & Bijvoeglijke naamwoorden ===
    { vietnamese: "Xin chào", english: "Hello" },
    { vietnamese: "Làm ơn", english: "Please" },
    { vietnamese: "Cảm thấy", english: "Feel" },
    { vietnamese: "Tuyệt vời", english: "Cool" },
    { vietnamese: "Tốt", english: "Good" },
    { vietnamese: "Màu xanh da trời", english: "Blue" },
    { vietnamese: "Nhóm", english: "Group" },
    { vietnamese: "Mới", english: "New" },
    { vietnamese: "Tuyệt", english: "Great" },
    { vietnamese: "Thú vị", english: "Funny" },
    { vietnamese: "Muộn", english: "Late" },
    { vietnamese: "Thời gian", english: "Time" },
    { vietnamese: "Đúng", english: "Right" },
    { vietnamese: "Tuyệt diệu", english: "Wonderful" },
    { vietnamese: "Mùa hè", english: "Summer" },
    { vietnamese: "Tự do", english: "Freedom" },
    { vietnamese: "Lo lắng", english: "Nervous" },
    { vietnamese: "Xoăn", english: "Curly" },
    { vietnamese: "Bẩn", english: "Dirty" },
    { vietnamese: "Nắng", english: "Sunny" },
    { vietnamese: "Xa", english: "Far" },
    { vietnamese: "Bốn", english: "Four" },
    { vietnamese: "Cao", english: "Tall" },
    { vietnamese: "Mạnh mẽ", english: "Strong" },
    { vietnamese: "Mùa thu", english: "Autumn" },
    { vietnamese: "Xinh đẹp", english: "Pretty" },
    { vietnamese: "Màu đen", english: "Black" },
    { vietnamese: "Màu đỏ", english: "Red" },
    { vietnamese: "Xấu", english: "Bad" },

    // === Werkwoorden (Acties) ===
    { vietnamese: "Nhìn", english: "See" },
    { vietnamese: "Ăn", english: "Eat" },
    { vietnamese: "Ngủ", english: "Sleep" },
    { vietnamese: "Nói", english: "Speak" },
    { vietnamese: "Lắng nghe", english: "Listen" },
    { vietnamese: "Đá", english: "Kick" },
    { vietnamese: "Ngồi", english: "Sit" },
    { vietnamese: "Di chuyển", english: "Move" },
    { vietnamese: "Nấu ăn", english: "Cook" },
    { vietnamese: "Nhìn", english: "Look" },
    { vietnamese: "Chơi", english: "Play" },
    { vietnamese: "Gửi", english: "Send" },
    { vietnamese: "Đồng ý", english: "Agree" },
    { vietnamese: "Học", english: "Learn" },
    { vietnamese: "Làm việc", english: "Work" },
    { vietnamese: "Lướt sóng", english: "Surf" },
    { vietnamese: "Làm đau", english: "Hurt" },
    { vietnamese: "Đốt cháy", english: "Burn" },
    { vietnamese: "Tổ chức tiệc", english: "Party" },
    { vietnamese: "Lờ đi", english: "Ignore" },
    { vietnamese: "Yêu", english: "Love" }
];


 const sentenceList = [
        "The girl is pretty.",
        "My new friends are nice and funny.",
        "My favourite fruit is the banana.",
        "That person works with my brother.",
        "G-Dragon is a handsome rapper and singer.",
        "You stepped on my feet.",
        "The box is on top of the rock.",
        "My mom wants to go to the shop.",
        "The doctor has got a lot of hot coffee.",
        "I am sorry I lost your watch."
	"You look pretty good today!"
	"Please, take a seat."
	"What do you mean?"
	"He eats like a pig."
	"Can you speak Vietnamese?"
	"Can you move to another group?"
	"I am into blues shoes."
	"Everyone, listen to me and repeat."
	"Jack is having an apple for his snack."
	"That Person works with my brother."
	"The  man plans to take his exam on Wednesday."
	"Hey Matt? Are you having fun? - No, I'm very sad."
	"I am the number one fan of the show, Big Bang."
	"Ouch, you stepped on my feet. It hurts."
	
    ];

  
    // ===================================================================
    // --- ALGEMEEN & MENU LOGICA ---
    // ===================================================================

    const mainMenu = document.getElementById('main-menu');
    const wordsGameContainer = document.getElementById('words-game-container');
    const sentenceGameContainer = document.getElementById('sentence-game-container');

    document.getElementById('start-words-btn').addEventListener('click', () => showGame('words'));
    document.getElementById('start-sentences-btn').addEventListener('click', () => showGame('sentences'));
    document.querySelectorAll('.back-to-menu').forEach(btn => btn.addEventListener('click', showMenu));

    function showGame(gameType) {
        mainMenu.classList.add('hidden');
        if (gameType === 'words') {
            wordsGameContainer.classList.remove('hidden');
            startWordsGame();
        } else if (gameType === 'sentences') {
            sentenceGameContainer.classList.remove('hidden');
            startSentenceGame();
        }
    }

    function showMenu() {
        wordsGameContainer.classList.add('hidden');
        sentenceGameContainer.classList.add('hidden');
        mainMenu.classList.remove('hidden');
    }

    function speak(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    }

    // ===================================================================
    // --- WOORDENSPEL LOGICA ---
    // ===================================================================

    let shuffledWordList = [];
    let currentWordIndex = 0;
    let wordGameIsAnswered = false;
    const vietnameseWordEl = document.getElementById('vietnamese-word');
    const optionsContainerEl = document.getElementById('options-container');
    const feedbackTextEl = document.getElementById('feedback-text');

    function startWordsGame() {
        shuffledWordList = [...wordList].sort(() => 0.5 - Math.random());
        currentWordIndex = 0;
        loadWordQuestion();
    }

    function loadWordQuestion() {
        wordGameIsAnswered = false;
        const currentWord = shuffledWordList[currentWordIndex];
        vietnameseWordEl.textContent = currentWord.vietnamese;
        feedbackTextEl.textContent = "";
        optionsContainerEl.innerHTML = "";

        const options = [currentWord.english];
        while (options.length < 4) {
            const randomWord = wordList[Math.floor(Math.random() * wordList.length)].english;
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
        if (wordGameIsAnswered) return;
        wordGameIsAnswered = true;
        const correctOption = shuffledWordList[currentWordIndex].english;

        if (selectedOption === correctOption) {
            feedbackTextEl.textContent = "Chính xác!";
            feedbackTextEl.className = 'correct';
            button.classList.add('correct');
            speak(correctOption);
            setTimeout(() => {
                currentWordIndex++;
                if (currentWordIndex >= shuffledWordList.length) {
                    alert("Tuyệt vời! Hiệp tiếp theo!");
                    startWordsGame();
                } else {
                    loadWordQuestion();
                }
            }, 1500);
        } else {
            feedbackTextEl.textContent = "Không đúng, thử lại nhé.";
            feedbackTextEl.className = 'incorrect';
            button.classList.add('incorrect');
            setTimeout(() => {
                wordGameIsAnswered = false;
                button.classList.remove('incorrect');
                feedbackTextEl.textContent = "";
            }, 1500);
        }
    }


    // ===================================================================
    // --- ZINNENSPEL LOGICA ---
    // ===================================================================
    
    let currentSentence = "";
    const answerArea = document.getElementById('sentence-answer-area');
    const scrambleArea = document.getElementById('sentence-scramble-area');
    const checkSentenceBtn = document.getElementById('check-sentence-btn');
    const nextSentenceBtn = document.getElementById('next-sentence-btn');
    const sentenceFeedback = document.getElementById('sentence-feedback-text');

    function startSentenceGame() {
        nextSentenceBtn.classList.add('hidden');
        checkSentenceBtn.classList.remove('hidden');
        checkSentenceBtn.disabled = false;
        loadSentenceQuestion();
    }

    function loadSentenceQuestion() {
        currentSentence = sentenceList[Math.floor(Math.random() * sentenceList.length)];
        let words = currentSentence.replace(/[.?]/g, '').split(' ');
        words.sort(() => 0.5 - Math.random());

        answerArea.innerHTML = '';
        scrambleArea.innerHTML = '';
        sentenceFeedback.textContent = '';
        
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
        if (chip.parentElement.id === 'sentence-scramble-area') {
            answerArea.appendChild(chip);
        } else {
            scrambleArea.appendChild(chip);
        }
    }
    
    checkSentenceBtn.addEventListener('click', () => {
        let userAnswer = [];
        answerArea.querySelectorAll('.word-chip').forEach(chip => userAnswer.push(chip.textContent));
        const finalAnswer = userAnswer.join(' ');
        const correctAnswer = currentSentence.replace(/[.?]/g, '');

        if (finalAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            sentenceFeedback.textContent = "Chính xác!";
            sentenceFeedback.className = 'feedback correct';
            speak(currentSentence);
            checkSentenceBtn.classList.add('hidden');
            checkSentenceBtn.disabled = true;
            nextSentenceBtn.classList.remove('hidden');
        } else {
            sentenceFeedback.textContent = "Không đúng, thử lại nhé.";
            sentenceFeedback.className = 'feedback incorrect';
        }
    });

    nextSentenceBtn.addEventListener('click', startSentenceGame);

});