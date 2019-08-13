const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:name', async (req,res) => {
   try{
    const { name } = req.params;
    const response = await fetch(`${process.env.API_URL}${name}`);
    
    const data = await response.json();
    res.json(data);
    
   } catch(err){
     res.status(500).json({
       message:'Server Error',
       err
     });
   }
 });


module.exports = router;