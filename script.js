window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    settingName: settingValue,
  });
});

new Glider(document.querySelector(".glider"), {
  // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  dots: "#resp-dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: "auto",
        slidesToScroll: "auto",
        itemWidth: 150,
        duration: 0.25,
      },
    },
    {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25,
      },
    },
  ],
});

// Initialize Glider for .glider2
window.addEventListener("load", function () {
  const glider2 = new Glider(document.querySelector(".glider2"), {
    slidesToShow: 3,
    dots: ".dots2",
    arrows: {
      prev: ".glider2-prev",
      next: ".glider2-next",
    },
  });

  // Event listener for clicking on the previous arrow button
  document.querySelector(".glider2-prev").addEventListener("click", function () {
    glider2.scrollItem("prev");
  });

  // Event listener for clicking on the next arrow button
  document.querySelector(".glider2-next").addEventListener("click", function () {
    glider2.scrollItem("next");
  });
});


/* shop section */
// Function to show the preview section
function showPreview(dataName) {
  let previewSection = document.getElementById("preview-section");
  let prvs = document.querySelectorAll(".prv-part");
  prvs.forEach(function (prv) {
    if (prv.getAttribute("data-name") === dataName) {
      prv.style.display = "block";
    } else {
      prv.style.display = "none";
    }
  });
  previewSection.classList.add("blur");
  previewSection.style.display = "block";
}

// Function to close the preview section
function closePreview() {
  let previewSection = document.getElementById("preview-section");
  let prvs = document.querySelectorAll(".prv-part");
  prvs.forEach(function (prv) {
    prv.style.display = "none";
  });
  previewSection.classList.remove("blur");
  previewSection.style.display = "none";
}
new Glider(document.querySelector(".glider"), {
  slidesToShow: 5,
  slidesToScroll: 5,
  draggable: true,
  dots: ".dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
});
