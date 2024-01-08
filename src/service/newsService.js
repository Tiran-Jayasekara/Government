import { GlobalContext } from "@/context";
import axios from "axios";
import { useContext } from "react";

const newsService = () => {

    const { token } = useContext(GlobalContext);

    const http = axios.create({
        baseURL: "http://192.168.1.185:3001",
        // process.env.REACT_APP_BASE_URL,

        headers: {
            "Content-type": "application/json",
            "x-auth-token": token,
        },
    });

    const getNewsByCompany = async (company) => {
        try {
            const news = await http.get("/news/getNewsByCompany/" + company);
            if (news) {
                return news;
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getAllNews = async () => {
        try {
            const news = await http.get("/news/getNews");
            if (news) {
                return news;
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    }

    const addNewNews = async (newsForm) => {
        console.log(newsForm);
        try {
            const Addnews = await http.post("/news/addNews", newsForm);
            if (Addnews) {
                return Addnews;
            } else {

            }
        } catch (error) {
            console.log(error);
        }
    }

    const UpdateNews = async (newsForm) => {

        try {
            const updatenews = await http.put("/news/updateNews", newsForm);
            if (updatenews) {
                return updatenews;
            } else {

            }
        } catch (error) {
            console.log(error);
        }
    }


    const deleteNews = async (newsID) => {
        try {
            const deleteNews = await http.delete("/news/deleteNews/" + newsID);
            if (deleteNews) {
                return deleteNews;
            } else {

            }
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getNewsByCompany,
        addNewNews,
        deleteNews,
        getAllNews,
        UpdateNews
    }
}

export default newsService