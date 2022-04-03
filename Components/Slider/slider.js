const sliderInp = document.querySelector(".inp-slider");
const sliderOut = document.querySelector(".out-slider");
if(sliderOut && sliderInp)
{
sliderOut.textContent = sliderInp.value;
sliderInp.oninput = function () {
    sliderOut.textContent = this.value;
}
}