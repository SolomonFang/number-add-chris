if(process.env.NODE_ENV === 'production'){
    module.exports = require('./dist/number-add-chris.min.js')
} else{
    module.exports = require('./dist/number-add-chris.js')
}