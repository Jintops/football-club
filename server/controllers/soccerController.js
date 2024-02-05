exports.homepage=async(req,res)=>{
    try{
     
       res.render('index')
    
}catch(error){
    res.status(500).send({message:error.message || "error occured"})
}
};

exports.explore=async(req,res)=>{
    try{
     
       res.render('explore')
    
}catch(error){
    res.status(500).send({message:error.message || "error occured"})
}
};


