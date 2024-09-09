class item{
    constructor(id,name,quantity,price){
        this.id=id
        this.name=name
        this.quantity=quantity
        this.price=price
    }
}
let inventory=[];
function addItem(id,name,quantity,price){
    inventory.push(new item(id,name,quantity,price));
}
function updateItem(id,newQuantity){
    const item=inventory.find(item=>item.id===id)
    if(item){
        item.quantity=newQuantity
    }
}
function deleteItem(id){
    inventory.filter(item=>item.id!==id)
}
function displayItem(){
    console.log(inventory)
}
