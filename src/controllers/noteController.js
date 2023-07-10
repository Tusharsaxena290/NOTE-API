const notemodel = require("../models/notemodel");

const createNote=async(req,res)=>{
    const{title,description}=req.body;
    
    try{
        const newNote=await notemodel.create({
            title:title,
            description:description,
            userId:req.userId
    
        })
        res.status(201).json({
            newNote:newNote
        })
    }
    catch(error){
        res.status(401).json({
            message:"Something Went Wrong!"
        })
    }

}

const updateNote=async(req,res)=>{
    const id=req.params.id;
    const{title,description}=req.body;
    const newNote={
        title:title,
        description:description,
        userId:req.userId
    }
    try{
        await notemodel.findByIdAndUpdate(id, newNote,{new:true})
        res.status(200).json(newNote);
    }
    catch(err){
        res.status(401).json({
            message:"Something Went Wrong!"
        })

    }


    
}

const deleteNote=async(req,res)=>{
    const id=req.params.id;
    try{
        const note=await notemodel.findByIdAndRemove(id);
        res.status(202).json({
            message:"Note deleted successfully!"
        })
    }
    catch(error){
        res.status(401).json({
            message:"Something Went Wrong!"
        })
    }
    
}

const getNotes =async(req,res)=>{
    try{
        const notes=await notemodel.find({userId:req.userId})
        if(notes.length!=0){
            res.status(200).json({
                notes
            })
        }
        else{
            res.status(404).json({
                message:"No notes for the user"
            })
        }
       
    }
    catch(error){
        res.status(404).json({
            message:"No notes for the user"
        })
    }
    
}

module.exports={
    createNote,
    updateNote,
    deleteNote,
    getNotes
}