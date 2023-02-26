function render(dsnv) {
    document.getElementById('tableDanhSach').innerHTML = dsnv
        .map((e) => {
            return `
        <tr>
            <td>${e.acc}</td>
            <td>${e.name}</td>
            <td>${e.email}</td>
            <td>${e.day}</td>
            <td>${e.position}</td>
            <td>${e.getTotalPay()}</td>
            <td>${e.getType()}</td>
            <td><button class="btn btn-danger" onclick="xoaNV('${
                e.acc
            }')">xóa</button></td>
            <td><button class="btn btn-primary" onclick="suaNV('${
                e.acc
            }')" data-toggle="modal" data-target="#myModal">sửa</button></td>
        </tr>
        `;
        })
        .join('');
}

function getInfo() {
    var acc = document.getElementById('tknv').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var day = document.getElementById('datepicker').value;
    var pay = document.getElementById('luongCB').value;
    var position = document.getElementById('chucvu').value;
    var hoursOfMonth = document.getElementById('gioLam').value * 1;
    return new NhanVien(
        acc,
        name,
        email,
        pass,
        day,
        pay,
        position,
        hoursOfMonth
    );
}

function addMethod(dsnv) {
    return dsnv.map((e) => {
        return new NhanVien(
            e.acc,
            e.name,
            e.email,
            e.pass,
            e.day,
            e.pay,
            e.position,
            e.hoursOfMonth
        );
    });
}

var spanList = document.querySelectorAll('form span');
for (let i = 0; i < spanList.length; i++) {
    spanList[i].style.display = 'block';
}

function checkValid(nv) {
    var valid =
        checkEmptyField(nv.acc, 'tbTKNV') &&
        checkLimitLength(nv.acc, 4, 6, 'tbTKNV');
    valid &= checkString(nv.name, 'tbTen');
    valid &= checkIsMail(nv.email);
    valid &=
        checkPassWord(nv.pass) && checkLimitLength(nv.pass, 6, 10, 'tbMatKhau');
    valid &= checkEmptyField(nv.pay, 'tbLuongCB') && checkLimitSalary(nv.pay);
    valid &= checkPosition(nv.position);
    valid &=
        checkEmptyField(nv.hoursOfMonth, 'tbGiolam') &&
        checkTimeWork(nv.hoursOfMonth);
    return valid;
}
