function submitBooking() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const roomType = document.getElementById('roomType').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
  
    // Extracting the room rent from the selected option
    const roomRentString = document.getElementById('roomType').options[document.getElementById('roomType').selectedIndex].text;
    const roomRentMatch = roomRentString.match(/\$([0-9]+)/);
    const roomRent = roomRentMatch ? parseInt(roomRentMatch[1]) : 0;
  
    // Calculate total rent based on the number of nights
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const numberOfNights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const totalRent = roomRent * numberOfNights;
  
    // Displaying rent information in a styled new window
    const rentWindow = window.open('', 'Rent Information', 'width=400,height=300,top=100,left=100');
    rentWindow.document.write(`
      <html>
        <head>
          <title>Rent Information</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              margin: 20px;
              background-image: url('h.jpg'); /* Replace 'background.jpg' with your image URL */
              background-size: cover;
            }
            h2 {
              color: #007BFF;
            }
            p {
              margin-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <h2>Booking Details:</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Room Type:</strong> ${roomType}</p>
          <p><strong>Check-in Date:</strong> ${checkIn}</p>
          <p><strong>Check-out Date:</strong> ${checkOut}</p>
          <p><strong>Total Rent:</strong> $${totalRent}</p>
        </body>
      </html>
    `);
  
    // You can add more logic here, like sending data to the server using AJAX or fetch.
  }
  