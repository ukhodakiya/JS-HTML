var storageCounter = localStorage.length;
var initLength = 0;

document.getElementById("Save").addEventListener('click', function () {

    var username_doc = document.getElementById("UserName");
    var password_doc = document.getElementById("Password");
    var email_doc = document.getElementById("Email");
    var organization_doc = document.getElementById("organization");
    var address_doc = document.getElementById("Address");
    var gender_doc = document.querySelectorAll("input[name=radio]");

    function my_users(username, password, email, organization, address, gender) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.organization = organization;
        this.address = address;
        this.gender = gender;
    }

    var my_users = new my_users();

    if(username_doc.value == "" || username_doc.value == null){
        setofValues("divName","p","ParameterName","First Name ",username_doc);
    }
    else {
        my_users.username = username_doc.value;
        if(document.getElementById("ParameterName")){
            document.getElementById("ParameterName").style.display="none";
        }
    }

    if (password_doc.value == "" || password_doc.value == null) {

        setofValues("divPassword", 'p', "ParameterPassword", "Password ", password_doc);
    }
    else {
        my_users.password = password_doc.value;
        if (document.getElementById("ParameterPassword")) {
            document.getElementById("ParameterPassword").style.display = "none";
        }
    }

    if (email_doc.value == "" || email_doc.value == null) {
        setofValues("divEmail", 'p', "ParameterEmail", "Email ", email_doc);
    }
    else {
        my_users.email = email_doc.value;
        if (document.getElementById("ParameterEmail")) {
            {
                document.getElementById("ParameterEmail").style.display = "none";
            }
        }
    }
    if (organization_doc.value == "" || organization_doc.value == null) {
        setofValues("divOrg", 'p', "ParamaetePhone", "organization ", organization_doc);
    }
    else {
        my_users.organization = organization_doc.value;
        if (document.getElementById("ParamaetePhone")) {
            {
                document.getElementById("ParamaetePhone").style.display = "none";
            }
        }
    }

    if (address_doc.value == "" || address_doc.value == null) {

        setofValues("divAddr", 'p', "ParameterAddress", "Address ", address_doc);

    }
    else {
        my_users.address = address_doc.value;
        if (document.getElementById("ParameterAddress")) {
            {
                document.getElementById("ParameterAddress").style.display = "none";
            }
        }
    }
    if (document.getElementsByName("radio")[0].checked == false && document.getElementsByName("radio")[1].checked == false) {
        var gen1 = document.getElementById('divGender');
        var errorGen = document.createElement('p');
        errorGen.setAttribute('id', 'paraGender');
        errorGen.innerHTML = 'Gender is required';
        var p6 = document.getElementById("paraGender");
        if (p6) {
            if (gender_doc.value != "") {
                p6.style.display = "none";
            }
            else {
                p6.style.display = "";
            }

        }
        else {
            gen1.appendChild(errorGen);
        }

    }
    else {
        for (var gen = 0; gen < gender_doc.length; gen++) {
            if (gender_doc[gen].checked) {
                my_users.gender = gender_doc[gen].value;
            }
        }
        if (p6) {
            p6.style.display = "none";
        }
    }

    if (username_doc.value == "" || password_doc.value == "" || email_doc.value == "" || organization_doc.value == "" || address_doc.value == "") {
        var para = document.querySelectorAll('p[id^="para"]');
        var i;
        for (i = 0; i < para.length; i++) {
            para[i].style.color = "red";
        }
    }
   // console.log(userVal);

    if (userVal) {
        initLength = userVal.length;
    }
    if (username_doc.value != "" && password_doc.value != "" && email_doc.value != "" && organization_doc.value != "" && address_doc.value != "") {
        // console.log("else if " + counter);
        var userVal = JSON.parse(localStorage.getItem("user_data")) || [];
        var obj = {
            username: my_users.username,
            password: my_users.password,
            email: my_users.email,
            organization: my_users.organization,
            address: my_users.address,
            gender: my_users.gender
        };
        userVal.push(obj);
        localStorage.setItem("user_data", JSON.stringify(userVal));
        var newLen = 0;
        newLen = userVal.length;
        if (obj) {
            if (document.getElementById('table') == null) {
                var table = document.createElement("table");
                table.setAttribute('id', 'table');
                table.setAttribute('border', '1');
                var divContainer = document.getElementById("divTable");
                divContainer.appendChild(table);
                table.insertAdjacentHTML('beforeend', '<tr id=header><th>Name</th><th>Password</th><th>Email</th><th>organization</th><th>Address</th><th>Gender</th></tr>');
            }
            var row = document.createElement("tr");
            var hd1 = document.createElement("td");
            var hdVal1 = hd1.appendChild(document.createTextNode(obj.username));

            hd1.appendChild(hdVal1);
            row.appendChild(hd1);
            var hd2 = document.createElement("td");
            var hdVal2 = hd2.appendChild(document.createTextNode(obj.password));

            hd2.appendChild(hdVal2);
            row.appendChild(hd2);
            var hd3 = document.createElement("td");
            var hdVal3 = hd3.appendChild(document.createTextNode(obj.email));

            hd3.appendChild(hdVal3);
            row.appendChild(hd3);
            var hd4 = document.createElement("td");
            var hdVal4 = hd3.appendChild(document.createTextNode(obj.organization));

            hd4.appendChild(hdVal4);
            row.appendChild(hd4);
            var hd5 = document.createElement("td");
            var hdVal5 = hd4.appendChild(document.createTextNode(obj.address));

            hd5.appendChild(hdVal5);
            row.appendChild(hd5);
            var hd6 = document.createElement("td");
            var hdVal6 = hd5.appendChild(document.createTextNode(obj.gender));

            hd6.appendChild(hdVal6);
            row.appendChild(hd6);

            document.getElementById("table").appendChild(row);
        }
        else {
            createTable();
        }
    }


});
function setofValues(AppendingDiv, NewElement, Displayid, err, text) {
    var divName = document.getElementById(AppendingDiv);
    var Display = document.getElementById(Displayid);
    var errorPara = document.createElement(NewElement);
    errorPara.setAttribute('id',Displayid);
    errorPara.innerHTML = err+ 'is required.';

    if (Display){
        if(text.value != ""){
            Display.style.display = "none";
        }
        else {
            Display.style.display = "";
        }
    }
    else {
        divName.appendChild(errorPara);
    }

}
document.addEventListener("DOMContentLoaded", function (event) {
    if (localStorage.length != 0) {
        // for (var i = 1; i <= localStorage.length; i++) {
        createTable();
        // }
    }
});

