let inputWidth = document.getElementById("width");
let inputHeight = document.getElementById("height");

let perimeter = document.getElementById("perimeter");
let area = document.getElementById("area");

let compute = document.getElementById("compute");

let Tips = document.getElementById("alert");


inputHeight.onchange = function () {
    if (!(/^\d+.?\d*$/.test(this.value)) || this.value === '' || this.value === 0) {
        alert('只能输入正数');
        this.value = '';
        this.placeholder = '请输入正数';
    }
};
inputWidth.onchange = function () {
    if (!(/^\d+.?\d*$/.test(this.value)) || this.value === '' || this.value === 0) {
        alert('只能输入正数');
        this.value = '';
        this.placeholder = '请输入正数';
    }
};


inputHeight.onkeyup = function () {

    if (isNaN(this.value)) {
        this.value = '';
        Tips.innerHTML = `<div class="alert alert-danger alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>失败！</strong> 输入有误 请输入数字
</div>`;

        setTimeout(tipsN, 1500);
        function tipsN() {
            Tips.style.opacity = 0;
        }
    }

};

inputWidth.onkeyup = function () {
    if (isNaN(this.value)) {
        this.value = '';
        Tips.innerHTML = `<div class="alert alert-danger alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>失败！</strong> 输入有误 请输入数字
</div>`;

        setTimeout(tipsN, 1500);
        function tipsN() {
            Tips.style.opacity = 0;
        }
    }
};

inputHeight.onafterpaste = function () {
    if (isNaN(this.value)) {
        this.value = '';
        Tips.innerHTML = `<div class="alert alert-danger alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>失败！</strong> 输入有误 请输入数字
</div>`;

        setTimeout(tipsN, 1500);
        function tipsN() {
            Tips.style.opacity = 0;
        }
    }
};

inputWidth.onafterpaste = function () {
    if (isNaN(this.value)) {
        this.value = '';
        Tips.innerHTML = `<div class="alert alert-danger alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>失败！</strong> 输入有误 请输入数字
</div>`;

        setTimeout(tipsN, 1500);
        function tipsN() {
            Tips.style.opacity = 0;
        }
    }
};

inputHeight.onblur = function () {
    if ( this.value ==='') {
        this.value = 0;
    }
};

inputWidth.onblur = function () {
    if ( this.value ==='') {
        this.value = 0;
    }
};


compute.addEventListener("click", computeAll);


function computeAll() {
    let width = inputWidth.value;
    let height = inputHeight.value;
    if (!isNaN(width) && !isNaN(height) && width != 0 && height != 0) {
        perimeter.value = 2 * (+width + +height);
        area.value = +width * +height;
    }
}