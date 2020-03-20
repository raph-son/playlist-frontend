window.addEventListener("DOMContentLoaded", function(event) {
    const create_button = document.querySelector("#circle_float");
    var modal_flex = document.querySelector("#modal_flex");

    create_button.addEventListener("click", function() {
        toggle_visibility(modal_flex);
    })
    
    document.querySelector("#modal_buttons button:nth-child(1)").addEventListener("click", function() {
        document.querySelector("#modal_input_text > input").value = "";
        modal_flex.style.visibility = "hidden";
    })

    document.querySelector("#header_navs_mobile ").addEventListener("click", function() {
        let drop_down = document.querySelector("#header_navs_mobile > ul");
        toggle_visibility(drop_down)
    })
});

function toggle_visibility(object) {
    if (object.style.visibility === "visible") {
        object.style.visibility = "hidden";
    }
    else {
        object.style.visibility = "visible";
    }
}
