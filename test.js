function tes(){
    var firebaseRef = firebase.database().ref()
    firebaseRef.child('1234').set('dion')
}
function hide(){
    document.getElementById("title").style.display = "none";
}