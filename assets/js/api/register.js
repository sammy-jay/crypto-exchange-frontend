const submitBtn = document.getElementById("submit-btn");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const username = document.getElementById("username");
const phoneNumber = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password_confirmation");

submitBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  if (
    firstName.value &&
    lastName.value &&
    username.value &&
    email.value &&
    phone.value &&
    password.value &&
    passwordConfirm.value
  ) {
    if (password.value !== passwordConfirm.value) {
      alert("Passwords do not match");
      return;
    }

    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      username: username.value,
      email: email.value,
      phoneNumber: phone.value,
      password: password.value,
    };

    const { data } = await axios.post(
      "https://crypto-be.herokuapp.com/api/v1/auth/register",
      formData
    );
    console.log(data);
    window.location = "/Dashboard.html";
  } else {
    alert("Field(s) cannot be left blank");
  }
});
