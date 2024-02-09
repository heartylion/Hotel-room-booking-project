let selectedRating = 0;

function setRating(event) {
  const selectedStar = event.target;
  selectedRating = parseInt(selectedStar.dataset.rating);

  // Highlight selected stars
  const stars = document.querySelectorAll('.star-rating span');
  stars.forEach(star => {
    const rating = parseInt(star.dataset.rating);
    star.style.color = rating <= selectedRating ? 'gold' : 'gray';
  });
}

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
            background-image: url('bean.jpg'); 
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
        <p><strong>Rating:</strong> ${selectedRating} stars</p>
      </body>
    </html>
  `);
}

function submitReview() {
  const reviewText = document.getElementById('reviewText').value;

  if (!reviewText || selectedRating === 0) {
      alert("Please provide both a rating and a review before submitting.");
  } else {
      alert(`Thank you for your ${selectedRating}-star review:\n${reviewText}`);
      // You can implement further logic, like sending the review and rating to a server, etc.
  }
}
