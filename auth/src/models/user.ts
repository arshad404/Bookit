import mongoose from "mongoose";
import { Password } from "../services/password";

//interface for the properties of the new user
//this is what we should pass in the signup function/form
interface UserAttrs {
  email: string;
  password: string;
}

//build method has no type so it will be of type UserAttrs and return UserDoc type
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

//this is what mongoose should create after passing the email, pass values
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<UserDoc>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      //it will not be return to JSON but will save to the database
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

// const buildUser = (attrs: userAttrs) => {
//     return new User(attrs);
// }

export { User };
