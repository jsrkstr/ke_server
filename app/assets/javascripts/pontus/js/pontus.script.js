/*================================
	Menu Hover
=================================*/
	$(function() {
			
			$('li.dropdown').mouseenter(function() {
				if($('body').hasClass('menu_hover')) {
					$(this).addClass('open')
				}
			}).mouseleave(function() {
				if($('body').hasClass('menu_hover')) {
					$(this).removeClass('open')
				}
			});
			
			
			
				
	});
	

/*================================
	Scroll Top
=================================*/
$(function () {
    $(".scroll-top").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $('.scroll-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(function () {

    // Checking for CSS 3D transformation support
    $.support.css3d = supportsCSS3D();

    var formContainer = $('#formContainer');

    // Listening for clicks on the ribbon links
    $('.flipLink').click(function (e) {

        // Flipping the forms
        formContainer.toggleClass('flipped');

        // If there is no CSS3 3D support, simply
        // hide the login form (exposing the recover one)
        if (!$.support.css3d) {
            $('#login').toggle();
        }
        e.preventDefault();
    });

    formContainer.find('form').submit(function (e) {
        // Preventing form submissions. If you implement
        // a backend, you will want to remove this code
        e.preventDefault();
    });

    // A helper function that checks for the
    // support of the 3D CSS3 transformations.


    function supportsCSS3D() {
        var props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective'],
            testDom = document.createElement('a');

        for (var i = 0; i < props.length; i++) {
            if (props[i] in testDom.style) {
                return true;
            }
        }

        return false;
    }
});

$(function () {
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })
});


/*CLE EDITOR*/
$(function() {
         $("#input").cleditor({width:"100%", height:"100%"});
      });
      


/*=====MINI CHART====*/
$(function () {
    $(".line-chart").sparkline('html', {
        type: 'line',
        width: '100' + '%',
        height: '50',
        lineColor: '#e57002',
        fillColor: '#efd8c9',
        lineWidth: 2,
        spotColor: '#a02800',
        minSpotColor: '#309308',
        maxSpotColor: '#037aa5',
        spotRadius: 3,
        drawNormalOnTop: false
    });


    $(".pie-chart").sparkline('html', {
        type: 'pie',
        height: '50',
        sliceColors: ['#038ac2', '#dc3912', '#ff9900', '#109618', '#66aa00', '#dd4477', '#0099c6', '#990099 ']
    });

    $(".bar-chart").sparkline('html', {
        type: 'bar',
        height: '50',
        barWidth: 8,
        barSpacing: 2,
        barColor: '#0077bc',
        negBarColor: '#ea5409',
        zeroColor: '#ff0000'
    });

    $(".line-chart-overview").sparkline('html', {
        type: 'line',
        width: '50',
        height: '30',
        lineColor: '#eb8439',
        fillColor: '#fbf5e5',
        lineWidth: 1,
        spotColor: '#2e7197',
        minSpotColor: '#2b8611',
        highlightSpotColor: '#0caf0c',
        spotRadius: 2
    });


    $('.composite-line').sparkline('html', {
        fillColor: false,
        width: '100' + '%',
        height: '50',
        lineWidth: 1,
        spotRadius: 3
    });
    $('.composite-bar').sparkline('html', {
        type: 'bar',
        height: '50',
        barWidth: 8,
        barSpacing: 2,
        barColor: '#aaf'
    });
    $('.composite-bar').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
        composite: true,
        fillColor: false,
        lineColor: 'red'
    });

    $('.pop-over').popover({
        trigger: 'hover',
        content: 'Sed mattis nunc vel sem mattis ac faucibus ante fringilla. Suspendisse commodo aliquet nibh, non viverra libero hendrerit eget.'
    });

    $('.btn-circle a').tooltip();
    $('.top-toolbar a.btn').tooltip({
        placement: 'left'
    });
    $('.login-alternative li a').tooltip({
        placement: 'top'
    });

    $('.tab-tooltip li a').tooltip({
        placement: 'right'
    });


