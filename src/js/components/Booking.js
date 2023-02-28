import { templates, select} from './../settings.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

class Booking {
  constructor(elem) {
    const thisBooking = this;

    thisBooking.elem = elem;
    thisBooking.render(elem);
    thisBooking.initWidgets();
  }

  render(elem) {
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();
    thisBooking.dom = {};
    thisBooking.dom.wrapper = elem;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
    thisBooking.dom.dateWrapper = thisBooking.dom.wrapper.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.hourWrapper = thisBooking.dom.wrapper.querySelector(select.widgets.hourPicker.wrapper);
  }

  initWidgets() {
    const thisBooking = this;

    thisBooking.peopleAmountWidget = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.dom.peopleAmount.addEventListener('updated', function () { });
    thisBooking.hoursAmountWidget = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.dom.hoursAmount.addEventListener('updated', function () { });
    thisBooking.datePicker = new DatePicker(thisBooking.dom.dateWrapper);
    thisBooking.dom.dateWrapper.addEventListener('updated', function () { });
    thisBooking.hourPicker = new HourPicker(thisBooking.dom.hourWrapper);
    thisBooking.dom.hourWrapper.addEventListener('updated', function () { });
  }
}

export default Booking;
