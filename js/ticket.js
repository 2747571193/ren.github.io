
document.getElementById('increase').addEventListener('click', function () {
    var quantity = parseInt(document.getElementById('quantity').innerText);
    document.getElementById('quantity').innerText = quantity + 1;
});

document.getElementById('decrease').addEventListener('click', function () {
    var quantity = parseInt(document.getElementById('quantity').innerText);
    if (quantity > 1) {
        document.getElementById('quantity').innerText = quantity - 1;
    }
});

document.getElementById('addTicket').addEventListener('click', function () {
    var ticketAttractions = document.orderForm.ticketAttractions.value;
    var ticketType = document.orderForm.ticketType.value;
    var quantity = document.getElementById('quantity').innerText;
    var name = document.orderForm.name.value;
    var idNumber = document.orderForm.idNumber.value;
    var massageDiv = document.getElementById("message");

    if (ticketAttractions === '' || ticketType === '' || isNaN(quantity) || name === '' || idNumber === '')
        alert("信息填写未填写全！")
    else {
        var message = `您已添加${ticketAttractions}的 ${quantity} 张${ticketType}票，游客姓名：${name}，身份证号：${idNumber}。`;
        massageDiv.innerHTML += "<br />" + message;
    }
});

document.getElementById('submit').addEventListener('click', function () {
    var massageDiv = document.getElementById("message").innerText;
    if (massageDiv === '') {
        alert("请填写购票信息!");
    } else if (confirm(massageDiv.replace("<br />", "\n") + "\n是否前往付款")) {
        alert("添加成功！");
        window.location.reload();
    }
});

document.getElementById('reset').addEventListener('click', function () {
    var massageDiv = document.getElementById("message");
    if (massageDiv.innerText === "") alert("无购票信息！")
    else massageDiv = "";
});