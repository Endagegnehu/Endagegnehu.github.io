products=[];
class Product{
    constructor(id, name, price, description){
        this._id=id;
        this._name=name;
        this._price=price;
        this._description=description;
    }
    getName(){
        return this._name;
    }
    setName(name){
        this._name=name;
    }
    getId(){
        return this._id;
    }
    setId(id){
        this._id=id;
    }
    getPrice(){
        return this._price;
    }
    setPrice(price){
        this._price=price;
    }
    getDescription(){
        return this._description;
    }
    setDescription(decription){
        this._description=description;
    }
    static getAllProducts(){
        return products;
    }
}
products=[new Product(1,"Shoe",12,"The best ever!"),
new Product(2,"Another Shoe",11,"this is the best"),
new Product(3,"Pillow",5,"Good for neck!"),
new Product(3,"T-shirt",5.5,"V shape neck."),
new Product(3,"Another Pillow",15,"the best for neck!"),
new Product(3,"Matress",5,"Good for body!"),
new Product(3,"Pillowcase",5,"white.")];
module.exports=Product;