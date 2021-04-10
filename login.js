var arr = [
{
    username: "coolguy1",
    password: "cool123"
},
{
    username: "coolguy2",
    password: "verycool"
},
{
    username: "coolguy3",
    password: "cool000"
},
{
    username: "notcoolguy",
    password: "notcool"
}
]
function check() {
    var logInUsername =prompt("ჩაწერეთ username");
    var logInPassword = prompt("ჩაწერეთ password");
    for(var i=0; i<arr.length; i++) {
        if(logInUsername== arr[i].username && logInPassword == arr[i].password){
            alert("congrats");
            break;
        }else if(logInUsername == arr[i].username && logInPassword !== arr[i].password) {
            alert(" wrong password");
            break;
        }else{
            alert("wrong username");
            break;
        }
    }
}
