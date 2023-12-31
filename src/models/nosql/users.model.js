const { Schema, model } = require("mongoose");
const MongooseDelete = require("mongoose-delete");


const UserSchema = Schema(
	{
		name: {
			type: String,
		},
		age: {
			type: Number,
		},
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
		},
		role: {
			type: ["user", "admin"],
			default: "user",
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

UserSchema.plugin(MongooseDelete, { overrideMethods: "all" });

module.exports = model("User", UserSchema);