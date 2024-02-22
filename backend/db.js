const mongoose = require('mongoose');
const mongoURI = "mongodb://abhinavarya731:arya8966@ac-jrytfnr-shard-00-00.uyav6bn.mongodb.net:27017,ac-jrytfnr-shard-00-01.uyav6bn.mongodb.net:27017,ac-jrytfnr-shard-00-02.uyav6bn.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-mz48rs-shard-0&authSource=admin&retryWrites=true&w=majority"

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const foodItemsCollection = mongoose.connection.db.collection("food_items");
        const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");

        const foodItems = await foodItemsCollection.find({}).toArray();
        const foodCategories = await foodCategoryCollection.find({}).toArray();

        global.food_items = foodItems;
        global.foodCategory = foodCategories;
        
        // console.log("Data fetched successfully:", { foodItems, foodCategories });
    } catch (err) {
        console.error("Error:", err);
    }
}

module.exports = mongoDB;



// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true });
//         console.log("Connected to MongoDB");

//         const fetched_data = await mongoose.connection.db.collection("food_items");
//         const data = await fetched_data.find({}).toArray(async function( err, data){
//             const foodCategory = await mongoose.connection.db.collection("foodCategory");
//             foodCategory.find({}).toArray(function (err, catData){
//                 if(err) console.log(err);
//                 else{
//                     global.food_items = data;
//                     global.foodCategory = catData;
//                 }
//             })
//         });

//     } catch (err) {
//         console.error("Error:", err);
//     }
// }

// module.exports = mongoDB;