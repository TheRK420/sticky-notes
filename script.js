let notesContainer = document.getElementById('notesContainer');
let noteInput = document.getElementById('noteInput');

function addNote() {
    if (!noteInput.value.trim()) {
        alert("Please enter a note!");
        return;
    }

    let colorPicker = document.getElementById('colorPicker');
    let noteColor = colorPicker.value;

    let note = document.createElement('div');
    note.classList.add('note');
    note.style.backgroundColor = noteColor;

    let noteContent = document.createElement('p');
    noteContent.innerText = noteInput.value;

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'x';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        notesContainer.removeChild(note);
    });

    note.appendChild(noteContent);
    note.appendChild(deleteBtn);
    notesContainer.appendChild(note);

    // Clear input after adding a note
    noteInput.value = '';
}

function changeColor() {
    let colorPicker = document.getElementById('colorPicker');
    let newColor = colorPicker.value;

    let notes = document.getElementsByClassName('note');
    let lastNote = notes[notes.length - 1];

    if (lastNote) {
        lastNote.style.backgroundColor = newColor;
    }

    // Update the color picker for the next note
    colorPicker.dataset.lastColor = newColor;
}
