// document.addEventListener('DOMContentLoaded', () => {
//     const photos = document.querySelectorAll('.photo');
//     const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
//     const fullscreenImage = fullscreenOverlay.querySelector('img');
//     const closeBtn = fullscreenOverlay.querySelector('.close-btn');
//     const leftArrow = fullscreenOverlay.querySelector('.left-arrow');
//     const rightArrow = fullscreenOverlay.querySelector('.right-arrow');
//     let currentPhotoIndex = 0;

//     // Open fullscreen overlay when a photo is clicked
//     photos.forEach((photo, index) => {
//         photo.addEventListener('click', () => {
//             currentPhotoIndex = index;
//             const src = photo.querySelector('img').src;
//             fullscreenImage.src = src;
//             fullscreenOverlay.style.display = 'flex';
//         });
//     });

//     // Close fullscreen overlay
//     const closeFullscreen = () => {
//         fullscreenOverlay.style.display = 'none';
//     };

//     closeBtn.addEventListener('click', closeFullscreen);

//     // Show previous photo
//     const showPreviousPhoto = () => {
//         currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
//         const src = photos[currentPhotoIndex].querySelector('img').src;
//         fullscreenImage.src = src;
//     };

//     leftArrow.addEventListener('click', showPreviousPhoto);

//     // Show next photo
//     const showNextPhoto = () => {
//         currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
//         const src = photos[currentPhotoIndex].querySelector('img').src;
//         fullscreenImage.src = src;
//     };

//     rightArrow.addEventListener('click', showNextPhoto);

//     // Close fullscreen overlay when clicking outside the image or on the close button
//     fullscreenOverlay.addEventListener('click', (event) => {
//         if (event.target === fullscreenOverlay || event.target === closeBtn) {
//             closeFullscreen();
//         }
//     });

//     // Keyboard triggers
//     document.addEventListener('keydown', (event) => {
//         if (event.key === 'Escape') {
//             closeFullscreen();
//         } else if (event.key === 'ArrowLeft') {
//             showPreviousPhoto();
//         } else if (event.key === 'ArrowRight') {
//             showNextPhoto();
//         }
//     });
// });