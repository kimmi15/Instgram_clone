const jwt = require('jsonwebtoken');

const authentication = function(req,res,next){
    try{
        let token = req.header("Authorization","Bearer Token").split(' ')[1]

        if(!token) return res.status(401).send({status:false, message:"Please enter token in bearer token"});
        
            jwt.verify(token,"Project-6",(error,data)=>{
                if(error){
                const message = error.message == "jwt expired" ? "Token is expired, please login again!" : "token invalid!";
                return res.status(401).send({status:false, message});
                }
                req.user = data;
                next();
            });
        }
    catch(error){
        res.status(500).send({status:false, message:error.message});
    }
}


const authorization= async function(req,res,next){
    try{
        if(req.user._id.toString() !== userId.toString()) return res.status(401).send({status :false,message: "Unauthorized access!"});
        next()
    }
    catch(error){
        res.status(500).send({status:false, message:error.message});
    }
}

module.exports = {authentication, authorization}