// Adding a new Language field
function addNewLanField() {
    var newNode = document.createElement("input");
    newNode.classList.add("form-control", "laField", "mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    var aqOb = document.getElementById("la");
    var aqAddButtonOb = document.getElementById("laAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}
// Adding a new Education field
function addNewEdField() {
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "edField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");
    var aqOb = document.getElementById("ed");
    var aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}
// Adding a new Title field
function addNewTiField() {
    var x = document.createElement("input");
    x.classList.add("form-control", "tiField", "mt-2");
    x.setAttribute("placeholder", "Enter title");
    var aqOb = document.getElementById("we");
    var aqAddButtonOb = document.getElementById("weAddButton");
    aqOb.insertBefore(x, aqAddButtonOb);
}
// Adding a new Work Experience field
function addNewWEField() {
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter Experience");
    var weOb = document.getElementById("we");
    var weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
// Adding a new Skill field
function addNewAQField() {
    var newNode = document.createElement("input");
    newNode.classList.add("form-control", "skField", "mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    var aqOb = document.getElementById("sk");
    var aqAddButtonOb = document.getElementById("skAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}
// Generating the CV
function generateCV() {
    // Personal Information
    document.getElementById("nName").innerHTML = document.getElementById("nameField").value;
    document.getElementById("jJob").innerHTML = document.getElementById("jobFiled").value;
    document.getElementById("cContact").innerHTML = document.getElementById("contactField").value;
    document.getElementById("gGmail").innerHTML = document.getElementById("gmailFiled").value;
    document.getElementById("fFacebook").setAttribute("href", document.getElementById("fbField").value);
    document.getElementById("lLinkedin").setAttribute("href", document.getElementById("linkedField").value);
    // Languages
    var languages = document.getElementsByClassName("laField");
    var lanF = "";
    for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
        var e = languages_1[_i];
        lanF += "<li><span>".concat(e.value, "</span></li>");
    }
    document.getElementById("lan").innerHTML = lanF;
    // Objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    // Education
    var educationF = document.getElementsByClassName("edField");
    var resEdu = "";
    for (var _a = 0, educationF_1 = educationF; _a < educationF_1.length; _a++) {
        var e = educationF_1[_a];
        resEdu += "<li><p>".concat(e.value, "</p></li>");
    }
    document.getElementById("edu").innerHTML = resEdu;
    // Work Experience
    var wes = document.getElementsByClassName("weField");
    var str = "";
    for (var _b = 0, wes_1 = wes; _b < wes_1.length; _b++) {
        var e = wes_1[_b];
        str += "<li class=\"squar\"><h4>".concat(e.value, "</h4></li>");
    }
    document.getElementById("weT").innerHTML = str;
    // Professional Skills
    var aqs = document.getElementsByClassName("skField");
    var str1 = "";
    for (var _c = 0, aqs_1 = aqs; _c < aqs_1.length; _c++) {
        var e = aqs_1[_c];
        str1 += "<li class=\"squar\"><h4>".concat(e.value, "</h4></li>");
    }
    if (str1.length)
        document.getElementById("skills").innerHTML = str1;
    // Profile Picture
    var file = document.getElementById("imgField").files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        document.getElementById("imgTemplate").src = reader.result;
    };
}
// Print the CV
function printCV() {
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
    document.getElementById("btnN").style.display = "none";
    window.print();
}
