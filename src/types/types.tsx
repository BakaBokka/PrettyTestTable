export enum TableItemType {
    CLASSIC = "CLASSIC",
    SERVER_SIDE = "SERVER_SIDE",
    MVT = "MVT",
}

export enum TableItemStatus {
    DRAFT = "DRAFT",
    ONLINE = "ONLINE",
    PAUSED = "PAUSED",
    STOPPED = "STOPPED",
}

export enum ButtonTitle {
    RESULTS = "Results",
    FINALIZE = "Finalize",
    RESET = "Reset",
}

export enum ButtonTheme {
    GREEN = "GREEN",
    DARK = "DARK",
}

export enum PageTitle {
    DASHBOARD = "Dashboard",
    RESULTS = "Results",
    FINALIZE = "Finalize",
}

export enum SortDirections {
    ASC = "ASC",
    DESC = "DESC",
}

export interface Site {
    id: number;
    url: string;
}

export interface Test {
    id: number;
    name: string;
    type: TableItemType;
    status: TableItemStatus;
    siteId: number;
}

export interface ITableItem {
    id: number;
    name: string;
    type: TableItemType;
    status: TableItemStatus;
    site: string;
}
