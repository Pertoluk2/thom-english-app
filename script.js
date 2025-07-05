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
    // AANGEPAST: Elk zin-object heeft nu een 'vietnamese' eigenschap
    const sentenceList = [
        { sentence: "You look pretty good today.", vietnamese: "Hôm nay bạn trông khá ổn.", unit: 1 },
        { sentence: "Please take a seat.", vietnamese: "Xin mời ngồi.", unit: 1 },
        { sentence: "What do you mean?", vietnamese: "Bạn có ý gì?", unit: 1 },
        { sentence: "He eats like a pig.", vietnamese: "Anh ấy ăn như một con heo.", unit: 1 },
        { sentence: "Can you speak Vietnamese?", vietnamese: "Bạn có nói được tiếng Việt không?", unit: 1 },
        { sentence: "Can you move to another group?", vietnamese: "Bạn có thể chuyển sang nhóm khác không?", unit: 1 },
        { sentence: "I am into blue shoes.", vietnamese: "Tôi thích giày màu xanh dương.", unit: 1 },
        { sentence: "Everyone listen to me and repeat.", vietnamese: "Mọi người nghe tôi và lặp lại.", unit: 1 },
        { sentence: "Jack is having an apple for his snack.", vietnamese: "Jack đang ăn một quả táo cho bữa ăn nhẹ của mình.", unit: 2 },
        { sentence: "That person works with my brother.", vietnamese: "Người đó làm việc với anh trai tôi.", unit: 2 },
        { sentence: "The man plans to take his exam on Wednesday.", vietnamese: "Người đàn ông đó dự định thi vào thứ Tư.", unit: 2 },
        { sentence: "Are you having fun?", vietnamese: "Bạn đang vui vẻ không?", unit: 2 },
        { sentence: "My favourite fruit is the banana.", vietnamese: "Trái cây yêu thích của tôi là chuối.", unit: 2 },
        { sentence: "I am the number one fan of the show.", vietnamese: "Tôi là fan số một của chương trình đó.", unit: 2 },
        { sentence: "G-Dragon is a handsome rapper and singer.", vietnamese: "G-Dragon là một rapper và ca sĩ đẹp trai.", unit: 2 },
        { sentence: "You stepped on my feet.", vietnamese: "Bạn đã dẫm lên chân tôi.", unit: 2 },
        { sentence: "It hurts.", vietnamese: "Đau quá.", unit: 2 },
        { sentence: "How far is it from the market to the bar?", vietnamese: "Từ chợ đến quán bar bao xa?", unit: 3 },
        { sentence: "We went to the wrong restaurant.", vietnamese: "Chúng tôi đã đến nhầm nhà hàng.", unit: 3 },
        { sentence: "It is not on the top of the box.", vietnamese: "Nó không nằm trên đỉnh hộp.", unit: 3 },
        { sentence: "She falls in love with a tall man.", vietnamese: "Cô ấy yêu một người đàn ông cao lớn.", unit: 3 },
        { sentence: "The ball went between the car and the bus.", vietnamese: "Quả bóng bay giữa xe hơi và xe buýt.", unit: 3 },
        { sentence: "Harry Potter has a scar on his forehead.", vietnamese: "Harry Potter có một vết sẹo trên trán.", unit: 3 },
        { sentence: "What is the weather like today?", vietnamese: "Thời tiết hôm nay thế nào?", unit: 3 },
        { sentence: "It is so hot and sunny.", vietnamese: "Trời rất nóng và nắng.", unit: 3 },
        { sentence: "Mr Paul is going to the shopping mall in the morning.", vietnamese: "Ông Paul sẽ đi trung tâm mua sắm vào buổi sáng.", unit: 3 },
        { sentence: "I promise to love you with all my heart.", vietnamese: "Anh hứa sẽ yêu em bằng cả trái tim.", unit: 3 },
        { sentence: "I miss my wonderful puppy.", vietnamese: "Tôi nhớ chú cún con đáng yêu của tôi.", unit: 3 },
        { sentence: "The noisy boy over there is very spoiled.", vietnamese: "Cậu bé ồn ào đằng kia rất hư hỏng.", unit: 4 },
        { sentence: "Jane and Kate made eight cakes.", vietnamese: "Jane và Kate đã làm tám cái bánh.", unit: 4 },
        { sentence: "Roy's choice was to broil the meat in tin foil.", vietnamese: "Lựa chọn của Roy là nướng thịt trong giấy bạc.", unit: 4 },
        { sentence: "I will take a tour to Kuala Lumpur.", vietnamese: "Tôi sẽ đi du lịch Kuala Lumpur.", unit: 4 },
        { sentence: "I can't wait to join you.", vietnamese: "Tôi nóng lòng muốn tham gia cùng bạn.", unit: 4 },
        { sentence: "The boy found his noisy toy.", vietnamese: "Cậu bé tìm thấy món đồ chơi ồn ào của mình.", unit: 4 },
        { sentence: "The poor child had to wait for a long time.", vietnamese: "Đứa trẻ tội nghiệp phải đợi rất lâu.", unit: 4 },
        { sentence: "The four shy boys from the island were annoying.", vietnamese: "Bốn cậu bé nhút nhát từ hòn đảo thật phiền phức.", unit: 4 },
        { sentence: "I don't know what you are talking about.", vietnamese: "Tôi không biết bạn đang nói về cái gì.", unit: 5 },
        { sentence: "Please give me my phone over there.", vietnamese: "Làm ơn đưa cho tôi điện thoại của tôi ở đằng kia.", unit: 5 },
        { sentence: "I swear I was just joking.", vietnamese: "Tôi thề là tôi chỉ đùa thôi.", unit: 5 },
        { sentence: "Honey you can cry on my shoulder.", vietnamese: "Em yêu, em có thể khóc trên vai anh.", unit: 5 },
        { sentence: "Have a beer! Cheers!", vietnamese: "Uống một ly bia đi! Chúc mừng!", unit: 5 },
        { sentence: "You can count on me.", vietnamese: "Bạn có thể tin tưởng vào tôi.", unit: 5 },
        { sentence: "My dear friend you should take better care of yourself.", vietnamese: "Bạn thân mến, bạn nên chăm sóc bản thân tốt hơn.", unit: 5 },
        { sentence: "The more you share the more you get.", vietnamese: "Bạn càng chia sẻ, bạn càng nhận được nhiều hơn.", unit: 5 },
        // NIEUW: Zinnen voor de "Luk en Thom" unit met Vietnamese vertalingen
        { sentence: "What are you doing?", vietnamese: "Bạn đang làm gì vậy?", unit: "Luk en Thom" },
        { sentence: "I was thinking of how lucky I am to have met you.", vietnamese: "Anh đang nghĩ mình may mắn thế nào khi gặp em.", unit: "Luk en Thom" },
        { sentence: "I just got home from work.", vietnamese: "Tôi vừa đi làm về.", unit: "Luk en Thom" },
        { sentence: "Do you have to study today?", vietnamese: "Hôm nay bạn có phải học không?", unit: "Luk en Thom" },
        { sentence: "How was your day at work?", vietnamese: "Ngày làm việc của bạn thế nào?", unit: "Luk en Thom" },
        { sentence: "Glad you had a nice day.", vietnamese: "Mừng là bạn đã có một ngày vui vẻ.", unit: "Luk en Thom" },
        { sentence: "Your English is getting better.", vietnamese: "Tiếng Anh của bạn đang tiến bộ hơn.", unit: "Luk en Thom" },
        { sentence: "How was your day today?", vietnamese: "Ngày hôm nay của bạn thế nào?", unit: "Luk en Thom" },
        { sentence: "My day was good.", vietnamese: "Ngày của tôi tốt.", unit: "Luk en Thom" },
        { sentence: "I know you are happy.", vietnamese: "Tôi biết bạn đang vui.", unit: "Luk en Thom" },
        { sentence: "Yes, I agree.", vietnamese: "Vâng, tôi đồng ý.", unit: "Luk en Thom" },
        { sentence: "Ok, I understand.", vietnamese: "Ok, tôi hiểu rồi.", unit: "Luk en Thom" },
        { sentence: "Ok, what unit are you studying?", vietnamese: "Ok, bạn đang học unit nào?", unit: "Luk en Thom" },
        { sentence: "Thank you for working so hard on learning English.", vietnamese: "Cảm ơn bạn đã nỗ lực rất nhiều để học tiếng Anh.", unit: "Luk en Thom" },
        { sentence: "I am a man.", vietnamese: "Tôi là một người đàn ông.", unit: "Luk en Thom" },
        { sentence: "There is a group of men standing there.", vietnamese: "Có một nhóm đàn ông đang đứng ở đó.", unit: "Luk en Thom" },
        { sentence: "Try to relax also.", vietnamese: "Cũng cố gắng thư giãn nhé.", unit: "Luk en Thom" },
        { sentence: "Do you work tomorrow?", vietnamese: "Ngày mai bạn có làm việc không?", unit: "Luk en Thom" },
        { sentence: "At what time do you start work?", vietnamese: "Bạn bắt đầu làm việc lúc mấy giờ?", unit: "Luk en Thom" },
        { sentence: "I don't work tomorrow.", vietnamese: "Ngày mai tôi không làm việc.", unit: "Luk en Thom" },
        { sentence: "On Sunday I never work.", vietnamese: "Vào Chủ Nhật tôi không bao giờ làm việc.", unit: "Luk en Thom" },
        { sentence: "You work long days.", vietnamese: "Bạn làm việc nhiều giờ trong ngày.", unit: "Luk en Thom" },
        { sentence: "Do you like your job?", vietnamese: "Bạn có thích công việc của mình không?", unit: "Luk en Thom" },
        { sentence: "I don’t have a day off.", vietnamese: "Tôi không có ngày nghỉ.", unit: "Luk en Thom" },
        { sentence: "Yes, I do. I like my job.", vietnamese: "Vâng, tôi có. Tôi thích công việc của tôi.", unit: "Luk en Thom" },
        { sentence: "I like my job.", vietnamese: "Tôi thích công việc của tôi.", unit: "Luk en Thom" },
        { sentence: "You are very good at your job.", vietnamese: "Bạn rất giỏi trong công việc của mình.", unit: "Luk en Thom" },
        { sentence: "Will you exercise tomorrow morning?", vietnamese: "Sáng mai bạn có tập thể dục không?", unit: "Luk en Thom" },
        { sentence: "Yes, I do. I will train tomorrow.", vietnamese: "Vâng, tôi có. Tôi sẽ tập luyện vào ngày mai.", unit: "Luk en Thom" },
        { sentence: "That is very good of you.", vietnamese: "Bạn thật tốt.", unit: "Luk en Thom" },
        { sentence: "You are improving a lot.", vietnamese: "Bạn đang tiến bộ rất nhiều.", unit: "Luk en Thom" },
        { sentence: "What time is it?", vietnamese: "Bây giờ là mấy giờ?", unit: "Luk en Thom" },
        { sentence: "It’s 22:45.", vietnamese: "Bây giờ là 22:45.", unit: "Luk en Thom" },
        { sentence: "Here it is 17:45.", vietnamese: "Ở đây là 17:45.", unit: "Luk en Thom" },
        { sentence: "How tall are you?", vietnamese: "Bạn cao bao nhiêu?", unit: "Luk en Thom" },
        { sentence: "I am 1m64.", vietnamese: "Tôi cao 1m64.", unit: "Luk en Thom" },
        { sentence: "How old are you?", vietnamese: "Bạn bao nhiêu tuổi?", unit: "Luk en Thom" },
        { sentence: "I am 44 years old.", vietnamese: "Tôi 44 tuổi.", unit: "Luk en Thom" },
        { sentence: "What do you do?", vietnamese: "Bạn làm nghề gì?", unit: "Luk en Thom" },
        { sentence: "I work as a manager.", vietnamese: "Tôi làm quản lý.", unit: "Luk en Thom" },
        { sentence: "I am a freelancer.", vietnamese: "Tôi là một người làm tự do.", unit: "Luk en Thom" },
        { sentence: "What did you eat this evening?", vietnamese: "Tối nay bạn đã ăn gì?", unit: "Luk en Thom" },
        { sentence: "I ate pho bo.", vietnamese: "Tôi đã ăn phở bò.", unit: "Luk en Thom" },
        { sentence: "We do it together.", vietnamese: "Chúng ta cùng làm điều đó.", unit: "Luk en Thom" },
        { sentence: "You are beyond beautiful.", vietnamese: "Bạn đẹp hơn rất nhiều.", unit: "Luk en Thom" },
        { sentence: "Good night princess.", vietnamese: "Chúc ngủ ngon công chúa.", unit: "Luk en Thom" },
        // Nieuw toegevoegde zinnen met Vietnamese vertalingen
        { sentence: "How are you?", vietnamese: "Bạn khỏe không?", unit: "Luk en Thom" },
        { sentence: "I'm fine, thank you. And you?", vietnamese: "Tôi khỏe, cảm ơn. Còn bạn thì sao?", unit: "Luk en Thom" },
        { sentence: "See you soon!", vietnamese: "Hẹn gặp lại sớm nhé!", unit: "Luk en Thom" },
        { sentence: "Have a good day!", vietnamese: "Chúc một ngày tốt lành!", unit: "Luk en Thom" },
        { sentence: "Where are you?", vietnamese: "Bạn đang ở đâu?", unit: "Luk en Thom" },
        { sentence: "I am at home.", vietnamese: "Tôi đang ở nhà.", unit: "Luk en Thom" },
        { sentence: "Are you busy?", vietnamese: "Bạn có bận không?", unit: "Luk en Thom" },
        { sentence: "No, I am not busy.", vietnamese: "Không, tôi không bận.", unit: "Luk en Thom" },
        { sentence: "Yes, I am busy.", vietnamese: "Có, tôi bận.", unit: "Luk en Thom" },
        { sentence: "What do you like?", vietnamese: "Bạn thích gì?", unit: "Luk en Thom" },
        { sentence: "I like this.", vietnamese: "Tôi thích cái này.", unit: "Luk en Thom" },
        { sentence: "Do you understand?", vietnamese: "Bạn có hiểu không?", unit: "Luk en Thom" },
        { sentence: "Yes, I understand.", vietnamese: "Vâng, tôi hiểu.", unit: "Luk en Thom" },
        { sentence: "No, I don't understand.", vietnamese: "Không, tôi không hiểu.", unit: "Luk en Thom" },
        { sentence: "When do you start work?", vietnamese: "Bạn bắt đầu làm việc khi nào?", unit: "Luk en Thom" },
        { sentence: "I start work at [tijd].", vietnamese: "Tôi bắt đầu làm việc lúc [thời gian].", unit: "Luk en Thom" },
        { sentence: "Do you enjoy your job?", vietnamese: "Bạn có thích công việc của mình không?", unit: "Luk en Thom" },
        { sentence: "I enjoy my job.", vietnamese: "Tôi thích công việc của tôi.", unit: "Luk en Thom" },
        { sentence: "Are you studying now?", vietnamese: "Bây giờ bạn có đang học không?", unit: "Luk en Thom" },
        { sentence: "Yes, I am studying.", vietnamese: "Vâng, tôi đang học.", unit: "Luk en Thom" },
        { sentence: "Are you happy?", vietnamese: "Bạn có vui không?", unit: "Luk en Thom" },
        { sentence: "I am happy.", vietnamese: "Tôi vui.", unit: "Luk en Thom" },
        { sentence: "I am tired.", vietnamese: "Tôi mệt.", unit: "Luk en Thom" },
        { sentence: "I am excited.", vietnamese: "Tôi hào hứng.", unit: "Luk en Thom" },
        { sentence: "What did you eat?", vietnamese: "Bạn đã ăn gì?", unit: "Luk en Thom" },
        { sentence: "I ate [voedsel].", vietnamese: "Tôi đã ăn [món ăn].", unit: "Luk en Thom" },
        { sentence: "Are you hungry?", vietnamese: "Bạn có đói không?", unit: "Luk en Thom" },
        { sentence: "Yes, I am hungry.", vietnamese: "Vâng, tôi đói.", unit: "Luk en Thom" },
        { sentence: "No, I am not hungry.", vietnamese: "Không, tôi không đói.", unit: "Luk en Thom" }
    ];
