
let modal = document.querySelector('.modalWindoW');
let but = document.querySelector('.book_place');
let cls = document.querySelector('.close');
let showMore = document.querySelector('.showMorePhotos');
let gallery = document.querySelector('.gallery');
let showMoreReviews = document.querySelector('.showMoreReviews');
let addCard = document.querySelectorAll('.addCard');





but.addEventListener('click', showModal);
function showModal() {
    modal.style.display = "block";
}

cls.addEventListener('click', closeModal);
function closeModal() {
    modal.style.display = "none";
}

showMore.addEventListener('click', showGallery);
function showGallery() {
    gallery.style.height = (gallery.style.height == '566px') ? '430px' : '566px';
}

showMoreReviews.addEventListener('click', showReviews);
function showReviews() {
    addCard.forEach(item => {
            item.style.display = (item.style.display == 'none') ? 'block' : 'none';

    });
}

