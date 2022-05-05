window.onload = main;

function main() {
    const upper_btn = document.getElementsByClassName('upper_frame_button')[0];
    const main_btn = document.getElementsByClassName('upper_frame_main_button')[0];
    upper_btn.addEventListener('click', onBtnClick);
    main_btn.addEventListener('click', onBtnClick);

    let overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');
    overlayDiv.appendChild(createPopup());
    overlayDiv.addEventListener('click', onPopupClose);

    window.addEventListener('scroll', onWindowScroll);

    function onBtnClick(event) {
        document.body.appendChild(overlayDiv)
    }

    function onWindowScroll() {
        overlayDiv.style.top = window.scrollY + 'px';
    }

    function onPopupClose(event) {
        const overlay = document.getElementsByClassName('overlay')[0];
        document.body.removeChild(overlay);
    }
}

function createPopup() {
    const popup = document.createElement('div');
    popup.innerHTML =
        `<div class="form-wrap">
        <img class="image-welcome" src="images/welcome.png" alt="welcome">
        <h2 class="form-text">Записаться на курс</h2>
        <form class="form-section" action="register.php" method="POST">
            <label>
                <input class="input-wrap" type="text" name="name" placeholder="Ваше имя"/>
            </label>
            <label>
                <input class="input-wrap" type="text" name="email" placeholder="Email"/>
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
                <input type="submit" class="submit-block" value="Записаться на курс"/>
            </p>
        </form>
    </div>`;
    return popup;
}