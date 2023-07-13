function checkNumber(Age_1, Age_2, Age_3){
   Age_1 = +Age_1;
   Age_2 = +Age_2;
   Age_3 = +Age_3;
  // console.log(typeof Age_1, Age_1);
    if (!isNaN(Age_1) && !isNaN(Age_2) && !isNaN(Age_3)){
        if (Age_1 < Age_2){
            console.log("You don't have access cause your age is " + Age_1 + " It's less then ");
        }
        //Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
        if (Age_1 >= Age_2 && Age_1<Age_3){
            console.log("Welcome");
        }
        //age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”. 33. Иначе выводите “Technical work”.
        if (Age_1 > Age_3){
            console.log("Keep calm and look Culture channel")
        } else{
            console.log("Technical work");
        }
    }else {
        console.log("Введенные значения не числа");
    }
}
let Age_1_prompt = prompt("Введите 1-ый возраст");
let Age_2_prompt = prompt("Введите 2-ый возраст");
let Age_3_prompt = prompt("Введите 2-ый возраст");
checkNumber(Age_1_prompt, Age_2_prompt, Age_3_prompt);