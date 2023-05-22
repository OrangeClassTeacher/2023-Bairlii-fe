export const Utils = {
    API_URL:
        process.env.NODE_ENV === "development"
            ? "http://localhost:9000/api"
            : "https://bairliii-api.onrender.com/api",
    WEB_URL:
        process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://bairliii.vercel.app/",
};

export default Utils;   