function validateForm(event) {
    event.preventDefault();
    let inputName = document.getElementById("name");
    let inputEmail = document.getElementById("email");
    let alertName = document.getElementById("alert_name");
    let alertEmail = document.getElementById("alert_email");
    let isValid = true;
    if (inputName.value === "") {
      alertName.style.display = "block";
      inputName.scrollIntoView({ behavior: "smooth" }); 
      inputName.focus(); 
      isValid = false;
    } else {
      alertName.style.display = "none";
    }
    if (inputEmail.value === "") {
      alertEmail.style.display = "block";
      inputEmail.scrollIntoView({ behavior: "smooth" });
      inputEmail.focus();
      isValid = false;
    } else {
      alertEmail.style.display = "none";
    }

    if (isValid) {
      show();
    }
  }
  
  function show() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let birthday = document.querySelector(".date").value;
    let message = document.querySelector(
      ".input_info[placeholder='您的回答']"
    ).value;
  
    let color = document.querySelector("input[name='favorite_color']:checked");
    let favoriteColor = color ? color.nextElementSibling.textContent : "未選擇";
  
    let foodTypes = document.querySelectorAll("input[type='checkbox']:checked");
    let favoriteFood =
      Array.from(foodTypes)
        .map((f) => f.nextElementSibling.textContent)
        .join(" ") || "未選擇";
  
    let country = document.querySelector("select").value || "未選擇";
  
    let queryParams = new URLSearchParams({
      name,
      email,
      birthday,
      message,
      favoriteColor,
      favoriteFood,
      country,
    }).toString();
  
    window.location.href = `result.html?${queryParams}`;
  }