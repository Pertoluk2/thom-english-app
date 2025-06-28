// Lijst met woorden. Je kunt hier eenvoudig meer woorden toevoegen!
const wordList = [
    // === Algemene Woorden ===
    { vietnamese: "Xin chào", english: "Hello" },
    { vietnamese: "Cảm ơn", english: "Thank you" },
    { vietnamese: "Tốt", english: "Good" },
    { vietnamese: "Tồi", english: "Bad" },
    { vietnamese: "Lá thư", english: "Letter" },
    { vietnamese: "Kì thi", english: "Exam" },
    { vietnamese: "Con số", english: "Number" },
    { vietnamese: "Đồng ý", english: "Agree" },
    { vietnamese: "Sẵn sàng", english: "Ready" },
    { vietnamese: "Bẩn", english: "Dirty" },
    { vietnamese: "Tuyệt vời", english: "Wonderful" },
    { vietnamese: "Ngầu", english: "Cool" },

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
    { vietnamese: "Bạn bè", english: "Friend" },
    { vietnamese: "Kẻ thù", english: "Enemy" },
    { vietnamese: "Gia đình", english: "Family" },
    { vietnamese: "Anh/em trai", english: "Brother" },
    { vietnamese: "Cô gái", english: "Girl" },
    { vietnamese: "Người", english: "Person" },
    { vietnamese: "Rapper", english: "Rapper" },
    { vietnamese: "Ca sĩ", english: "Singer" },

    // === Objecten & Dingen ===
    { vietnamese: "Cái bút", english: "Pen" },
    { vietnamese: "Cái quạt", english: "Fan" },
    { vietnamese: "Cái mũ", english: "Hat" },
    { vietnamese: "Cuốn sách", english: "Book" },
    { vietnamese: "Chiếc nhẫn", english: "Ring" },
    { vietnamese: "Đôi giày", english: "Shoe" },
    { vietnamese: "Hồ bơi", english: "Pool" },
    { vietnamese: "Phim", english: "Movie" },
    { vietnamese: "Đồ ăn", english: "Food" },

    // === Natuur & Dieren ===
    { vietnamese: "Con mèo", english: "Cat" },
    { vietnamese: "Con chó", english: "Dog" },
    { vietnamese: "Con rồng", english: "Dragon" },
    { vietnamese: "Con chim", english: "Bird" },
    { vietnamese: "Quả táo", english: "Apple" },
    { vietnamese: "Quả chuối", english: "Banana" },
    { vietnamese: "Nước", english: "Water" },
    { vietnamese: "Mùa hè", english: "Summer" },
    { vietnamese: "Tự do", english: "Freedom" },
    { vietnamese: "Cây tre", english: "Bamboo" },
    { vietnamese: "Thành phố", english: "City" },

    // === Acties & Concepten ===
    { vietnamese: "Gửi", english: "Send" },
    { vietnamese: "Ngồi", english: "Sit" },
    { vietnamese: "Đá (bóng)", english: "Kick" },
    { vietnamese: "Học", english: "Learn" },
    { vietnamese: "Di chuyển", english: "Move" },
    { vietnamese: "Đau", english: "Hurt" },
    { vietnamese: "Internet", english: "Internet" },
    { vietnamese: "Nhóm", english: "Group" },
    { vietnamese: "Chương trình", english: "Show" }
];

// --- NIEUWE CODE HIERONDER ---

let shuffledWordList = [];
let currentWordIndex = 0;
let isAnswered = false;

// Verwijzingen naar de HTML-elementen
const vietnameseWordEl = document.getElementById('vietnamese-word');
const optionsContainerEl = document.getElementById('options-container');
const feedbackTextEl = document.getElementById('feedback-text');

// Een standaard 'shuffle' functie om de volgorde willekeurig te maken
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Functie om een nieuwe ronde te starten met een geschudde lijst
function startNewRound() {
    // Maak een kopie van de master-lijst en schud deze
    shuffledWordList = [...wordList];
    shuffleArray(shuffledWordList);
    currentWordIndex = 0;
    loadQuestion();
}

// Functie om de audio-uitspraak af te spelen
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Sorry, je browser ondersteunt geen tekst-naar-spraak.");
    }
}

// Functie om de volgende vraag te laden
function loadQuestion() {
    isAnswered = false;
    // Gebruik nu de geschudde lijst
    const currentWord = shuffledWordList[currentWordIndex];

    vietnameseWordEl.textContent = currentWord.vietnamese;
    feedbackTextEl.textContent = "";
    optionsContainerEl.innerHTML = "";

    const options = [currentWord.english];
    // De foute antwoorden kunnen we nog steeds willekeurig uit de originele lijst pakken
    while (options.length < 4) {
        const randomWord = wordList[Math.floor(Math.random() * wordList.length)].english;
        if (!options.includes(randomWord)) {
            options.push(randomWord);
        }
    }

    options.sort(() => Math.random() - 0.5);

    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => checkAnswer(option, button));
        optionsContainerEl.appendChild(button);
    });
}

// Functie om het gekozen antwoord te controleren
function checkAnswer(selectedOption, button) {
    if (isAnswered) return;
    isAnswered = true;

    // Haal het juiste antwoord uit de geschudde lijst
    const correctOption = shuffledWordList[currentWordIndex].english;

    if (selectedOption === correctOption) {
        feedbackTextEl.textContent = "Chính xác! Làm tốt lắm!";
        feedbackTextEl.style.color = "#ec407a";
        button.classList.add('correct');
        
        speak(correctOption);

        setTimeout(() => {
            currentWordIndex++;
            // Controleer of we aan het einde van de geschudde lijst zijn
            if (currentWordIndex >= shuffledWordList.length) {
                alert("Tuyệt vời! Bạn đã hoàn thành tất cả các từ. Chúng ta bắt đầu lại với een nieuwe willekeurige volgorde.");
                startNewRound(); // Start een nieuwe ronde, die de lijst opnieuw schudt
            } else {
                loadQuestion(); // Laad gewoon het volgende woord
            }
        }, 2000);

    } else {
        feedbackTextEl.textContent = "Không đúng, thử lại nhé.";
        feedbackTextEl.style.color = "#757575";
        button.classList.add('incorrect');

        setTimeout(() => {
           isAnswered = false;
           button.classList.remove('incorrect');
           feedbackTextEl.textContent = "";
        }, 1500);
    }
}

// Start de app door een nieuwe, willekeurige ronde te beginnen
document.addEventListener('DOMContentLoaded', startNewRound);