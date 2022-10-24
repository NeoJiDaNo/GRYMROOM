const zakaz = () => {

    const popup = document.querySelector('.popup-zakaz')
    const popupL = document.querySelector('.popup-login')
    const popupMyZ = document.querySelector('.popup-myzakaz')
    const btnMZ = document.querySelector('#btnZakaz')
    const blockPrav = document.querySelector('.header-items__item-reg').innerHTML

    const btnZ = document.querySelector('.popup-zakaz-items__item-form-blockbtn')

    const cards = document.querySelector('.popup-myzakaz-items__item-cards')

    const nickname = document.querySelector('#nick')
    const info = document.querySelector('#info')
    const select = document.querySelector('#type')
    const file = document.querySelector('#file')

    let userID
    btnMZ.addEventListener('click', (e) => {
        e.preventDefault()
        if (blockPrav != document.querySelector('.header-items__item-reg').innerHTML) {
            userID = document.querySelector('.header-items__item-reg-ava').innerText
            popup.style.visibility = 'inherit'
        } else {
            popupL.style.visibility = 'inherit'
        }
    })
    
    document.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.closest('.header-items__item-reg-zak')) {
            popupMyZ.style.visibility = 'inherit'
        }
    })

    btnZ.addEventListener('click', (e) => {
        e.preventDefault()
        if (nickname.value != '' && info.value != '' && file.value != '') {
            alert('Заказ успешно добавлен')
            const block = document.createElement('div')
            block.classList.add('popup-myzakaz-items__item-block')
            const h2 = document.createElement('h2')
            h2.innerText = nickname.value
            h2.classList.add('popup-myzakaz-items__item-nick')
            const img = document.createElement('img')
            img.src = file.value
            img.classList.add('popup-myzakaz-items__item-file')
            const p = document.createElement('p')
            p.innerText = select.value
            p.classList.add('popup-myzakaz-items__item-text')
            const pinfo = document.createElement('p')
            pinfo.classList.add('popup-myzakaz-items__item-info')
            pinfo.innerText = info.value
            block.appendChild(h2)
            block.appendChild(img)
            block.appendChild(p)
            block.appendChild(pinfo)
            cards.appendChild(block)
            popup.style.visibility = 'hidden'
        } else {
            alert('Должны быть заполненны все поля')
            return
        }
    })

}

export default zakaz