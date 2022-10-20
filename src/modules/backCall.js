const backCall = () => {

    const area = document.querySelector('.callback-items__item-window')
    const input = document.querySelector('.callback-items__item-input')
    const btn = document.querySelector('.callback-items__item-btn')
    
    let num = 0

    const divModer = document.createElement('div')
    divModer.classList.add('callback-items__item-window-msg-moder')
    const pModer = document.createElement('p')
    pModer.classList.add('callback-items__item-window-text')
    pModer.innerText = 'Здраствуйте, могу ли я вам чем-то помочь?'
    pModer.id = `textModer${num}`
    divModer.appendChild(pModer)
    divModer.id = `msgModer${num}`
    area.appendChild(divModer)

    let editUser = document.querySelectorAll('#msgUser')

    btn.addEventListener('click', (e) => {
        e.preventDefault()
        if (input.value !== '') {
            num++
            const divUser = document.createElement('div')
            divUser.classList.add('callback-items__item-window-msg-user')
            const pUser = document.createElement('p')
            pUser.classList.add('callback-items__item-window-text')
            pUser.innerText = input.value
            pUser.id = `textUser${num}`
            divUser.appendChild(pUser)
            divUser.id = `msgUser`
            area.appendChild(divUser)
            input.value = ''
            editUser = document.querySelector('#msgUser')
            console.log(editUser);
        }
    })

    document.addEventListener('click', (e) => {
        e.preventDefault()
        
    })

}

export default backCall