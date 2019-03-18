const liveBody = `
                <section class='live'>
                    <h2 class='title'> Live Feed </h2>
                    <img class='live-feed' id="image">
                </section>
                <button class='back-button'> Back </button>`;

const detectedBody = `
                    <section class='detected'>
                        <h2 class='title'> Detection Feed </h2>
                        <img class='last-detected' id="image2">
                    </section>
                    <button class='back-button'> Back </button>`

const mainBody = `
                <button class='live-button'> View Live Feed </button>
                <button class='detect-button'> View Last Possible Visitor </button>`;

const helpBody = ` <h3>Getting started!</h3>
                    <section>
                        <p>Welcome to Watchdog. 
                            Ever wanted to work with node to protect your family?
                            Watchdog is made to detect and store security potential threats as images.
                            Time stamp trouble and keep an eye out with Watchdog! 
                            To start viewing a live stream with active detection press View Live Feed.
                            To start viewing a stream that will feed you the lastest person detected press Last Possible Visitor.
                        
                    </p>
                    </section>
                    <button class='live-button'> View Live Feed </button>
                    <button class='detect-button'> View Last Possible Visitor </button> `

function setup() {
    $(document).ready(function () {
        console.log('getting setup');
        $('.live-button').on('click', event => {
            $('.insert').html(`${liveBody}`);
            backbutton();
            event.preventDefault();
        });

        $('.detect-button').on('click', event => {
            $('.insert').html(`${detectedBody}`);
            backbutton();
            event.preventDefault();
        });

        $('.how-to').on('click', event => {
            $('.insert').html(`${helpBody}`);
            newuser();
            backbutton();
            event.preventDefault();
        });

        $('.main-button').on('click', event => {
            $('.insert').html(`${mainBody}`);
            experienced();
            backbutton();
            event.preventDefault();
        });

        $('.landing-button').on('click', event => {
            window.scrollTo(0, window.screen.height);
            event.preventDefault();
        });


    });
}

function backbutton() {
    $('.back-button').on('click', event => {
        $('.insert').html(`${mainBody}`);
        setup()
        event.preventDefault();
    });
}

function newuser() {
    $('.live-button').on('click', event => {
        $('.insert').html(`${liveBody}`);
        backbutton();
        event.preventDefault();
    });

    $('.detect-button').on('click', event => {
        $('.insert').html(`${detectedBody}`);
        backbutton();
        event.preventDefault();
    });
}

function experienced() {
    $('.live-button').on('click', event => {
        $('.insert').html(`${liveBody}`);
        backbutton();
        event.preventDefault();
    });

    $('.detect-button').on('click', event => {
        $('.insert').html(`${detectedBody}`);
        event.preventDefault();
    });
}