/*====================
	ANIMATED PROGRESS BAR
	======================*/
    jQuery.fn.anim_progressbar = function (aOptions) {
        // def values
        var iCms = 1000;
        var iMms = 60 * iCms;
        var iHms = 3600 * iCms;
        var iDms = 24 * 3600 * iCms;

        // def options
        var aDefOpts = {
            start: new Date(),
            // now
            finish: new Date().setTime(new Date().getTime() + 60 * iCms),
            // now + 60 sec
            interval: 100
        }
        var aOpts = jQuery.extend(aDefOpts, aOptions);
        var vPb = this;

        // each progress bar
        return this.each(

        function () {
            var iDuration = aOpts.finish - aOpts.start;

            // calling original progressbar
            $(vPb).children('.pbar').progressbar();

            // looping process
            var vInterval = setInterval(

            function () {
                var iLeftMs = aOpts.finish - new Date(); // left time in MS
                var iElapsedMs = new Date() - aOpts.start,
                    // elapsed time in MS
                    iDays = parseInt(iLeftMs / iDms),
                    // elapsed days
                    iHours = parseInt((iLeftMs - (iDays * iDms)) / iHms),
                    // elapsed hours
                    iMin = parseInt((iLeftMs - (iDays * iDms) - (iHours * iHms)) / iMms),
                    // elapsed minutes
                    iSec = parseInt((iLeftMs - (iDays * iDms) - (iMin * iMms) - (iHours * iHms)) / iCms),
                    // elapsed seconds
                    iPerc = (iElapsedMs > 0) ? iElapsedMs / iDuration * 100 : 0; // percentages
                // display current positions and progress
                $(vPb).children('.percent').html('<b>' + iPerc.toFixed(1) + '%</b>');
                $(vPb).children('.elapsed').html(iDays + ' days ' + iHours + 'h:' + iMin + 'm:' + iSec + 's</b>');
                $(vPb).children('.pbar').children('.ui-progressbar-value').css('width', iPerc + '%');

                // in case of Finish
                if (iPerc >= 100) {
                    clearInterval(vInterval);
                    $(vPb).children('.percent').html('<b>100%</b>');
                    $(vPb).children('.elapsed').html('Finished');
                }
            }, aOpts.interval);
        });
    }

    // default mode
    $('#progress1,#progress_s').anim_progressbar();

    // from second #5 till 15
    var iNow = new Date().setTime(new Date().getTime() + 5 * 1000); // now plus 5 secs
    var iEnd = new Date().setTime(new Date().getTime() + 15 * 1000); // now plus 15 secs
    $('#progress2,#progress_p,.animated-progress').anim_progressbar({
        start: iNow,
        finish: iEnd,
        interval: 100
    });

    // we will just set interval of updating to 1 sec
    $('#progress3,#progress_n').anim_progressbar({
        interval: 1000
    });


    /*==INPUT MASK==*/
    $("#date").mask("99/99/9999");
    $("#phone").mask("(999) 999-9999");
    $("#mobile").mask("(999) 999-9999");
    $("#tin").mask("99-9999999");
    $("#ssn").mask("999-99-9999");

    /*=====SYTAX HIGHLIGHTER====*/
    window.prettyPrint && prettyPrint();


/*======================
	Tags Input
	========================*/
    $('#tags_1').tagsInput({
        width: '99%',
        'defaultText': 'add a test tag'
    });

    /*==JQUERY UNIFORM==*/
    $(".checkbox-b,.rem_me,.radio-b,.file-uniform").uniform();

    /*==JQUERY SELECTBOX==*/
    $(".chzn-select").chosen();
    $(".chzn-select-deselect").chosen({
        allow_single_deselect: true
    });

    /*==INPUT LIMITER==*/
    $('#limit-text').inputlimiter({
        limit: 100,
        boxId: 'limit-length',
        boxAttach: false,
        remText: '%n Remaining.'
    });
    $('.limiter').inputlimiter({
        limit: 50
    });

    /*==AUTO GROW TEXTBOX==*/
    $(".input_grow").autosize();

/*======================
	RATY
	========================*/
    $('#star').raty({
        half: true,
        start: 3.3
    });
    $('.rate-it').raty({
        half: true,
        start: 4.5
    });
    $('.mail-star').raty({
        number: 1,
        single: true
    });

    $('#raty-star-remove').raty({
        cancel: true,
        cancelHint: 'remove my rating!',
        cancelPlace: 'right',
        click: function (score, evt) {
            alert('score: ' + score);
        }
    });

    $('#raty-medal').raty({
        hints: ['a', '', null, 'd', '5'],
        starOn: 'medal-on.png',
        starOff: 'medal-off.png'
    });

    $('#raty-face').raty({
        iconRange: [{
            range: 2,
            on: 'face-a.png',
            off: 'face-a-off.png'
        }, {
            range: 3,
            on: 'face-b.png',
            off: 'face-b-off.png'
        }, {
            range: 4,
            on: 'face-c.png',
            off: 'face-c-off.png'
        }, {
            range: 5,
            on: 'face-d.png',
            off: 'face-d-off.png'
        }]
    });

    $('#raty-large').raty({
        cancel: true,
        cancelOff: 'cancel-off-big.png',
        cancelOn: 'cancel-on-big.png',
        half: true,
        size: 24,
        starHalf: 'star-half-big.png',
        starOff: 'star-off-big.png',
        starOn: 'star-on-big.png'
    });



