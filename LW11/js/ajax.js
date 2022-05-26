window.onload = main;

debugger

function main() {

    function popUp() {
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

            const sendFormBtn = document.getElementsByClassName('submit-block')[0];
            sendFormBtn.addEventListener('click', sendForm);
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
            <form class="form-section" method="POST" action="">
                <label>
                    <input class="input-wrap" type="text" name="name" id="ajax-form_name" placeholder="Ваше имя"/>
                </label>
                <label>
                    <input class="input-wrap" type="text" name="email" id="ajax-form_email" placeholder="Email"/>
                </label>
                    <select name="%activity%" class="input-wrap" id="ajax-form-activity">
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

    popUp();

    let blackout = document.createElement('div');
    blackout.classList.add('blackout');

    async function popupClose() {
        const overlay = document.getElementsByClassName('overlay')[0]
        setTimeout(() => {
            document.body.removeChild(overlay)
        }, 220)
        popUp.classList.remove('popUpShow')
        blackout.classList.remove('blackoutShow')
    }

    async function sendForm(e) {
        e.preventDefault(); //предотвращаем перезагрузку страницы

        const email = document.getElementById('ajax-form_email');
        const name = document.getElementById('ajax-form_name');
        const activity = document.getElementById('ajax-form-activity');


        if (checkEmail(email)) { //пример проверки email

            let data = JSON.stringify({
                name: name.value,
                email: email.value,
                activity: activity.value,
            });

            const response = await fetch('../php/action_ajax_form.php', {
                method: 'POST', //мы отправляем данные на сервер, значит POST
                body: data, // отправляем ранее созданный json объект data
                headers: {
                    'Content-Type': 'application/json' //отправляем заголовки запроса
                }
            });

            let content = await response.json();

            if (!response.ok) {
                alert(`An error has occurred: ${response.status}`);
                console.log(content);
            } else {
                alert(`An error has occurred: ${response.status}`);
                console.log(content);
                await popupClose();
            }
        }
    }

    function checkEmail(email) {
        // Каждый раз, когда пользователь что-то вводит,
        if ((email.validity.typeMismatch) || (email.validity.valueMissing)) {
            email.setCustomValidity("I am expecting an e-mail address!");
            showError(email);
            return false;
        }

        email.setCustomValidity("");
        return true;
    }

    function showError(el) {
        // Задаём соответствующую стилизацию
        el.classList.add('error-form');
    }
}


