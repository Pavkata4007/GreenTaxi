
import { Datepicker } from 'vanillajs-datepicker';

const elem = document.querySelector('input[name="calendar"]');
const datepicker = new Datepicker(elem, {
    autohide:true,
    showOnFocus: true,
    showOnClick: true,
    format: "D, M d",
    /*defaultViewDate: true,*/
    prevArrow: '<button class="button prev-btn"><img src="assets/images/svg/angle-down.svg" alt="" /></button>',
    nextArrow: '<button class="button next-btn"><img src="assets/images/svg/angle-down.svg" alt="" /></button>',
});
