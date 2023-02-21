const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const restaurantSchema = new Schema(
  {
    place_id: String,
    name: String,
    //opening_hours: String,
   // photos:
    price_level: String, 
    rating: String,
    url: String,
    adr_address: String,
    website: String,
  },
  // this second object adds extra properties: `createdAt` and `updatedAt`
/*     timestamps: true, */
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
