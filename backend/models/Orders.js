//This file is schema of orders history of an user.
//This line of code is used to acquire mongoose
const mongoose = require('mongoose')

const { Schema } = mongoose;

const OrderSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    order_data: {
        type: Array,
        required: true,
    },

});
//This line of code shows what we are exporting from this Order.js file
/*Here we are storing the model in a constant and then exporting it
  const order = mongoose.model('order', OrderSchema);
  module.exports = order; */
module.exports = mongoose.model('order', OrderSchema)