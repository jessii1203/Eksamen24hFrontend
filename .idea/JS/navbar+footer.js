const navbar = document.querySelector(".wrapper")
const footer = document.getElementById("footerContainer")

function navbarSetup(){
    navbar.innerHTML = ' <a href=\'frontpage.html\'id="logo">Musik Butik</a>\n' +
        '        <nav>\n' +
        '            <ul id="navbarWrapper">\n' + /*skriv html filen således: href='\priceTable.html\'*/
        '                <li><a href=\'NewAlbum.html\'>Opret album</a></li>\n' +
        '                <li><a href=\'AllAlbums.html\'>Find album</a></li>\n' +
        '                <li><a href=\'NewCustomer.html\'>Opret bruger</a></li>\n' +
        '                <li><a href=\'NewReservation.html\'>Ny Reservation</a></li>\n' +
        '                <li><a href=\'.html\'>Alle Reservation</a></li>\n' +
        '            </ul>\n' +
        '        </nav>'

}


navbarSetup()
