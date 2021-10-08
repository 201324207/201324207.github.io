//图片切换的js代码//
const sw = document.querySelector('.sw')
// 定义一个常量并将类名为sw的li标签选中并赋值给它//
const box = document.querySelector('.box')
sw.addEventListener('click', function () {
    //为类名为box的标签增加一个点击事件//
    if (box.style.display === 'block') {
        box.style.display = 'none';
        //如果box模块是隐藏的就显示出来，否则就隐藏//
    } else {
        box.style.display = 'block'
    }
})
//选择器选择类名并赋值给定义的常量//
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const photo = document.querySelector('.photo')
one.addEventListener('mouseover', function () {
    //增加点击事件，当鼠标划过小图的时候，将大图的地址换成小图的地址
    photo.src = './images/phone1.jpg';
})
two.addEventListener('mouseover', function () {
    photo.src = './images/phone2.jpg';
})

three.addEventListener('mouseover', function () {
    photo.src = './images/phone3.jpg';
})

four.addEventListener('mouseover', function () {
    photo.src = './images/phone4.jpg';
})

five.addEventListener('mouseover', function () {
    photo.src = './images/phone5.jpg';
})
// 提示信息部分js代码//
const fuxuan = document.querySelector('.fuxuan');
const content = document.querySelector('.content');
function Show() {
    content.style.display = 'block';
}
function Hidden() {
    content.style.display = 'none';
}
fuxuan.addEventListener('mouseover', Show);
fuxuan.addEventListener('mouseout', Hidden);
const tishi = document.querySelector('.tishi')
const land = document.querySelector('.land')
tishi.addEventListener('click', function () {
    if (land.style.display === 'block') {
        land.style.display = 'none';
    } else {
        land.style.display = 'block'
    }
})
//登录框部分代码//
const a = document.querySelector('.a')
const denglu = document.querySelector('#denglu')
const over = document.querySelector('.over')
a.addEventListener('click', function () {
    denglu.style.display = 'block'
})
over.addEventListener('click', function () {
    denglu.style.display = 'none'
})
// 搜索框//
document.querySelector('#t-c .input').onfocus = function () {
    document.querySelector('#t-c .input').value = '';
}
document.querySelector('#t-c .input').onblur = function () {
    if (document.querySelector('#t-c .input').value == '') {
        document.querySelector('#t-c .input').value = '请输入';
    }
}
// 密码框//
const yan = document.querySelector('.yan')
const eye = document.querySelector('#eye')
yan.addEventListener('click', function () {
    if (eye.style.display === 'block') {
        eye.style.display = 'none';
    } else {
        eye.style.display = 'block'
    }
})
let yanjing = 2;
document.querySelector('#eye .eyes').onclick = function () {
    if (yanjing % 2 == 0) {
        document.querySelector('#eye .eyes').src = './images/eyesee.png';
        document.querySelector('#eye input').type = 'text';
    } else {
        document.querySelector('#eye .eyes').src = './images/eyenone.png';
        document.querySelector('#eye input').type = 'password';
    }
    yanjing++;
}