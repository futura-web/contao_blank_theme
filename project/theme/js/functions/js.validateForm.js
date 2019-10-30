
    /* -------------------- CONTAO FORM VALIDATION [CLIENT] ----- */

    function validateForm() {

        var allForms = document.getElementsByTagName("form"),
            numberOfForms = allForms.length;

        if (numberOfForms != 0) {

            var validateThisForm = document.getElementsByClassName("validate");


            [].forEach.call(validateThisForm, function(el){

                el.reset();

                var submit = el.getElementsByClassName("submit");

                [].forEach.call(submit, function(el){

                    el.addEventListener("click", function(event) {

                        event.preventDefault();

                        var checkingForm = this.parentNode.parentNode.parentNode,
                            mandatoryText = checkingForm.querySelectorAll(".mandatory .text:not(.captcha), .mandatory .textarea"),
                            mandatorySelect = checkingForm.querySelectorAll(".mandatory .select"),
                            mandatoryBox = checkingForm.querySelectorAll(".mandatory .radio, .mandatory .checkbox");

                        [].forEach.call(mandatoryBox, function(el) {

                            if (el.required == true && !el.checked) {

                                el.classList.add("error");
                                el.parentNode.parentNode.parentNode.classList.add("error");
                            }
                        });

                        [].forEach.call(mandatoryText, function(el) {

                            if (el.required == true && el.value == "") {

                                el.classList.add("error");
                                el.parentNode.classList.add("error");
                            }
                        });

                        [].forEach.call(mandatorySelect, function(el) {

                            if (el.required == true && el.value == "-") {

                                el.classList.add("error");
                                el.parentNode.classList.add("error");
                            }
                        });

                        function checkErrors() {

                            var errorFields = checkingForm.querySelectorAll(".widget.error"),
                                errorFieldFirst = errorFields[0],
                                errorFieldsCount = errorFields.length;

                            if (errorFieldsCount != 0) {

                                var headerHeight = header.offsetHeight;

                                function countErrors() {

                                    errorFieldFirstOffsetTop = errorFieldFirst.offsetTop;

                                    checkingForm.classList.add("errors_found");

                                       alert("Bitte alle 'rot' gekennzeichneten Felder ausfüllen!");

                                    window.scroll({
                                        top: errorFieldFirstOffsetTop + headerHeight,
                                        left: 0,
                                        behavior: 'smooth'
                                    });
                                }

                                countErrors();

                            } else {
                                checkingForm.classList.remove("errors_found");
                                checkingForm.submit();
                            }
                        }

                        checkErrors();

                    }, false); // End of the submit.function
                });
            });
        }


        var textFields = document.querySelectorAll(".mandatory .text:not(.captcha), .mandatory .textarea");

        [].forEach.call(textFields, function(el) {

            el.addEventListener("input", function() {

                el.classList.remove("error");
                el.parentNode.classList.remove("error");

            });
        });

        var selectFields = document.querySelectorAll(".mandatory .select");

        [].forEach.call(selectFields, function(el) {

            el.addEventListener("change", function() {

                if (el.value !== "-") {

                    el.classList.remove("error");
                    el.parentNode.classList.remove("error");
                }
            });
        });

        var checkFields = document.querySelectorAll(".mandatory .radio, .mandatory .checkbox");

        [].forEach.call(checkFields, function(el) {

            el.addEventListener("change", function() {

                if (el.checked) {

                    el.classList.remove("error");
                    el.parentNode.parentNode.parentNode.classList.remove("error");
                }
            });
        });
    }
