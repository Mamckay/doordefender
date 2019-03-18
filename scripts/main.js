const landingBody = `
                    <img class='watchdog-img' src='./assets/watchdog.png' alt='watch dog'>
                    <button class='how-to'>New to Watchdog</button>    
                    <button class='main-button'>Experienced User</button>     
                    `

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
                <img class='watchdog-img' src='./assets/watchdog.png' alt='watch dog'>
                <button class='live-button'> View Live Feed </button>
                <button class='detect-button'> View Last Possible Visitor </button>
                <button class='menu-button'> Main Menu </button>`;

const helpBody = ` <h2>Welcome to Watchdog</h2>
                    <section>
                        <p> 
                            Ever wanted to work with node to protect your family?
                            Watchdog is made to detect and store security potential threats as images.
                            Time stamp trouble and keep an eye out with Watchdog! 
                        </p>
                        <ul>
                            <li>1. Watch the video on setting up Watchdog on your machine</li>
                            <li>2. Audio is not available yet but is planned for a future update.</li>
                            <li>3. Networked cameras using ffmpeg as a feature is being worked on now. Look out for an update soon!</li>
                        </ul>
                    </section>
                    <button class='main-button'> Get Started! </button>`

function setup() {
    $(document).ready(function () {

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
            window.scrollTo(0, window.screen.height + 100);
            event.preventDefault();
        });


    });
}

function backbutton() {
    $('.back-button').on('click', event => {
        $('.insert').html(`${mainBody}`);
        experienced()
        event.preventDefault();
    });
}

function newuser() {
    $('.main-button').on('click', event => {
        $('.insert').html(`${mainBody}`);
        experienced();
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
        backbutton();
        event.preventDefault();
    });

    $('.menu-button').on('click', event => {
        $('.insert').html(`${landingBody}`);
        setup();
        event.preventDefault();
    });
}
