var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://images5.fanpop.com/image/photos/30900000/gothic-gothic-30994823-1280-1024.jpg',
        title: 'Gothic style',
        description: 'Aenean elit ex, mollis et mattis non, porttitor ac eros. Maecenas elementum dignissim efficitur. Phasellus nec tortor quis nisi egestas mollis ac ut ex. Maecenas ac porttitor odio. Sed et diam dolor. Quisque rhoncus auctor libero, eu vulputate enim bibendum ut. Sed vel imperdiet nisi.',
        price: 10
    }),
    new Product({
        imagePath: 'http://gothicpictures.org/images/gallery/categories/thumbs/gothic-landscapes.jpg',
        title: 'Gothic Video Game',
        description: 'Aenean elit ex, mollis et mattis non, porttitor ac eros. Maecenas elementum dignissim efficitur. Phasellus nec tortor quis nisi egestas mollis ac ut ex. Maecenas ac porttitor odio. Sed et diam dolor. Quisque rhoncus auctor libero, eu vulputate enim bibendum ut. Sed vel imperdiet nisi.',
        price: 4
    }),
    new Product({
        imagePath: 'http://7-themes.com/data_images/out/67/7000229-gothic-girl.jpg',
        title: 'Gothic Video Game',
        description: 'Aenean elit ex, mollis et mattis non, porttitor ac eros. Maecenas elementum dignissim efficitur. Phasellus nec tortor quis nisi egestas mollis ac ut ex. Maecenas ac porttitor odio. Sed et diam dolor. Quisque rhoncus auctor libero, eu vulputate enim bibendum ut. Sed vel imperdiet nisi.',
        price: 32
    }),
    new Product({
        imagePath: 'https://c2.staticflickr.com/8/7282/9186266513_cc981f4e02_z.jpg',
        title: 'Emo style',
        description: 'Aenean elit ex, mollis et mattis non, porttitor ac eros. Maecenas elementum dignissim efficitur. Phasellus nec tortor quis nisi egestas mollis ac ut ex. Maecenas ac porttitor odio. Sed et diam dolor. Quisque rhoncus auctor libero, eu vulputate enim bibendum ut. Sed vel imperdiet nisi.',
        price: 50
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}