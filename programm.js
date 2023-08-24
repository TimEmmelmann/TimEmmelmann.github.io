setupImageClicks();

async function setupImageClicks() {
  const buttons = [
    document.getElementById("EKP_info_1_btn"),
    document.getElementById("EKP_info_2_btn"),
    document.getElementById("EKP_info_3_btn"),
    document.getElementById("EKP_info_4_btn"),
    document.getElementById("EKP_info_5_btn"),
    document.getElementById("EKP_info_6_btn"),
    document.getElementById("EKP_info_7_btn"),
    document.getElementById("EKP_info_8_btn"),
    document.getElementById("EKP_info_9_btn"),
    document.getElementById("EKP_info_10_btn"),
    document.getElementById("EKP_info_11_btn"),
    document.getElementById("EKP_info_12_btn"),
    document.getElementById("EKP_info_13_btn"),
    document.getElementById("EKP_info_14_btn"),
    document.getElementById("EKP_info_15_btn"),
    document.getElementById("EKP_info_16_btn"),
    document.getElementById("EKP_info_17_btn"),
    document.getElementById("EKP_info_18_btn"),
    document.getElementById("EKP_info_19_btn"),
    document.getElementById("EKP_info_20_btn"),
    document.getElementById("EKP_info_21_btn"),
    document.getElementById("EKP_info_22_btn"),
    document.getElementById("EKP_info_23_btn"),
    document.getElementById("EKP_info_24_btn"),
    document.getElementById("EKP_info_25_btn"),
    document.getElementById("EKP_info_26_btn"),
    document.getElementById("EKP_info_27_btn"),
    document.getElementById("EKP_info_28_btn"),
    document.getElementById("EKP_info_29_btn"),
    document.getElementById("EKP_info_30_btn"),
    document.getElementById("EKP_info_31_btn"),
    document.getElementById("EKP_info_32_btn"),
    document.getElementById("EKP_info_33_btn"),
    document.getElementById("EKP_info_34_btn"),
    document.getElementById("EKP_info_35_btn"),
    document.getElementById("EKP_info_36_btn"),
    document.getElementById("EKP_info_37v1_btn"),
    document.getElementById("EKP_info_37v2_btn"),
  ];
  const images = [
    document.querySelector(".EKP_info_img_37v2"),
    document.querySelector(".EKP_info_img_37v1"),
    document.querySelector(".EKP_info_img_36"),
    document.querySelector(".EKP_info_img_35"),
    document.querySelector(".EKP_info_img_34"),
    document.querySelector(".EKP_info_img_33"),
    document.querySelector(".EKP_info_img_32"),
    document.querySelector(".EKP_info_img_31"),
    document.querySelector(".EKP_info_img_30"),
    document.querySelector(".EKP_info_img_29"),
    document.querySelector(".EKP_info_img_28"),
    document.querySelector(".EKP_info_img_27"),
    document.querySelector(".EKP_info_img_26"),
    document.querySelector(".EKP_info_img_25"),
    document.querySelector(".EKP_info_img_24"),
    document.querySelector(".EKP_info_img_23"),
    document.querySelector(".EKP_info_img_22"),
    document.querySelector(".EKP_info_img_21"),
    document.querySelector(".EKP_info_img_20"),
    document.querySelector(".EKP_info_img_19"),
    document.querySelector(".EKP_info_img_18"),
    document.querySelector(".EKP_info_img_17"),
    document.querySelector(".EKP_info_img_16"),
    document.querySelector(".EKP_info_img_15"),
    document.querySelector(".EKP_info_img_14"),
    document.querySelector(".EKP_info_img_13"),
    document.querySelector(".EKP_info_img_12"),
    document.querySelector(".EKP_info_img_11"),
    document.querySelector(".EKP_info_img_10"),
    document.querySelector(".EKP_info_img_9"),
    document.querySelector(".EKP_info_img_8"),
    document.querySelector(".EKP_info_img_7"),
    document.querySelector(".EKP_info_img_6"),
    document.querySelector(".EKP_info_img_5"),
    document.querySelector(".EKP_info_img_4"),
    document.querySelector(".EKP_info_img_3"),
    document.querySelector(".EKP_info_img_2"),
    document.querySelector(".EKP_info_img_1"),
  ];
  
  let isAnimating = false;

  async function animateImage(image) {
    image.style.transform = "scale(1.5)";
    image.style.zIndex = "21";
    image.style.boxShadow = "0 0 10px 10px lightgray";
    image.style.backgroundColor = "lightgray";
    isAnimating = true;

    await new Promise((resolve) => setTimeout(resolve, 1500));

    resetImage(image);
    isAnimating = false;
  }

  function resetImage(image) {
    image.style.transform = "";
    image.style.zIndex = "";
    image.style.boxShadow = "";
    image.style.backgroundColor = "";
  }

  async function handleClick(index) {
    if (isAnimating) {
      return;
    }

    const image = images[index];

    images.forEach(resetImage);

    await animateImage(image);
  }

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", () => handleClick(buttons.length - 1 - i));
  }
}