// AANGEPAST: scrambeledWordList is nu uitgebreid
const scrambledWordList = [
    { correct: "ring", image: "images/ring.png", unit: 1 },
    { correct: "sheep", image: "images/sheep.png", unit: 1 },
    { correct: "city", image: "images/city.png", unit: 1 },
    { correct: "please", image: "images/please.png", unit: 1 },
    { correct: "blue", image: "images/blue.png", unit: 1 },
    { correct: "facebook", image: "images/facebook.png", unit: 1 },
    { correct: "sugar", image: "images/sugar.png", unit: 1 },
    { correct: "seat", image: "images/seat.png", unit: 1 },
    { correct: "soup", image: "images/soup.png", unit: 1 }, // Soup is niet op pag 6-20, maar was al aanwezig.
    { correct: "group", image: "images/group.png", unit: 1 },

    // Nieuwe puzzels van de opgegeven pagina's
    // Unit 1 (Pagina 6-7)
    { correct: "see", image: "images/see.png", unit: 1 },
    { correct: "teacher", image: "images/teacher.png", unit: 1 },
    { correct: "eat", image: "images/eat.png", unit: 1 },
    { correct: "sleep", image: "images/sleep.png", unit: 1 },
    { correct: "speak", image: "images/speak.png", unit: 1 },
    { correct: "Vietnamese", image: "images/vietnamese.png", unit: 1 },
    { correct: "feel", image: "images/feel.png", unit: 1 },
    { correct: "pig", image: "images/pig.png", unit: 1 },
    { correct: "fish", image: "images/fish.png", unit: 1 },
    { correct: "chicken", image: "images/chicken.png", unit: 1 },
    { correct: "kitten", image: "images/kitten.png", unit: 1 },
    { correct: "listen", image: "images/listen.png", unit: 1 },
    { correct: "kick", image: "images/kick.png", unit: 1 },
    { correct: "sit", image: "images/sit.png", unit: 1 },
    { correct: "ship", image: "images/ship.png", unit: 1 },
    { correct: "cool", image: "images/cool.png", unit: 1 },
    { correct: "shoe", image: "images/shoe.png", unit: 1 },
    { correct: "move", image: "images/move.png", unit: 1 },
    { correct: "pool", image: "images/pool.png", unit: 1 },
    { correct: "movie", image: "images/movie.png", unit: 1 },
    { correct: "youtube", image: "images/youtube.png", unit: 1 },
    { correct: "food", image: "images/food.png", unit: 1 },
    { correct: "bamboo", image: "images/bamboo.png", unit: 1 },
    { correct: "good", image: "images/good.png", unit: 1 },
    { correct: "cook", image: "images/cook.png", unit: 1 },
    { correct: "book", image: "images/book.png", unit: 1 },
    { correct: "look", image: "images/look.png", unit: 1 },
    { correct: "wood", image: "images/wood.png", unit: 1 },
    { correct: "foot", image: "images/foot.png", unit: 1 },
    { correct: "football", image: "images/football.png", unit: 1 },

    // Unit 2 (Pagina 10-12)
    { correct: "ten", image: "images/ten.png", unit: 2 },
    { correct: "men", image: "images/men.png", unit: 2 },
    { correct: "red", image: "images/red.png", unit: 2 },
    { correct: "pen", image: "images/pen.png", unit: 2 },
    { correct: "friend", image: "images/friend.png", unit: 2 },
    { correct: "head", image: "images/head.png", unit: 2 },
    { correct: "send", image: "images/send.png", unit: 2 },
    { correct: "letter", image: "images/letter.png", unit: 2 },
    { correct: "ready", image: "images/ready.png", unit: 2 },
    { correct: "internet", image: "images/internet.png", unit: 2 },
    { correct: "black", image: "images/black.png", unit: 2 },
    { correct: "hat", image: "images/hat.png", unit: 2 },
    { correct: "dragon", image: "images/dragon.png", unit: 2 },
    { correct: "fan", image: "images/fan.png", unit: 2 },
    { correct: "apple", image: "images/apple.png", unit: 2 },
    { correct: "happy", image: "images/happy.png", unit: 2 },
    { correct: "sad", image: "images/sad.png", unit: 2 },
    { correct: "bad", image: "images/bad.png", unit: 2 },
    { correct: "man", image: "images/man.png", unit: 2 },
    { correct: "exam", image: "images/exam.png", unit: 2 },
    { correct: "wonderful", image: "images/wonderful.png", unit: 2 },
    { correct: "brother", image: "images/brother.png", unit: 2 },
    { correct: "summer", image: "images/summer.png", unit: 2 },
    { correct: "family", image: "images/family.png", unit: 2 },
    { correct: "album", image: "images/album.png", unit: 2 },
    { correct: "agree", image: "images/agree.png", unit: 2 },
    { correct: "enemy", image: "images/enemy.png", unit: 2 },
    { correct: "freedom", image: "images/freedom.png", unit: 2 },
    { correct: "banana", image: "images/banana.png", unit: 2 },
    { correct: "number", image: "images/number.png", unit: 2 },
    { correct: "nervous", image: "images/nervous.png", unit: 2 },
    { correct: "curly", image: "images/curly.png", unit: 2 },
    { correct: "girl", image: "images/girl.png", unit: 2 },
    { correct: "learn", image: "images/learn.png", unit: 2 },
    { correct: "work", image: "images/work.png", unit: 2 },
    { correct: "dirty", image: "images/dirty.png", unit: 2 },
    { correct: "bird", image: "images/bird.png", unit: 2 },
    { correct: "surf", image: "images/surf.png", unit: 2 },
    { correct: "hurt", image: "images/hurt.png", unit: 2 },
    { correct: "burn", image: "images/burn.png", unit: 2 },

    // Unit 3 (Pagina 15-16)
    { correct: "son", image: "images/son.png", unit: 3 },
    { correct: "mother", image: "images/mother.png", unit: 3 },
    { correct: "husband", image: "images/husband.png", unit: 3 },
    { correct: "uncle", image: "images/uncle.png", unit: 3 },
    { correct: "monkey", image: "images/monkey.png", unit: 3 },
    { correct: "puppy", image: "images/puppy.png", unit: 3 },
    { correct: "honey", image: "images/honey.png", unit: 3 },
    { correct: "cup", image: "images/cup.png", unit: 3 },
    { correct: "sunny", image: "images/sunny.png", unit: 3 },
    { correct: "bus", image: "images/bus.png", unit: 3 },
    { correct: "father", image: "images/father.png", unit: 3 },
    { correct: "farmer", image: "images/farmer.png", unit: 3 },
    { correct: "scar", image: "images/scar.png", unit: 3 },
    { correct: "arm", image: "images/arm.png", unit: 3 },
    { correct: "heart", image: "images/heart.png", unit: 3 },
    { correct: "party", image: "images/party.png", unit: 3 },
    { correct: "bar", image: "images/bar.png", unit: 3 },
    { correct: "market", image: "images/market.png", unit: 3 },
    { correct: "far", image: "images/far.png", unit: 3 },
    { correct: "car", image: "images/car.png", unit: 3 },
    { correct: "four", image: "images/four.png", unit: 3 },
    { correct: "tall", image: "images/tall.png", unit: 3 },
    { correct: "strong", image: "images/strong.png", unit: 3 },
    { correct: "daughter", image: "images/daughter.png", unit: 3 },
    { correct: "ball", image: "images/ball.png", unit: 3 },
    { correct: "horse", image: "images/horse.png", unit: 3 },
    { correct: "door", image: "images/door.png", unit: 3 },
    { correct: "floor", image: "images/floor.png", unit: 3 },
    { correct: "ignore", image: "images/ignore.png", unit: 3 },
    { correct: "autumn", image: "images/autumn.png", unit: 3 },

    // Unit 4 (Pagina 19-20)
    { correct: "eight", image: "images/eight.png", unit: 4 },
    { correct: "cake", image: "images/cake.png", unit: 4 },
    { correct: "grape", image: "images/grape.png", unit: 4 },
    { correct: "game", image: "images/game.png", unit: 4 },
    { correct: "wait", image: "images/wait.png", unit: 4 },
    { correct: "plane", image: "images/plane.png", unit: 4 },
    { correct: "wave", image: "images/wave.png", unit: 4 },
    { correct: "vacation", image: "images/vacation.png", unit: 4 },
    { correct: "royal", image: "images/royal.png", unit: 4 },
    { correct: "boy", image: "images/boy.png", unit: 4 },
    { correct: "noisy", image: "images/noisy.png", unit: 4 },
    { correct: "voice", image: "images/voice.png", unit: 4 },
    { correct: "toy", image: "images/toy.png", unit: 4 },
    { correct: "spoil", image: "images/spoil.png", unit: 4 },
    { correct: "choice", image: "images/choice.png", unit: 4 },
    { correct: "toilet", image: "images/toilet.png", unit: 4 },
    { correct: "find", image: "images/find.png", unit: 4 },
    { correct: "bye", image: "images/bye.png", unit: 4 },
    { correct: "shy", image: "images/shy.png", unit: 4 },
    { correct: "tired", image: "images/tired.png", unit: 4 },
    { correct: "fly", image: "images/fly.png", unit: 4 },
    { correct: "sky", image: "images/sky.png", unit: 4 },
    { correct: "island", image: "images/island.png", unit: 4 },
    { correct: "icon", image: "images/icon.png", unit: 4 },
    { correct: "sure", image: "images/sure.png", unit: 4 },
    { correct: "poor", image: "images/poor.png", unit: 4 },
    { correct: "furious", image: "images/furious.png", unit: 4 },
    { correct: "tourist", image: "images/tourist.png", unit: 4 },
    { correct: "tour", image: "images/tour.png", unit: 4 },
    { correct: "europe", image: "images/europe.png", unit: 4 },
    { correct: "kualalumpur", image: "images/kualalumpur.png", unit: 4 }, // Let op: Kuala Lumpur is 2 woorden, samengevoegd voor afbeeldingsnaam
    { correct: "mature", image: "images/mature.png", unit: 4 }
    ];

    // --- ELEMENTEN & STATE ---
    const mainMenu = document.getElementById('main-menu');
    const levelSelectionContainer = document.getElementById('level-selection-container');
    const wordsGameContainer = document.getElementById('words-game-container');
    const sentenceGameContainer = document.getElementById('sentence-game-container');
    const scrambleGameContainer = document.getElementById('scramble-game-container');
    let selectedLevel = 0; // Deze variabele zal nu ook string-waarden kunnen bevatten voor unit namen.
    let selectedGameType = '';

    // --- NAVIGATIE ---
    function initializeApp() {
        document.getElementById('start-words-btn').addEventListener('click', () => selectGameType('words'));
        document.getElementById('start-sentences-btn').addEventListener('click', () => selectGameType('sentences'));
        document.getElementById('start-scramble-btn').addEventListener('click', () => selectGameType('scramble'));
        
        document.getElementById('level-back-btn').addEventListener('click', showMenu);
        document.getElementById('words-back-btn').addEventListener('click', showLevelSelection);
        document.getElementById('sentences-back-btn').addEventListener('click', showLevelSelection);
        document.getElementById('scramble-back-btn').addEventListener('click', showLevelSelection); // AANGEPAST: Scramble back button gaat ook naar level selection
        
        initializeLevelButtons(); // Initialiseer de knoppen bij het starten van de app
        initializeSentenceGame();
        initializeScrambleGame();
    }
    
    function selectGameType(gameType) {
        selectedGameType = gameType;
        // Scramble game heeft nu ook een unit selectie, dus altijd naar showLevelSelection
        showLevelSelection();
        // Belangrijk: Update de level-knoppen wanneer we naar de level-selectie gaan
        initializeLevelButtons(); 
    }

    function showLevelSelection() {
        mainMenu.classList.add('hidden');
        wordsGameContainer.classList.add('hidden');
        sentenceGameContainer.classList.add('hidden');
        scrambleGameContainer.classList.add('hidden');
        levelSelectionContainer.classList.remove('hidden');
        // Zorg ervoor dat de level-knoppen worden bijgewerkt
        initializeLevelButtons(); 
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
    
    // AANGEPASTE FUNCTIE: initializeLevelButtons()
    function initializeLevelButtons() { 
        const levelList = document.getElementById('level-list');
        levelList.innerHTML = ''; // Maak bestaande knoppen leeg

        // Verzamel alle unieke units die relevant zijn voor de geselecteerde game type
        const uniqueUnits = new Set();
        let listToFilter = [];

        if (selectedGameType === 'words') {
            listToFilter = wordList;
        } else if (selectedGameType === 'sentences') {
            listToFilter = sentenceList;
        } else if (selectedGameType === 'scramble') {
            listToFilter = scrambledWordList;
        }

        listToFilter.forEach(item => uniqueUnits.add(item.unit));
        
        // Sorteer de units: numerieke units eerst, dan tekstuele alfabetisch
        const sortedUnits = Array.from(uniqueUnits).sort((a, b) => {
            const isANumber = typeof a === 'number';
            const isBNumber = typeof b === 'number';

            if (isANumber && isBNumber) {
                return a - b; // Sorteer numeriek
            } else if (isANumber) {
                return -1; // Nummers komen voor tekst
            } else if (isBNumber) {
                return 1; // Nummers komen voor tekst
            } else {
                return String(a).localeCompare(String(b)); // Sorteer tekstueel
            }
        });

        sortedUnits.forEach(unit => {
            const levelButton = document.createElement('button');
            levelButton.className = 'level-btn';
            levelButton.textContent = typeof unit === 'number' ? `Unit ${unit}` : unit; // Toon "Unit X" of de tekstuele naam
            levelButton.dataset.level = unit; // Sla de unit waarde (nummer of string) op
            levelButton.addEventListener('click', (e) => {
                selectedLevel = e.target.dataset.level; 
                // Converteer naar nummer als het een numerieke string is, anders behoud string
                if (!isNaN(selectedLevel) && selectedLevel !== "") {
                    selectedLevel = parseInt(selectedLevel, 10);
                }
                showGameContainer();
            });
            levelList.appendChild(levelButton);
        });
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
        wordsToPractice = wordList.filter(word => {
            // Als selectedLevel een nummer is, filter dan op units <= selectedLevel
            if (typeof selectedLevel === 'number') {
                return word.unit <= selectedLevel;
            }
            // Als selectedLevel een string is, filter dan op exacte overeenkomst
            return word.unit === selectedLevel;
        });
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
        
        // AANGEPAST: Haal alle woorden op die relevant zijn voor de huidige selectie
        let allWordsForSelection;
        if (typeof selectedLevel === 'number') {
             allWordsForSelection = wordList.filter(word => word.unit <= selectedLevel);
        } else {
             allWordsForSelection = wordList.filter(word => word.unit === selectedLevel);
        }

        while (options.length < 4 && options.length < allWordsForSelection.length) {
            const randomWord = allWordsForSelection[Math.floor(Math.random() * allWordsForSelection.length)].english;
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
        sentencesToPractice = sentenceList.filter(item => {
            if (typeof selectedLevel === 'number') {
                return item.unit <= selectedLevel;
            }
            return item.unit === selectedLevel;
        });
        
        if (sentencesToPractice.length === 0) {
            alert("Geen zinnen gevonden voor dit niveau.");
            showLevelSelection();
            return;
        }
        loadSentenceQuestion();
    }

    function loadSentenceQuestion() {
        const vietnameseSentenceTranslationEl = document.getElementById('vietnamese-sentence-translation'); 
        const answerArea = document.getElementById('sentence-answer-area');
        const scrambleArea = document.getElementById('sentence-scramble-area');
        const sentenceFeedback = document.getElementById('sentence-feedback-text');
        const checkBtn = document.getElementById('check-sentence-btn');
        const nextBtn = document.getElementById('next-sentence-btn');
        
        nextBtn.classList.add('hidden');
        checkBtn.classList.remove('hidden');

        const randomIndex = Math.floor(Math.random() * sentencesToPractice.length);
        const currentSentenceObject = sentencesToPractice[randomIndex]; 
        currentSentence = currentSentenceObject.sentence; 
        vietnameseSentenceTranslationEl.textContent = currentSentenceObject.vietnamese; 
        
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

        if (finalAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) { 
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
        scrambleToPractice = scrambledWordList.filter(item => {
            if (typeof selectedLevel === 'number') {
                return item.unit <= selectedLevel;
            }
            return item.unit === selectedLevel;
        });

        if (scrambleToPractice.length === 0) {
            alert("Geen puzzels gevonden voor dit niveau.");
            showLevelSelection();
            return;
        }

        scrambleToPractice.sort(() => 0.5 - Math.random());
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
            startScrambleGame(); 
            return;
        }
        
        const currentPuzzle = scrambleToPractice[currentScrambleIndex];
        
        imageEl.src = currentPuzzle.image;
        
        let letters = currentPuzzle.correct.split('');
        do {
            letters.sort(() => 0.5 - Math.random());
        } while (letters.join('') === currentPuzzle.correct && letters.length > 1); 
        
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