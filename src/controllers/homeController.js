
const getHomepage = (req, res) => {
    // call model
    // process data
    res.send('Hello word');
}

const getSample = (req, res) => {
    res.render('sample.ejs');
}
module.exports = {
    getHomepage,
    getSample
}