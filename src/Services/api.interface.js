export class ProductId{
    constructor(){}
}
export class CategoryId{
    constructor(){}
}
export class ProductQuery{
    constructor(){}
}
export class CategoryQuery{
    constructor(){}
}

export class InterfaceAPI {

    constructor(){}

    async getProducts(productQuery){}
    async getProductById(productId){}

    async getCategories(categoryQuery){}
    async getCategoryById(categoryId){}

    async getProductsByCategory(categoryId){}


}



