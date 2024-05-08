<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Reserva</title>
</head>
<body>
    <form id="reservationForm">
        <label for="checkIn">Check-in:</label>
        <input type="date" id="checkIn" name="checkIn">

        <label for="checkOut">Check-out:</label>
        <input type="date" id="checkOut" name="checkOut">

        <button type="submit">Reservar</button>
    </form>

    <script>
        document.getElementById('reservationForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const checkInDate = new Date(document.getElementById('checkIn').value);
            const checkOutDate = new Date(document.getElementById('checkOut').value);
            const currentDate = new Date();

            if (checkInDate <= currentDate || checkOutDate <= currentDate) {
                alert('La fecha de check-in y check-out deben ser posteriores a la fecha actual.');
                return;
            }

            if (checkOutDate <= checkInDate) {
                alert('La fecha de check-out debe ser posterior a la fecha de check-in.');
                return;
            }

            // Aquí puedes enviar el formulario o realizar otras acciones
            alert('¡Reserva exitosa!');
        });
    </script>
</body>
</html>
