
const { Schema, model } = require("mongoose");
const MongooseDelete = require("mongoose-delete");

const StorageSchema = new Schema(
	{
		url: {
			type: String,
		},
		filename: {
			type: String,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

StorageSchema.plugin(MongooseDelete, { overrideMethods: "all" });

module.exports = model("Storage", StorageSchema);