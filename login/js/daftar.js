
function daftar() {

    var username = document.getElementById("username").value; 
    var username = document.getElementById("username").value; 
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value;
    
    if (username == "" && password == "") { 
        alert("Selamat Anda Berhasil login");
        window.location = "/login/index.html" 
        return false;
    } else if (username == "" || password === "") {
        alert ("username & password tidak boleh kosong") 
        return false;
    }

    }
    