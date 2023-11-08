import { atom } from "recoil";

export const ComicThumbnail = atom({
    default: "",
    key: "ComicThumbnail",
});

export const ComicCharactersPhoto = {
    "Colossus (Ultimate)":
        "https://cdn.marvel.com/content/1x/colossus%28ultimate%29.jpg",
    "Vanisher (Ultimate)": "https://cdn.marvel.com/content/1x/vanishr.jpg",
    "Holocaust (Age of Apocalypse)":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJ3nce76CgePEEbQYGwhn_ei7fsCvJcXNhAUREuNe4yf7H5b8mNot8_4vLlj5CsJeqY8&usqp=CAU",
};
