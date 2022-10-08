function login() 
{
    var name = prompt('Введите имя пользователя', '');
    name = name.replace(' ', '');
    if (name === '')
        alert("Ошибка в имени");
    if (name.trim() != ''){
        document.getElementById("login_EN").style.display='none';
        document.getElementById("logout_EN").style.display='block'

        document.getElementById("login_RU").style.display='none';
        document.getElementById("logout_RU").style.display='block'

        let hello_ru = document.getElementById("welcome_RU");
    	hello_ru.innerText = "Привет, " + name;

        let hello_en = document.getElementById("welcome_EN");
    	hello_en.innerText = "Hello, " + name;
    }
}

function logout()
{
    document.getElementById("login_EN").style.display='block'
    document.getElementById("logout_EN").style.display='none';

    document.getElementById("login_RU").style.display='block'
    document.getElementById("logout_RU").style.display='none';

    let hello_ru = document.getElementById("welcome_RU");
    hello_ru.innerText = "Привет пользователь";

    let hello_en = document.getElementById("welcome_EN");
    hello_en.innerText = "Hello, user";

}