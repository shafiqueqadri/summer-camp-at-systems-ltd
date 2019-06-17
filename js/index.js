var id = 0;

// Virtual DOM Changes
function submitInVirualList () {
    var inputNote = document.getElementById('note');
    
    var myList = document.getElementById('myList');
    
    let newLI = document.createElement('LI');
    let newNode = document.createTextNode(inputNote.value);
    let newID = 'id-'+(id++);
    newLI.id = newID;

    newLI.onclick = function () {
        removeNote(newID);
    }
    
    newLI.appendChild(newNode);
    myList.appendChild(newLI);

    inputNote.value = '';
}

var notes = [];
function submit () {
    var inputNote = document.getElementById('note');
    
    var myList = document.getElementById('myList');

    notes.push(inputNote.value);
    var newID = 'id-'+(id++);
    let notesToRender = notes.map((note, index) => `<li id="${newID}">${note}</li>`)
    
    myList.innerHTML = notesToRender.join('');

    inputNote.value = '';
}

function removeNote (id) {
    document.getElementById(id).remove();
    
}


// Coding about closure functions
function mainFunction (name, age) {
    function aboutMe () {
      return `Hello ${name}, you are ${age} years old.`;
    }
    return {name, age, aboutMe}
  }
  
  var info = mainFunction("Me", 27);
  console.log(info.aboutMe())
