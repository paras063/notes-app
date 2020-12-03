const chalk = require('chalk');
const getnotes =() => {
return "hey paras";
};
const fs = require('fs');

//add notes
const addNote =(title,body)=>{
const notes = loadNotes();
const duplicate = notes.filter((note)=> note.title===title);
debugger
if(duplicate.length==0){
notes.push({
    title:title,
    body:body
});
saveNotes(notes);
console.log(chalk.green.inverse("new Note added"));
}
else{
console.log(chalk.redBright.inverse('note title already taken'));
}
}

//remove notes
const removeNote=(title) =>{
    const notes = loadNotes();
    const matched = notes.filter((note) => {
        return note.title!==title;
    });
saveNotes(matched);
if(notes.length>matched.length){
    console.log(chalk.greenBright.inverse('Note is removed'));
}
else{
    console.log(chalk.redBright.inverse(' No note is removed'));
}
}

// save notes
const saveNotes=(notes)=>{
    const converted = JSON.stringify(notes);
    fs.writeFileSync('notes.json',converted);
}
const loadNotes=() =>{
    try{
    const readata = fs.readFileSync('notes.json','utf-8');
    return JSON.parse(readata);
    }
    catch(err){
        return [];
    }
}

// list all notes
const listNotes =() =>{
    const list = loadNotes();
    if(list.length!==0){
        console.log(chalk.greenBright.inverse("your List"));
        list.forEach(note => {
            console.log(chalk.yellowBright('title: '+note.title));
        });
  
}
else{
    console.log(chalk.red.inverse('list is empty'));
}
}

//read note
const readNote=(title) =>{
    const read = loadNotes();
    const readmatched = read.find((note) => note.title===title);
    if(readmatched){
        console.log(chalk.green.inverse('Note found'));
        console.log(chalk.yellowBright('title: ' +readmatched.title));
        console.log(chalk.yellowBright('body: ' +readmatched.body));
    }
    else{
        console.log(chalk.red.inverse('Note not found'));
    }
}

//export
module.exports= {
    getnotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}