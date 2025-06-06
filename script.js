var factList = [
"Mental, neurological and substance use disorders make up 10% of the global burden of disease and 30% of non-fatal disease burden.",/*0*/
"Around 1 in 5 of the world's children and adolescents have a mental disorder.",/*1*/
"Depression is one of the leading causes of disability, affecting 264 million people.",/*2*/
"About half of mental disorders begin before the age of 14.",/*3*/
"Almost 800 000 people die by suicide every year; 1 person dies from suicide every 40 seconds. Suicide is the second leading cause of death in individuals aged 15-29 years.",/*4*/
"Around 1 in 9 people in settings affected by conflict have a moderate or severe mental disorder.",/*5*/
"People with severe mental disorders die 10 to 20 years earlier than the general population.",/*6*/
"Rates of mental health workers vary from below 2 per 100 000 population in low-income countries to over 70 per 100 000 in high-income countries.",/*7*/
"Less than half of the 139 countries that have mental health policies and plans report having these aligned with human rights conventions.",/*8*/
"The global economy loses about US$ 1 trillion per year in productivity due to depression and anxiety."/*9*/];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click",displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}