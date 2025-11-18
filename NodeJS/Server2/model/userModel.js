import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    profilePhoto : {
        type : String
    },
    role : {
        type : String,
        enum : ['user' , 'admin' , 'moderator'],
        default : 'user'
    },
    createdAt : {
        type : Date,
        default : Date.now
    }

})

const User = mongoose.model('User' , userSchema);

export {
    User
}