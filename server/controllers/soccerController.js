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
exports.about=async(req,res)=>{
    try{
     
       res.render('about')
    
}catch(error){
    res.status(500).send({message:error.message || "error occured"})
}
};
exports.history=async(req,res)=>{
    try{
     
       res.render('realmadrid-history')
    
}catch(error){
    res.status(500).send({message:error.message || "error occured"})
}
};
exports.players=async(req,res)=>{
    try{
     
       res.render('realmadrid-players')
    
}catch(error){
    res.status(500).send({message:error.message || "error occured"})
}
};
exports.stadium=async(req,res)=>{
    try{
     
       res.render('stadium')
    
}catch(error){
    res.status(500).send({message:error.message || "error occured"})
}
};

