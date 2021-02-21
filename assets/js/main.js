// console.log(payroll)
let numberArray = []
const list = document.getElementById("list")
const numberInput = document.getElementById("number")
const resultNumber = document.getElementById("resultSearch")
let resultHtml = document.getElementById("result")

const submitNumber = () => {
    if (numberInput.value >= 0 && numberInput.value <= 36) {
        if (numberArray.length < 9) {
            const verification = verifyNumbersArray(numberArray, numberInput.value)
            if (verification == true) {
                numberArray.push(parseInt(numberInput.value, 10))
                if (numberArray.length == 9) {
                    const resultSearch = searchPayrrolls(numberArray)
                    renderResult(resultSearch)
                }
            }
            else {
                alert("El numero ya fue cargado")
            }
        }
        else {
            alert("Ya fueron cargados los 9 numeros")
        }
    }
    else {
        alert("Ingresar un valor entre 0 y 36")
    }
    renderArrayNumbers(numberArray);
    numberInput.value = null
}

const verifyNumbersArray = (numberArray, number) => {
    if (numberArray.length == 0) {
        return true
    }
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] == number) {
            return false
        }
    }
    return true
}

const renderArrayNumbers = numbers => {
    list.innerHTML = ""
    numbers.map(number => {
        list.innerHTML += `<li>${number}</li>`
    })
}

const restartArray = () => {
    list.innerHTML = ""
    resultHtml.innerHTML = ""
    resultNumber.innerHTML = ""
    numberArray = []
}

const searchPayrrolls = (arrayNumbers) => {
    // console.log(payroll);
    let coincidences = 0
    let coincidencesNumbers = []
    let result = []
    for (let i = 0; i < payroll.length; i++) {
        for (let j = 0; j < arrayNumbers.length; j++) {
            let resultItem = false
            resultItem = payroll[i].data.positive.includes(arrayNumbers[j])
            if (resultItem == true) {
                coincidences = coincidences + 1
                coincidencesNumbers.push(arrayNumbers[j])
            }
        }
        if (coincidences >= 7) {
            result.push({ name: payroll[i].name, numberCoincidence: coincidencesNumbers, coincidences: coincidences, data: payroll[i].data })
        }
        coincidences = 0;
        coincidencesNumbers = []
    }
    return result
}

const renderResult = result => {
    // const positive = document.getElementById("positive")
    console.log(result);
    resultNumber.innerHTML = ` = ${result.length}`
    for (let i = 0; i < result.length; i++) {
        let html = `
        <div class="grid mt-2">
            <div class="title">${result[i].name}</div>
            <div class="body">
                <div class="coincidences">`
        for (let c = 0; c < result[i].numberCoincidence.length; c++) {
            html += `
                <div class="item-co">${result[i].numberCoincidence[c]}</div>
            `
        }
            html += `</div><div class="positives">`
        for (let p = 0; p < result[i].data.positive.length; p++) {
            html += `
                <div class="item-po">${result[i].data.positive[p]}</div>
            `
        }
            html += `</div><div class="negatives">`
        for (let n = 0; n < result[i].data.negative.length; n++) {
            html += `
                <div class="item-ne">${result[i].data.negative[n]}</div>
            `
        }
        html +=
            `</div>
            </div>
        </div>`
        resultHtml.innerHTML += html
    }
    if (result.length == 0) {
        resultHtml.innerHTML = "<h3>NO SE ENCONTRARON RESULTADOS</h3>"
    }
}