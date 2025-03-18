document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    //檢查必填欄位
    let isFormValid = true;
    const requiredFields = document.querySelectorAll('input[required]');
    requiredFields.forEach((input) => {
        const alertElement = document.getElementById('alert_' + input.id);
        if(!input.value){
            isFormValid = false;
            alertElement.style.display = "block";
        }else{
            alertElement.style.display = "none";
        }
    });
    if(isFormValid){
        alert("表單填寫成功")
    }else{
        alert("尚有必填欄位未填寫")
    }
});

