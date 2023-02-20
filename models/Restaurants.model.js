const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const restaurantSchema = new Schema(
  {
    restaurant: {
    type: String,
    restaurantId: String,
    name: String,
    location: String,
    images: [String],
    ratings: Number,
    openingHours: [String],
    menu: [String],
    priceRange: Number,
    foodRestrictions: [String],
    link: String,
    tags: [String],
    preference: String,
    trim: true,
    },
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
