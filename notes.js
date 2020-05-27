const fs = require('fs')
const chalk = require('chalk');


const getNotes=() => {
    console.log(chalk.bold.blue("Your notes . . ."))
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log(note.title)
    })
    
}

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=>note.title===title)
    //const duplicateNotes = notes.filter((note) => note.title === title)
    debugger
    if (!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('New note added!'))
    }
    else{
        console.log(chalk.bgGreen.bold('Note title already there!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e) {
        return []
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const safeNotes = notes.filter((note) => (note.title !== title))
    if (notes.length === safeNotes.length){
        console.log(chalk.bgRed.bold('Title does not exist!'))
    }
    else{
        saveNotes(safeNotes)
        console.log(chalk.bold.red('Note deleted!'))
    }
}

const readNote = (title)=>{
    const notes = loadNotes()
    const toreadnote = notes.find((note)=>note.title===title)
    if(toreadnote){
        console.log(chalk.bold.blue(toreadnote.title))
        console.log(toreadnote.body)
    }
    else{
        console.log(chalk.bold.bgRed("Note does not exist"))
    }
}

module.exports= {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote:readNote
}