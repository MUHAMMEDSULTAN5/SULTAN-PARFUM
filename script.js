function sendOrder(perfumeName, price, inputId) {
    // جلب العنوان المدخل
    var addressInput = document.getElementById(inputId).value;

    // التحقق من إدخال العنوان
    if (addressInput.trim() === "") {
        alert("يرجى إدخال عنوان الاستلام أولاً لتأكيد طلب " + perfumeName);
        return;
    }

    // *** ضع رقم واتساب الخاص بك هنا (رمز الدولة ثم الرقم بدون أصفار) ***
    var phoneNumber = "905342168483";

    // تجهيز نص الرسالة متضمناً السعر والعنوان
    var message = "مرحباً عطورات السلطان،\n\n";
    message += "أود تأكيد طلب شراء:\n";
    message += "📦 المنتج: *" + perfumeName + "*\n";
    message += "💰 السعر: *" + price + "*\n\n";
    message += "📍 عنوان الاستلام (للكارجو):\n" + addressInput;

    // تحويل النص ليتناسب مع روابط الويب
    var encodedMessage = encodeURIComponent(message);

    // فتح رابط الواتساب المباشر
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
    window.open(whatsappUrl, '_blank');
}