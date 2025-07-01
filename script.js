const form = document.getElementById('appointmentForm');
const appointmentList = document.getElementById('appointmentList');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const teacherName = document.getElementById('teacherName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    if (studentName && teacherName && appointmentDate && appointmentTime) {
        const listItem = document.createElement('li');
        listItem.textContent = `${studentName} booked with ${teacherName} on ${appointmentDate} at ${appointmentTime}`;
        appointmentList.appendChild(listItem);

        form.reset();
    } else {
        alert('Please fill all the fields!');
    }
});
