const appointments = [
    {
        id: 1,
        first: 'Christopher',
        last: 'Jackson',
        apptDate: new Date('February 13, 2025, 8:00:00'),
        dateConfirm: new Date('January 28, 2025, 10:26:00'),
        procedure: 'Dential surgery',
        assignedDr: 'C. Jackson',
        isActive: true
    },
    {
        id: 2,
        first: 'Amber',
        last: 'Jackson',
        apptDate: new Date('june 13, 2025, 8:00:00'),
        dateConfirm: new Date('may 23, 2025, 14:23:00'),
        procedure: 'Teeth Cleaning',
        assignedDr: 'J. Jackson',
        isActive: true
    },
    {
        id: 3,
        first: 'Clint',
        last: 'Jackson',
        apptDate: new Date('March 13, 2025, 8:00:00'),
        dateConfirm: new Date('february 28 , 2025, 10:26:00'),
        procedure: 'checkup',
        assignedDr: 'A. Jackson',
        isActive: true
    },
    {
        id: 4,
        first: 'Christian',
        last: 'Jackson',
        apptDate: new Date('december 18, 2025, 8:00:00'),
        dateConfirm: new Date('october 28, 2025, 10:26:00'),
        procedure: 'Knee replacement',
        assignedDr: 'j. Durr',
        isActive: true
    },
    {
        id: 5,
        first: 'Beau',
        last: 'Jackson',
        apptDate: new Date('april 13, 2025, 8:00:00'),
        dateConfirm: new Date('february 28, 2025, 10:26:00'),
        procedure: 'hip replacement',
        assignedDr: 'C. Dear',
        isActive: true
    },
    {
        id: 6,
        first: 'Jason',
        last: 'Jackson',
        apptDate: new Date('January 13, 2025, 8:00:00'),
        dateConfirm: new Date('December 12, 2025, 10:26:00'),
        procedure: 'eye exam',
        assignedDr: 'H. Brown',
        isActive: true
    },
    {
        id: 7,
        first: 'Tracey',
        last: 'Jackson',
        apptDate: new Date('may 13, 2025, 8:00:00'),
        dateConfirm: new Date('june 28, 2025, 10:26:00'),
        procedure: 'Arm replacemnt',
        assignedDr: 'J. Johnson',
        isActive: true
    },
    {
        id: 8,
        first: 'Punkin',
        last: 'Jackson',
        apptDate: new Date('March 13, 2025, 8:00:00'),
        dateConfirm: new Date('February 28, 2025, 10:26:00'),
        procedure: 'Ear cleaning',
        assignedDr: 'B. Brown',
        isActive: true
    },
    {
        id: 9,
        first: 'Mikey',
        last: 'Jackson',
        apptDate: new Date('july 13, 2025, 8:00:00'),
        dateConfirm: new Date('May 28, 2025, 10:26:00'),
        procedure: 'kindey replacement',
        assignedDr: 'R. James',
        isActive: true
    },
    {
        id: 10,
        first: 'Joey',
        last: 'Jackson',
        apptDate: new Date('October 13, 2025, 8:00:00'),
        dateConfirm: new Date('November 28, 2025, 10:26:00'),
        procedure: 'root canal replacement',
        assignedDr: 'S. James',
        isActive: true
    }
]

const myName = document.getElementById('myName')

myName.innerText = 'Appointments'
myName.classList.add('text-center')

/**
 * Pseudocode => writing code in people talk
 * 
 * Loop through the array of appointments
 *      For each appointments:
 *          build a card div
 *          add text for last, first, apptDate, procedure, and assignedDr
 *          add button to set appt to inActive (cancel appointment)
 *          display card
 */


const row = document.getElementById('row')
appointments.forEach(appt => {
    const col = document.createElement('div')
    col.classList.add('col')

    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('data-cardId', appt.id)

    // console.log(card)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const clientName = document.createElement('h2')
    clientName.classList.add('text-capitalize')

    clientName.innerHTML = `<span id="lastName">${appt.last}</span>,  <span id="firstName">${appt.first}</span>`

    // append clientName to cardBody
    cardBody.appendChild(clientName)

    const dateText = document.createElement('p')
    const dateSpan = `${appt.apptDate.toUTCString()}`
    dateSpan.innerText = `${appt.apptDate.toUTCString()}`
    dateText.innerText = `Appointment Date: ${dateSpan}`

    //append dateText to cardBody
    cardBody.appendChild(dateText)

    const procedure = document.createElement('p')
    procedure.classList.add('text-capitalize', 'text-danger')
    procedure.innerText = `${appt.procedure}`

    cardBody.appendChild(procedure)

    const doctor = document.createElement('p')

    doctor.classList.add('text-capitalize', 'text-primary', 'fst-italic')
    doctor.innerText = `${appt.assignedDr}`

    cardBody.appendChild(doctor)

    card.appendChild(cardBody)

    const cardFooter = document.createElement('div')
    cardFooter.classList.add('card-footer')

    const cancelBtn = document.createElement('button')
    cancelBtn.classList.add('btn', 'btn-danger', 'text-capitalize', 'cancel-btns')
    cancelBtn.setAttribute('data-btnId', appt.id)
    cancelBtn.innerText = 'cancel appointment'

    cardFooter.appendChild(cancelBtn)

    card.appendChild(cardFooter)

    col.appendChild(card)

    row.appendChild(col)
})

const cancelBtns = document.querySelectorAll('.cancel-btns')
const cards = document.querySelectorAll('.card')


const cancelAppt =(el, arr, attr)=> {

    const btnId = el.getAttribute(attr)

    for (let item of arr) {
        if (parseInt(btnId) === item.id && item.hasOwnProperty('isActive')) {
            item.isActive = !item.isActive
        }
    }
}

const changeDisplay =(el)=> {

    const btnId = el.getAttribute('data-btnId')

    for (let card of cards) {
        if (card.getAttribute('data-cardId') == btnId) {
            el.innerText == 'Cancel Appointment' ? el.innerText = 'Uncancel Appointment' : el.innerText = 'Cancel appointment'
            card.style.backgroundColor == '' ? card.style.backgroundColor = 'gray' : card.style.backgroundColor = ''
        }
    }
}

cancelBtns.forEach(button => {
    button.addEventListener('click', ()=> {

        cancelAppt(button, appointments, 'data-btnId')
        changeDisplay(button)
    })
})



