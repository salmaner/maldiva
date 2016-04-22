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
    RecordsToutist.prototype.writRecordToRow = function () {
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
    function show_Object(ob) {
        var names = "Текущая запись туриста:<br>"; var i = 0;
        for (i in ob) {
            if (i != "writRecordToRow") {
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

    function go_Fill_Fild() { // заполнение объекта данными с полей
        var Userform = Doc.getElementById("userform");
        var paternPerson = { // заполнил объект данными
                givenName : Userform.nam.value,
                firstName : Userform.fam.value,
                citizen   : Userform.cit.value,
            };
        // создал объект и передал в кач.параметра объект с данными.
        somePer = new RecordsToutist(paternPerson);

    }

    function but_Show_FIO() { // - -  отображение фио объекта
        go_Fill_Fild();
        alert('Вас зовут: ' + somePer.writRecordToRow());
    }

    function but_Show_FIO_Filds() { // - -  отображение всех полей объекта
        go_Fill_Fild();
        gl_name = show_Object(somePer);
        // alert('Значение: ' + gl_name);
        rightDemo.innerHTML = gl_name;
    }

    function but_Clear_Filds() { // - - - очистка всех полей
        Uform.reset();
        toClearDemo.innerHTML = "";
        rightDemo.innerHTML = '';
    } 

    function but_Clear_Array() {
        toClearDemo.innerHTML = "";
        rightDemo.innerHTML = '';
        tabPersons = [];
        kolr.innerHTML = tabPersons.length;
        

    }

    function but_Show_FIO_Tab() {// вывод эелементов масива в виде текста на html
        var text_demo = "";
        var elm;
        tabPersons.forEach(function (elm)  {
            text_demo = text_demo + elm.writRecordToRow()+ "<br>";
        });
        Doc.getElementById("demo").innerHTML = text_demo;
    }

    function but_Add_Rec_to_array() {
        go_Fill_Fild();
        tabPersons.push(somePer);
        kolr.innerHTML = tabPersons.length;
    }

    function init_Load() { // catch the aciton of bunntons
        // Doc.getElementById('butshow').onclick = but_Show_FIO;
        Doc.getElementById('butful').onclick = but_Show_FIO_Filds;
        Doc.getElementById('buttab').onclick = but_Show_FIO_Tab;
        
        Doc.getElementById('butcle1').onclick = but_Clear_Filds;
        Doc.getElementById('butcle2').onclick = but_Clear_Array;
        Doc.getElementById('butadd').onclick = but_Add_Rec_to_array;
    }
    window.onload = init_Load;// ---- finish load the html page ----

})();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - end of file



// // пример того, как можно создавать объекты с методами
// // и на основе одного объекта создавть другие, типа конструкторы.
// // но это не лучший вариант, остваляю его тут для истории.
// var makeRecords = function (nam, fam, cit) {
//         var s_data = {
//             givenName: nam,
//             firstName: fam,
//             citizen: cit,
//             writRecordToRow: function () {
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