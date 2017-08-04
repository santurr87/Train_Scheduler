// allow for user input data to be logged and displayed
// create moment.js attributes for each corresponding category
// moment.js for frequency? might be a pre-established variable
// moment.js for time to next arrival
// moment.js for minutes away
// 




// new database for current project - copy/paste from firebase

//Initialize Firebase
 var config = {
    apiKey: "AIzaSyDvcrMsKnrF31ZpZQiZnU5WV753BVHh4D8",
    authDomain: "train-scheduler-46109.firebaseapp.com",
    databaseURL: "https://train-scheduler-46109.firebaseio.com",
    projectId: "train-scheduler-46109",
    storageBucket: "train-scheduler-46109.appspot.com",
    messagingSenderId: "533924610767"
  };
  firebase.initializeApp(config);
</script>

// link to firebase for when we call it
var database = firebase.database();


//when submit button is clicked perform this event..
$("#submit").on("click", function (event){

event.preventDefault();
var trainName = $("#trainName").val().trim();
var destination = $("#destination").val().trim();
var firstTrain =$("#firstTrain").val().trim();
var minutesAway =$("#minutesAway").val().trim();

// push user input and display on page (change info to correspond to current project)
database.ref().push({
name: trainName,
destination: destination,
frequency: frequency,
timeToNextArrival: timeToNextArrival,
minutesAway: minutesAway

});



});
//referencing our database, adding a child and taking a snapshot of said child
database.ref().on("child_added", function(snapshot){
var wrapper = $("<tr>");
//generating snapshot values of our variables
var tdtrainName =$("<td>").html(snapshot.val().trainName);
var tdDestination =$("<td>").html(snapshot.val().destination);
var tdFrequency =$("<td>").html(snapshot.val().timeToNextArrival);

//formatting of date to configur to a more legible format
var begin = moment(snapshot.val().timeToNextArrival).format("YYYY MM DD");
var now = moment().format("YYYY MM DD");
console.log(begin)
var diff = begin.diff(now,"months");


var tdFrequency =$("<td>").html(diff);
var tdMinutesAway =$("<td>").html(snapshot.val().minutesAway);

//appending these variables we created to apply to the wrapper var we created
wrapper.append(tdtrainName, tdDestination, tdFrequency, tdTimeToNextTrain, tdMinutesAway);

$("#addTrain").append(wrapper);

});


database.ref().push({




 })