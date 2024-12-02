const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
const pages = document.querySelectorAll('.book-page.page-right');

const contactMeBtns = document.querySelectorAll('.btn.contact-me');
const backProfileBtns = document.querySelectorAll('.back-profile');

let totalPages = pages.length; // تصحيح تعريف totalPages
let pageNumber = 0;

// دالة لتبديل حالة الصفحات للأمام أو الخلف
pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});

// حدث للنقر على أزرار "اتصل بي"
contactMeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        pages.forEach((page, index) => {
            setTimeout(() => {
                page.classList.add('turn');
                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500);
            }, (index + 1) * 200 + 100);
        });
        pageNumber = totalPages - 1; // التحديث إلى آخر صفحة
    });
});

// دالة لتحديد الصفحة عند الرجوع للخلف
function reverseIndex() {
    if (pageNumber > 0) {
        pageNumber--;
    } else {
        pageNumber = totalPages - 1;
    }
}

// حدث للنقر على أزرار الرجوع
backProfileBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        pages.forEach((page, index) => {
            setTimeout(() => {
                reverseIndex();
                const currentPage = pages[pageNumber];
                currentPage.classList.remove('turn');
                setTimeout(() => {
                    currentPage.style.zIndex = 10 + index;
                }, 500);
            }, (index + 1) * 200 + 100);
        });
    });
});


const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');


setTimeout(() => {
    coverRight.classList.add('turn')
}, 2100)


setTimeout(() => {
    coverRight.style.zIndex = -1 ;
}, 2800)

setTimeout(() => {
    pageLeft.style.zIndex = 20 ;
}, 3200)


pages.forEach((page, index) => {
    setTimeout(() => {
        reverseIndex();
        const currentPage = pages[pageNumber];
        currentPage.classList.remove('turn');
        setTimeout(() => {
            currentPage.style.zIndex = 10 + index;
        }, 500);
    }, (index + 1) * 200 + 2100);
});

window.addEventListener('resize', () => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.height = `${window.innerHeight}px`;
});


window.addEventListener('resize', () => {
    const wrapper = document.querySelector('.wrapper');
    const pages = document.querySelectorAll('.book-page');

    // تحديث الأبعاد
    wrapper.style.width = `${window.innerWidth}px`;
    wrapper.style.height = `${window.innerHeight}px`;

    // ضبط كل صفحة بنفس الأبعاد
    pages.forEach((page) => {
        page.style.width = `${window.innerWidth}px`;
        page.style.height = `${window.innerHeight}px`;
    });
});


pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index; // تحديث zIndex
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});


// تحديد الصفحات والزوار
const pages_tow = document.querySelectorAll('.book-page');
let currentPage = 0; // الصفحة الأولى

// التنقل للأمام
function nextPage() {
    if (currentPage < pages_tow.length - 1) {
        pages_tow[currentPage].classList.add('turn');
        currentPage++;
    }
}

// التنقل للخلف
function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        pages_tow[currentPage].classList.remove('turn');
    }
}

// إضافة الأحداث للأزرار
document.querySelectorAll('.btn.next').forEach((btn) => {
    btn.addEventListener('click', nextPage);
});

document.querySelectorAll('.btn.back').forEach((btn) => {
    btn.addEventListener('click', prevPage);
});
let swipeStartX = 0;
let isSwipeActive = false;
let currentSwipePage = 0; // تتبع الصفحة الحالية
const swipePages = document.querySelectorAll('.book-page.page-right');
const totalSwipePages = swipePages.length;

// عند بدء السحب
document.addEventListener('touchstart', (e) => {
    swipeStartX = e.touches[0].clientX;
    isSwipeActive = true;
});

// أثناء السحب
document.addEventListener('touchmove', (e) => {
    if (isSwipeActive) {
        const swipeEndX = e.touches[0].clientX;
        const swipeDeltaX = swipeEndX - swipeStartX;

        if (Math.abs(swipeDeltaX) > 50) { // إذا تجاوز السحب 50px
            if (swipeDeltaX < 0) {
                swipeNextPage(); // السحب لليسار (الصفحة التالية)
            } else if (swipeDeltaX > 0) {
                swipePrevPage(); // السحب لليمين (الصفحة السابقة)
            }
            isSwipeActive = false; // إنهاء السحب
        }
    }
});

// إنهاء السحب
document.addEventListener('touchend', () => {
    isSwipeActive = false;
});

// التنقل للأمام
function swipeNextPage() {
    if (currentSwipePage < totalSwipePages - 1) {
        swipePages[currentSwipePage].classList.add('turn');
        swipePages[currentSwipePage].style.zIndex = currentSwipePage;
        currentSwipePage++;
    }
}

// التنقل للخلف
function swipePrevPage() {
    if (currentSwipePage > 0) {
        currentSwipePage--;
        swipePages[currentSwipePage].classList.remove('turn');
        swipePages[currentSwipePage].style.zIndex = currentSwipePage;
    }
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    // اجلب البيانات من الحقول
    const fullName = document.getElementById('fullName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const messageContent = document.getElementById('messageContent').value;

    // إعداد EmailJS
    emailjs.init('salloum_92'); // ضع معرف المستخدم الخاص بك من EmailJS

    // إعداد البيانات المرسلة
    const templateParams = {
        from_name: fullName,
        from_email: emailAddress,
        message: messageContent,
    };

    // إرسال البريد عبر Gmail
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function (response) {
            alert('Message sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            alert('Failed to send the message. Please try again.');
            console.error('FAILED...', error);
        });
});

const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ahmad.salloum00@gmail.com',
            pass: 'Ahmad123456@' // استخدم كلمة مرور التطبيق إذا كنت تستخدم المصادقة الثنائية
        }
    });

    const mailOptions = {
        from: email,
        to: 'ahmad.salloum00@gmail.com',
        subject: `Message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully.');
        }
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
