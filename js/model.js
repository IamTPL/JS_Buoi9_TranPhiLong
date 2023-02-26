function NhanVien(
    acc,
    name,
    email,
    pass,
    day,
    pay,
    position,
    hoursOfMonth
) {
    this.acc = acc;
    this.name = name;
    this.email = email;
    this.pass = pass;
    this.day = day;
    this.pay = pay;
    this.position = position;
    this.hoursOfMonth = hoursOfMonth;
    this.getTotalPay = function () {
        if (this.position == 'Sếp') {
            return pay * 3;
        } else if (this.position == 'Trưởng phòng') {
            return pay * 2;
        } else {
            return pay;
        }
    };
    this.getType = function () {
        if (this.hoursOfMonth >= 192) {
            return 'Xuất sắc';
        } else if (this.hoursOfMonth >= 176) {
            return 'Giỏi';
        } else if (this.hoursOfMonth >= 160) {
            return 'Khá';
        } else {
            return 'Trung Bình';
        }
    };
}

