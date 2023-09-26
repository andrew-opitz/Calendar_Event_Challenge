
$(function () {
  // Varibales for getting time
  var timeBlocks = $('.time-block')
  var currentTime = dayjs().format('dddd, MMMM DD, YYYY')
  $('#currentDay').text(currentTime)
  var currentHour = dayjs().hour()
  // function to set the time block hour classes
function pageResetter() {
  timeBlocks.each(function() {
    var timeBlock = $(this)

    var hour = parseInt(timeBlock.attr('id').split('-')[1])
    
    if(hour < currentHour) {
      $(this).addClass('past')
    } else if (hour === currentHour) {
      $(this).removeClass('past')
      $(this).addClass('present')
    } else {
      $(this).removeClass('past')
      $(this).removeClass('present')
      $(this).addClass('future')
    }
  })

  for(var i = 9; i < 18; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
  }
}
//  resetting the page to make sure the current hour is correct
setInterval(900000, pageResetter)
$('.saveBtn').click(function(e) {
  var hourKey = $(this).parent().attr('id')
  var activity = $(this).siblings('.description').val()
  localStorage.setItem(hourKey, activity)
  })
  pageResetter()
});
