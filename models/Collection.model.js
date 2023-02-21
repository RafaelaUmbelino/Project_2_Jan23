const { Schema, model } = require("mongoose");

const collectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    restaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
  },
);

const Collection = model("Collection", collectionSchema);

module.exports = Collection;
