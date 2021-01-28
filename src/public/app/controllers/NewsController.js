class NewsController {
    index (req,res) {
        res.render('news');
    }
    show (req,res) {
        res.send('details');
    }
}

module.exports = new NewsController;