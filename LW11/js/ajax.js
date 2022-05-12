window.onload = popUp

debugger

const sendFormBtn = document.getElementById('send-btn');
const email = document.getElementById('ajax-form_email');
const name = document.getElementById('ajax-form_name');

sendFormBtn.addEventListener('click', sendForm);

async function sendForm() {
    if (checkEmail()) {
        // 1. - Чтобы имя состояло только из буквенных символов, иначе подсвечивается красным после нажатия на кнопку
        // 2. + Email проверялся на валидность, в случае невалидности подсвечивается красным после нажатия на кнопку
        // 3. + Если поле пустое, то поле подсвечивается красным, как в дизайне.

        let data = JSON.stringify({
            name: document.getElementById('ajax-form_name').value,
            email: document.getElementById('ajax-form_email').value
        });

        const response = await fetch('../php/form_handle.php', {
            method: 'POST', //мы отправляем данные на сервер, значит POST
            body: data, // отправляем ранее созданный json объект data
            headers: {
                'Content-Type': 'application/json' //отправляем заголовки запроса
            }
        });

        if (response.ok) {
            // если HTTP-статус в диапазоне 200-299
            alert('4. В случае успешного результата попап с формой должен закрыться. ');
        } else if (response.status === 500) {
            // иначе, что-то пошло не так, говорим об этом пользователю.
            alert('В случае 500 ошибки все элементы попапа удаляются и появляется сообщение: Упс… Произошла ошибка!');
        } else {
            alert('Код ошибки: '.response.status);
        }
    }
}

function checkEmail() {
    // Каждый раз, когда пользователь что-то вводит,
    // мы проверяем, являются ли поля формы валидными
    if (email.validity.typeMismatch) {
        showError(email);
        return false;
    } else if (email.validity.valueMissing) {
        showError(email);
        return false;
    }

    return true;
}

function showError(el) {
    // Задаём соответствующую стилизацию
    el.classList.add('error-form');
}

async function popUp() {
    let animationDelay = 1;
    let upButton = document.getElementsByClassName('upper_frame_button')[0]
    let mainButton = document.getElementsByClassName('upper_frame_main_button')[0]

    let popUp = document.createElement('div')
    let overlay = document.createElement('div')
    let blackout = document.createElement('div');
    blackout.classList.add('blackout');

    upButton.addEventListener('click', onButtonClick)
    mainButton.addEventListener('click', onButtonClick)
    blackout.addEventListener('click', popupClose)
    window.addEventListener('scroll', onWindowScroll)
    overlay.classList.add('overlay')
    overlay.appendChild(blackout)
    overlay.appendChild(createPopup())

    document.addEventListener('keydown', function (event) {
        if (event.code === 'Escape')
            popupClose()
    });

    function onButtonClick() {
        document.body.appendChild(overlay)
        setTimeout(() => {
            popUp.classList.add('popUpShow')
            blackout.classList.add('blackoutShow')
        }, animationDelay)
        const cross = document.getElementsByClassName('form-crossbar__image')[0];
        cross.addEventListener('click', popupClose)
    }

    function onWindowScroll() {
        overlay.style.top = window.scrollY + 'px'
    }

    function createPopup() {
        popUp.classList.add('popUp');
        popUp.innerHTML =
            `<div class="form-wrap">
            <div class="form-crossbar">
                <img src="images/form-exit.png" alt="exit" class="form-crossbar__image"/>
            </div>
            <img class="image-welcome" src="images/welcome.png" alt="welcome">
            <h2 class="form-text">Записаться на курс</h2>
            <form class="form-section" method="POST">
                <label>
                    <input class="input-wrap" type="text" name="name" id="ajax-form_name" placeholder="Ваше имя"/>
                </label>
                <label>
                    <input class="input-wrap" type="text" name="email" id="ajax-form_email" placeholder="Email"/>
                </label>
                    <select name="%activity%" class="input-wrap">
                        <option selected disabled>Деятельность</option>
                        <option value="programmer">Программист</option>
                        <option value="designer">Дизайнер</option>
                        <option value="marketer">Маркетолог</option>
                    </select>
                <div class="checkbox-block-wrap">
                    <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" class="subscribe-block">
                    <label for="subscribeNews" class="checkbox-text">Согласен получать информационные материалы о старте курса</label>
                </div>
                <p>
                    <input type="submit" id="send-btn" class="submit-block" value="Записаться на курс"/>
                </p>
            </form>
        </div>`;
        return popUp
    }

    function popupClose() {
        const overlay = document.getElementsByClassName('overlay')[0]
        setTimeout(() => {
            document.body.removeChild(overlay)
        }, 220)
        popUp.classList.remove('popUpShow')
        blackout.classList.remove('blackoutShow')
    }
}

