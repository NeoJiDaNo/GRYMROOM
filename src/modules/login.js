const login = () => {

    const btnMR = document.querySelector('.header-items__item-reg-btnReg')
    const btnReg = document.querySelector('.popup-registr-items__item__form-btn')
    const popup = document.querySelector('.popup-registr')

    const inputFN = document.querySelector('#fullName')
    const inputL = document.querySelector('#login')
    const inputE = document.querySelector('#email')
    const inputP = document.querySelector('#pass')
    const inputPR = document.querySelector('#passr')
    const checkbox = document.querySelector('#check').checked

    console.log(checkbox);
    
    let id = 1
    let passArr = []

    let user = {
        id: '1',
        login: 'admin',
        pass: 'admin',
        fullname: 'admin',
        email: 'admin'
    }

    passArr.push(user)

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

    // btnR.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     divR.classList.add('popup-reg')
    // })

    // btnLogin.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     if (input1.value !== '' && input2.value !== '') {
    //         console.log(passArr);
    //         user = {
    //             login: input1.value,
    //             pass: input2.value
    //         }
    //         passArr.forEach(elem => {
    //             console.log(elem.login);
    //           if (elem.login == user.login && elem.pass == user.pass) {
    //               div.classList.remove('popup-reg')
    //               input1.value = ''
    //               input2.value = ''
    //           } else {
    //               return
    //           }
    //         })
    //     }
    // })

    // btnRReg.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     if (input1R.value !== '' && input2R.value !== '') {
    //         user = {
    //             login: input1R.value,
    //             pass: input2R.value
    //         }
    //         passArr.push(user)
    //         console.log(passArr)
    //         divR.classList.remove('popup-reg')
    //         input1R.value = ''
    //         input2R.value = ''
    //     } else {
    //         alert('Заполните оба поля')
    //     }
    // })
}

export default login