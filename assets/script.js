function calculateAge() {
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);

  var age = {
    years: 0,
    months: 0,
    days: 0,
  };

  var error = "";

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  // Vérifier si les champs ne sont pas vides
  if (!day || !month || !year) {
    error =
      "<span class='error-fill'>Tous les champs doivent être remplis</span>";
  }
  // Vérifier si les valeurs sont valides
  else if (isNaN(day) || isNaN(month) || isNaN(year)) {
    error =
      "<span class='error-valid'>Ceci ne correspond pas à une date valide</span>";
  }
  // Vérifier si l'année est dans le futur
  else if (year > new Date().getFullYear()) {
    error =
      "<span class='error-future'>L'année saisie ne peut pas être dans le futur</span>";
  }
  // Vérifier si la date est valide
  else if (
    day <= 0 ||
    day > 31 ||
    month <= 0 ||
    month > 12 ||
    year <= 0 ||
    year > new Date().getFullYear()
  ) {
    error = "Veuillez entrer une date valide";
  } else {
    // Calculer l'âge en années, mois et jours
    var birthdate = new Date(new Date().getFullYear(), month - 1, day);
    var today = new Date();
    age.years = today.getFullYear() - year;
    age.months = today.getMonth() - month;
    age.days = today.getDate() - day;

    // Gérer les cas où le nombre de mois ou de jours est négatif
    if (age.months < 0) {
      age.years--;
      age.months += 12;
    }

    if (age.days < 0) {
      age.months--;
      age.days += daysInMonth(today.getMonth() + 1, today.getFullYear());
    }

    // Gérer le cas où l'utilisateur est né le jour même
    if (
      birthdate.getDate() === today.getDate() &&
      birthdate.getMonth() === today.getMonth()
    ) {
      var birthdayDiv = document.getElementById("birthday");
      var ageDiv = document.getElementById("age");

      birthdayDiv.innerHTML = "Joyeux anniversaire !";
      birthdayDiv.style.display = "block";

      ageDiv.innerHTML =
        "<span class='years'>" +
        age.years +
        "</span> years<br>" +
        "<span class='months'>" +
        age.months +
        "</span> months<br>" +
        "<span class='days'>" +
        age.days +
        "</span> days";
      ageDiv.style.display = "block";
    } else {
      // Afficher le résultat ou le message d'erreur
      if (error) {
        document.getElementById("age").innerHTML = "";
        document.getElementById("error").innerHTML = error;
      } else {
        document.getElementById("age").innerHTML =
          "<span class='years'>" +
          age.years +
          "</span> ans<br>" +
          "<span class='months'>" +
          age.months +
          "</span> mois<br>" +
          "<span class='days'>" +
          age.days +
          "</span> jours";
        document.getElementById("error").innerHTML = "";
      }
    }
  }
}

function resetFields() {
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
  document.getElementById("age").innerHTML = "";
  document.getElementById("error").innerHTML = "";
}
