let startBtn = document.querySelector('.start-batn');
let section = document.querySelector('.section');

startBtn.addEventListener('click', function () {
    section.innerHTML = `<h2>Выбор активности. <br>Можно выбрать только что-то одно</br></h2>
    <article class="article">
        <button class='glowing-btn glowing-batn' id= 'картинг'><span class='glowing-txt glowing-text' id= картинг>Двух уро<span class='faulty-letter' id= картинг>вневы</span>й карт<span class='faulty-letter' id= картинг>инг</span></button>
        <button class='glowing-btn glowing-batn ' id= 'Катание на баги или квадрацикле'><span class='glowing-txt  glowing-text' id= 'Катание на баги или квадрацикле'>Катан<span class='faulty-letter' id= 'Катание на баги или квадрацикле'>ие на ба</span>ги или квадр<span class='faulty-letter' id= 'Катание на баги или квадрацикле'>ацикле</span></button>
        <button class='glowing-btn glowing-batn' id= 'SUP-serf'><span class='glowing-txt glowing-text'id= 'SUP-serf'>SUP<span class='faulty-letter'id= 'SUP-serf'>-s</span>erf</button>
        <button class='glowing-btn glowing-batn' id= 'Wake board'><span class='glowing-txt glowing-text'id= 'Wake board'>wak<span class='faulty-letter'id= 'Wake board'>e bo</span>ard</button>
        <button class='glowing-btn glowing-batn' id= 'Мини-гольф'><span class='glowing-txt glowing-text' id= 'Мини-гольф'>игра<span class='faulty-letter'id= 'Мини-гольф'> в ми</span>ни-го<span class='faulty-letter'id= 'Мини-гольф'>льф</span></button>
    </article>`
    checkEvents()
})

let newBats = document.querySelectorAll('.glowing-batn');

let btns = document.querySelectorAll('.glowing-batton');

let bats = document.querySelectorAll('.bat');

let placeChange = ''

function checkPlace(eventChange, eatsChange) {
    bats = document.querySelectorAll('.bat');
    bats.forEach(btn => {
        btn.addEventListener('click', function (event) {
            placeChange = event.target.id
            section.innerHTML = ` <h2>На этом все <br>Вот что ты выбрала</h2>
            <article class= "article">
            <button class='glowing-btn glowing-batn first'><span class='glowing-txt glowing-text'>${eventChange}</button>
                <button class='glowing-btn glowing-batton second'><span class='glowing-txt glowing-texts'>${eatsChange}</button>
                <button class='glowing-btn bat third'><span class='glowing-txt'>${placeChange}</button>
                </article>
                <h2>Сдейлай скриншот или фото и пришли мне</h2>
            `
        })
    })
}

let eatsChange = '';

function checkEats(eventChange) {
    btns = document.querySelectorAll('.glowing-batton');
    btns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            eatsChange = event.target.id
            section.innerHTML = ` <h2 >Выбор места для поездки за город. <br>Можно выбрать только что-то одно</br></h2>
            <article class="article palce-art">
                <button class='glowing-btn bat' id= 'Озеро Свитязь'><span class='glowing-txt'id= 'Озеро Свитязь'>Озе<span class='faulty-letter'id= 'Озеро Свитязь'>ро св</span>итязь</button>
                <button class='glowing-btn bat' id= 'Браславские озера'><span class='glowing-txt'id= 'Браславские озера'>Брас<span class='faulty-letterid= 'Браславские озера''>лавск</span>ие оз<span class='faulty-letter'id= 'Браславские озера'>ера</span></button>
                <button class='glowing-btn bat' id= 'Нарач'><span class='glowing-txt ' id= 'Нарач'>На<span class='faulty-letter'  id= 'Нарач'>ро</span>ч</button>
                <button class='glowing-btn bat' id= 'Витебск'><span class='glowing-txt'  id= 'Витебск'>Вит<span class='faulty-letter' id= 'Витебск'>еб</span>ск</button>
                <button class='glowing-btn bat' id= 'Гродно'><span class='glowing-txt' id= 'Гродно'>Гр<span class='faulty-letter' id= 'Гродно'>од</span>н<span class="faulty-letter" id= 'Гродно'>о</span></button>
                <button class='glowing-btn bat' id= 'Беловежская пуща'><span class='glowing-txt' id= 'Беловежская пуща'>Белове<span class='faulty-letter' id= 'Беловежская пуща'>жская</span> пу<span class='faulty-letter' id= 'Беловежская пуща'>ща</span></button>
            </article>`
            console.log(eventChange)
    checkPlace(eventChange, eatsChange)
        })
    })
}

let eventChange = ''
function checkEvents() {
    newBats = document.querySelectorAll('.glowing-batn');
    newBats.forEach(btn => {
        btn.addEventListener('click', function (event) {
            eventChange = event.target.id
            section.innerHTML = `<h2>Выбор заведения для посидеть и покушать. <br>Можно выбрать только что-то одно</br></h2>
        
            <article class="article">
                <button class='glowing-btn glowing-batton' id= 'Кальянная'><span class='glowing-txt glowing-texts'id= 'Кальянная'>Каль<span class='faulty-letter'id= 'Кальянная'>янн</span>ая</button>
                <button class='glowing-btn glowing-batton' id= 'Бар'><span class='glowing-txt glowing-texts' id= 'Бар'>Б<span class='faulty-letter' id= 'Бар'>ар</span></button>
                <button class='glowing-btn glowing-batton' id= 'Ресторан'><span class='glowing-txt glowing-texts' id= 'Ресторан'>Рес<span class='faulty-letter' id= 'Ресторан'>тор</span>ан</button>
                <button class='glowing-btn glowing-batton' id= 'Кофейня'><span class='glowing-txt glowing-texts' id= 'Кофейня'>Коф<span class='faulty-letter' id= 'Кофейня'>ей</span>ня</button>
                <button class='glowing-btn glowing-batton' id= 'Кафе с завтраками'><span class='glowing-txt glowing-texts'id= 'Кафе с завтраками'>кафе<span class='faulty-letter'id= 'Кафе с завтраками'> с завт</span>рака<span class='faulty-letter'id= 'Кафе с завтраками'>ми</span></button>
            </article> 
    `
    checkEats(eventChange)
        })
    }) 
}

