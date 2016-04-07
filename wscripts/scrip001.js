// ----------------------- declare variables --------------
var gl_name = '';
var s_data = {     // объявляю объект который содержит поля
    givenName: '', // и две функции
    firstName: '',
    gender: '',
    dataB: '',
    placeB: '',
    citizen: '',
    Fillup: function(a, b, c, d, e, h) {
        this.givenName = a;
        this.firstName = b;
        this.gender = c;
        this.dataB = d;
        this.placeB = e;
        this.citizen = h;
    },
    Fullname: function() {
        return this.firstName + ' ' + this.givenName;
    }
};
var ktoto = s_data;
var tabPersons = [];


// ------------------- end of data ----------------------

// ------------------------- declare functions -----------
// отображение заполненных данных
function ShowObject(ob) {
    var names = "";
    for (var name in ob) names += ob[name] + "\n";
    return names;
    // console.log(Object.keys(ob));
    // return Object.keys(ob);
}

function GoFill() {
    var Userform = document.getElementById("userform");
        ktoto.Fillup(Userform.nam.value,
             Userform.fam.value,
             Userform.gen.value,
             Userform.bun.value,
             Userform.plc.value,
             Userform.cit.value
    );
    
}

function Bshow() { // show the name and sername fo form
    GoFill();
    alert('Вас зовут: ' + ktoto.Fullname());
}

function Bfull() { // show the all data of object names
    GoFill();
    gl_name = ShowObject(s_data);
    alert('Значение: ' + gl_name);
}

function Bclear() { // clear hole form
    var Uform = document.getElementById("userform");
    Uform.reset();
} //     Uform.nam.value = ''; так тоже работает но через id

function BshowTab () {  // !!!!!!!! TO DO   вывести элементы массива как текст
    if (tabPersons.length == 3 ){
         document.getElementById("demo").innerHTML = tabPersons[0].Fullname();
         document.getElementById("demo").innerHTML = tabPersons[1].Fullname();
         document.getElementById("demo").innerHTML = tabPersons[2].Fullname();
    } else {
         alert('Нужно три записи');
    }
}

function BaddTab () {
    GoFill();
    tabPersons.push(ktoto);
    alert(tabPersons.length);
}


function InitDo() { // catch the aciton of bunntons 
// если в событие передать имя функции с () то она выполниться сразу
// что бы она вызывалась только по нажатию надо скобки убирать.
    document.getElementById('butshow').onclick = Bshow;
    document.getElementById('butful').onclick = Bfull;
    document.getElementById('butclean').onclick = Bclear;
    document.getElementById('buttab').onclick = BshowTab;
    document.getElementById('butadd').onclick = BaddTab
}
// ------- finish load the html page -------
window.onload = InitDo;
