const express=require('express');
const router=express.Router();
const menuItem=require('../models/MenuItem');
router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new menuItem(data);
      const response = await newMenu.save();
      console.log("data save menu");
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "server eror" });
    }
  });
  router.get("/", async (req, res) => {
    try {
      const data = await menuItem.find();
      console.log("data fetched");
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "internal server error" });
    }
  });
  router.get("/:checktast", async(req, res) => {
    try {
      const checktast = req.params.checktast;
      if (checktast == "sweet" || checktast == "spicy") {
        const response = await menuItem.find({ taste: checktast });
        console.log("response fetched");
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: "invalid work type" });
      }
    } catch (error) {
      console.log(err);
      res.status(500).json({ error: "internal server" });
    }
  });

  //for testing purpose
  module.exports=router;