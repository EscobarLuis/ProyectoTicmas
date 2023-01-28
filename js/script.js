
const url = ' https://randomuser.me/api/ ';

let avatar = document.getElementById('avatar');
let nombre = document.getElementById('nombre');
let telefono = document.getElementById('telefono');
let email = document.getElementById('email');
let ubicacion = document.getElementById('ubicacion');


fetch(url)
    .then(parseJSON)
    .then(updateProfile)



function parseJSON(res) {
    return res.json();
}

function updateProfile(profile) {
    avatar.src = profile.results[0].picture.medium;
    nombre.innerHTML = profile.results[0].name.first + " " + profile.results[0].name.last;
    telefono.innerHTML = profile.results[0].cell;
    email.innerHTML = profile.results[0].email;
    ubicacion.innerHTML = profile.results[0].location.city + " - " + profile.results[0].location.street.name + " " + profile.results[0].location.street.number;
    return 1;
}

