function showInfo() {

    document.getElementById("messageInfo").innerHTML = "Congrats, you are registered. Look at your details below:";

    var name = document.getElementById("name").value;
    document.getElementById("nameInfo").innerHTML = name;

    var email = document.getElementById("email").value;
    document.getElementById("mailInfo").innerHTML = email;   

    var website = document.getElementById("website").value;
    document.getElementById("webInfo").innerHTML = website;

    var imgLink = document.getElementById("imgLink").value;
    document.getElementById("imgInfo").innerHTML = `<img src="${imgLink}" alt="User Image">`;

    var gender = document.getElementsByName("gender");  
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            document.getElementById("genderInfo").innerHTML = gender[i].value;
    }

    var skillsInfo = [];
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function(checkbox) {
        skillsInfo.push(checkbox.value);
    });

    var selectedValuesDisplay = document.getElementById('skillsInfo');
    selectedValuesDisplay.textContent = skillsInfo.join(', ');
}