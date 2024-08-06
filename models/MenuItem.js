const mongoose=require('mongoose');
const menuItemSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    taste: {
        type: String,
        enum: ['sweet','spicy'],
        required: true,
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    num_sales:{
        type: Number,
        dafault: 0,

    }

})
const menuItem=mongoose.model('menuItem',menuItemSchema);
module.exports=menuItem;