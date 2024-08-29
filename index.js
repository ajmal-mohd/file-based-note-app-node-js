
// // addnotes


const fs=require("fs")
const path= require("path")
const chalk=require("chalk")


const addNote=(title,content)=>{

    fs.appendFileSync(path.join(__dirname,"/notes","text.txt"),`title:${title} \n boby:${content}`,(err)=>{
        
        if(err) throw err;
        console.log("succusfull added");

    })

}






const readfile=()=>{
 fs.readFile(path.join(__dirname,'/notes','text.txt'),'utf8',(err,data)=>{

    if(err) throw err;

    console.log(chalk.blue(data))
    

 });

};



const clearAll=()=>{

    fs.writeFile(path.join(__dirname,"/notes",'text.txt'),'',(err)=>{

        if(err) throw err;

        console.log(chalk.green('succussfully all data deleted'))
    })


}


// Remove a note by title
const removeNote = (title) => {
    fs.readFile(path.join(__dirname,'/notes','text.txt'), "utf8", (err, data) => {
      if (err) throw err;
  
      const notesArray = data.split("-")
      console.log(notesArray);
      const filteredNotes = notesArray.filter((note) => !note.includes(`title:${title}`));
   let  update=filteredNotes.join("-")
      fs.writeFile(path.join(__dirname,'/notes','text.txt'), update, (err) => {
        if (err) throw err;
        console.log(chalk.green(`Successfully removed note with title: `));
      });
    });
  };



  
  //update a notes //




module.exports={

    addNote,readfile,clearAll, removeNote,

}







