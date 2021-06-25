function Function0() {
    //alert("Привет!");
    let z1;
    let z2;
    let z3;
    let z4;
    let z5;
    let z6;
    z1 = 1;
    z2 = true;
    z3 = "Текст";
    z4 = undefined;
    z5 = null;
    z6 = alert;
    document.getElementById('z0-d1').innerHTML='Ответ для 1: '+(typeof z1);
    document.getElementById('z0-d2').innerHTML='Ответ для true: '+(typeof z2);
    document.getElementById('z0-d3').innerHTML='Ответ для "Текст": '+(typeof z3);
    document.getElementById('z0-d4').innerHTML='Ответ для undefined: '+(typeof z4);
    document.getElementById('z0-d5').innerHTML='Ответ для null: '+(typeof z5);
    document.getElementById('z0-d6').innerHTML='Ответ для alert: '+(typeof z6);
}

function Function1() {
    let namez;
    namez = document.getElementById('ed1-zd1').value;
    //Овен, Телец, Близнецы, Рак, Лев и Дева, Весы, Скорпион, Стрелец, Козерог, Водолей и Рыбы
    switch(namez) {
        case 'Овен':  // if (x === 'value1')
        alert("Здравствуй "+namez +"!");
        break;
        case 'Телец':  // if (x === 'value2')
        alert("Здравствуй "+namez +"!");
        break;
        case 'Близнецы':  // if (x === 'value2')
        alert("Здравствуй "+namez +"!");
        break;
        case 'Рак':  // if (x === 'value2')
        alert("Здравствуй "+namez +"!");
        break;
        case 'Лев':  // if (x === 'value2')
        alert("Здравствуй "+namez +"!");
        break;
        case 'Дева':  // if (x === 'value2')
        alert("Здравствуй "+namez +"!");
        break;
        case 'Весы':  // if (x === 'value2')
        alert("Здравствуй "+namez +"!");
        break;
        case 'Скорпион':  // if (x === 'value2')
        alert("Здравствуй "+namez +"!");
        break;
        case 'Стрелец':  // if (x === 'value2')
        alert("Здравствуй "+namez +"!");
        break;
        case 'Козерог':  // if (x === 'value2')
        alert("Здравствуй "+namez +"!");
        break;
        case 'Водолей':  // if (x === 'value2')
        alert("Здравствуй "+namez +"!");
        break;
        case 'Рыбы':  // if (x === 'value2')
        alert("Здравствуй "+namez +"!");
        break;
        default:
        alert("Здравствуй Некто Неизвестный!");
        break;}
}

function Function2() {
    let str = "";
    let str1 = "";
    let str2 = "";
    str += 'Цикл for: ';
    for (let i = 0; i < 40; i++){
        if (i == 39){
            str += (i+1) + '.';}
        else {
            str += (i+1) + ',';
    }}
    document.getElementById('z2-d1').innerHTML= str;
    let i = 0;
    str1 += 'Цикл while: ';
    while (i<40){
        if (i == 39){
            str1 += (i+1) + '.';
            i++;}
        else{
            str1 += (i+1) + ',';
            i++;
    }}
    document.getElementById('z2-d2').innerHTML= str1;
    str2 += 'Цикл do while: ';
    i = 0;
    do {
        if (i == 39){
            str2 += (i+1) + '.';
            i++;}
        else{
            str2 += (i+1) + ',';
            i++;
    }}
    while (i < 40);
    document.getElementById('z2-d3').innerHTML= str2;
}

function Function3() {
    function Function3_1() {
        alert('Ку-ку!');}
    setInterval(Function3_1, 2000);
}
  

function Function4() 
{
    let number;
    number = prompt("Введите число:", 0);
    if  (number.replace(/\s/g, '').length === 0 || isNaN(number)){
        alert('Нужно ввести число!');
        Function4();}
    else {
        if (number > 5) {
            alert('Поздравляю!');} 
        else {
            alert('Число меньше чем нужно!');
            Function4();
    }}
}

function Function5() 
{
    let str = "";
    str += 'Цикл четных чисел: ';
    for (let i = 8; i <= 20; i++) {
        if (i % 2 == 0) {
            if (i == 20){
                str += (i) + '.';}
            else{
                str += (i) + ',';
    }}}
    document.getElementById('z5-d1').innerHTML= str;
}

