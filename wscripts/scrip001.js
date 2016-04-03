var gl_name = '';
var ktoto = {};
var s_data = {
    givenName: '',
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

// отображение заполненных данных
function ShowObject(ob) {
    var names = "";
    for (var name in ob) names += ob[name] + "\n";
    return names;
    // console.log(Object.keys(ob));
    // return Object.keys(ob);
}

// alert('Для просмотра доп сообщений запустите консоль.');
console.log('[LOG: is finished!]');

window.onload = InitDo;

function GoFill() {
    var Userform = document.getElementById("userform");
    s_data.Fillup(Userform.nam.value,
        Userform.fam.value,
        Userform.gen.value,
        Userform.bun.value,
        Userform.plc.value,
        Userform.cit.value
    );
}

function Bshow() {
    GoFill();
    alert('Вас зовут: ' + s_data.Fullname());
}

function Bfull() {
    GoFill();
    gl_name = ShowObject(s_data);
    alert('Значение: ' + gl_name);
}

function InitDo() {

    var ButonSh = document.getElementById('userform');
    ButonSh.butshow.onclick = Bshow;

    var ButonFil = document.getElementById('userform');
    ButonFil.butful.onclick = Bfull;

}
