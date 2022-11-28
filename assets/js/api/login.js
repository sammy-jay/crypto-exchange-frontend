const submitBtn = document.getElementById("submit-btn");
const email = document.getElementById("email");
const password = document.getElementById("password");

submitBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  if (email.value && password.value) {
    const formData = {
      email: email.value,
      password: password.value,
    };

    const { data } = await axios.post(
      "https://crypto-be.herokuapp.com/api/v1/auth/login",
      formData
    );
    console.log(data);
    window.location = "/Dashboard.html";
  } else {
    alert("Field(s) cannot be left blank");
  }
});
