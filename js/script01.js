"use strict";

function calculatePension() {
    // Hent HTML-elementer
    const birthdateInput = document.getElementById("birthdate");
    const resultParagraphElem = document.getElementById("result");

    // Ryd tidligere resultat
    resultParagraphElem.textContent = "";

    // Konverter input til en dato
    const birthdate = new Date(birthdateInput.value);

    // Tjek om fødselsdatoen er gyldig
    if (isNaN(birthdate)) {
        resultParagraphElem.textContent = "Indtast en gyldig fødselsdato.";
        return;
    }

    let retirementAge = "";

    // Beregn pensionsalder baseret på fødselsdato
    if (birthdate < new Date("1955-06-30")) {
        retirementAge = 66;
    } else if (birthdate <= new Date("1962-12-31")) {
        retirementAge = 67;
    } else if (birthdate <= new Date("1966-12-31")) {
        retirementAge = 68;
    } else if (birthdate <= new Date("1970-12-31")) {
        retirementAge = 69;
    } else if (birthdate <= new Date("1974-12-31")) {
        retirementAge = 70;
    } else if (birthdate <= new Date("1978-12-31")) {
        retirementAge = 71;
    } else if (birthdate <= new Date("1982-12-31")) {
        retirementAge = 72;
    } else if (birthdate <= new Date("1987-06-30")) {
        retirementAge = 72.5;
    } else if (birthdate <= new Date("1991-12-31")) {
        retirementAge = 73;
    } else if (birthdate <= new Date("1996-06-30")) {
        retirementAge = 73.5;
    } else {
        retirementAge = 74;
    }

    // Vis resultat
    const currentYear = new Date().getFullYear();
    const birthYear = birthdate.getFullYear();
    const pensionYear = birthYear + retirementAge;

    if (retirementAge <= 66) {
        resultParagraphElem.textContent = "Du har opnået din folkepensionsalder.";
    } else {
        resultParagraphElem.textContent = `Du kan gå på pension som ${retirementAge}-årig i år ${pensionYear}.`;
    }
}
