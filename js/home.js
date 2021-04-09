if (!Cookies.get("username")) {
    window.location.href = "/src/login.html"
}

if (Cookies.get("RoleId") != "1") {
    const actioncolums = document.querySelector("thead tr")
    const navlinks = document.getElementById("navbar-links")
    navlinks.removeChild(navlinks.childNodes[5])
    actioncolums.removeChild(actioncolums.childNodes[9])

}

const tbl = document.querySelector("#tbl")
const listdata = document.querySelector('#catatan-tabel')

function logout() {
    Cookies.remove("username",)
    Cookies.remove("RoleId")
    window.location.href = "/src/index.html"
}


async function deleteCatatan(id, uri) {
    await fetch(uri + '/' + id,
        {
            method: 'DELETE',
        })
        .then(res => res.json())
}

const getCatatan = async () => {
    let uri = 'http://localhost:8000/hutang'
    const reshutang = await fetch(uri)
    const hutang = await reshutang.json()

    let uri2 = 'http://localhost:8000/piutang'
    const respiutang = await fetch(uri2)
    const piutang = await respiutang.json()


    let template = "";
    if (Cookies.get("RoleId") === "1") {
        hutang.forEach(data => {
            template +=
                `
            <tr>
                <td>${data.Nama}</td>
                <td>${data.JenisCatatan}</td>
                <td>${data.JumlahUang}</td>
                <td>${data.Keterangan}</td>
                <td><button  onclick="location.href = 'http://127.0.0.1:5500/src/update.html?id=${data.id}&jenis=hutang';" class='btnUpdate'>Update</button><button onclick="deleteCatatan(${data.id},'${uri}')"  class='btnDelete'>Delete</button></td>
            </tr>
            `
        });

        piutang.forEach(data => {
            template +=
                `
            <tr>
                <td>${data.Nama}</td>
                <td>${data.JenisCatatan}</td>
                <td>${data.JumlahUang}</td>
                <td>${data.Keterangan}</td>
                <td><button onclick="location.href = 'http://127.0.0.1:5500/src/update.html?id=${data.id}&jenis=piutang';" class='btnUpdate'>Update</button><button onclick="deleteCatatan(${data.id},'${uri2}')"class='btnDelete'>Delete</button></td>
            </tr>
            `
        });

        listdata.innerHTML = template;
    } else {
        hutang.forEach(data => {
            template +=
                `
            <tr>
                <td>${data.Nama}</td>
                <td>${data.JenisCatatan}</td>
                <td>${data.JumlahUang}</td>
                <td>${data.Keterangan}</td>
               
            </tr>
            `
        });

        piutang.forEach(data => {
            template +=
                `
            <tr>
                <td>${data.Nama}</td>
                <td>${data.JenisCatatan}</td>
                <td>${data.JumlahUang}</td>
                <td>${data.Keterangan}</td>
                
            </tr>
            `
        });

        listdata.innerHTML = template;
    }


}
window.addEventListener("DOMContentLoaded", () => { getCatatan() })

