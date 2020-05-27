const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk');

const notes=require('./notes.js')

//console.log(process.argv)

//Customize yargs version
yargs.version('1.1.0')

//Create commands
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            decribe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body value',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a new note',
    builder:{
        title:{
            describe:'Title of note to be deleted',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'Listing all the notes',
    handler(){
        notes.getNotes()
    }
})

yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()

// console.log(getNotes())

// console.log(validator.isEmail('sandesh@example.com'))

// console.log(validator.isURL('sandeshexamplecom'))

// console.log(chalk.bgGreen.red('Success!'));

// console.log(chalk.inverse.bold.blue('Hello!'));
