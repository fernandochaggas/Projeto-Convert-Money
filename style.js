
const buttonvalue = document.querySelector(".buttonValue")
const currencySelect = document.querySelector(".currency-select")

function convertValue(){

    const valueCurrency = document.querySelector(".value-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")

    const dolarToday = 4.95
    const euroToday = 5.39
    const bitcoinToday = 326.237

    const convertedValue = valueCurrency / dolarToday

 


    if(currencySelect.value == "dolar"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency: "USD"
        }).format(valueCurrency / dolarToday)
    
    }

    if(currencySelect.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "EUR"
        }).format(valueCurrency / euroToday)
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "BTC"
        }).format(valueCurrency / bitcoinToday)
    }
    

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style:"currency",
        currency: "BRL"
    }).format(valueCurrency)


}


function changeCurrency(){
    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src ="./assets/dolar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }
    
    convertValue()
}

currencySelect.addEventListener("change", changeCurrency)
buttonvalue.addEventListener("click", convertValue)