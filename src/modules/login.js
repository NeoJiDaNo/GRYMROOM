const login = () => {

    const btnMR = document.querySelector('.header-items__item-reg-btnReg')
    const btnML = document.querySelectorAll('.header-items__item-reg-btnLogin')
    const btnReg = document.querySelector('.popup-registr-items__item__form-btn')
    const btnLog = document.querySelector('.popup-login-items__item__form-btn')
    const popup = document.querySelector('.popup-registr')
    const popupL = document.querySelector('.popup-login')

    const blockMR = document.querySelector('.header-items__item-reg-blockLogin')
    const blockML = document.querySelector('.header-items__item-reg-blockReg')
    const area = document.querySelector('.header-items__item-reg')

    const inputFN = document.querySelector('#fullName')
    const inputL = document.querySelector('#login')
    const inputE = document.querySelector('#email')
    const inputP = document.querySelector('#pass')
    const inputPR = document.querySelector('#passr')
    const checkbox = document.querySelector('#check').checked
    
    const inputLL = document.querySelector('#loginl')
    const inputPL = document.querySelector('#passl')

    let passArr = []
    
    let user = {
        id: 1337,
        login: 'admin',
        pass: 'admin',
        fullname: 'admin',
        email: 'admin'
    }
    
    let userl = {
        login: '',
        pass: ''
    }
    
    passArr.push(user)
    // localStorage.setItem('object', JSON.stringify(passArr))
    passArr = JSON.parse(localStorage.getItem('object'))
    console.log(passArr)
    let id = passArr.length
    

    document.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.closest('.header-items__item-reg-blockReg')) {
            popup.style.visibility = 'inherit'
        } else if (e.target.contains(popup)) {
            popup.style.visibility = 'hidden'
        }
        if (e.target.closest('.popup-registr-items__item__form-btn')) {
            getReg()
        }
        if (e.target.closest('.header-items__item-reg-btnLogin')) {
            popupL.style.visibility = 'inherit'
        } else if (e.target.contains(popupL)) {
            popupL.style.visibility = 'hidden'
        }
        if (e.target.closest('.popup-login-items__item__form-btn')) {
            getLog()
        }
    })

    const getReg = () => {
        if (inputFN.value !== '' || inputL.value !== '' || inputE.value !== '' || inputP.value !== '' || inputPR.value !== '') {
            if (inputP.value == inputPR.value) {
                if (checkbox == true) {
                    id++
                    user = {
                        id: id,
                        login: inputL.value,
                        pass: inputP.value,
                        fullname: inputFN.value,
                        email: inputE.value
                    }
                    passArr.push(user)
                    localStorage.setItem('object', JSON.stringify(passArr))
                    inputFN.value = ''
                    inputE.value = ''
                    inputL.value = ''
                    inputP.value = ''
                    inputPR.value = ''
                    alert('Регистрация прошла успешно!')
                } else {
                    alert('Не поставленно соглашение')
                    return
                }
            } else {
                alert('Пароли не совпадают')
                return
            }
        } else {
            alert('Должны быть заполненны все поля')
            return
        }
    }

    const getLog = () => {
        if (inputLL.value !== '' || inputPL.value !== '') {
            userl = {
                login: inputLL.value,
                pass: inputPL.value
            }
            passArr.forEach(elem => {
                if (elem.login == userl.login && elem.pass == userl.pass) {
                    alert('Вы успешно вошли в аккаунт')
                    blockMR.remove()
                    blockML.remove()
                    const div = document.createElement('div')
                    div.classList.add('header-items__item-reg-blockzak')
                    const divd = document.createElement('div')
                    divd.classList.add('header-items__item-reg-zak')
                    divd.classList.add('btn')
                    divd.innerText = 'Мои заказы'
                    div.appendChild(divd)
                    const divq = document.createElement('div')
                    divq.classList.add('header-items__item-reg-blockquit')
                    const divqu = document.createElement('div')
                    divqu.classList.add('header-items__item-reg-quit')
                    divqu.id = 'btnS'
                    divqu.innerText = 'Выйти'
                    divq.appendChild(divqu)
                    const divA = document.createElement('div')
                    divA.classList.add('header-items__item-reg-blockAva')
                    const p = document.createElement('p')
                    p.classList.add('header-items__item-reg-ava')
                    p.innerText = elem.id
                    divA.appendChild(p)
                    area.appendChild(div)
                    area.appendChild(divq)
                    area.appendChild(divA)
                    popupL.style.visibility = 'hidden'
                } else {
                    return
                }
            })
        } else {
            alert('Должны быть заполненны все поля')
            return
        }
    }

}

export default login