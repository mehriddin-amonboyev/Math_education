import { fetchData } from "../postgres/postgres.js";

export async function login(req, res) {
    const { username, password } = req.body;
    const data = await fetchData("SELECT * FROM users;");

    const user = data.find(user => username === user.name && password === user.password);

    if (user) {
        switch (user.role) {
            case 'student': res.redirect('/student'); break;
            case 'teacher': res.redirect('/teacher'); break;
            case 'admin': res.redirect('/admin'); break;
            default: res.send("bu yerga kirishning o'zi katta mahorat!");
        }
    } else {
        res.redirect("/register");
    }
}