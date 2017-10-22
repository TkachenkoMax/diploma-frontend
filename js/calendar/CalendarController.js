$(document).ready(function () {
    var date;
    const now = moment();

    const CalendarController = {
      /**
      * Draw calendar
      */
      setCurrentCalendar: () => {
        $("#month-name").html(date.format('MMMM') + "<br><span style='font-size:18px' id='year-name'>" + date.format('YYYY') + "</span>");

        let startDay = date.startOf('month').day() - 1;
        if (startDay == -1)
          startDay = 6;

        for (var i = 0; i < startDay; i++) {
          $(".days").append("<li></li>");
        }

        for (var i = 0; i < date.daysInMonth(); i++) {
          if ((date.format('MMMM YYYY') == now.format('MMMM YYYY')) && ((i + 1) == now.format("D"))) {
            $(".days").append("<li><span class='active'>" +  (i + 1) + "</span></li>");
          } else {
            $(".days").append("<li>" +  (i + 1) + "</li>");
          }
        }
      },

      /**
      * Button initialisation
      */
      initButtons: () => {
        $('#calendar-prev').on("click", function () {
          date = date.subtract(1, "month")
          $(".days").html("");
          CalendarController.setCurrentCalendar();
        });
        $('#calendar-next').on("click", function () {
          date = date.add(1, "month")
          $(".days").html("");
          CalendarController.setCurrentCalendar();
        });
      },

      /**
      * Initialize function.
      *
      * @return void
      */
      init: () => {
        date = moment();
        CalendarController.setCurrentCalendar();
        CalendarController.initButtons();
      }
    };

    CalendarController.init();
});