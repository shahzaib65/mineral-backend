const mongoose = require("mongoose");
const riderSchema = new mongoose.Schema({
    user_account: {
        type: String
    },
    user_account_password: {
        type: String
    }
},{
    timestamps: true
}
);
module.exports = mongoose.model("rider",riderSchema)