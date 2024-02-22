const seats = document.getElementsByClassName('seat-btn');
let Seat_count = parseInt(document.getElementById('seat-counts').innerText);
let Remain_seat = parseInt(document.getElementById('remaining-seat').innerText);
const price = parseInt(document.getElementById('ticket-price').innerText);
let TotalPrice = 0;
const seat_Array = [];

for (const seat of seats) {
    seat.addEventListener('click', function (e) {
        const seatNumber = e.target.innerText;
        if (!seat_Array.includes(seatNumber)) {
            if (seat_Array.length >= 4) {
                alert('At a time you can select Maximum 4 Seat.');
                return;
            }
            seat_Array.push(seatNumber);
            e.target.classList.add('bg-bg-color');
            Seat_count = seat_Array.length;
            setInnerText('seat-counts', Seat_count);
            seatRemain = 40 - seat_Array.length;
            setInnerText('remaining-seat', seatRemain);

            const ticket_Element = document.createElement('tr');
            const display = document.getElementById('price-display');
            ticket_Element.innerHTML = `<tr class="border-b-2 border-black">
            <td class="px-0">${seatNumber}</td>
            <td>Economy</td>
            <td class="text-right px-0" id="selected-price">${price}</td>
          </tr>`
            display.appendChild(ticket_Element);
            const selected_Price = parseInt(document.getElementById('selected-price').innerText);
            TotalPrice = TotalPrice + selected_Price;
        }
        else if (seat_Array.includes(seatNumber)) {
            if (seat_Array.length >= 4) {
                alert('At a time you can select Maximum 4 Seat.');
                return;
            }
            seat_Array.pop(seatNumber);
            e.target.classList.remove('bg-color');
            Seat_count = seat_Array.length;
            setInnerText('seat-counts', Seat_count);
            seatRemain = 40 - seat_Array.length;
            setInnerText('remaining-seat', seatRemain);
            const ticket_Element = document.createElement('tr');
            const display = document.getElementById('price-display');
            display.removeChild(ticket_Element);
            const selected_Price = parseInt(document.getElementById('selected-price').innerText);
            TotalPrice = TotalPrice + selected_Price;
        }
        else {
            e.target.classList.toggle('bg-color');
        }

        setInnerText('total-price', TotalPrice);
        setInnerText('grand-price', TotalPrice);


const new_Coupon = document.getElementById('new-coupon').innerText;
const couple_Coupon = document.getElementById('couple-coupon').innerText;
const input = document.getElementById('coupon-input');

input.addEventListener('input', function () {
    const inputText = input.value;

    if (inputText == new_Coupon && parseInt(Seat_count) >= 4) {
        const apply = document.getElementById('coupon-btn');
        apply.removeAttribute('disabled');
        apply.addEventListener('click', function () {
            const discount = (TotalPrice * 15) / 100;
            const grandPrice = TotalPrice - discount;
            setInnerText('grand-price', grandPrice);
            document.getElementById('coupon-apply').classList.add('hidden');
        });
    } else if (inputText == couple_Coupon && parseInt(Seat_count) >= 4) {
        const apply = document.getElementById('coupon-btn');
        apply.removeAttribute('disabled');
        apply.addEventListener('click', function () {
            const discount = (TotalPrice * 20) / 100; // Fix here, use TotalPrice
            const grandPrice = TotalPrice - discount;
            setInnerText('grand-price', grandPrice);
            document.getElementById('coupon-apply').classList.add('hidden');
        });
    } else {
        document.getElementById('coupon-btn').disabled = true;
    }
});

        if (seat_Array.length > 0) {
            const phNoInput = document.getElementById('phone-number');
            phNoInput.addEventListener('input', function () {
                let phoneNumber = parseInt(phNoInput.value);
                if (typeof phoneNumber === 'number') {
                    document.getElementById('next-btn').attributes.removeNamedItem('disabled');
                }
                else {
                    document.getElementById('next-btn').disabled = true;
                }
            })
        }
    })
}

function setInnerText(idName, value) {
    const element = document.getElementById(idName);
    element.innerText = value;
}