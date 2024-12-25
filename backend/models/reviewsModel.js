    import { model, Schema } from "mongoose";

    const ReviewsSchema = new Schema(
    {
        rating: {
        type: Number,
        required: [true, "Name is required!"],
        min: [1, "Minimum rating is 1!"],
        max: [5, "Maximum rating is 5!"],
        },
        comment: {
        type: String,
        required: true,
        },

        product_id: {
            type: Schema.Types.ObjectId,
            ref: "product", 
            required: true,
        },

        user_id: {
        type: Schema.Types.ObjectId,
        ref: "user", 
        required: true,
        },
    },
    {
        timestamps: true,
    }
    );

    const Reviews = model("reviews", ReviewsSchema);
    export default Reviews;
