
const chalk = require('chalk');
const dd = require("./notes");
const validator = require('validator');
const yargs = require('yargs');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) => {
        dd.addNote(argv.title,argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) => {
        dd.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: () => {
        dd.listNotes();
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true
        }
    },
    handler: (argv) =>{
        dd.readNote(argv.title);
    }
})

yargs.parse();