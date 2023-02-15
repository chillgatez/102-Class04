

function plateloop(){
    let counter = document.getElementById('platecount').value;

    let plate = document.createElement("IMG");
    plate.setAttribute("scr", "plate.jpg");
    plate.setAttribute("width", "150");
    plate.setAttribute("height", "150");
    plate.setAttribute("alt", "fish plate with spaghetti");

    while (counter > 0) {

        document.getElementById('loopSection').appendChild(plate);
        counter --;

    }
}

function formValidation() {
    let email = document.getElementById("email").value;
    let recipe = document.getElementById("recipe").value;
    let terms = document.getElementById("terms");
    let username = email.split ('@')[0];
    let domain = email.split ('@')[1];
    let dns = email.split ('.')[1];

    console.log("Username: " + username);
    console.log("Domain: " + domain);
    console.log("dns: " + dns);
    console.log(recipe);
    console.log(terms);

    if (dns == undefined) {
        alert('invalid email address');
    }

    if (recipe == '') {
        alert('You dont got any mixins for fixin');

    }

    if (!terms.checked) {
        alert('Please agree to terms of service');
    }

    alert ("Recipe submission clompete");

}
