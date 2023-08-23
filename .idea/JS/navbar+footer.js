const navbar = document.querySelector(".wrapper")
const footer = document.getElementById("footerContainer")

function navbarSetup(){
    navbar.innerHTML = ' <a href=\'frontpage.html\'id="logo">Musik Butik</a>\n' +
        '        <nav>\n' +
        '            <ul id="navbarWrapper">\n' + /*skriv html filen således: href='\priceTable.html\'*/
        '                <li><a href=\'NewAlbum.html\'>Ny album</a></li>\n' +
        '                <li><a href=\'AllAlbums.html\'>Albums</a></li>\n' +
        '                <li><a href=\'NewCustomer.html\'>Brugere</a></li>\n' +
        '                <li><a href=\'NewReservation.html\'>Ny Reservation</a></li>\n' +
        '                <li><a href=\'AllReservations.html\'>Reservationer</a></li>\n' +
        '            </ul>\n' +
        '        </nav>'

}


navbarSetup()
