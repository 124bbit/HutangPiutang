const nama = document.getElementById("nama");
const desc = document.getElementById("desc");
const jmluang = document.getElementById("jmluang");
const ket = document.getElementById("keterangan");
const format_jml = parseInt(jmluang.value);

function logout() {
    Cookies.remove("username",)
    Cookies.remove("RoleId")
    window.location.href = "/src/index.html"
}

const tambahcatatan = async () => {
    let uri = 'http://localhost:8000/' + desc.value;
    await fetch(uri, {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        },
        body: JSON.stringify({
            "Nama": nama.value,
            "JenisCatatan": desc.value,
            "JumlahUang": parseInt(jmluang.value),
            "Keterangan": ket.value,
        })
    })
        .then(Response => Response.json())
        .then(console.log(Response))
}
function addCatatan(e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apa kah semua data yang diisi benar?',
        text: "Data yang sudah disimpan tidak bisa kembali!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Tambah catatan!'
    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire(
                'Success!',
                'Catatan sudah disimpan !',
                'success'
            )
            tambahcatatan()
        }
    })


}