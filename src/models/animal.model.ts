import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AnimalSchema = new Schema(
  {
    name: { type: String, require: true },
    type: { type: String, require: true },
    eat: {
      type: String,
      require: true,
      get: function(eat: string) {
        return eat.split(',');
      },
    },
    age: { type: Number, require: true },
  },
  {
    timestamps: true,
    toObject: { getters: true },
    toJSON: { getters: true },
  },
);

const AnimalModel = mongoose.model('Animal', AnimalSchema);

export { AnimalModel };
