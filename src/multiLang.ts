document.addEventListener('DOMContentLoaded', () => {
  const allDataElements = Array.from(document.querySelectorAll('[data]')) as HTMLElement[];
  const allLangOptions = Array.from(document.querySelectorAll('option')) as HTMLOptionElement[];
  const select = document.querySelector('.langSelect')as HTMLSelectElement;
  
  type ILanguages = {
    [key in keyof any]: any
  }

  let languages: ILanguages = {
    en: {
      memTitle: 'AT',
      memH1: 'Memory game',
      memP: 'Flip cards to find match',
      memStart: 'Start',
      mHomeLink: 'Main page'
    },

    ru: {
      memTitle: 'АГ',
      memH1: 'Игра на запоминание',
      memP: 'Нажимайте на карточки, чтобы открыть все пары',
      memStart: 'Начать',
      mHomeLink: 'Главная'
    }
  }
  
  function searchLang(choosenLang: string) {
    //if choosen language coincides with one of the languages in Object languages:
    if(languages[choosenLang]) {
      allDataElements.forEach(element => {
        for(let x in languages[choosenLang]) {
          if(element.getAttribute('data') === x) {
            //the same attribute changes iinerText in accordance with object
            element.innerText = languages[choosenLang][x]
            //change placeholder
            if(languages[choosenLang].inpCity !== undefined) {
              languages[choosenLang].inpCity()
            }
          }
        }
      })
    }
  }

  document.addEventListener('keypress', e => {
  if(e.keyCode === 13) {
    let element = e.target as HTMLElement

    if(element.classList.contains('backbtn')) {
      history.go(-1)
      return
    }

    if(element.innerText === "WEATHER" || 
      element.innerText === "OPEN" || 
      element.innerText === "ПОГОДА" || 
      element.innerText === "ОТКРЫТЬ") {
      $('#fieldset').fadeToggle(1000);
      $('.intro').fadeToggle(1000);
      $('#inputCity').focus();
    }
    if(element.innerText === "en" || element.innerText === "ru") {
      allLangOptions.forEach(option => {
        if(option.selected === true) {
        let lang = option.value
        searchLang(lang)
        }
      })
      }
    }
  })
  
  select.addEventListener('change', () => {
    allLangOptions.forEach(option => {
      if(option.selected === true) {
        let lang = option.value
        searchLang(lang)
      }
    })
  })

})