function toggleLanguage() {
    // الحصول على جميع العناصر التي تحتوي على بيانات باللغة الإنجليزية والعربية
    const elements = document.querySelectorAll('[data-en], [data-ar]');
    
    // تحديد اللغة الحالية (الإنجليزية أو العربية) من خلال فئة body
    const currentLang = document.body.classList.contains('en') ? 'en' : 'ar';
    const newLang = currentLang === 'en' ? 'ar' : 'en';

    // تغيير النصوص بناءً على اللغة الجديدة
    elements.forEach(element => {
        const enText = element.getAttribute('data-en');
        const arText = element.getAttribute('data-ar');
        
        // تعيين النص المناسب بناءً على اللغة الجديدة
        if (newLang === 'en') {
            element.textContent = enText;
        } else {
            element.textContent = arText;
        }
    });

    // تبديل الفئة الخاصة بالـ body لتحديد اللغة الحالية
    document.body.classList.toggle('en');
    document.body.classList.toggle('ar');
}
