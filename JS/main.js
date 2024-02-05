// ****************callBack  Pattern**********************

const paymentSuccess = true;
const marks = 80;
const totalMarks = 1100;



function enroll(callBack){
   console.log('course enrollment is in progress.');

   setTimeout(function(){
        if(paymentSuccess){
            callBack();
        } else {
            console.log('Payment failed!')
        }
   }, 2000);
}

function progress(callBack){
    console.log('Course on progress...');

    setTimeout(function(){
        if(marks >= 80){
            callBack();
        } else {
            console.log("You could not get enough marks to get the certificate");
        }
    }, 3000);
}

function totalNumber(callBack){
    console.log('Must be greater than 1200 number');

    setTimeout(function(){
       if(totalMarks >= 1200 ) {
        callBack();
       } else {
        console.log('You are not eligible for these marks?');
       }
    }, 1000);
}

function getCertificate(){

    setTimeout(function(){
       if(totalMarks === totalNumber) {
        console.log('Congrats! You got the certificate');
       } else {
        console.log('Preparing not yet get your certificate');
       }
    }, 1000);
}



enroll(function(){
    progress(function(){
        totalNumber(getCertificate); // Added a closing parenthesis here
    });
});
