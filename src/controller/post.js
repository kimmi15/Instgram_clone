const postModel = require('../model/postModel');
const profileModel = require('../model/profileMode');

/**   --------------------------------------------createPost------------------------------------------------- */
const createPost = async (req,res) =>{
    try {
        
    }catch(error){ return res.status(500).send({status: false, message: error.message})}
}

/**   --------------------------------------------getPost------------------------------------------------- */
const getPost = async (req,res) =>{
    try {
        
    }catch(error){ return res.status(500).send({status: false, message: error.message})}
}

/**   --------------------------------------------getLikes------------------------------------------------- */
const getLikes = async (req,res) =>{
    try {
        
    }catch(error){ return res.status(500).send({status: false, message: error.message})}
}

/**   --------------------------------------------getComments------------------------------------------------- */
const getComments = async (req,res) =>{
    try {
        
    }catch(error){ return res.status(500).send({status: false, message: error.message})}
}
/**   --------------------------------------------updatePost------------------------------------------------- */
const updatePost = async (req,res) =>{
    try {
        
    }catch(error){ return res.status(500).send({status: false, message: error.message})}
}
/**   --------------------------------------------deletePost------------------------------------------------- */
const deletePost = async (req,res) =>{
    try {
        
    }catch(error){ return res.status(500).send({status: false, message: error.message})}
}

module.exports = {createPost ,getPost ,getComments , getLikes , updatePost ,deletePost}