var firebaseConfig = {
    apiKey: "AIzaSyCpq05YnFNFNJW6kJ-8Cd4I0rb3qSaXiiM",
    authDomain: "practice-exam-1-4dbf3.firebaseapp.com",
    projectId: "practice-exam-1-4dbf3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

document.getElementById('submitBtn').addEventListener('click', function(e){
    console.log('12311')
    if($('#name_input').val()=='') alert("Name input not found")
    else if($('#Email').val()=='') alert("Email input not found")
    else if($('#Detail').val()=='') alert("Name input not found") 
    else {db.collection("Contact")
        .add({
            Name: $('#name_input').val(),
            Email: $('#Email').val(),
            Gender: $('input[type=radio]:checked').val(),
            Detail: $('#Detail').val(),
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
    })
        .catch(function(error) {
            console.error("Error adding document: ", error);
    })
   
}})

db.collection('Contact').orderBy("Name").onSnapshot(doc =>{
    let table = $('tbody')[0]
    document.querySelectorAll("tbody tr").forEach(item => item.remove())
    doc.forEach(item =>{
        var Nemail =[]
        var Oemail  = []
        Oemail = item.data().Email
        for(let i =0;i<Oemail.lenght;i++){
            if(Oemail[i]=="@"){Oemail[i]="@"}
            else if(Oemail[i]=="."){Oemail[i]="."}
            else {Oemail[i]='x'}
            console.log(Oemail[i])
        }
        let row = table.insertRow(-1)
        let firstCell = row.insertCell(0)
        let secondCell = row.insertCell(1)
        let tCell = row.insertCell(2)
        firstCell.textContent = item.data().Name
        secondCell.textContent = item.data().Gender
        tCell.textContent = Oemail
    })
})

