// let arr = [2,3,5,6,6,4,4,45,0,12]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]== 4){
//         arr.splice(i, 1)
//         i--
//     }
// }

// console.log(arr);

//let arr = 'Lorem ipsum dolor sit Salom amet consectetur, adipisicing elit. Inventore nulla corrupti quas facere sunt totam provident culpa cupiditate nam, ducimus unde voluSalomptates perspiciatis harum Salom saepe earum iuSalomre qui beatae atque!'
let Ism = 'Alex'
let balans = 100000
let password = 7777
let ostatok = 0


let Name = prompt('Как вас зовут?')
if(Name === Ism){
let accoutn = +prompt('Номер счета?')
if(accoutn === password){
    let money = +prompt('Сколько обналичить ?')
    if(money < balans ){
        let summ = alert(`Все отлично вы сняли : ${money} банк взял комиссию 1% ${(money*1)/100}. Вашем счете осталься: ${ostatok=balans-(money+=(money/1)/100)}`)
    }
    else{
        alert('Недостаточно средств ,,,')
    }
}
else{
     alert('Ползователь не найден, досвидули !!!')
}
}
else{
    alert('Ползователь не найден, досвидули !!!')
}


