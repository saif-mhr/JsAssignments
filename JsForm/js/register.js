

function doRegister() {

    if (confirm('Are you sure to submit this form ?')) {

    var fname, lname, email, gender, city,remarks;

    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    email = document.getElementById('email').value;
    gender = document.querySelector('input[id="gender"]:checked').value;
        city = document.getElementById('city').value;
    remarks = document.getElementById('remarks').value;

        document.getElementById('ofname').innerHTML = '<b>First Name:</b> ' + fname;
        document.getElementById('olname').innerHTML = '<b>Last Name:</b> ' + lname;
        document.getElementById('oemail').innerHTML = '<b>Email Address:</b> ' + email;
        document.getElementById('ogender').innerHTML = '<b>Gender:</b> ' + gender;
        document.getElementById('ocity').innerHTML =   '<b>City:</b> ' + city;
        document.getElementById('ohoby').innerHTML =   '<b>Hobbies:</b> ' + hobbs;
        document.getElementById('oremarks').innerHTML = '<b>Remarks:</b> ' + remarks;
    }

    //form not submitted yet!
}
