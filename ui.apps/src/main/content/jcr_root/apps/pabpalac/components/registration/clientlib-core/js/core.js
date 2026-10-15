/* ========================================
   Student Details Component
   ======================================== */

(function () {

    "use strict";

    function initializeStudentDetails() {

        const studentComponents =
            document.querySelectorAll(".student-details");

        if (!studentComponents.length) {
            return;
        }

        studentComponents.forEach(function (studentComponent) {

            /* Add loaded class */
            studentComponent.classList.add("student-loaded");

            /* Get button */
            const button =
                studentComponent.querySelector(".student-button");

            /* Get message area */
            const message =
                studentComponent.querySelector(".student-message");

            /* Get student name */
            const studentNameElement =
                studentComponent.querySelector(".student-header h2");

            /*
             * Button click
             */
            if (button && message) {

                button.addEventListener("click", function () {

                    const studentName =
                        studentNameElement
                            ? studentNameElement.textContent.trim()
                            : "Student";

                    message.textContent =
                        "Hello " +
                        studentName +
                        "! Your student details are displayed successfully.";

                });

            }

            /*
             * Log component loading
             */
            console.log(
                "Student Details component loaded successfully."
            );

        });
    }

    /*
     * Run when page is loaded
     */
    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initializeStudentDetails
        );

    } else {

        initializeStudentDetails();

    }

})();