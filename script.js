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