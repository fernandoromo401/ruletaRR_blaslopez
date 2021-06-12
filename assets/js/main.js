// console.log(payroll)
let numberArray = []
const list = document.getElementById("list")
const numberInput = document.getElementById("number")
const resultNumber = document.getElementById("resultSearch")
let resultHtml = document.getElementById("result")
const tableOrder = [0, 26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10, 23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32]

const submitNumber = () => {
    if (numberInput.value >= 0 && numberInput.value <= 36) {
        if (numberArray.length < 9) {
            // const verification = verifyNumbersArray(numberArray, numberInput.value)
            const verification = true
            if (verification == true) {
                numberArray.push(parseInt(numberInput.value, 10))
                if (numberArray.length == 9) {
                    const resultSearch = searchPayrrolls(numberArray)
                    console.log(resultSearch);
                    renderResult(resultSearch)
                }
            }
            else {
                alert("El numero ya fue cargado")
            }
        }
        else {
            // alert("Ya fueron cargados los 9 numeros")
            // const verification = verifyNumbersArray(numberArray, numberInput.value)
            const verification = true
            if (verification == true) {
                numberArray.splice(0, 1)
                numberArray.push(parseInt(numberInput.value, 10))
                if (numberArray.length == 9) {
                    const resultSearch = searchPayrrolls(numberArray)
                    console.log(resultSearch);
                    preRenderResult()
                    renderResult(resultSearch)
                }
            }
            else {
                alert("El numero ya fue cargado")
            }
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
    // resultNumber.innerHTML = ""
    numberArray = []
}

const preRenderResult = () => {
    list.innerHTML = ""
    resultHtml.innerHTML = ""
    // resultNumber.innerHTML = ""
    // numberArray = []
}

const searchPayrrolls = (arrayNumbers) => {
    const newArray = clearArray(arrayNumbers)
    let coincidences = 0
    let coincidencesNumbers = []
    let result = []
    for (let i = 0; i < payroll.length; i++) {
        for (let j = 0; j < newArray.length; j++) {
            let resultItem = false
            resultItem = payroll[i].data.positive.includes(newArray[j])
            if (resultItem == true) {
                coincidences = coincidences + 1
                coincidencesNumbers.push(newArray[j])
            }
        }
        if (coincidences >= 4) {
            result.push({ name: payroll[i].name, numberCoincidence: coincidencesNumbers, coincidences: coincidences, data: payroll[i].data })
        }
        // console.log(coincidencesNumbers);
        coincidences = 0;
        coincidencesNumbers = []
    }
    return result
}

const clearArray = (arr) => {
    const newArr = []
    const myObj = {}
    arr.forEach(el => {
        if (!(el in myObj)) {
            myObj[el] = true
            newArr.push(el)
        }
    })

    return newArr
}

const renderResult = result => {
    // const positive = document.getElementById("positive")
    // console.log(result);
    // resultNumber.innerHTML = ` = ${result.length}`
    for (let i = 0; i < result.length; i++) {
        let html = `
        <div class="grid mt-2">
            <div class="title">${result[i].name}</div>
            <div class="body">
                <div class="coincidences">`

        for (let p = 0; p < tableOrder.length; p++) {
            let coincidenceNow
            for (let c = 0; c < result[i].numberCoincidence.length; c++) {

                if (tableOrder[p] == result[i].numberCoincidence[c]) {
                    html += `
                        <div class="item-co-white">${tableOrder[p]}</div>
                    `
                    coincidenceNow = tableOrder[p]
                }
            }
            if (coincidenceNow != tableOrder[p]) {
                html += `
            <div class="item-co white">${tableOrder[p]}</div>
            `
            }
        }

        html += `</div><div class="coincidences">`
        for (let p = 0; p < tableOrder.length; p++) {
            let negativeNow
            let positiveNow
            let supportNow

            for (let n = 0; n < result[i].data.negative.length; n++) {
                // console.log(payroll[i].data.negative[n]);
                if (tableOrder[p] == result[i].data.negative[n]) {
                    html += `
                        <div class="item-co">${tableOrder[p]}</div>
                    `
                    negativeNow = tableOrder[p]
                }

            }
            for (let n = 0; n < result[i].data.positive.length; n++) {
                // console.log(payroll[i].data.negative[n]);
                if (tableOrder[p] == result[i].data.positive[n]) {
                    html += `
                        <div class="item-co green">${tableOrder[p]}</div>
                    `
                    positiveNow = tableOrder[p]
                }

            }
            for (let n = 0; n < result[i].data.support.length; n++) {
                // console.log(payroll[i].data.negative[n]);
                if (tableOrder[p] == result[i].data.support[n]) {
                    html += `
                        <div class="item-co blue">${tableOrder[p]}</div>
                    `
                    supportNow = tableOrder[p]
                }

            }
            if (negativeNow != tableOrder[p] && positiveNow != tableOrder[p] && supportNow != tableOrder[p]) {
                html += `
                <div class="item-co">${tableOrder[p]}</div>
                `
            }
        }




        html += `</div><div class="coincidences">`
        for (let p = 0; p < tableOrder.length; p++) {
            let negativeNow
            let greenNow
            for (let n = 0; n < result[i].data.negative.length; n++) {
                // console.log(payroll[i].data.negative[n]);
                if (tableOrder[p] == result[i].data.negative[n]) {
                    html += `
                        <div class="item-co red"></div>
                    `
                    negativeNow = tableOrder[p]
                }
                if (tableOrder[p] == result[i].data.green[n]) {
                    html += `
                        <div class="item-co green2"></div>
                    `
                    greenNow = tableOrder[p]
                }
            }
            if (negativeNow != tableOrder[p] && greenNow != tableOrder[p]) {

                html += `
                <div class="item-co yellow"></div>
                `
            }

        }
        html += `</div>`
        // for (let c = 0; c < result[i].numberCoincidence.length; c++) {
        //     html += `
        //         <div class="item-co">${result[i].numberCoincidence[c]}</div>
        //     `
        // }
        // html +=
        // `
        //     <div class="coincidences-float">Coincidencias: <strong> ${result[i].numberCoincidence.length}</strong></div>
        // `
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