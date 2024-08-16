import { create } from 'zustand'
import axios from "axios";
import {unauthorized} from "../utility/utility.js";
const ReviewStore = create((set)=>({
    isReviewSubmit: false,
    ReviewFormData: {productID: "", des: "", rating: "5"},
    ReviewFormOnChange: (name, value) => {
        set((state) => ({
            ReviewFormData: {
                ...state.ReviewFormData,
                [name]: value
            }
        }))
    },
    ReviewSaveRequest: async (PostBody) => {
        try {
            set({isReviewSubmit: true})
            let res = await axios.post(`/api/CreateReview`, PostBody)
            return res.data["status"] === "Success";
        } catch (e) {
            unauthorized(e.response.status)
        } finally {
            set({isReviewSubmit: false})
        }
    },
}))
export default ReviewStore