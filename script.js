
const yargs= require("yargs")
const {addNote,readfile,clearAll,removeNote,} = require("./index.js")
const chalk=require("chalk");




yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      },
      content: {
        describe: 'Note body',
        demandOption: true,
        type: 'string'
      }
    },
    handler: function (argv) {
        addNote(argv.title,argv.content)
        console.log(chalk.green("succuss fully added"));
    }
  });





  //read
  
yargs.command({
    command: 'read',
    describe: 'Add a new note',
   
    handler: function (argv) {
    console.log("working");
    readfile();
  
       

     
    }
  });



//   clearAll
yargs.command({
    command: 'clearall',
    describe: 'Add a new note',
   
    handler: function (argv) {

        clearAll()
    
        
   
  
       

     
    }
  });

// remove coomad




  yargs.command({
    command: "remove",
    describe: "Remove a note by title",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string"
      }
    },
    handler: function (argv) {

      console.log("jjj");
      removeNote(argv.title);
    }
  });
  
  yargs.parse()


  