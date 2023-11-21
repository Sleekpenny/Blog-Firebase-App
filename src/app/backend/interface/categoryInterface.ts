export interface categoryData{
    category:string
}

export interface postData{
    title:string,
    excerpt:string,
    categoryPost:{
        categoryId:string,
        category:string
    }
    image:string,
    content:string,
    isFeatured:boolean,
    views: number,
    status: string,
    createdAt:Date

}

export interface logingDetails {
    email:string,
    password: string
}