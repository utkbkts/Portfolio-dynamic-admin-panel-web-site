import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/AuthReducer";
import aboutPostReducer from "./reducer/AboutReducer";
import portfolioReducer from "./reducer/PortfolioReducer";
import BlogPostReducer from "./reducer/BlogReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    aboutPost: aboutPostReducer,
    portfolioPost: portfolioReducer,
    BlogPost: BlogPostReducer,
  },
});
