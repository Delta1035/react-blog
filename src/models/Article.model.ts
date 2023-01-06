export type Article = {
    id: number
    article_name: string
    article_text: string
    create_time: string
    update_time: string
    author_id: number
    read_num: number
    like_num: number
    summary: string
    poster: string
    private: 0 | 1
    delete: 0 | 1
}