/*======================
	DUAL LIST
	========================*/
    $.configureBoxes();

/*======================
	IPHONE STYLE BUTTON
	========================*/
    $('.on_off :checkbox').iphoneStyle();
    $('.disabled :checkbox').iphoneStyle();



/*======================
	SPINNER
	========================*/
    $('#spinner').spinner({
        min: -100,
        max: 100
    });
    $('#spinnerfast').spinner({
        min: -1000,
        max: 1000,
        increment: 'fast'
    });
    $('#spinnerhide').spinner({
        min: 0,
        max: 100,
        showOn: 'both'
    });
    $('#spinnernull').spinner({
        min: -100,
        max: 100,
        allowNull: true
    });
    $('#spinnermaxlen').spinner();
    $('#spinner5').spinner();
    $('#spinnercurrency').spinner({
        prefix: '$',
        group: ',',
        step: 0.01,
        largeStep: 1,
        min: -1000000,
        max: 1000000
    });

    /*FORM VALIDATOR*/
    $("#commentForm").validate();

    // validate signup form on keyup and submit
    $("#signupForm").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            topic: {
                required: "#newsletter:checked",
                minlength: 2
            },
            agree: "required"
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            email: "Please enter a valid email address",
            agree: "Please accept our policy"
        }
    });

    // propose username by combining first- and lastname
    $("#username").focus(function () {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        if (firstname && lastname && !this.value) {
            this.value = firstname + "." + lastname;
        }
    });

    //code to hide topic selection, disable for demo
    var newsletter = $("#newsletter");
    // newsletter topics are optional, hide at first
    var inital = newsletter.is(":checked");
    var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("disable-topic");
    var topicInputs = topics.find("input").attr("disabled", !inital);
    // show when newsletter is checked
    newsletter.click(function () {
        topics[this.checked ? "removeClass" : "addClass"]("disable-topic");
        topicInputs.attr("disabled", !this.checked);
    });




    /*==JQUERY STEPY==*/
    $('#stepy').stepy({
        backLabel: 'Back',
        nextLabel: 'Next',
        errorImage: true,
        block: true,
        description: true,
        legend: false,
        titleClick: true,
        titleTarget: '#stepy_tabby',
        validate: true
    });
    $('#stepy_form').stepy({
        backLabel: 'Back',
        nextLabel: 'Next',
        errorImage: true,
        block: true,
        description: true,
        legend: false,
        titleClick: true,
        titleTarget: '#top_tabby',
        validate: true
    });

    $('#stepy_form').validate({
        errorPlacement: function (error, element) {
            $('#stepy_form div.stepy-error').append(error);
        },
        rules: {
            'name': 'required',
            'email': 'required',
        },
        messages: {
            'name': {
                required: 'Name field is required!'
            },
            'email': {
                required: 'Email field is requerid!'
            },
        }
    });

});


$(function () {

    var container = $('div.error-container ');
    // validate the form when it is submitted
    var validator = $("#form2").validate({
        errorContainer: container,
        errorLabelContainer: $("ol", container),
        wrapper: 'li',
        meta: "validate"
    });

    $(".cancel").click(function () {
        validator.resetForm();
    });
});

/*======================
	DATA TABLE
	========================*/

$(function () {
    $('.data-tbl-boxy').dataTable({
        "sPaginationType": "full_numbers",
        "iDisplayLength": 10,
        "oLanguage": {
            "sLengthMenu": "<span class='lenghtMenu'> _MENU_</span><span class='lengthLabel'>Entries per page:</span>",
        },
        "sDom": '<"tbl-searchbox clearfix"fl<"clear">>,<"table_content"t>,<"widget-bottom"p<"clear">>'

    });
    $("div.tbl-searchbox select").addClass('tbl_length');
/*$(".tbl_length").chosen({
		disable_search_threshold: 4	
	});
		*/

});

