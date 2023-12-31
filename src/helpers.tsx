import axios from "axios";
import { Site, SortDirections, TableItemStatus, Test } from "./types/types";
import { STATUS_SORT_TEMPLATE } from "./consts";

export const fetchTests = async () => {
    return await axios.get<Test[]>("mockData/tests.json");
};

export const fetchTest = async (id: number) => {
    const response = await axios.get<Test[]>(`mockData/tests.json`);
    return response.data.find((item) => item.id === id);
};

export const fetchSites = async () => {
    return await axios.get<Site[]>("mockData/sites.json");
};

export const removeUrlPrefix = (url: string) => {
    return url?.replace(/(?:^https?:\/\/(?:www\.)?)|(?:\/$)/g, "");
};

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const createSortFunction = <T extends Object>(property: keyof T, sortOrder: SortDirections) => {
    const sortFunction = (a: T, b: T) => {
        const val1 = a[property];
        const val2 = b[property];
        const order = sortOrder !== SortDirections.DESC ? 1 : -1;
        if (typeof val1 === "string") {
            const valb = val2 as string;
            if (val1 in TableItemStatus) {
                const template = STATUS_SORT_TEMPLATE;
                const result = template.indexOf(val1) - template.indexOf(valb);
                return result * order;
            } else {
                const result = val1.localeCompare(valb);
                return result * order;
            }
        } else return 0;
    };
    return sortFunction;
};

export const createWrapperAndAppendToBoddy = (wrapperId: string) => {
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);

    return wrapperElement;
};
