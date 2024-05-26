//image pop section

let currentIndex = 0;

document.querySelectorAll('.gallery-image').forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        showImage();
    });
});

document.querySelectorAll('.next').forEach(button => {
    button.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= document.querySelectorAll('.gallery-image').length) {
            currentIndex = 0;
        }
        showImage();
    });
});

document.querySelectorAll('.previous').forEach(button => {
    button.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = document.querySelectorAll('.gallery-image').length - 1;
        }
        showImage();
    });
});

function showImage() {
    // Remove existing popup
    const existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    const popup = document.createElement('div');
    popup.className = 'popup';

    const previousButton = document.createElement('button');
    previousButton.textContent = '<';
    previousButton.className = 'previous';
    popup.appendChild(previousButton);

    const popupImage = document.createElement('img');
    popupImage.src = document.querySelectorAll('.gallery-image')[currentIndex].src;
    popupImage.alt = document.querySelectorAll('.gallery-image')[currentIndex].alt || ''; // Add a default alt text if it's undefined
    popup.appendChild(popupImage);



    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.className = 'close-button';
    popup.appendChild(closeButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = '>';
    nextButton.className = 'next';
    popup.appendChild(nextButton);



    closeButton.addEventListener('click', () => {
        popup.remove();
    });

    nextButton.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= document.querySelectorAll('.gallery-image').length) {
            currentIndex = 0;
        }
        showImage();
    });

    previousButton.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = document.querySelectorAll('.gallery-image').length - 1;
        }
        showImage();
    });

    document.body.appendChild(popup);
}

// Call showImage initially to display the first image
// showImage();


// let currentIndex = 0;

// document.querySelectorAll('.gallery-image').forEach((image, index) => {
//     image.addEventListener('click', () => {
//         currentIndex = index;
//         showImage();
//     });
// });

// document.querySelectorAll('.next').forEach(button => {
//     button.addEventListener('click', () => {
//         currentIndex++;
//         if (currentIndex >= document.querySelectorAll('.gallery-image').length) {
//             currentIndex = 0;
//         }
//         showImage();
//     });
// });

// document.querySelectorAll('.previous').forEach(button => {
//     button.addEventListener('click', () => {
//         currentIndex--;
//         if (currentIndex < 0) {
//             currentIndex = document.querySelectorAll('.gallery-image').length - 1;
//         }
//         showImage();
//     });
// });

// function showImage() {
//     const popup = document.createElement('div');
//     popup.className = 'popup';

//     const previousButton = document.createElement('button');
//     previousButton.textContent = '<';
//     previousButton.className = 'previous';
//     popup.appendChild(previousButton);

//     const popupImage = document.createElement('img');
//     popupImage.src = document.querySelectorAll('.gallery-image')[currentIndex].src;
//     popupImage.alt = document.querySelectorAll('.gallery-image')[currentIndex].alt;
//     popup.appendChild(popupImage);

//     const closeButton = document.createElement('button');
//     closeButton.textContent = 'X';
//     closeButton.className = 'close-button';
//     popup.appendChild(closeButton);

//     const nextButton = document.createElement('button');
//     nextButton.textContent = '>';
//     nextButton.className = 'next';
//     console.log("next");
//     popup.appendChild(nextButton);



//     closeButton.addEventListener('click', () => {
//         popup.remove();
//     });

//     document.body.appendChild(popup);
// }


