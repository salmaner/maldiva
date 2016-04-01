var id_nam = document.getElementById("nam").value;
var id_fam = document.getElementById("fam");
var id_gen = document.getElementById("gen");
var id_bun = document.getElementById("bun");
var id_plc = document.getElementById("plc");
var id_cit = document.getElementById("cit");

// var id_show_but = document.getElementById("butshow");

var s_data = {
    givenName: '',
    firstName: '',
    gender: '',
    dataB: '',
    placeB: '',
    citizen: '',
    Fillup: function (a,b,c,d,e,h){
        this.givenName = a;
        this.firstName = b;
        this.gender    = c;
        this.dataB     = d;
        this.placeB    = e;
        this.citizen   = h;
    },
    Fullname: function () {
        return this.firstName+' '+this.givenName;
    }
}
// отображение заполненных данных
function ShowObject(ob) {
    var names = "";
    for(var name in ob) names += ob[name] + " | ";
    return names;
    // console.log(Object.keys(ob));
    // return Object.keys(ob);
}

// - - - - заполнение структуры - - - 
var ktoto = s_data;
ktoto.Fillup(id_nam, 
             id_fam.value,
             id_gen.value,
             id_bun.value,
             id_plc.value,
             id_cit.valuet
    );

ShowObject(ktoto);
console.log(ktoto.Fullname());
alert(ShowObject(ktoto));

// alert('Для просмотра доп сообщений запустите консоль.');
console.log('[LOG: is finished!]');
