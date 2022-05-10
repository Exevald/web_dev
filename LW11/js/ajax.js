window.onload = main;

function main() {
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

            const response = await fetch('/form_handle.php', {
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

    function checkEmail () {
        // Каждый раз, когда пользователь что-то вводит,

        // мы проверяем, являются ли поля формы валидными
        if(email.validity.typeMismatch) {
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
}

