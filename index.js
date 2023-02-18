let serial = 0;

document.getElementById("first-btn").addEventListener("click", function () {
    serial += 1;

    const inputFirstname = getInputInnerText("firstCard-Name");

    const inputFirstField = getInputValue("first-input");
    const inputSecondField = getInputValue("second-input");

    const multipleValue = getMultipleValue(inputFirstField, inputSecondField);

    const totalFirstValue = 0.5 * parseInt(multipleValue) + "cm";
    if (inputFirstField < 1 || inputSecondField == "") {
        alert("wrong input please enter numberic code");
    } else {
        displayData(inputFirstname, totalFirstValue);
    }
});

document.getElementById("second-btn").addEventListener("click", function () {
    serial += 1;
    const inputFirstname = getInputInnerText("secondCard-Name");
    const inputFirstField = getInputValue("firstRectangle-input");

    const inputSecondField = getInputValue("secondRectangle-input");

    const multipleValue =
        getMultipleValue(inputFirstField, inputSecondField) + "cm";
    if (inputFirstField < 1 || inputSecondField == "") {
        alert("wrong input please enter numberic code");
    } else displayData(inputFirstname, multipleValue);
});

document
    .getElementById("parallelogram-btn")
    .addEventListener("click", function () {
        serial += 1;
        const inputFirstname = getInputInnerText("Parallelogram-title");

        const inputFirstField = getInputInnerText("parallelogram-FrstInput");

        const inputSecondField = getInputInnerText("parallelogram-SecondInput");

        const multipleValue =
            getMultipleValue(inputFirstField, inputSecondField) + "cm";

        displayData(inputFirstname, multipleValue);
    });

document.getElementById("Rhombus-btn").addEventListener("click", function () {
    serial += 1;
    const inputFirstname = getInputInnerText("fourth-card-Name");
    const inputFirstField = getInputInnerText("rhombus-firstInput");
    const inputSecondField = getInputInnerText("rhombus-secondInput");
    const multipleValue = getMultipleValue(inputFirstField, inputSecondField);

    const totalFirstValue = 0.5 * multipleValue + "cm";
    displayData(inputFirstname, totalFirstValue);
});

document.getElementById("fifth-btn").addEventListener("click", function () {
    serial += 1;
    const inputFirstname = getInputInnerText("fifth-inputName");
    const inputFirstField = getInputInnerText("fifth-firstValue");
    const inputSecondField = getInputInnerText("fifth-secondValue");
    const multipleValue = getMultipleValue(inputFirstField, inputSecondField);

    const totalFirstValue = 0.5 * multipleValue + "cm";
    displayData(inputFirstname, totalFirstValue);
});

document.getElementById("ellipse-btn").addEventListener("click", function () {
    serial += 1;
    const inputFirstname = getInputInnerText("ellipse-titleName");
    const inputFirstField = getInputInnerText("ellipse-firstValue");
    const inputSecondField = getInputInnerText("ellipse-secondValue");
    const multipleValue = getMultipleValue(inputFirstField, inputSecondField);

    const totalFirstValue = (3.14 * multipleValue).toFixed(2) + "cm";

    displayData(inputFirstname, totalFirstValue);
});

// color-part

function random(num) {
    return Math.floor(Math.random() * num);
}
function randomColor() {
    return "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
}

function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}
function getInputInnerText(id) {
    const inputValue = document.getElementById(id).innerText;
    return inputValue;
}

function getMultipleValue(inputFirstField, inputSecondField) {
    const multipleInput = inputFirstField * inputSecondField;
    return multipleInput;
    // return parseFloat(multipleInput).toFixed(2);
}

function displayData(nameOfP, priceOfP) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}<sup>2</sup></td>
    <td><button class ="convert-btn">Covert to m <sup>2</sup></button></td>
    

     
    
    `;
    container.appendChild(tr);
}

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}
console.log(financial(123.456));