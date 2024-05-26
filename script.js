let question_field = document.querySelector('.test_question')
let answer_buttons = document.querySelectorAll('.test_answer')
let container_h3 = document.querySelector('.test_title')
let container_main = document.querySelector('.test_container')
let container_start = document.querySelector('.container_start')

let start_button = document.querySelector('.test_start')

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}


class Question {
    constructor(question,answer_1,answer_2,correct,answer_4,answer_5) {
        this.question = question
        this.correct = correct
        this.answers = [
            answer_1,
            answer_2,
            this.correct,
            answer_4,
            answer_5,
        ]
    }


    display () {
        question_field.innerHTML = this.question
        shuffle(this.answers)
        for (let i = 0; i < this.answers.length; i += 1) {
            answer_buttons[i].innerHTML = this.answers[i]
        }
    }
}


let current_questions = [
    new Question("between", "Яблуко", "Ананас", "Між", "Автомат", "Камаз"),
    new Question("wait", "річка", "погода", "Очікувати", "вино", "залік"),
    new Question("audience", "краса", "спокій", "аудиторія", "замок", "блиск"),
    new Question("listen", "парк", "сміх", "Слухати", "ночі", "причіп"),
    new Question("fork", "смак", "день", "Виделка", "цвіт", "магія"),
    new Question("pineapple", "хліб", "міль", "Ананас", "купець", "сонце"),
    new Question("lips", "гора", "лід", "Губи", "струм", "смак"),
    new Question("stand", "туман", "зима", "Стояти", "гаманець", "річка"),
    new Question("key", "канал", "сміття", "Ключ", "погода", "вино"),
    new Question("confused", "крапля", "стаття", "Розгублений", "гора", "смак"),
    new Question("behind", "барва", "трава", "Ззаду", "диван", "примара"),
    new Question("reliable", "пісок", "сміття", "Надійний", "хмара", "кіно"),
    new Question("circus", "скло", "місто", "Цирк", "фонтан", "мотор"),
    new Question("finger", "тумба", "двері", "Палець", "радість", "мураха"),
    new Question("pencil", "кружка", "вогонь", "Олівець", "лісник", "світ"),
    new Question("Chair", "диван", "кухня", "Стілець", "долар", "слово"),
    new Question("service", "пил", "пісок", "Обслуговування", "тепло", "мураха"),
    new Question("advice", "мармур", "книга", "Поради", "гора", "світ"),
    new Question("gate", "шар", "думка", "Ворота", "страх", "зірка"),
    new Question("capital", "життя", "матч", "Капітал", "вулиця", "пісок"),
    new Question("indusrty", "фонтан", "ліс", "Промисловість", "день", "смак"),
    new Question("living", "магія", "парк", "Життя", "скло", "гора"),
    new Question("parents", "радість", "вітер", "Батьки", "міль", "річка"),
    new Question("feature", "причіп", "лід", "Функція", "тумба", "двері"),
    new Question("ease", "пил", "думка", "Легкість", "скло", "гора"),
    new Question("inflation", "шар", "слово", "Інфляція", "тепло", "мураха"),
    new Question("salad", "книга", "фонтан", "Салат", "вулиця", "пісок"),
    new Question("ability", "мармур", "місто", "Здатність", "страх", "зірка"),
    new Question("guide", "кружка", "вогонь", "Керівництво", "лісник", "світ"),
    new Question("convey", "парк", "сміх", "Передати", "ночі", "причіп"),
    new Question("fetch", "день", "трава", "Принести", "диван", "примара"),
    new Question("biased", "річка", "погода", "Упереджений", "вино", "залік"),
    new Question("equitable", "канал", "сміття", "Справедливий", "погода", "вино"),
    new Question("contribute", "річка", "погода", "Сприяти", "вино", "залік"),
    new Question("blur", "гора", "ліс", "Розмиття", "день", "трава"),
    new Question("arise", "тумба", "двері", "Виникають", "радість", "мураха"),
    new Question("dedicate", "день", "трава", "Присвятити", "диван", "примара"),
    new Question("brush", "пісок", "підлога", "Пензлик", "гора", "смак"),
    new Question("source", "шар", "думка", "Джерело", "страх", "зірка"),
    new Question("implode", "парк", "сміх", "Вибухнути", "ночі", "причіп"),
    new Question("crowd", "кружка", "вогонь", "Натовп", "лісник", "світ"),
    new Question("bray", "диван", "кухня", "Неприємний різкий звук", "долар", "слово"),
    new Question("field", "магія", "парк", "Поле", "скло", "гора"),
    new Question("indiscriminate", "пілінг", "баскетбол", "Невибірковий", "догма", "розум"),
    new Question("passenger", "повітря", "стіл", "Пасажир", "серце", "голова"),
    new Question("preference", "глобус", "палка", "Перевага", "дракон", "почуття"),
    new Question("edge", "печінка", "гора", "Краю", "коробка", "кінь"),
    new Question("shiny", "світло", "хмара", "Блискучий", "золото", "пісок"),
    new Question("extensive", "перо", "літак", "Екстенсивний", "життя", "радість"),
    new Question("force", "космос", "вогонь", "Сила", "вітер", "день"),
    new Question("snoopy", "дім", "ніч", "Підглядає", "кіт", "пес"),
    new Question("macabre", "цукор", "страх", "Жахливий", "кров", "череп"),
    new Question("proof", "промінь", "літо", "Доказ", "темрява", "кінь"),
    new Question("sacrificial", "пастка", "перець", "Жертовний", "золото", "душа"),
    new Question("amount", "гроші", "рак", "Сума", "туман", "зима"),
    new Question("starving", "пороги", "поле", "Голодуючий", "міцність", "ліки"),
    new Question("frighten", "сніг", "день", "Налякати", "дим", "принцип"),
    new Question("fuzzy", "море", "сонце", "Нечіткий", "дощ", "тепло"),
    new Question("expert", "страх", "мозок", "Експерт", "харч", "вітер"),
    new Question("frame", "дракон", "почуття", "Рамка", "профіль", "магія"),
    new Question("pin", "джинси", "солід", "Шпилька", "нитка", "голка"),
    new Question("bear", "ліс", "країна", "Ведмідь", "парк", "кріт")
]


let correct_answers_given = 0
let total_answers_given = 0
let current_question = current_questions[0]
start_button.addEventListener('click', function () {
    container_main.style.display = 'block'
    container_start.style.display = 'none'
    total_answers_given = 0
    shuffle(current_questions)
    current_question = current_questions[0]
    current_question.display()
    setTimeout(function () {
        container_main.style.display = 'none'
        container_start.style.display = 'flex'
        start_button.innerHTML = 'Ще раз'

    container_h3.innerHTML = 
    `Ви дали ${correct_answers_given} правильних відповідей із ${total_answers_given}. 
    Точність - ${Math.round(correct_answers_given * 100 / total_answers_given)}%.`
        }, 15000)
})







for (let i = 0; i < answer_buttons.length; i += 1) {
    answer_buttons[i].addEventListener('click', function() {
        if (answer_buttons[i].innerHTML == current_question.correct) {
            console.log("Правильно")
            correct_answers_given += 1
            answer_buttons[i].style.background = '#00FF00'
            anime({
                targets: answer_buttons[i],
                backgroundColor: '#a8dadc',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })

        } else {
            console.log("Неправильно")
            answer_buttons[i].style.background = '#FF0000'
            anime({
                targets: answer_buttons[i],
                backgroundColor: '#a8dadc',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })

        }


        total_answers_given += 1
        current_question = current_questions[total_answers_given]
        current_question.display()
    })
}
