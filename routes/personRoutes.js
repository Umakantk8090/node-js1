const express=require('express');
const person = require('../models/Person');
const router=express.Router();
//const person = require("./../models/Person");

router.post("/", async (req, res) => {
    try {
      const data = req.body;
  
      const newPerson = new person(data);
      const response = await newPerson.save();
      console.log("data saved");
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "enternal server error" });
    }
  });
  router.get("/", async(req,res)=>{
    try {
      const data=await person.find();
      console.log('data fetched');
      res.status(200).json(data);
      
  
    } catch (error) {
      console.log(error);
      res.status(500).json({error:'server error'})
      
    }
  })

  router.get('/:workType', async(req,res)=>{
    try {
        const workType=req.params.workType;
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response=await person.find({work: workType});
            console.log('response fetch');
            res.status(200).json(response);
            
        }else{
            res.status(404).json({error:'invalid work type'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal server error'});
        
    }
  })
//update method with(put operation)
  router.put('/:id', async(req,res)=>{
    try {
        const personId=req.params.id;
        const updatePersonId=req.body;
        const response= await person.findByIdAndUpdate(personId, updatePersonId, {
            new: true,
            runValidators: true,
        })
        if(!response){
            return res.status(404).json({error:'person not found'});
        }
        console.log('data update');
        res.status(200).json(response);
        

    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal server error'});
        
    }
  })


  router.delete('/:id', async(req,res)=>{
    try {
        const personId=req.params.id;
        const response=await person.findByIdAndDelete(personId);
      if(!response){
        res.status(404).json({error:'person not found'});
      }
      console.log('data deleted');
      res.status(200).json({message:'person data deleted successfully'});
      
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal server error'})
        
    }
  })

module.exports=router;