function Function6() 
{
    let str = "";
    str += 'Цикл нечетных чисел: ';
    for (let i = 1; i <= 7; i++) {
        if (i % 2 == 1) {
            if (i != 5){
                if (i == 7){
                    str += (i) + '.';}
                else{
                    str += (i) + ',';
    }}}}
    document.getElementById('z6-d1').innerHTML= str;
}

function Function7() 
{
    array1 = [1, 23, 15, 10, 33];
    array2 = new Array(1, 23, 15, 10, 33);
    array3 = Array.of(1, 23, 15, 10, 33);
    document.getElementById('z1-p2').innerHTML= 'Код создания: </br>array1 = [1, 23, 15, 10, 33];</br>array2 = new Array(1, 23, 15, 10, 33);</br>array3 = Array.of(1, 23, 15, 10, 33);';
}

function Function8() 
{
    array1 = [1, 23, 15, 10, 33];
    alert(array1[4]);
    array1[4] = 32;
    alert(array1[4]);
    document.getElementById('z2-p2').innerHTML= 'Код создания: </br>array1 = [1, 23, 15, 10, 33];</br>alert(array1[4]);</br>array1[4] = 32;</br>alert(array1[4]);';
}

function Function9() 
{
    let arrey = [1, 23, 15, 10, 33];
    for (index in document.body.children ){
        document.body.children[index].title = arrey.length;}
}

function Function10() 
{
    let str = "";
    let arrey = [1, 23, 15, 10, 33];
    str += 'Массив: ';
    for (let i = 0; i <= arrey.length-1; i++) 
    {
        if ((i)==(arrey.length-1)) {
            str += (arrey[i]) + '.';}
        else{
            str += (arrey[i]) + ',';}
    }
    document.getElementById('z4-p2').innerHTML= str;
}

function Function11() 
{
    let array1 = [1, 23, 15, 10, 33];
    let array2 = [2, 24, 16, 11, 34];
    let str = "";
    str = 'Массив 1: ';
    for (let i = 0; i <= array1.length-1; i++) 
    {
        if ((i)==(array1.length-1)) {
            str += (array1[i]) + '.';}
        else{
            str += (array1[i]) + ',';}
    }
    document.getElementById('z5-p2-1').innerHTML= str;
    str = 'Массив 2: ';
    for (let i = 0; i <= array2.length-1; i++) 
    {
        if ((i)==(array2.length-1)) {
            str += (array2[i]) + '.';}
        else{
            str += (array2[i]) + ',';}
    }
    document.getElementById('z5-p2-2').innerHTML= str;
    let arrayall = array1.concat(array2);
    str = 'Объедененный массив: ';
    for (let i = 0; i <= arrayall.length-1; i++) 
    {
        if ((i)==(arrayall.length-1)) {
            str += (arrayall[i]) + '.';}
        else{
            str += (arrayall[i]) + ',';}
    }
    document.getElementById('z5-p2-3').innerHTML= str;
}

function Function12() 
{
    let str = "";
    let x;
    let array = [1, 23, 15, 10, 33];
    str = 'Начальный массив: ';
    for (let i = 0; i <= array.length-1; i++) 
    {
        if ((i)==(array.length-1)) {
            str += (array[i]) + '.';}
        else{
            str += (array[i]) + ',';}
    }
    document.getElementById('z6-p2-1').innerHTML = str;
    x = array.pop();
    document.getElementById('z6-p2-2').innerHTML += x;
    str = 'Конечный массив: ';
    for (let i = 0; i <= array.length-1; i++) 
    {
        if ((i)==(array.length-1)) {
            str += (array[i]) + '.';}
        else{
            str += (array[i]) + ',';}
    }
    document.getElementById('z6-p2-3').innerHTML = str;
}

