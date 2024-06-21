function handlePaymentSelection() {
    const paySelect = document.getElementById('pay');
    const selectedValue = paySelect.value;

    if (selectedValue === 'alipay') {
        window.location.href = 'alipays://platformapi/startapp?appId=20000123'; 
    } else if (selectedValue === 'wechat') {
        window.location.href = 'weixin://paycode'; 
    }
}

document.getElementById('pay').addEventListener('change', handlePaymentSelection);