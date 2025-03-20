function validateForm(event) {
  event.preventDefault();
  const inputs = [
    { id: "name", alertId: "alert_name" },
    { id: "email", alertId: "alert_email" },
  ];
  let isValid = true;
  inputs.forEach(({ id, alertId }) => {
    const input = document.getElementById(id);
    const alert = document.getElementById(alertId);
    if (input.value === "") {
      alert.style.display = "block";
      input.scrollIntoView({ behavior: "smooth" });
      input.focus();
      isValid = false;
      return;
    } else {
      alert.style.display = "none";
    }
  });
  if (isValid) {
    show();
  }
}

function show() {
  const getValue = (selector, defaultValue) => {
    const element = document.querySelector(selector);
    return element.value !== "" ? element.value : defaultValue;
  };
  const name = getValue("#name", "未填寫");
  const email = getValue("#email", "未填寫");
  const birthday = getValue(".date", "未填寫");
  const message = getValue("#secret", "未填寫");

  const color = document.querySelector("input[name='favorite_color']:checked");
  const favoriteColor = color ? color.nextElementSibling.textContent : "未選擇";

  const foodTypes = document.querySelectorAll("input[type='checkbox']:checked");
  const favoriteFood =
    Array.from(foodTypes)
      .map((f) => f.nextElementSibling.textContent)
      .join(" ") || "未選擇";

  const country = document.querySelector("select").value || "未選擇";

  const queryParams = new URLSearchParams({
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
