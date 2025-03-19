function validateForm(event){
    event.preventDefault();
    let inputName = document.getElementById('name');
    let inputEmail = document.getElementById('email');
    let alertName = document.getElementById('alert_name');
    let alertEmail = document.getElementById('alert_email');
    if(inputName.value === "") {
        alertName.style.display = "block";
        inputName.scrollIntoView({behavior: 'smooth'});//滾到到該欄位
        inputName.focus();//聚焦到輸入框
    }else{
        alertName.style.display = "none";
    }
    if(inputEmail.value === ""){
        alertEmail.style.display = "block";
        inputEmail.scrollIntoView({behavior: 'smooth'});
        inputEmail.focus();
    }else{
        alertEmail.style.display = "none";
    }
}

    