// JavaScript
document.getElementById("EKP_info_btn_more_33").addEventListener("click", function() {
  const div = document.getElementById("EKP_overflow_33");
  const img = document.getElementById("EKP_info_more_33_img");
  const button = document.getElementById("EKP_info_btn_more_33");

  if (!div.style.overflow || div.style.overflow === "hidden") {
    div.style.height = "auto";
    div.style.overflow = "visible";
    img.classList.add("rotate");
    button.style.boxShadow = "none";
  } else {
    div.style.height = "234.1px"; // Set the original height of the div here
    div.style.overflow = "hidden";
    img.classList.remove("rotate");
    button.style.boxShadow = "0 -40px 25px 25px white";
  }
});



