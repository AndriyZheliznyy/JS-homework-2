// **Задача про обчислення різниці часу**

// Напишіть функцію яка буде буде приймати 3 параметри

// - початкову дату (string)
// - кінцеву дату (string)
// - розмірність ('days', 'hours', 'minutes', seconds)

// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.
// Приклади:

// durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')  *// поверне '86400 seconds'*
// durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')  *// поверне '362 days'*


   function durationBetweenDates (startDate = "01 Jan 2022", endDate = "01 Jan 2023", calculateIn = "days"){
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    if (calculateIn == 'days') {
        dateDiffNum = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24))
        dateDiff = Math.abs(dateDiffNum) + " " + "days"; 
    } else if(calculateIn == 'hours') {
        dateDiffNum = Math.floor((date2 - date1) / (1000 * 60 * 60)) 
        dateDiff = Math.abs(dateDiffNum) + " " + "hours"; 
    } else if(calculateIn == 'minutes') {
        dateDiffNum = Math.floor((date2 - date1) / (1000 * 60))
        dateDiff = Math.abs(dateDiffNum) + " " + "minutes"; 
    }
    else if(calculateIn == 'seconds') {
        dateDiffNum = Math.floor((date2 - date1) / 1000) 
        dateDiff = Math.abs(dateDiffNum) + " " + "seconds";  
    }
    console.log(dateDiff);
   }
   durationBetweenDates();