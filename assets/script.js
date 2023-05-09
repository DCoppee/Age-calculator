// Récupération des éléments HTML
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const ageDiv = document.getElementById("age");
const errorDiv = document.getElementById("error");
const birthdayDiv = document.getElementById("birthday");

// Fonction de vérification de la validité de la date
function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

// Fonction de calcul de l'âge et affichage du résultat
function calculateAge() {
  const day = Number(dayInput.value);
  const month = Number(monthInput.value);
  const year = Number(yearInput.value);

  // Vérification que les champs sont remplis
  if (!day || !month || !year) {
    errorDiv.textContent = "Veuillez remplir tous les champs.";
    ageDiv.textContent = "";
    birthdayDiv.textContent = "";
    return;
  }

  // Vérification de la validité de la date
  if (!isValidDate(day, month, year)) {
    errorDiv.textContent = "Veuillez entrer une date valide.";
    ageDiv.textContent = "";
    birthdayDiv.textContent = "";
    return;
  }

  // Vérification que la date est dans le passé
  const currentDate = new Date();
  const inputDate = new Date(year, month - 1, day);
  if (inputDate > currentDate) {
    errorDiv.textContent = "Veuillez entrer une date antérieure à aujourd'hui.";
    ageDiv.textContent = "";
    birthdayDiv.textContent = "";
    return;
  }

  // Calcul de l'âge en années, mois et jours
  const diffTime = Math.abs(currentDate - inputDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffDays / 365.25);
  const diffMonths = Math.floor((diffDays % 365.25) / 30.4375);
  const diffRemainingDays = Math.floor(diffDays % 30.4375);

  // Affichage du résultat
  ageDiv.innerHTML = `
  <span class="years">${diffYears}</span> ans<br>
  <span class="months">${diffMonths}</span> mois<br>
  <span class="days">${diffRemainingDays}</span> jours
`;

  // Vérification si c'est l'anniversaire de l'utilisateur
  if (
    inputDate.getMonth() === currentDate.getMonth() &&
    inputDate.getDate() === currentDate.getDate()
  ) {
    birthdayDiv.textContent = "Joyeux anniversaire !";
  } else {
    birthdayDiv.textContent = "";
  }
  errorDiv.textContent = "";
}

// Fonction de remise à zéro des champs
function resetFields() {
  ageDiv.textContent = "";
  errorDiv.textContent = "";
  birthdayDiv.textContent = "";
  dayInput.value = "";
  monthInput.value = "";
  yearInput.value = "";
}
