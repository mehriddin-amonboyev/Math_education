import express from 'express';
import { appConfig } from './config/app.config.js';
import path from 'path';
import bodyParser from 'body-parser';
import { fetchData } from './postgres/postgres.js';
import morgan from 'morgan';
import { categoryRoutes } from './routes/category.routes.js';
import { loginRouter } from './routes/login.router.js';

// const data = JSON.parse(readFileCustom(path.join(process.cwd(), "src", "models", "users.json"), "utf-8"));
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));
app.use("/public", express.static(path.join(process.cwd(), "public")));

//Middlaware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api/v1", categoryRoutes);
app.get('/', (req, res) => {
    res.render('dashboard');
});

app.use('/api/v1', loginRouter);

app.get('/student', (req, res) => {
    res.render('salom')
});

app.get('/admin', (req, res) => {
    res.render('admin');
});

app.get('/teacher', (req, res) => {
    res.render('teacher');
});

// app.post("/login", async (req, res) => {
//     const { username, password } = req.body;
//     const data = await fetchData("SELECT * FROM users;");

//     const user = data.find(user => username === user.name && password === user.password);

//     if (user){
//         switch(user.role){
//             case 'student' : res.redirect('/student'); break;
//             case 'teacher' : res.redirect('/teacher'); break;
//             case 'admin' : res.redirect('/admin'); break;
//             default : res.send("bu yerga kirishning o'zi katta mahorat!");
//         }
//     } else {
//         res.redirect('/login');
//     }
// })

// app.get("/data", async (req, res) => {
//     const data = await fetchData("SELECT * FROM users LIMIT 5;");
//     console.log(data[1].phone);
//     res.send({
//         message: "Hello from data",
//         data: data
//     });
// });


// app.use("/students", studentRoutes);


// app.get("/users/:userId", (req, res) =>D
//     const userId = req.params.userId;

//     const foundedUser = data.find(t => t.id == userId);
//     console.log("salom", foundedUser);
//     res.render('users', { users: foundedUser });
// });

// //post qismi

// app.post("/create", (req, res) => {
//     const newUser = req.body;
//     console.log(newUser)
//     data.push({
//         id: data.at(-1)?.id + 1,
//         ...newUser,
//     });
//     fs.writeFileSync("data.json", JSON.stringify(data, null, 3));
//     res.send("okey brooo");
// });

// //patch
// app.patch("/users/:userId", (req, res) => {
//     const updateData = req.body;

//     const foundedUserIndex = data.findIndex((t) => t.id == req.params.userId);

//     if (updateData?.name) {
//         data[foundedUserIndex].name = updateData.name;
//     }
//     if (updateData?.email) {
//         data[foundedUserIndex].email = updateData.email;
//     }
//     if (updateData?.password) {
//         data[foundedUserIndex].password = updateData.password;
//     }
//     if (updateData?.phone) {
//         data[foundedUserIndex].phone = updateData.phone;
//     }
//     writeFileSync("data.json", JSON.stringify(data, null, 3));
//     res.send(data);

// })

// app.put("/users/:userId", (req, res) => {
//     const updateData = req.body;
//     const userId = req.params.userId;
//     const foundedUserIndex = data.findIndex((t) => t.id == req.params.userId);

//     data.splice(foundedUserIndex, 1, { id: userId, ...updateData });

//     writeFileSync("data.json", JSON.stringify(data, null, 3));
//     res.send(data);
// })

// app.delete("/users/:userId", (req, res) => {
//     const foundedUserIndex = data.findIndex((t) => t.id == req.params.userId);

//     if (foundedUserIndex !== -1) {
//         data.splice(foundedUserIndex, 1);
//     }
//     writeFileSync("data.json", JSON.stringify(data, null, 3));
//     res.send(data);
// })

app.listen(appConfig.port, appConfig.host, () => {
    console.log(`Listening on port ${appConfig.port}`)
});