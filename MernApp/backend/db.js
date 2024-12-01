const mongoose=require('mongoose');

const mongoDB= async() => {
    await mongoose.connect(url,{ useNewUrlParser: true }, async (err, result) => {
        if (err) {
            console.log('error');
        }
        else {
            console.log('connected');
            const fetched_data = await mongoose.connection.db.collection('food_items');
            fetched_data.find({}).toArray(async (err, data) => {
                const foodCategory=await mongoose.connection.db.collection('foodCategory');
                foodCategory.find({}).toArray(async (err,catData) => {
                    if (err) {
                        console.log(error + "error");
                    }
                    else {
                        // global can be used anywhere in pacakage
                        global.food_items=data;
                        global.foodCategory=catData;
                        // console.log(global.foodCategory);
                        // console.log(global.food_items);
                    }                    
                });
            });
        }
    });
}

module.exports= mongoDB;


// const mongoDB= async() =>{
//     await mongoose.connect(url, (err,result) => {
//     if(err)
//     {
//         console.log('error');
//     }
//     else{
//         console.log("connected");
//     }

// });
// }
