const {PythonShell} = require("python-shell");

let option = {
    scriptPath: "./Python-Node-JS-server",
    args: ["John", 45],
};
PythonShell.run("./check.py", options, (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res);
});