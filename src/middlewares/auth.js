const jwt =require("jsonwebtoken");




//======================================  Authentication  ===========================================//

const authentication = function(req,res,next)
{
    try{
    let token = req.header("Authorization","Bearer Token")

    if(!token)return res.status(401).send({status:false, message:"Please enter token in bearer token"});
    let splittoken=token.split(" ")
    console.log("1")
        jwt.verify(splittoken[1],"Project-6",(error)=>{
            if(error){
            return res.status(401).send({status:false, message:error.message});
            }
            next();
         });
    }
    catch(error){
        res.status(500).send({status:false, message:error.message});

    }
}








//==========================================  Authorization  ===========================================//

const authorization= async function(req,res,next){
    try{
    let token = req.header("Authorization","Bearer Token");
    let splittoken = token.split(" ")
 console.log("2")
    let newToken = jwt.verify(splittoken[1],"Project-6")
  
    let userId = req.params.userId
     console.log(newToken)
    let decodedToken = newToken._id//.toString()
    console.log("4")
    let realToken = userId
    //.toString()
    console.log("3")
    if(decodedToken !== realToken)return res.status(401).send({status :false,message: "Unauthorized access!"});
     

    next()
    }
    catch(error){
        res.status(500).send({status:false, message:error.message});

    }
}

module.exports = {authentication, authorization}