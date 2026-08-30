// ==========================================
// 1. getElementById()
// ==========================================

let count = 0;

function increase() {

    count++;

    document.getElementById("count").textContent = count;

}

function decrease() {

    count--;

    document.getElementById("count").textContent = count;

}

function reveal() {

    document.getElementById("heading").textContent = "Hi!";

}


// ==========================================
// 2. getElementsByClassName()
// ==========================================

// Selects ALL elements having class "text"

const paras = document.getElementsByClassName("text");

function changeByClass() {

    for (let p of paras) {

        p.textContent = "Changed using ClassName!";

    }

}


// ==========================================
// 3. getElementsByTagName()
// ==========================================

// Selects ALL <p> elements

const paragraphs = document.getElementsByTagName("p");

function changeByTag() {

    for (let p of paragraphs) {

        p.textContent = "Changed using TagName!";

    }

}


// ==========================================
// 4. querySelector()
// ==========================================

// Selects ONLY the FIRST element
// matching the CSS selector ".text"

const firstPara = document.querySelector(".text");

function changeByQuery() {

    firstPara.textContent = "First paragraph changed using querySelector!";

}


// ==========================================
// 5. querySelectorAll()
// ==========================================

// Selects ALL elements
// matching the CSS selector ".text"

const allParas = document.querySelectorAll(".text");

function changeAllByQuery() {

    allParas.forEach((p) => {

        p.textContent = "Changed using querySelectorAll!";

    });

}