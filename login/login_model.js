const mysql = require("mysql2");
const config = require("../App/config");
const jwt = require("jsonwebtoken");

function signin(req,res) {
    try {
        const {email, password} = req.body;
        if (!(email && password)) {
            res.status(400).send("Töltsd ki az összes adatot!");
        }
        var con = mysql.createConnection(config.database);
        con.connect(function(err) {
            if (err) throw err; 
            console.log('sikeres csatlakozás');
        })
        const sql = 'call userLogin(?,?)';
        
        con.query(sql,[email,password], (err,result) =>{
            console.log(result);
            if (err) throw err;
            if (result[0].length > 0){
                const token = jwt.sign({
                    userID: result[0][0].userID,
                    email: result[0][0].email
                }, config.TokenKey,
                {
                    expiresIn:"2h",
                });    
                
                let user = result[0][0];
                con.query('call userUpdateToken(?,?)',[result[0][0].userID,token],(err,result,fields)=>{
                    if (err) throw err;
                    user.token = token;
                    res.send(user);
                })
            }
            else{
                res.status(401).send(JSON.stringify("nem engedélyezett"));
            }
            
        })


    } catch (error) {

    }
}

exports.signin = signin