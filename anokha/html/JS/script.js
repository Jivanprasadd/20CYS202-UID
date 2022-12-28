function ValidateEmail() {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var x = document.getElementById("email").value;
    if (!x.match(mailformat)) {
        alert("Enter a valid email address");
        document.getElementById("email").focus()
    }
}

function PhoneNumberCheck() {

    var x = document.getElementById("phonenumber").value;
    console.log(x)
    if (!(x.toString().length == 10)) {
        alert("Please enter a valid phone number.")
        document.getElementById("phonenumber").focus()
    }
}
function NameCheck() 
{
    var x = document.getElementById("cname").value;
    var y = x.split("")
    let sp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    var arrLen = sp.length;
    for (var i = 0; i < arrLen; i++) 
    {
        if (y.includes(sp[i]))
         {
            alert("Enter a valid name.")
            document.getElementById("cname").focus()
            break
        }
    }
}
function Register()
{
    var flag=1;
    var u =  document.getElementById("cname").value;
	var u1 = document.getElementById("collegename").value;
	var u2 = document.getElementById("iname").value;
	var u3 = document.getElementById("email").value;
	var u4 = document.getElementById("subject").value;
	var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

	if(u.length==0 || u1.length==0 || u2.length==0 || u3.length==0 || u4.length==0)
    {
        flag=0;
		alert("Please fill out empty Input Fields!");
        document.getElementById("cname").focus

    }
    if(flag==1)
    {
        alert("!!!You have successfully registered for the event!!!")
    }
}