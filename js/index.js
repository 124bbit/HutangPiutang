async function login(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let uri = 'http://localhost:8001/User'
    const res = await fetch(uri)
    const userdata = await res.json()

    userdata.map(user => {
        if (username === user.Username) {
            if (username === user.Username && password === user.Password) {
                Cookies.set("username", username)
                Cookies.set("RoleId", user.RoleId)
                window.location.href = "/src/home.html"
            }
        }
    })
}