function createTable() {
    if (document.getElementById('table') == null) {
        var table = document.createElement("table");
        table.setAttribute('id', 'table');
        table.setAttribute('border', '1');
        var divContainer = document.getElementById("divTable");
        divContainer.appendChild(table);
        table.insertAdjacentHTML('beforeend', '<tr id=header><th>Name</th><th>Password</th><th>Email</th><th>Organization</th><th>Address</th><th>Gender</th></tr>');
    }
    // if (localStorage.length != 0) {
    var user = JSON.parse(localStorage.getItem("user_data"))
    // console.log(user.length);

    for (var i = 0; i < user.length; i++) {

        // console.log(localStorage.getItem("user_data").length);
        var row = document.createElement("tr");
        var hd1 = document.createElement("td");
        var hdVal1 = hd1.appendChild(document.createTextNode(user[i].username));

        hd1.appendChild(hdVal1);
        row.appendChild(hd1);
        var hd2 = document.createElement("td");
        var hdVal2 = hd2.appendChild(document.createTextNode(user[i].password));

        hd2.appendChild(hdVal2);
        row.appendChild(hd2);
        var hd3 = document.createElement("td");
        var hdVal3 = hd3.appendChild(document.createTextNode(user[i].email));

        hd3.appendChild(hdVal3);
        row.appendChild(hd3);
        var hd4 = document.createElement("td");
        var hdVal4 = hd3.appendChild(document.createTextNode(user[i].organization));

        hd4.appendChild(hdVal4);
        row.appendChild(hd4);
        var hd5 = document.createElement("td");
        var hdVal5 = hd4.appendChild(document.createTextNode(user[i].address));

        hd5.appendChild(hdVal5);
        row.appendChild(hd5);
        var hd6 = document.createElement("td");
        var hdVal6 = hd5.appendChild(document.createTextNode(user[i].gender));

        hd6.appendChild(hdVal6);
        row.appendChild(hd6);

        document.getElementById("table").appendChild(row);

    }
}
