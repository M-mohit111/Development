const express = require("express")

const app = express();

const foodMenu = [
  { id: 1, food: "Burger", category: "Fast Food", price: 120 },
  { id: 2, food: "Pizza", category: "Fast Food", price: 250 },
  { id: 3, food: "Pasta", category: "Italian", price: 180 },
  { id: 4, food: "Biryani", category: "Indian", price: 220 },
  { id: 5, food: "Paneer Tikka", category: "Indian", price: 200 },
  { id: 6, food: "Sushi", category: "Japanese", price: 350 },
  { id: 7, food: "Tacos", category: "Mexican", price: 160 },
  { id: 8, food: "Noodles", category: "Chinese", price: 140 },
  { id: 9, food: "Ice Cream", category: "Dessert", price: 90 },
  { id: 10, food: "Coffee", category: "Beverage", price: 80 }
];

app.use(express.json());

const addtocart = [];

app.get("/food",(req,res)=>{
    res.status(200).send(foodMenu);
})

app.post("/admin",(req,res)=>{
    // add item into food menu
    // authentication karna ka code jo badmein padhenge
    // miche dummy code hai
    const token = "abcd"
    const access = token ==="abcd"
    if(access){
        const data = req.body;
        foodMenu.push(data);
        res.send("data is added in the list")
    }
    else{
        res.send("item cannot be send ")
    }
})

app.delete("/admin/:id",(req,res)=>{
    const token = "abcd"
    const access = token ==="abcd"
    if(access){
        const whattodelete = parseInt(req.params.id);
        const index = foodMenu.findIndex(item=>item.id == whattodelete)
        if(index === -1){
            res.send("item doesn't exist")
        } 
        else{
            foodMenu.splice(index,1); 
            res.send("data delete")
        } 
    }
    else{
        res.send("No permission for you to change")
    }
})

app.patch("/admin",(req,res)=>{

    const token = "abcd"
    const access = token === "abcd"

    if(access){

        const change = req.body.id;

        const item = foodMenu.find(
            item => item.id === change
        );

        if(!item){
            res.send("item not found")
        }

        else{

            if(req.body.food){
                item.food = req.body.food;
            } 
            res.send("item updated")
        }

    }

    else{
        res.send("No permission for you to change")
    }

})

app.get("/dummy",(req,res)=>{
    try{
    JSON.parse("invalid json")
    res.send("code is working")
    }
    catch(e){
        res.send("code is not working")
    }
})










app.listen(5002,(req,res)=>{
    console.log("server is active at port 5002")
})