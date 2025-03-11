// Handling notes in the Journal page
document.getElementById('saveNoteButton')?.addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value;

    if (noteText) {
        // Save note to localStorage
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(noteText);
        localStorage.setItem('notes', JSON.stringify(notes));

        // Clear input field
        noteInput.value = '';

        // Display saved notes
        displayNotes();
    }
});

function displayNotes() {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = ''; // Clear the current list
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;
        noteList.appendChild(li);
    });
}

// Call displayNotes on load
document.addEventListener('DOMContentLoaded', displayNotes);

// Handling cycle information in the Cycle Calendar page
document.getElementById('cycleForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const startDate = document.getElementById('startDateInput').value;
    const cycleLength = document.getElementById('cycleLengthInput').value;

    if (startDate && cycleLength) {
        // Save cycle information to localStorage
        const cycleInfo = {
            startDate: startDate,
            cycleLength: cycleLength
        };
        localStorage.setItem('cycleInfo', JSON.stringify(cycleInfo));

        // Clear input fields
        document.getElementById('startDateInput').value = '';
        document.getElementById('cycleLengthInput').value = '';

        // Display saved cycle information
        displayCycleInfo();
    }
});

function displayCycleInfo() {
    const savedCycleInfo = document.getElementById('savedCycleInfo');
    const cycleInfo = JSON.parse(localStorage.getItem('cycleInfo'));

    if (cycleInfo) {
        savedCycleInfo.innerHTML = `Start Date: ${cycleInfo.startDate}, Cycle Length: ${cycleInfo.cycleLength} days`;
    } else {
        savedCycleInfo.innerHTML = 'No cycle information saved.';
    }
}

// Call displayCycleInfo on load
document.addEventListener('DOMContentLoaded', displayCycleInfo);

// Handling profile settings
document.getElementById('profileForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;

    // Save profile information to localStorage
    localStorage.setItem('profileName', name);
    localStorage.setItem('profileEmail', email);

    // Clear input fields
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';

    // Display saved profile information
    displayProfileInfo();
});

function displayProfileInfo() {
    const profileInfo = document.getElementById('profileInfo');
    const name = localStorage.getItem('profileName');
    const email = localStorage.getItem('profileEmail');

    if (name && email) {
        profileInfo.innerHTML = `Name: ${name}, Email: ${email}`;
    } else {
        profileInfo.innerHTML = 'No profile information saved.';
    }
}

// Call displayProfileInfo on load
document.addEventListener('DOMContentLoaded', displayProfileInfo);
