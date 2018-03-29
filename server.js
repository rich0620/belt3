var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var path = require('path');
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '/static')));
app.use(express.static( __dirname + '/angular-app/dist'));
// app.set('views', path.join(__dirname, '/views'));
// app.set('view engine', 'ejs');
var mongoose = require('mongoose'); //require mongoose
mongoose.connect('mongodb://localhost/belt3db');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Must include product name"], minlength: [3, "Product name must be at least 3 characters"]},
    quantity: {type: Number, required: [true, "Must include product qty."], min: [0, "Enter a valid qty."]},
    price: {type: Number, required: [true, "Must include a product price"], min: [.01, "Product cannot be free!"]}
}, {timestamps: true})

mongoose.model('Product', ProductSchema);
var Product = mongoose.model('Product');

app.get('/products', function(req, res){  //Get All listings
    Product.find({}, function(err, data){
        if(err){
            res.json({message: 'Error', error: err})
        }
        else{
            res.json({message: 'Success', products: data})
        }
    })
})

app.post('/products', function(req, res){
    Product.find({name: req.body.name}, function(err, products){
        if(products.length == 0){
            let new_product = new Product();
            new_product.name = req.body.name,
            new_product.quantity = req.body.quantity,
            new_product.price = req.body.price
            new_product.save(function(err){
                if(err){
                    console.log('New Product error', err);
                    res.json({message: 'Error', error: err})
                }
                else{
                    res.json({message: `Added ${new_product.name} to db`})
                }
            })
        }
        else{
            res.json({message: 'Product already exists sucka'})
        }
    })
})

app.get('/products/:id', function(req, res){
    Product.findOne({_id: req.params.id}, function(err, products){
        if(err){
            res.json({message: 'Error', error: err})
        }
        else{
            res.json({message: 'Success', data: products})
        }
    })
})

app.delete('/products/:id', function(req, res){
    Product.remove({_id: req.params.id}, function(err, products){
        if(err){
            res.json({message: 'Error', error: err})
        }
        else{
            res.json({message: 'Product Deleted', data: products})
        }
    })
})

app.put('/products/:id', function(req, res){ //Update Restaurant
    Product.update({_id: req.params.id}, {
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price
    }, {runValidators: true}, function(err, products){
        if(err){
            res.json({message: 'Error', error: err})
        }
        else{
            res.json({message: 'Success', data: products})
        }
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./angular-app/dist/index.html"))
});


app.listen(8000, function(){
    console.log("Listening on port 8000");
})