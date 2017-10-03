$(document).ready(function () {

  initialPageRender();

  $('.datepicker-anchor').on('apply.daterangepicker', function (ev, picker) {
    const chartName = $(ev.target).parent().data('chartname')
    if (chartName === 'bookings-by-agency') {
      renderBookingsByAgency(picker);
    } else if (chartName === 'bookings-over-time') {
      renderBookingsOverTime(picker);
    } else if (chartName === 'bookings-over-time-by-agency') {
      renderBookingsOverTimeByAgency(picker);
    }
  });

});

function initialPageRender() {

  // renderBookingsByAgency();

  renderBookingsOverTime();

  // renderBookingsOverTimeByAgency();
}

function renderBookingsByAgency(pickerArgs) {
  const chartSelector = ".chart[data-chartname='bookings-by-agency']"
  const $chartNode = $(chartSelector)

  const defaultStart = $chartNode.data('default-time-start')
  const defaultEnd = $chartNode.data('default-time-end')

  let opts = {}
  if (pickerArgs) {
    opts.timePeriod = pickerArgs.chosenLabel
    opts.fromDate = pickerArgs.startDate.format('YYYYMMDD')
    opts.toDate = pickerArgs.endDate.format('YYYYMMDD')
  } else {
    opts.fromDate = defaultStart
    opts.toDate = defaultEnd
  }
  new BookingsByAgencyChart().render(chartSelector, opts);
}

function renderBookingsOverTime(pickerArgs) {
  const chartSelector = ".chart[data-chartname='bookings-over-time']";
  const $chartNode = $(chartSelector);

  const defaultStart = $chartNode.data('default-time-start')
  const defaultEnd = $chartNode.data('default-time-end')

  let opts = {}
  if (pickerArgs) {
    opts.timePeriod = pickerArgs.chosenLabel
    opts.fromDate = pickerArgs.startDate.format('YYYYMMDD')
    opts.toDate = pickerArgs.endDate.format('YYYYMMDD')
  } else {
    opts.fromDate = defaultStart
    opts.toDate = defaultEnd
  }
  new BookingsOverTimeChart().render(chartSelector, opts)
}

function renderBookingsOverTimeByAgency(pickerArgs) {
  const chartSelector = ".chart[data-chartname='bookings-over-time-by-agency']";
  const $chartNode = $(chartSelector);

  const defaultStart = $chartNode.data('default-time-start')
  const defaultEnd = $chartNode.data('default-time-end')

  let opts = {}
  if (pickerArgs) {
    opts.timePeriod = pickerArgs.chosenLabel
    opts.fromDate = pickerArgs.startDate.format('YYYYMMDD')
    opts.toDate = pickerArgs.endDate.format('YYYYMMDD')
  } else {
    opts.fromDate = defaultStart
    opts.toDate = defaultEnd
  }
  new BookingsOverTimeByAgencyChart().render(chartSelector, opts)
}