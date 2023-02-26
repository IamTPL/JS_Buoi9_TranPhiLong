if (localStorage.getItem('localDSNV') == null) {
    var dsnv = [];
} else {
    var dsnv = JSON.parse(localStorage.getItem('localDSNV'));
    dsnv = addMethod(dsnv);
    render(dsnv);
}

document.getElementById('btnThemNV').onclick = function themNhanVien() {
    var nv = getInfo();
    var valid = checkValid(nv);

    if (valid) {
        dsnv.push(nv);
        render(dsnv);
        localStorage.setItem('localDSNV', JSON.stringify(dsnv));
    }
};

function xoaNV(account) {
    var index = dsnv.findIndex((e) => {
        return e.acc == account;
    });
    dsnv.splice(index, 1);
    localStorage.setItem('localDSNV', JSON.stringify(dsnv));
    render(dsnv);
}

function suaNV(account) {
    document.getElementById('btnCapNhat').addEventListener('click', () => {
        var index = dsnv.findIndex((e) => {
            return (e.acc = account);
        });

        if (index != -1) {
            var nvUpdate = getInfo();
            if (checkValid(nvUpdate)) {
                dsnv[index] = nvUpdate;
                render(dsnv);
                localStorage.setItem('localDSNV', JSON.stringify(dsnv));
            }
        }
    });
}

document.getElementById('btnTimNV').onclick = function timNvTheoLoai() {
    var typeToSeek = document.getElementById('searchName').value;
    var dsnvFindByType = dsnv.filter((e)=> {
        return typeToSeek.toLowerCase() === (e.getType()).toLowerCase();
    })
    render(dsnvFindByType);
}
