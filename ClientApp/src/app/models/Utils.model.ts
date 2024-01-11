export interface ObjectId {
    timestamp: number;
    machine: number;
    pid: number;
    increment: number;
    creationTime: string;
}

export interface SiteLogin{
    sitePass:string
}

export interface siteLoginResponse{
    token:string
}