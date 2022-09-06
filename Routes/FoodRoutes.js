const express = require('express');
const Food = require('../models/FoodModel');
const multer = require("multer")
const router =express.Router();

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./client/public/uploads");
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname);
    }
})

const upload=multer({storage:storage});


router.post('/admin/add', upload.single("foodImage") ,(req,res)=>{
    const newFood=new Food({
        foodName:req.body.foodName,
        description:req.body.description,
        price:req.body.price,
        foodImage:req.file.originalname,
    });
    newFood
    .save()
    .then(()=>res.json("New Food Added"))
    .catch((err)=>res.status(400).json(`Error:${err}`));
});


router.get('/',(req,res)=>{
    Food.find().exec((err,food)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingFood:food
        });
    });
})

router.get('/:id',(req,res)=>{
    let foodId=req.params.id;
    Food.findById(foodId , (err,food)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            food
        });
    });
});

router.put('/admin/update/:id' , upload.single("foodImage"),(req,res)=>{
    Food.findByIdAndUpdate(req.params.id)
    .then((food )=> {
        food.foodName=req.body.foodName;
        food.description=req.body.description;
        food.price=req.body.price;
        

        food
            .save()
            .then(() => res.json("Food details UPDATED successfully"))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});


router.delete('/admin/delete/:id',(req,res)=>{
    Food.findByIdAndRemove(req.params.id).exec((err,deletedfood)=>{
        if(err) return res.status(400).json({
          message:"Food Delete unsuccesful",err
        });
        return res.json({
            message:"Food Delete succesful",deletedfood
        });
    });
});


module.exports=router;