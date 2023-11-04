
    let arrow = document.getElementById("arrow")
    let card = document.getElementById('cardToggle')
    let login = document.getElementById('login')
    let signup = document.getElementById('signup')
    let cardSign = document.getElementById("cardSign")
    let cardLog = document.getElementById("cardLog")
    let button = document.querySelectorAll("button")
    let flag = true
    arrow.addEventListener("click", () => {

        if (flag) {
            arrow.classList.remove('left-0', 'rotate-[122deg]')
            arrow.classList.add('rotate-[222deg]', 'left-[90%]')
            card.classList.remove('[transform:perspective(800px)rotateY(0deg)]')
            card.classList.add('[transform:perspective(800px)rotateY(180deg)]')
            login.classList.toggle('[transform:scale(1.5)]')
            signup.classList.toggle('[transform:scale(1.5)]')

            flag = false
        }
        else {
            arrow.classList.remove('left-[90%]', 'rotate-[222deg]')
            arrow.classList.add('left-0', 'rotate-[122deg]')
            card.classList.remove('[transform:perspective(800px)rotateY(180deg)]')
            card.classList.add('[transform:perspective(800px)rotateY(0deg)]')
            login.classList.toggle('[transform:scale(1.5)]')
            signup.classList.toggle('[transform:scale(1.5)]')
            flag = true
        }
    })

    let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let regexUsername = /^[0-9A-Za-z]{6,16}$/;
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    button.forEach((val) => {
        val.addEventListener('click', (e) => {
            let getCard = e.target.getAttribute("data-num")
            validation(getCard)
        })
    })
    let temp
    function validation(num) {
        temp=0
        let choose = card.querySelectorAll('div:nth-child(' + num + ')')
        let selectP = choose[0].querySelector("p")
        choose.forEach((val) => {
            let inputs = val.querySelectorAll("input")
            inputs.forEach((val) => {
                if (val.value != "") {
                    if (val.type == 'password') {
                        regexPassword.test(val.value) ? temp++ : selectP.innerText = 'invalid Password!'
                    }
                    if (val.type == 'text') {
                        regexUsername.test(val.value) ? temp++ : selectP.innerText = 'invalid Username!'
                    }
                    if (val.type == 'email') {
                        regexEmail.test(val.value) ? temp++ : selectP.innerHTML = 'invalid Email!' 
                    }
                }
                else {
                    selectP.innerText = 'Fill form!'
                }
                if(inputs.length== temp){
                    selectP.innerHTML="WELCOME!"
                }
            })
        })
    }




