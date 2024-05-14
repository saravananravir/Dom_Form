function label_create(tagname,attrname,attrvalue,content){
    var label_ele = document.createElement(tagname);
    label_ele.setAttribute(attrname,attrvalue);
    label_ele.innerHTML=content;
    return label_ele;
}
function break_create(){
    var break_ele = document.createElement('br');
    return break_ele ;
}
function input_create(inputtag,attrname,attrval,attrname1,attrval1){
    var input_ele = document.createElement(inputtag);
    input_ele.setAttribute(attrname,attrval);
    input_ele.setAttribute(attrname1,attrval1);
    return input_ele;
}
function fun() {
    var button = document.createElement("input");
    button.type = "button";
    button.value = "im a button";
    button.onclick = fun();
    document.body.append(button);
}
var fn = label_create("label","for","fn","FirstName");
var fn_b = break_create();
var input_fn = input_create("input","type","text","id","fn");
document.body.append(fn,fn_b,input_fn);

var fn_b = break_create();
document.body.append(fn_b);

var mn = label_create("label","for","fn","MiddleName");
var mn_b = break_create();
var input_mn = input_create("input","type","text","id","mn");
document.body.append(mn,mn_b,input_mn);

var fn_b = break_create();
document.body.append(fn_b);

var ln = label_create("label","for","fn","LastName");
var ln_break= break_create();
var input_ln = input_create("input","type","text","id","ln");
document.body.append(ln,ln_break,input_ln);

var fn_b = break_create();
document.body.append(fn_b);

var email = label_create("label","for","fn","Email");
var email_b = break_create();
var input_email = input_create("input","type","text","id","em");
document.body.append(email,email_b,input_email);

var fn_b = break_create();
document.body.append(fn_b);

var loc = label_create("label","for","loc","Location");
var loc_b = break_create();
var input_loc = input_create("input","type","text","id","loc");
document.body.append(loc,loc_b,input_loc);

var fn_b = break_create();
document.body.append(fn_b);

var button = document.createElement("button","clickme");
button.setAttribute("type","button");
button.setAttribute("onclick","fun()");
document.body.append(button);


