/*
window.addEventListener('DOMContentLoaded', function () {

      let reviews = document.querySelectorAll('.wpmtst-testimonial-inner.testimonial-inner');
      if (reviews) {
          for (let i = 0; i < reviews.length; i++) {
              console.log(reviews[i]);
              let newText = document.createElement("p"),
                  oldText = reviews[i].querySelector('.wpmtst-testimonial-image.testimonial-image p');
              console.log(newText);
              console.log(oldText);
              console.log(newText.innerHTML);
              console.log(oldText.innerHTML);

              newText.classList.add('reviews-item__text');
              reviews[i].appendChild(newText);
              newText.innerHTML = oldText.innerHTML;
              oldText.remove();

      }
  }

}, true); */


