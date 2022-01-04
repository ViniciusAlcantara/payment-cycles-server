const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://127.0.0.1:27017/mymoney')

mongoose.Error.messages.general.require = "The field '{PATH}' is mandatory"
mongoose.Error.messages.general.min = "The field '{PATH}' has a limit of at least '{MIN}'."
mongoose.Error.messages.general.max = "The field '{PATH}' has a limit of '{MAX}' max."
mongoose.Error.messages.general.enum = "The field '{PATH}' has to be one of '{ENUM}'."
