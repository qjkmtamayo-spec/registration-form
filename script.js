function validateForm() {
  const firstName = document.getElementById("firstName").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const terms = document.getElementById("terms").checked;

  // First Name: letters only
  const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(firstName)) {
    alert("First Name must contain letters only.");
    return false;
  }

  // Phone number: digits only
  const phoneRegex = /^[0-9]+$/;
  if (!phoneRegex.test(phone)) {
    alert("Phone number must contain digits only.");
    return false;
  }

  // Password match
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  // Terms checkbox
  if (!terms) {
    alert("You must agree to the terms & conditions.");
    return false;
  }

  alert("Registration Successful!");
  return true;
}
