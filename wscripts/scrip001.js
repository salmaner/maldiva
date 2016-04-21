;'use strict';
(function() {
    // ------------------------------------ declare variables -
    // конструктор записи туриста через функц. выражение.
    var RecordsToutist = function (patrP) {
        this.givenName = patrP.givenName;
        this.firstName = patrP.firstName;
        this.citizen   = patrP.citizen;
    };
    // в его прототип пишем все методы, что бы они не плодились с объектами
    RecordsToutist.prototype.Fullname = function () {
        var totext = '';
        totext += "Фио и страна: " + this.firstName + " " +
            this.givenName + ". Проживает в " + this.citizen;
        return totext;
    };

    var gl_name = '';
    var somePer;
    var tabPersons = [];
    var Doc = window.document;
    var kolr = Doc.getElementById('kolrecords');
    var rightDemo = Doc.getElementById('rightdemo');
    var toClearDemo = Doc.getElementById('demo');
    var Uform = Doc.getElementById("userform");

    // ------------------- end of data ----------------------
    
    // ----------------------------------- declare functions -
    // отображение заполненных объекта данных
    function ShowObject(ob) {
        var names = "Текущая запись туриста:<br>"; var i = 0;
        for (i in ob) {
            if (i != "Fullname") {
                if (i === "givenName") {
                    names += "Ваше Имя: " + ob[i] + ",<br>";
                } else if (i === "firstName") {
                    names += "Фамилия: " + ob[i] + ",<br>";
                } else if (i === "citizen") {
                    names += "Страна: " + ob[i] + ".<br>";
                }
            }
            console.log(Object.keys(ob));   
        }
        return names;
    }

    function GoFill() { // заполнение объекта данными с полей
        var Userform = Doc.getElementById("userform");
        var paternPerson = { // заполнил объект данными
                givenName : Userform.nam.value,
                firstName : Userform.fam.value,
                citizen   : Userform.cit.value,
            };
        // создал объект и передал в кач.параметра объект с данными.
        somePer = new RecordsToutist(paternPerson);

    }

    function Bshow() { // - -  отображение фио объекта
        GoFill();
        alert('Вас зовут: ' + somePer.Fullname());
    }

    function Bfull() { // - -  отображение всех полей объекта
        GoFill();
        gl_name = ShowObject(somePer);
        // alert('Значение: ' + gl_name);
        rightDemo.innerHTML = gl_name;
    }

    function BclearOut() { // - - - очистка всех полей
        Uform.reset();
        toClearDemo.innerHTML = "";
        rightDemo.innerHTML = '';
    } 

    function BclearArr() {
        toClearDemo.innerHTML = "";
        rightDemo.innerHTML = '';
        tabPersons = [];
        kolr.innerHTML = tabPersons.length;
        

    }

    function BshowTab() {// вывод эелементов масива в виде текста на html
        var text_demo = "";
        var elm;
        tabPersons.forEach(function (elm)  {
            text_demo = text_demo + elm.Fullname()+ "<br>";
        });
        Doc.getElementById("demo").innerHTML = text_demo;
    }

    function ButtAdd() {
        GoFill();
        tabPersons.push(somePer);
        kolr.innerHTML = tabPersons.length;
    }

    function InitDo() { // catch the aciton of bunntons
        // Doc.getElementById('butshow').onclick = Bshow;
        Doc.getElementById('butful').onclick = Bfull;
        Doc.getElementById('buttab').onclick = BshowTab;
        
        Doc.getElementById('butcle1').onclick = BclearOut;
        Doc.getElementById('butcle2').onclick = BclearArr;
        Doc.getElementById('butadd').onclick = ButtAdd;
    }
    window.onload = InitDo;// ---- finish load the html page ----

})();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - end of file



// // пример того, как можно создавать объекты с методами
// // и на основе одного объекта создавть другие, типа конструкторы.
// // но это не лучший вариант, осталяю его тут для истории.
// var makeRecords = function (nam, fam, cit) {
//         var s_data = {
//             givenName: nam,
//             firstName: fam,
//             citizen: cit,
//             Fullname: function () {
//                 var totext = '';
//                 totext += "Фио и страна: " +
//                 this.firstName + " " + this.givenName +
//                 ". Проживает в " + this.citizen;
//                 return totext;
//             }
//         };
//         return s_data;
//     };
// somePer = makeRecords(
//             Userform.nam.value,
//             Userform.fam.value,
//             Userform.cit.value);