const mongoose = require('mongoose')

//console.log(process.argv.length, process.argv)


if (process.argv.length < 3) {
    console.log('at least password must be given')
    process.exit(1)
}

console.log('Getting password')
const password = process.argv[2]

console.log('Accessing url')
const url =
    `mongodb+srv://fullstack:${password}@cluster0.ong0s.mongodb.net/luettelo?retryWrites=true&w=majority`

console.log('Connecting')
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})

console.log('Connected!')
const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

console.log(process.argv)
if (process.argv.length == 5) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })

    person.save().then(result => {
        console.log(`Added ${result.name} number ${result.number} to phonebook`)
        mongoose.connection.close()
    })
}

if (process.argv.length == 3) {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })

}

