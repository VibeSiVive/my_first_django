const students = []

const studentTable = document.getElementById('student-table').querySelector('tbody')

function generateRows(table, rows) {
    // Imaging rows is a students 
    // Imagine table is a studentTable
    for(let row of rows) {
        const r = table.insertRow()

        for(let field in row) {
            const col = r.insertCell()
            col.textContent = row[field]
        }

    }
}

/* generateRows(studentTable, students) */

function addStudent() {
    const form = document.forms['student-form']

    const student = {
        name: form['name'].value,
        gender: form['gender'].value,
        course: form['course'].value
    }

    if(!student.name) {
        alert('Please Input Name')
        return
    }

    const r = studentTable.insertRow()

    for(let field in student) {
        //<td></>
        const col = r.insertCell()
        col.setAttribute('class', 'px-6 py-3')
        col.textContent = student[field]
    }

    //<td></>
    const col = r.insertCell()
    //Way 1: innerHTML
    //col.innerHTML = '<button class="bg-green-600 px-4 py-2 text-white rounded-md cursor-pointer hover:bg-green-700 hover:shadow-lg">View</button>'

    //way 2: Using JavaScript functions
    //create an element
    const actionButton = document.createElement('button') 

    //Place a text
    actionButton.textContent = 'View'

    //Set a class attribute
    actionButton.setAttribute('class', 'bg-green-600 px-4 py-2 text-white rounded-md cursor-pointer hover:bg-green-700 hover:shadow-lg')
    actionButton.onclick = function() {
        alert(`${student.name} ${student.gender} from ${student.course ? student.course : 'N/A'}`)
    }
    
    //Append a button
    col.appendChild(actionButton)

    students.push(student)
    form.reset()
}



function filterStudents() {
    studentTable
    for (let students of students){
        const txtElement = document.getElementsById('search-student')
        if(student.name.includes(txgElement.value)) {
            addStudentRow(student)
        }
    }
}