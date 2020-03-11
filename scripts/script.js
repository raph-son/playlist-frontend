window.addEventListener("DOMContentLoaded", function(event) {
    const create_button = document.querySelector("#circle_float");
    var modal_flex = document.querySelector("#modal_flex");

    create_button.addEventListener("click", function() {
        if (modal_flex.style.visibility === "visible") {
            modal_flex.style.visibility = "hidden";
        }
        else {
            modal_flex.style.visibility = "visible";
        }
    })
    
    document.querySelector("#modal_buttons button:nth-child(1)").addEventListener("click", function() {
        document.querySelector("#modal_input_text > input").value = "";
        modal_flex.style.visibility = "hidden";
    })
});
