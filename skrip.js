document.getElementById("submit").addEventListener("click", function() {
    var nama = document.getElementById("nama").value;
    var pekerjaan = document.getElementById("pekerjaan").value;
    var hobby = document.getElementById("hobby").value;

    if (nama == "" || pekerjaan == "" || hobby == "") {
        alert("Harap isi semua formulir!");
    } else {
        var hasil = document.getElementById("hasil");
        hasil.innerHTML = "<h2>Nama: " + nama + "</h2>";
        hasil.innerHTML += "<h2>Pekerjaan: " + pekerjaan + "</h2>";
        hasil.innerHTML += "<h2>Hobby: " + hobby + "</h2>";
    }
});