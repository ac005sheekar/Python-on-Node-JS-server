const {PythonShell} = require("python-shell");

let option = {
    scriptPath: "C:/Users/USER/Documents/GitHub/Python-Node-JS-server",
    args: ["James", "Bond" , 38],
};
PythonShell.run("C:/Users/USER/Documents/GitHub/Python-Node-JS-server/check.py", option, (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res);
});