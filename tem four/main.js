let deleteElements = document.querySelectorAll('.delete');
let hereElements = document.querySelectorAll('.here');

deleteElements.forEach(function(deleteElement) {
    deleteElement.onclick = function(){
        // تحديد العنصر الذي تم النقر عليه
        let clickedDeleteElement = deleteElement.parentElement;

        // تنفيذ العمليات على العنصر الواحد فقط
        hereElements.forEach(function(hereElement) {
            // إعادة إعداد العنصر السابق للحالة الافتراضية
            hereElement.style.textDecoration = 'none';
            hereElement.style.color = 'inherit';
        });

        // تطبيق التأثير المطلوب على العنصر المحدد
        clickedDeleteElement.style.textDecoration = 'line-through';
        clickedDeleteElement.style.color = 'rgba(0, 0, 0, 0.138)';
    }
});



