const controller = {
    index :  function(req, res, next) {
        res.redirect('products');
      }
}

module.exports = controller