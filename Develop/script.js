  $(function () {
//gets the time from dayjs
    const currentHour = dayjs().format('H');
    function hourlyColor() {
      $('.time-block').each(function() {
        const blockHour = parseInt(this.id)
      });
    }
    //saves what was written but only after the save button is clicked.
    function textEntry() {
      $('.saveBtn').on('click', function() {
        const key = $(this).parent().attr('id');
        const value = $(this).siblings('.description').val();
        localStorage.setItem(key, value);
      });
    }
    //displays what is written in the boxes/gets infor from local storage
    $('.time-block').each(function() {
      const key = $(this).attr('id');
      const value = localStorage.getItem(key);
      $(this).children('.description').val(value);
    });
    function updateTime() {//gets the current date and time
      const dateElement = $('#date');
      const timeElement = $('#time');
      const currentDate = dayjs().format('dddd, MMMM D, YYYY');
      const currentTime = dayjs().format('hh:mm A');
      dateElement.text(currentDate);
      timeElement.text(currentTime);
    }
    hourlyColor();
    textEntry();                
    setInterval(updateTime, 1000);
  });
