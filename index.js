
class CustomSelect {
    #id
    #options
    #dropDown
    #dropDownButton
    #dropDownText
    #dropDownList
    #currentSelectedOption
    #liElements
    #ulElement
    #liEl

    constructor(id, options) {
        this.#id = id;
        this.#options = options;
        this.#dropDown = document.createElement('div')
        this.#dropDown.className = 'select-dropdown'
        this.#dropDown.classList.add(`select-dropdown--${this.#id}`)
        this.#dropDownButton = document.createElement('button')
        this.#dropDownButton.className = 'select-dropdown__button'
        this.#dropDownButton.classList.add(`select-dropdown__button--${this.#id}`)
        this.#dropDown.prepend(this.#dropDownButton)
        this.#dropDownText = document.createElement('span')
        this.#dropDownText.className = ('select-dropdown__text')
        this.#dropDownText.classList.add(`select-dropdown__text--${this.#id}`)
        this.#dropDownText.innerText = 'Выберите текст'
        this.#dropDownButton.append(this.#dropDownText)
        this.#dropDownList = document.createElement('ul')
        this.#dropDownList.className = 'select-dropdown__list'
        this.#dropDownList.classList.add(`select-dropdown__list--${this.#id}`)
        this.#dropDown.append(this.#dropDownList)
        this.#liElements = document.querySelectorAll('.select-dropdown__list-item')
        // this.#liEl = document.querySelector('li')
        // this.#currentSelectedOption = 3241


        options.forEach(item => {
            const liEl = document.createElement('li')
            liEl.className = 'select-dropdown__list-item'
            liEl.setAttribute('data-value', `${item.value}`)
            liEl.innerText = `${item.text}`
            this.#dropDownList.append(liEl)
        })

        this.#dropDown.addEventListener('click', (event) => {
            const {target} = event
            this.#dropDownList.classList.toggle('active')
        })

        this.#dropDownList.addEventListener('click', (event) => {
            const {target} = event
            const selectedValue = target.getAttribute('data-value')
            this.#currentSelectedOption = this.#options[selectedValue - 1]
            this.#dropDownText.innerText = this.#options[selectedValue - 1].text

          this.#liElements.forEach(item => {
                item.classList.remove('selected')
            })
            console.log(this.#liElements)
            target.classList.toggle('selected')
        })


    }

    get currentSelectedOption() {
        return this.#currentSelectedOption
    }
    
    render(container) {
        mainContainer.append(this.#dropDown)
    }

}



const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' }

];


const customSelect = new CustomSelect(111, options)

const mainContainer = document.querySelector('#container')

customSelect.render(mainContainer)

console.log(customSelect)


console.log(customSelect.currentSelectedOption)