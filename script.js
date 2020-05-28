let modal = document.querySelector('.modalWindoW');
let but = document.querySelector('.book_place');
let cls = document.querySelector('.close');
let showMore = document.querySelector('.showMorePhotos');
let gallery = document.querySelector('.gallery');
let showMoreReviews = document.querySelector('.showMoreReviews');
let addCard = document.querySelectorAll('.reviews__card');
let showPhoto = document.querySelectorAll('.photo__hidden');
let org = document.querySelectorAll('.moreAboutOrg');
let select = document.querySelectorAll('.AvailableShooting__img');
let readMore = document.querySelectorAll('.readMore');
let pHidden = document.querySelectorAll('.p__hidden');


but.addEventListener('click', showModal);

function showModal() {
    modal.style.display = "block";
}

cls.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = "none";
}

function DisplayBlock(b) {
    b.style.display = (b.style.display == 'block') ? 'none' : 'block';

}

function ChangeBtn() {
    this.innerHTML = (this.innerHTML == 'Скрыть') ? 'Показать все фото' : 'Скрыть';
}

function ShowMore() {
    this.forEach(item => {
        item.classList.toggle('show');
    });

}
showMore.addEventListener('click', ChangeBtn.bind(showMore));
showMore.addEventListener('click', ShowMore.bind(showPhoto));
showMoreReviews.addEventListener('click', showReviews);
for (let i = 3; i < addCard.length; i++) {
    addCard[i].style.display = 'none';
    
}

    
function showReviews() {
    showMoreReviews.innerHTML = (showMoreReviews.innerHTML == 'Скрыть') ? 'Показать все (134)' : 'Скрыть';
    for (let i = 3; i < addCard.length; i++) {
         addCard[i].style.display = ( addCard[i].style.display == 'block') ? 'none' : 'block';
    }
}



select.forEach(function (btn) {
    btn.addEventListener('click', function Booked(e) {
        e.target.style.display = 'none';
        let p = document.createElement('p');
        p.innerHTML = "забронировано";
        p.classList.add('booked');
        // p.style.backgroundColor = 'red';
        e.target.after(p);
        btn.removeEventListener('click', Booked);

    })

})

function showMoreInfo(i) {
    let organizer = document.querySelectorAll('.organizer');
    DisplayBlock(organizer[i]);
    org[i].innerHTML = (org[i].innerHTML == 'Показать больше информации о фотографе') ? 'Cкрыть' : 'Показать больше информации о фотографе';

};
org[0].addEventListener('click', function () {
    showMoreInfo(0);
});
org[1].addEventListener('click', function () {
    showMoreInfo(1);
});


function ReadMore(i) {
    pHidden[i].classList.toggle('show');
    readMore[i].innerHTML = (readMore[i].innerHTML == 'Скрыть <img src="icons/Arrow.svg" alt="arrow">') ?
        'Читать еще <img src="icons/Arrow.svg" alt="arrow">' :
        'Скрыть <img src="icons/Arrow.svg" alt="arrow">';
}

readMore[0].addEventListener('click', function Read() {
    ReadMore(0);
});
readMore[1].addEventListener('click', function Read() {
    ReadMore(1);
});
