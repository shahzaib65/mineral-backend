const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    property: {
        type: String,
        default: ""
    },
    rate: {
        type: Number,
        default: 0
    },
   bottles: {
    type: Number,
    default: 0
   },
   payable: {
    type: Number,
    default: 0
   },
   pay: {
    type: Number,
    default: 0
   },
   cf_date: {
    type: String,
    default: ""
   },
     transportation_paid: {
        type: Number,
        default: 0
     },
     income: {
        type: Number,
        default: 0
     },
      pay_online: {
        type: String,
        default: ""
      },
      deposit: {
        type: Number,
        default: 0
      },
      deposit_date: {
        type: String,
        default: 0
      },
      deposit_refund: {
        type: String,
        default : 0
      },
      old_due: {
        type: Number,
        default: 0
      },
      new_due: {
        type: Number,
        default: 0
      },
      location: {
        type: String,
        default: ""
      },
      address: {
        type: String,
        default: ""
      },
      phoneNumber: {
        type: Number,
        default: 0
      },
      message: {
        type: String,
        default: ""
      },
      delivery_day:{
        type: Array
      },
      user_account: {
        type: String,
      },
      user_account_password: {
        type: String
      }
},{
    timestamps: true
});
module.exports = mongoose.model("customer",customerSchema)