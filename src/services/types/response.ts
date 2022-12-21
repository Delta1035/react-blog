
export type ReponseStatus = "success" | "fail";

export type ApiResponse<T> = {
    code:number,
    status:ReponseStatus,
    data?:T,
    msg?:T
}