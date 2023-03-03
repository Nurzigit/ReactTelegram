import { useEffect, useState } from "react";
import md5 from "md5";
import axios from "axios";

export const useMarvelItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAllItems();
    }, []);


    const getAllItems = () => {
        axios
            .get(
                `http://gateway.marvel.com/v1/public/comics?ts=${
                    process.env.REACT_APP_TS
                }&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${md5(
                    process.env.REACT_APP_TS +
                    process.env.REACT_APP_PRIVATE_KEY +
                    process.env.REACT_APP_PUBLIC_KEY
                )}`
            )
            .then((res) => res.data)
            .then((res) => {
                setItems(res.data.results.map((el) => ({ ...el, title: el.name })));
            });
    };
    return { items };
};


