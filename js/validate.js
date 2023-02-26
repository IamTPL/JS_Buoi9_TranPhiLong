function showError(idTag, notify) {
    document.getElementById(idTag).innerText = notify;
}

function checkEmptyField(inputTXT, idTag) {
    if (inputTXT.length == 0 || inputTXT == 0) {
        showError(idTag, 'Không được để trống');
        return false;
    } else {
        showError(idTag, '');
        return true;
    }
}

function checkLimitLength(inputTXT, min, max, idTag) {
    if (inputTXT.length >= min && inputTXT.length <= max) {
        showError(idTag, '');
        return true;
    } else {
        showError(idTag, `Trường này phải từ ${min} tới ${max} ký tự`);
        return false;
    }
}

function checkString(inputTXT, idTag) {
    var re = /^[a-zA-Z_ ]*$/;
    if (re.test(inputTXT)) {
        showError(idTag, '');
        return true;
    } else {
        showError(idTag, 'Tên chỉ bao gồm chữ');
        return false;
    }
}

function checkIsMail(inputTXT) {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(inputTXT)) {
        showError('tbEmail','');
        return true;
    } else {
        showError('tbEmail','mail không hợp lệ')
        return false;
    }
}

function checkPassWord(inputTXT) {
    var re = /(?=.*\d)(?=.*[A-Z])(?=.*\W)/g;
    if(re.test(inputTXT)) {
        showError('tbMatKhau','');
        return true;
    } else {
        showError('tbMatKhau','Mật khẩu kém an toàn');
        return false;
    }
}

function checkLimitSalary(inputTXT) {
    if(inputTXT >= 1e6 && inputTXT <= 2e7) {
        showError('tbLuongCB','');
        return true;
    } else {
        showError('tbLuongCB','Lương cơ bản từ 1m -> 20m');
        return false;
    }
}

function checkPosition(inputTXT) {
    if(inputTXT == 'Chọn chức vụ') {
        showError('tbChucVu','vui lòng chọn chức vụ');
        return false;
    } else {
        showError('tbChucVu','');
        return true;
    }
}

function checkTimeWork(inputTXT) {
    if(inputTXT >= 80 && inputTXT <= 200) {
        showError('tbGiolam','');
        return true;
    } else {
        showError('tbGiolam','Giờ làm từ 80 -> 200');
        return false;
    }
}