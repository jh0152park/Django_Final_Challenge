import { Item } from "../types";

export function go_to_top(position: number): void {
    window.scrollTo({ top: position, behavior: "smooth" });
}

export function go_to_id(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function refresh() {
    window.location.reload();
}

export function updateThumbnail(title: string) {
    if (title === "Startling Stories: The Incorrigible Hulk (2004) #1") {
        return "https://cdn.marvel.com/u/prod/marvel/i/mg/c/70/6509ddc3c3be7/portrait_uncanny.jpg";
    } else if (title === "Marvel Previews (2017)") {
        return "https://cdn.marvel.com/content/1x/msha_s2.jpg";
    } else return "none";
}

export function joinCreator(creators: Item[]) {
    let creator = "";

    if (!creators) return creator;
    for (var i = 0; i < creators.length; i++) creator += creators[i].name + ",";

    return creator.slice(0, -1);
}