function Function13() 
{
    let str = "";
    let x;
    let array = [1, 23, 15, 10, 33];
    str = 'Начальный массив: ';
    for (let i = 0; i <= array.length-1; i++) 
    {
        if ((i)==(array.length-1)) {
            str += (array[i]) + '.';}
        else{
            str += (array[i]) + ',';}
    }
    document.getElementById('z8-p2-1').innerHTML = str;
    document.getElementById('z8-p2-2').innerHTML += 123;
    array.unshift(123);
    str = 'Конечный массив: ';
    for (let i = 0; i <= array.length-1; i++) 
    {
        if ((i)==(array.length-1)) {
            str += (array[i]) + '.';}
        else{
            str += (array[i]) + ',';}
    }
    document.getElementById('z8-p2-3').innerHTML = str;
}

function Function14() 
{   
    let x = new Date();
    alert(x.getFullYear() + '-' + (x.getMonth()+1) + '-' + x.getDate());
}

function Function15() 
{   
    let array = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декобря"];
    let x = new Date();
    let d = "";
    let m = "";
    let y = "";
    d = x.getDate();
    m = array[x.getMonth()];
    y = x.getFullYear();
    alert(d +" "+ m + " " + y + " года.");
}


function Function16() 
{   
    let x;
    let y;
    let s;
    x = Math.round(Math.random()*50);
    document.getElementById('z11-p2-1').innerHTML = "Первое рандомное число: " + x;
    y = Math.round(Math.random()*50);
    document.getElementById('z11-p2-2').innerHTML = "Второе рандомное число: " + y;
    s = x*y;
    document.getElementById('z11-p2-3').innerHTML = "Произведение: " + s;

}


function Functiont1(x) 
{   
    let div;
    switch(x) {
        case 1:  // if (x === 'value1')
            div = document.getElementById('t1');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=1) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function0.toString();
        break;
        case 2:  // if (x === 'value2')
            div = document.getElementById('t2');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=2) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function1.toString();
        break;
        case 3:  // if (x === 'value2')
            div = document.getElementById('t3');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=3) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function2.toString();
        break;
        case 4:  // if (x === 'value2')
            div = document.getElementById('t4');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=4) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function3.toString();
        break;
        case 5:  // if (x === 'value2')
            div = document.getElementById('t5');
            div.classList.remove('hidden');
                for (let i = 1; i <= 17; i++) 
                {
                    if (i!=5) {
                        let div = document.getElementById('t'+i);
                        div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function4.toString();
        break;
        case 6:  // if (x === 'value2')
            div = document.getElementById('t6');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=6) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function5.toString();
        break;
        case 7:  // if (x === 'value2')
            div = document.getElementById('t7');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=7) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function6.toString();
        break;
        case 8:  // if (x === 'value2')
            div = document.getElementById('t8');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=8) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function7.toString();
        break;
        case 9:  // if (x === 'value2')
            div = document.getElementById('t9');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=9) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function8.toString();
        break;
        case 10:  // if (x === 'value2')
            div = document.getElementById('t10');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=10) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function9.toString();
        break;
        case 11:  // if (x === 'value2')
            div = document.getElementById('t11');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=11) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function10.toString();
        break;
        case 12:  // if (x === 'value2')
            div = document.getElementById('t12');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=12) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function11.toString();
        break;
        case 13:  // if (x === 'value2')
            div = document.getElementById('t13');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=13) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function12.toString();
        break;
        case 14:  // if (x === 'value2')
            div = document.getElementById('t14');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=14) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function13.toString();
        break;
        case 15:  // if (x === 'value2')
            div = document.getElementById('t15');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=15) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function14.toString();
        break;
        case 16:  // if (x === 'value2')
            div = document.getElementById('t16');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=16) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function15.toString();
        break;
        case 17:  // if (x === 'value2')
            div = document.getElementById('t17');
            div.classList.remove('hidden');
            for (let i = 1; i <= 17; i++) 
            {
                if (i!=17) {
                    let div = document.getElementById('t'+i);
                    div.classList.add('hidden');
                }
            }
            document.getElementById('last-code').innerHTML = Function16.toString();
        break;
        default:
        break;
      }
}

window.onload = function() {
    document.getElementById('last-code').innerHTML = Function0.toString();
    x = prompt ("Добрый день, как вас зовут?", "Некто Неизвестный");
    document.getElementById('head-T-2').innerHTML = x;
 };