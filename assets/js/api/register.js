const submitBtn = document.getElementById("submit-btn");
const inputFields = document.querySelectorAll(".form-control");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
  console.log(inputFields);
  inputFields.array.forEach(element => {
    console.log(element)
  });
});
