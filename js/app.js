$(document).ready(function () {
    $("body").removeClass("no-scroll"); // Ensure body is scrollable by default

    /* FILTER */
    let filter = $("[data-filter]");
    filter.on("click", function (event) {
        event.preventDefault();
        let cat = $(this).data("filter");

        if (cat == "ALL") {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {
                let workCat = $(this).data("cat");
                $(this).toggleClass("hide", workCat !== cat);
            });
        }
    });

    /* MODAL */
    const modalCall = $("[data-modal]");

    modalCall.on("click", function (event) {
        event.preventDefault();
        let modalId = `#${$(this).data("modal")}`;

        $(modalId).addClass("show");
        $("body").addClass("no-scroll");

        let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        $("body").css("padding-right", scrollbarWidth);

        setTimeout(function () {
            $(modalId).find(".modal__dialog").addClass("show");
        }, 10);

        $('[data-slider="slick"]').slick("setPosition");
    });

    function handleClose() {
        $(".modal").removeClass("show");
        $(".modal__dialog").removeClass("show");
        $("body").removeClass("no-scroll").css("padding-right", 0);
    }

    $(".modal").on("click", function (event) {
        if ($(event.target).is(".modal")) {
            handleClose();
        }
    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    });

    $(".close-button").on("click", handleClose);

    /* SLIDER */
    $('[data-slider="slick"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });

    $(".slickPrev").on("click", function (event) {
        event.preventDefault();
        $(this).parents(".modal").find('[data-slider="slick"]').slick("slickPrev");
    });

    $(".slickNext").on("click", function (event) {
        event.preventDefault();
        $(this).parents(".modal").find('[data-slider="slick"]').slick("slickNext");
    });

    /* MOBILE NAV */
    $("#navToggle").on("click", function (event) {
        event.preventDefault();
        $("#nav").toggleClass("show");
    });
});

//*BUrger animation*//
const burger = document.getElementById("navToggle");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
});



//*DROPDOWN FOR HIRE ME*//

function toggleDropdown() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}

function selectOption(value) {
    document.querySelector(".dropdown-button").innerText = value;
    document.getElementById("selected-inquiry").value = value;

    // Show the text input only if "Other" is selected
    if (value === "Other") {
        document.getElementById("other-inquiry-group").style.display = "block";
    } else {
        document.getElementById("other-inquiry-group").style.display = "none";
    }

    // Close the dropdown
    document.getElementById("dropdown-menu").classList.remove("show");
}

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        document.getElementById("dropdown-menu").classList.remove("show");
    }
};






//*MODAL - NOTHING HAS BEEN ADDED YET*//

document.addEventListener("DOMContentLoaded", function () {
        const modal = document.getElementById("myModal");
        const modalDialog = document.querySelector(".custom-modal__dialog");
        const closeModalBtn = document.querySelector(".custom-modal__close");
        const openModalBtn = document.getElementById("openModal");

        // Ensure button exists before adding an event listener
        if (!openModalBtn) {
            console.error("Button with ID 'openModal' not found!");
            return;
        }

        // Open modal function
        function openModal() {
            console.log("Button clicked!"); // Check if event fires
            modal.style.display = "flex"; // Show modal
            setTimeout(() => modal.classList.add("show"), 10);
            setTimeout(() => modalDialog.classList.add("show"), 10);
        }

        // Close modal function
        function closeModal() {
            modalDialog.classList.remove("show");
            setTimeout(() => {
                modal.classList.remove("show");
                modal.style.display = "none"; // Hide after animation ends
            }, 500);
        }

        // Event listeners
        openModalBtn.addEventListener("click", openModal);
        closeModalBtn.addEventListener("click", closeModal);
        modal.addEventListener("click", (event) => {
            if (!modalDialog.contains(event.target)) {
                closeModal();
            }
        });
    });
