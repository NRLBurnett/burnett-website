let menuTimer;
const menuBlock = document.querySelector('#menuBlock');

document.querySelector('#menuHandle').addEventListener('click', () => {
    menuBlock.classList.toggle("expanded");
    menuTimer = setTimeout(() => {menuBlock.classList.remove("expanded");}, 4000);
});

setup();

window.fbAsyncInit = function() {
    FB.init({
        appId      : '176366726428263',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.11'
    });

    FB.getLoginStatus( function( response ) {
        statusChangeCallback( response );
    });
};

(function(d, s, id){
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    const js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=176366726428263&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback( response ) {
    console.log( 'statusChangeCallback' );
    console.log( response )
    if( response.status === 'connected' ){
        testAPI();
    } else {
        document.getElementById('status').innerHTML = '';
    }
}

function setup(){
    replaceEmail();
}

function replaceEmail(){
    const anchors = document.querySelectorAll('a');
    for (const anchor of anchors) {
        if (anchor.classList.contains('email_link')) {
            let eml = '';
            const set = 'abcdefghijklmnopqrstuvwxyz1234567890@._-';
            const ord = [13, 0, 19, 4, 36, 13, 17, 11, 1, 20, 17, 13, 4, 19, 19, 37, 2, 14, 12];

            for (let i = 0; i < ord.length; ++i ){
                eml += set[i];
            }

            anchor.href = 'mailto:' + eml;

            const image = anchor.querySelector('img');

            if (image) {
                image.title = eml;
                image.alt = eml;
            } else {
                anchor.textContent = eml;
            }
        }
    }
}