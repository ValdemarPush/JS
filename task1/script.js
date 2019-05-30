'use srtict';
let money = prompt("Ваш бюджет на месяц?", "10000" ), 
time = prompt("Введите дату в формате YYYY-MM-DD", new Date().toISOString().slice(0, 10)), 
oneQuestions = prompt("Введите обязательную статью расходов в этом месяце", ""), 
twoQuestions = prompt("Во сколько обойдется?", ""), 
threeQuestions = prompt("Введите обязательную статью расходов в этом месяце", ""), 
fourQuestions = prompt("Во сколько обойдется?", ""); 

let appData = { 
moneyData: money, 
timeData: time, 
expenses: {}, 
income: [], 
savings: false 
}; 

appData.expenses[oneQuestions] = twoQuestions; 
appData.expenses[threeQuestions] = fourQuestions; 

alert(appData.moneyData / 30);
