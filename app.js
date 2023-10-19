const {Router} = require("express");
const router = Router();

module.exports = router;

const shoppingList = [
  {
    item: "Rice",
    price: 100,
  },
  {
    item: "cupcakes",
    price: 300,
  },
];

router.route("/").get((req, res) => {
  res.json(shoppingList);
}).post((req,res) => {
    shoppingList.push(req.body)
    res.send("added")
}); 

router.route("/:item").get((req,res) => {
    const {item} = req.params;
    const shopItem = shoppingList.find(a => a.item == item)
    res.send(shopItem)
}).patch((req,res) => {
    const {item} = req.params;
    shopItem = shoppingList.find(a => a.item === item);
    shopItem.item = req.body.item
    res.send("updated")
});

    router.route("/:item").get((req,res) => {
        const {item} = req.params;
        const shopItem = shoppingList.find(a => a.item == item)
        res.send(shopItem)
}).delete((req,res) => {
    const {item} = req.params;
    shopItem = shoppingList.find (a => a.item === item);
    shopItem.item = req.body.item
    res.send("removed")
});