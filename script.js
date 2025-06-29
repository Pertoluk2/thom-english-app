// Lijst met woorden, bijgewerkt op basis van de foto's en het PDF-lesboek.
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


// --- De rest van de code blijft ongewijzigd ---

let shuffledWordList = [];
let currentWordIndex = 0;
let isAnswered = false;

const vietnameseWordEl = document.getElementById('vietnamese-word');
const optionsContainerEl = document.getElementById('options-container');
const feedbackTextEl = document.getElementById('feedback-text');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startNewRound() {
    shuffledWordList = [...wordList];
    shuffleArray(shuffledWordList);
    currentWordIndex = 0;
    loadQuestion();
}

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

function loadQuestion() {
    isAnswered = false;
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

    options.sort(() => Math.random() - 0.5);

    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => checkAnswer(option, button));
        optionsContainerEl.appendChild(button);
    });
}

function checkAnswer(selectedOption, button) {
    if (isAnswered) return;
    isAnswered = true;

    const correctOption = shuffledWordList[currentWordIndex].english;

    if (selectedOption === correctOption) {
        feedbackTextEl.textContent = "Chính xác! Làm tốt lắm!";
        feedbackTextEl.style.color = "#ec407a";
        button.classList.add('correct');
        
        speak(correctOption);

        setTimeout(() => {
            currentWordIndex++;
            if (currentWordIndex >= shuffledWordList.length) {
                alert("Tuyệt vời! Bạn đã hoàn thành tất cả các từ. Chúng ta bắt đầu lại với een nieuwe willekeurige volgorde.");
                startNewRound();
            } else {
                loadQuestion();
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

document.addEventListener('DOMContentLoaded', startNewRound);