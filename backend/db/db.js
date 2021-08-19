const mongoose = require('mongoose');

const conectionDB = async() => {
    try {
        await mongoose.connect(process.env.BD_CONNECTION, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log('Connected to BD is OK!')
    } catch (error) {
        console.log('Error in conection', error);
        throw new Error("Error conection to BD");
    }
};

module.exports = { conectionDB };