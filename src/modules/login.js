const login = () => {

    const div = document.createElement('div')
    div.classList.add('popup')
    div.classList.add('popup-reg')
    const blockDiv = document.createElement('div')
    const input1 = document.createElement('input')
    input1.id = 'inputLogin'
    input1.classList.add('inputLogin')
    const input2 = document.createElement('input')
    input2.id = 'inputPass'
    const btnL = document.createElement('button')
    btnL.innerText = 'Sign in'
    btnL.id = 'btnLogin'
    const btnR = document.createElement('button')
    btnR.innerText = 'Registration'
    btnR.id = 'btnReg'

    blockDiv.appendChild(input1)
    blockDiv.appendChild(input2)
    blockDiv.appendChild(btnL)  
    blockDiv.appendChild(btnR)
    div.appendChild(blockDiv)
    body.appendChild(div)

    const divR = document.createElement('div')
    divR.classList.add('popup')
    const blockDivR = document.createElement('div')
    const input1R = document.createElement('input')
    input1R.id = 'inputRLogin'
    input1R.classList.add('inputLogin')
    const input2R = document.createElement('input')
    input2R.id = 'inputRPass'
    const btnRReg = document.createElement('button')
    btnRReg.innerText = 'Reg'
    btnRReg.id = 'btnReg'

    
    blockDivR.appendChild(input1R)
    blockDivR.appendChild(input2R)
    blockDivR.appendChild(btnRReg)
    divR.appendChild(blockDivR)
    body.appendChild(divR)

    const inputLogin = document.querySelector('#inputLogin')
    const inputPass = document.querySelector('#inputPass')
    const btnLogin = document.querySelector('#btnLogin')
    let passArr = []

    let user = {
        login: 'admin',
        pass: 'admin'
    }

    passArr.push(user)
    console.log(passArr)

    btnR.addEventListener('click', (e) => {
        e.preventDefault()
        divR.classList.add('popup-reg')
    })

    btnLogin.addEventListener('click', (e) => {
        e.preventDefault()
        if (input1.value !== '' && input2.value !== '') {
            console.log(passArr);
            user = {
                login: input1.value,
                pass: input2.value
            }
            passArr.forEach(elem => {
                console.log(elem.login);
              if (elem.login == user.login && elem.pass == user.pass) {
                  div.classList.remove('popup-reg')
                  input1.value = ''
                  input2.value = ''
              } else {
                  return
              }
            })
        }
    })

    btnRReg.addEventListener('click', (e) => {
        e.preventDefault()
        if (input1R.value !== '' && input2R.value !== '') {
            user = {
                login: input1R.value,
                pass: input2R.value
            }
            passArr.push(user)
            console.log(passArr)
            divR.classList.remove('popup-reg')
            input1R.value = ''
            input2R.value = ''
        } else {
            alert('Заполните оба поля')
        }
    })
}

export default login