$(function () {
    $('.data-tbl-simple').dataTable({
        "sPaginationType": "full_numbers",
        "iDisplayLength": 10,
        "oLanguage": {
            "sLengthMenu": "<span class='lenghtMenu'> _MENU_</span><span class='lengthLabel'>Entries per page:</span>",
        },
        "sDom": '<"top-searchbox clearfix"fl<"clear">>,<"box-widget"<"widget-container"<"table_content"t>>>,<"tbl-bottom"p<"clear">>'

    });
    $("div.top-searchbox select").addClass('tbl_length');
/*$(".tbl_length").chosen({
		disable_search_threshold: 4	
	});
		*/

});


/*Collapsible Widget*/
$(function () {
    $('.collapse-widget').click(function () {

        $(".collapse-content").collapse('toggle');
        $('.collapse-icon').toggleClass('down');
        return false;
    });
});


/*---Tooltip--*/

$(function () {
    $('.tipTop').tooltip({
        placement: 'top'
    });
    $('.tipLeft').tooltip({
        placement: 'left'
    });
    $('.tipRight').tooltip({
        placement: 'right'
    });
    $('.tipBottom').tooltip({
        placement: 'bottom'
    });
});



$(function () {

    /*==Color Picker==*/


    $('.colorpicker').colorpicker();


    /*==Date Picker==*/
    $('#dp1').datepicker();
    $('#dp3').datepicker();
});


/*---Range Date Picker--*/
$(function () {
    $('#reservation').daterangepicker();
    $('#reportrange').daterangepicker({
        ranges: {
            'Today': ['today', 'today'],
            'Yesterday': ['yesterday', 'yesterday'],
            'Last 7 Days': [Date.today().add({
                days: -6
            }), 'today'],
            'Last 30 Days': [Date.today().add({
                days: -29
            }), 'today'],
            'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
            'Last Month': [Date.today().moveToFirstDayOfMonth().add({
                months: -1
            }), Date.today().moveToFirstDayOfMonth().add({
                days: -1
            })]
        },
        opens: 'left',
        format: 'MM/dd/yyyy',
        startDate: Date.today().add({
            days: -29
        }),
        endDate: Date.today(),
        minDate: '01/01/2012',
        maxDate: '12/31/2013',
        locale: {
            applyLabel: 'Submit',
            fromLabel: 'From',
            toLabel: 'To',
            customRangeLabel: 'Custom Range',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            firstDay: 1
        }
    }, function (start, end) {
        $('#reportrange span').html(start.toString('MMMM d, yyyy') + ' - ' + end.toString('MMMM d, yyyy'));
    });

    //Set the initial state of the picker label
    $('#reportrange span').html(Date.today().add({
        days: -29
    }).toString('MMMM d, yyyy') + ' - ' + Date.today().toString('MMMM d, yyyy'));

});



/*== jSlider===*/
$(function () {
    $("#SliderSingle").slider({
        from: 5,
        to: 50,
        step: 2.5,
        round: 1,
        format: {
            format: '##.0',
            locale: 'de'
        },
        dimension: '&nbsp;€',
        skin: "round"
    });
});

$(function () {
    $("#Slider4").slider({
        from: 1,
        to: 30,
        heterogeneity: ['50/5', '75/15'],
        scale: [1, '|', 3, '|', '5', '|', 15, '|', 30],
        limits: false,
        step: 1,
        dimension: '',
        skin: "blue",
        callback: function (value) {
            console.dir(this);
        }
    });

});

$(function () {
    $("#Slider1").slider({
        from: 1000,
        to: 100000,
        step: 500,
        smooth: true,
        round: 0,
        dimension: "&nbsp;$",
        skin: "plastic"
    });

});

$(function () {
    $("#Slider2").slider({
        from: 5000,
        to: 150000,
        heterogeneity: ['50/50000'],
        step: 1000,
        dimension: '&nbsp;$'
    });

});

$(function () {
    $("#Slider3").slider({
        from: 0,
        to: 500,
        heterogeneity: ['50/100', '75/250'],
        scale: [0, '|', 50, '|', '100', '|', 250, '|', 500],
        limits: false,
        step: 1,
        dimension: '&nbsp;m<small>2</small>',
        skin: "round_plastic"
    });

});

$(function () {

    jQuery("#Slider5").slider({
        from: 480,
        to: 1020,
        step: 15,
        dimension: '',
        scale: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        limits: false,
        calculate: function (value) {
            var hours = Math.floor(value / 60);
            var mins = (value - hours * 60);
            return (hours < 10 ? "0" + hours : hours) + ":" + (mins == 0 ? "00" : mins);
        }
    });
});


