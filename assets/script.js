function calculateAge() {
  var today = new Date();
  var birthdate = new Date(document.getElementById("birthdate").value);
  var age = today.getFullYear() - birthdate.getFullYear();
  var months = today.getMonth() - birthdate.getMonth();
  if (months < 0 || (months === 0 && today.getDate() < birthdate.getDate())) {
    age--;
    months += 12;
  }
  var days = Math.floor(
    (today.getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24)
  );
  var ageDiv = document.getElementById("age");
  var errorDiv = document.getElementById("error");
  if (
    isNaN(birthdate.getTime()) ||
    document.getElementById("birthdate").value === ""
  ) {
    ageDiv.innerHTML = "";
    errorDiv.innerHTML = "Veuillez entrer une date valide.";
  } else if (today < birthdate) {
    ageDiv.innerHTML = "";
    errorDiv.innerHTML = "Veuillez entrer une date antérieure à aujourd'hui.";
  } else {
    ageDiv.innerHTML =
      "Vous avez " +
      age +
      " ans, " +
      months +
      " mois et " +
      (days - (age * 365 + months * 30)) +
      " jours.";
    errorDiv.innerHTML = "";
  }
}
function calculateAge() {
  var today = new Date();
  var birthdate = new Date(document.getElementById("birthdate").value);
  var age = today.getFullYear() - birthdate.getFullYear();
  var months = today.getMonth() - birthdate.getMonth();
  if (months < 0 || (months === 0 && today.getDate() < birthdate.getDate())) {
    age--;
    months += 12;
  }
  var days = Math.floor(
    (today.getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24)
  );
  var ageDiv = document.getElementById("age");
  var errorDiv = document.getElementById("error");
  if (
    isNaN(birthdate.getTime()) ||
    document.getElementById("birthdate").value === ""
  ) {
    ageDiv.innerHTML = "";
    errorDiv.innerHTML = "Veuillez entrer une date valide.";
  } else if (today < birthdate) {
    ageDiv.innerHTML = "";
    errorDiv.innerHTML = "Veuillez entrer une date antérieure à aujourd'hui.";
  } else {
    ageDiv.innerHTML =
      "Vous avez " +
      age +
      " ans, " +
      months +
      " mois et " +
      (days - (age * 365 + months * 30)) +
      " jours.";
    errorDiv.innerHTML = "";
  }
}
