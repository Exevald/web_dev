window.onload = main;

function main() {
    const upper_btn = document.getElementsByClassName('upper_frame_button')[0];
    const main_btn = document.getElementsByClassName('upper_frame_main_button')[1];
    upper_btn.addEventListener('click', onBtnClick);
    main_btn.addEventListener('click', onBtnClick);

    let overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');
    overlayDiv.appendChild(createPopup());
    overlayDiv.addEventListener('click', onPopupClose);

    window.addEventListener('scroll', onWindowScroll);

    function onBtnClick() {
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
        `<h3> MyHeader </h3>
         <p> text </p>`;
    return popup;
}