/**NOTiFICATIONs**/


function create(template, vars, opts) {
    return $container.notify("create", template, vars, opts);
}

$(function () {
    // initialize widget on a container, passing in all the defaults.
    // the defaults will apply to any notification created within this
    // container, but can be overwritten on notification-by-notification
    // basis.
    $container = $("#error-container").notify();

    // create two when the pg loads
    create("default", {
        title: 'Default Notification',
        text: 'Example of a default notification.  I will fade out after 5 seconds'
    });
    create("sticky", {
        title: 'Sticky Notification',
        text: 'Example of a "sticky" notification.  Click on the X above to close me.'
    }, {
        expires: false
    });

    // bindings for the examples
    $("#default").click(function () {
        create("default", {
            title: 'Default Notification',
            text: 'Example of a default notification.  I will fade out after 5 seconds'
        });
    });

    $("#sticky").click(function () {
        create("sticky", {
            title: 'Sticky Notification',
            text: 'Example of a "sticky" notification.  Click on the X above to close me.'
        }, {
            expires: false
        });
    });

    $("#warning").click(function () {
        create("withIcon", {
            title: 'Warning!',
            text: 'OMG the quick brown fox jumped over the lazy dog.'
        }, {
            expires: false
        });
    });



    $("#clickable").click(function () {
        create("default", {
            title: 'Clickable Notification',
            text: 'Click on me to fire a callback. Do it quick though because I will fade out after 5 seconds.'
        }, {
            click: function (e, instance) {
                alert("Click triggered!\n\nTwo options are passed into the click callback: the original event obj and the instance object.");
            }
        });
    });

    $("#buttons").click(function () {
        var n = create("buttons", {
            title: 'Confirm some action',
            text: 'This template has a button. Vivamus dictum cursus imperdiet. Suspendisse potenti. Cras placerat elementum mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            expires: false
        });

        n.widget().delegate("input", "click", function () {
            n.close();
        });
    });




});




/**All UI Function**/
$(function () {

    // Autocomplete
    var countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
    $("#countries").autocomplete({
        source: countryList
    });

    // Accordion
    $(".accordion").accordion({
        header: "h3"
    });

    // Tabs
    $('#tabs').tabs();

    // Dialog			
    $('#dialog').dialog({
        autoOpen: false,
        width: 600,
        buttons: {
            "Ok": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        },
        modal: true
    });

    // Dialog Link
    $('#dialog_link').button().click(function () {
        $('#dialog').dialog('open');
        return false;
    });

    // Datepicker
    $('#datepicker').datepicker().children().show();

    // Horizontal Slider
    $('#horizSlider').slider({
        range: true,
        values: [17, 67]
    }).width(500);

    // Vertical Slider				
    $("#eq > span").each(function () {
        var value = parseInt($(this).text());
        $(this).empty().slider({
            value: value,
            range: "min",
            animate: true,
            orientation: "vertical"
        });
    });

    //hover states on the static widgets
    $('#dialog_link, ul#icons li').hover(

    function () {
        $(this).addClass('ui-state-hover');
    }, function () {
        $(this).removeClass('ui-state-hover');
    });

    // Button
    $("#divButton, #linkButton, #submitButton, #inputButton").button();

    // Icon Buttons
    $("#leftIconButton").button({
        icons: {
            primary: 'ui-icon-wrench'
        }
    });

    $("#bothIconButton").button({
        icons: {
            primary: 'ui-icon-wrench',
            secondary: 'ui-icon-triangle-1-s'
        }
    });

    // Button Set
    $("#radio1").buttonset();


    // Progressbar
    $("#progressbar").progressbar({
        value: 37
    }).width(500);
    $("#animateProgress").click(function (event) {
        var randNum = Math.random() * 90;
        $("#progressbar div").animate({
            width: randNum + "%"
        });
        event.preventDefault();
    });

    // Combinations
    $('#tabs2').tabs();
    $("#accordion2").accordion({
        header: "h4"
    });
    $("#buttonInModal").button({
        icons: {
            primary: 'ui-icon-wrench'
        }
    });

    // Nested button tests
    $("#nestedButtonTest_1, #nestedButtonTest_2, #buttonInModal").button().click(function (e) {
        e.preventDefault();
    });

});