const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document
    .querySelector("#name-signup")
    .value.trim()
    .toLowerCase();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const response = await fetch("api/users/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("userprofile");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
