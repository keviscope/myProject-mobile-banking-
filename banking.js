
let outerApp = document.querySelector('#outerApp');
let innerApp = document.querySelector('#innerApp');


// log in page


let btnOuter = document.querySelector(".btnOuter");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let logging =  document.querySelector(".logging");
btnOuter.addEventListener('click', ()=>{

    
if(username.value == "" || password.value == ""){
    alert("Please Fill All Field");
    return false;
}else{
    setTimeout(() =>{
        logging.innerHTML = "Logging-in...";
    }, 2000 );
    setTimeout(() =>{
        window.location.replace('newBank.html');
    }, 5000 );




}
});





//allow only number
function isNumberKey(evt,id){
    let numericConfirm = (evt.which) ? (evt.which) : evt.keycode;
    if(numericConfirm == 46){
        txt = document.getElementById(id).value;
        if(!(txt.indexof('.')> -1)){
            return true;
        }
    }

    if((numericConfirm > 31) && (numericConfirm < 48 || numericConfirm > 57 )){
        return false;
        return true;
    }
}















// uploading the photo function
 function loadFile(event) 
{
	var image = document.getElementById('output');
    let url = URL.createObjectURL(event.target.files[0]);
	image.src = url;
};






function showHideDiv1(){

    
    


    //Phone Recharge transaction
    let recharge = document.querySelector(".recharge");
    let rechargeactivate = document.querySelector(".rechargeCSS");
    let OpenRechargeHistory11 = document.querySelector(".OpenRechargeHistory");
let selectBanking = document.querySelector("#selectBanking");
    if(selectBanking.value == "Recharge"){
        if(recharge.style.display == "none" || rechargeactivate.style.display == "none"){
            recharge.style.display = "block";
            rechargeactivate.style.display = "block";
        }else{
            recharge.style.display = "none";
            rechargeactivate.style.display = "none";
            OpenRechargeHistory11.style.display = "none";
        }
    }



    
//Transfer Transaction
let transfer = document.querySelector(".transfer");
let transfercssactivate = document.querySelector(".transfercss");
let OpenTrasferHistory11 = document.querySelector(".OpenTrasferHistory");
    if(selectBanking.value == "Transfer"){
        if(transfer.style.display == "none" || transfercssactivate.style.display == "none"){
            transfer.style.display = "block";
            transfercssactivate.style.display = "block";
        }else{
            transfer.style.display = "none";
            transfercssactivate.style.display = "none";
            OpenTrasferHistory11.style.display = "none";
        }
    }



//check balance
let balanceChecking = document.querySelector("#balanceChecking");
if(selectBanking.value == "Balance"){
if(balanceChecking.style.display == "none"){
    balanceChecking.style.display = "block";
}else{
    balanceChecking.style.display = "none";
}
  }


  let submitReset = document.querySelector(".submitReset");
  if(selectBanking.value == "select"){
        submitReset.style.display = "none";
    }else{
        submitReset.style.display = "block";
    }
      
}




function rechargeHistoryActivated(){
let OpenRechargeHistory = document.querySelector(".OpenRechargeHistory");
let rechargeCSS = document.querySelector(".rechargeCSS");
if(OpenRechargeHistory.style.display == "none"){
    OpenRechargeHistory.style.display = "block";
    rechargeCSS.innerHTML = "Close History";
}
else{
    OpenRechargeHistory.style.display = "none";
    rechargeCSS.innerHTML = "Check Recharge History";
}
}



function trasferHistoryActivated(){
    let OpenTrasferHistory = document.querySelector(".OpenTrasferHistory");
    let transfercss = document.querySelector(".transfercss");
    if(OpenTrasferHistory.style.display == "none"){
        OpenTrasferHistory.style.display = "block";
        transfercss.innerHTML = "Close History";

    }
    else{
        OpenTrasferHistory.style.display = "none";
        transfercss.innerHTML = "Check Recharge History";

    }
}


// Working of transcation function
function updateTransaction()
{

  
    // selecting the option
    var selectWD = document.getElementById("selectBanking");
    var showWD = selectWD.selectedIndex;
    var showopt = selectWD.options[showWD].text;
    
    //Entering the amount, description and displaying the total balance
   // var enterAmt = Number(document.getElementById("EnterAmount").value)
   // var enterDesc = document.getElementById("EnterDescription").value
   // var totalBal = Number(document.getElementById("updateBalance").value)

    //if user donot select any option
    if(showopt=="--select--")
    {
        alert("You have not selected valid option please select \n 1. withdraw \n 2. deposit")
    }

    //if user select deposit option. first check total balance is less then 50k & user can't deposit more 50k at once 
   
  //  if(totalBal<=50000&&enterAmt<=50000)
  //  {
      let selectBanks = document.querySelector("#selectBanks");
      let banksList = selectBanks.selectedIndex;
      let banksOptions = selectBanks.options[banksList].text;
        if(showopt=="Transfer")
        var enterAmt = Number(document.getElementById("EnterAmount").value)
        var enterDesc = document.getElementById("EnterAccountNumber").value
        {   
            if(enterAmt == "" || enterDesc == ""){
                alert("Please Fill All Field");
                return false;
            }else{
            //totalBal += enterAmt
           // document.getElementById("updateBalance").value = totalBal
      

        
            document.getElementById("showAmount1").innerHTML += enterAmt +"<br>"
            document.getElementById("showAccountNumber").innerHTML += enterDesc +"<br>"
            document.getElementById("showBank").innerHTML += banksOptions +"<br>"

            setTimeout(() => {
                alert("Transaction Successfull");
            }, 2000);
        }
        }
   // }
   // else if(totalBal<=50000)
    //{
       // alert("You are not suppose to deposit more then "+totalBal)
   // }

    //if user select withdraw option. first chk total balance if it is lessthen 0 then don't allow to withdraw or else allow
    //if(!(totalBal==0))
   // {







let selectNetworkProvider = document.querySelector("#selectNetworkProvider");
let showNP = selectNetworkProvider.selectedIndex;
let showOption = selectNetworkProvider.options[showNP].text;


    


 if(showopt=="Recharge") 
        {
            //totalBal -= enterAmt
            //document.getElementById("updateBalance").value = totalBal
            var enterAmt2 = Number(document.getElementById("EnterAmount2").value);
            let EnterPhoneNo = document.getElementById('EnterPhoneNo').value;
            
            if(enterAmt2 == "" || EnterPhoneNo == ""){
                alert("Please Fill All Field");
                return false;
            }
            else{ 

            document.getElementById("showAmount").innerHTML += enterAmt2 +"<br>"
            document.getElementById("showDescription").innerHTML += EnterPhoneNo +"<br>"
            document.getElementById("showNetworkProvider").innerHTML += showOption +"<br>"
            setTimeout(() => {
                alert("Transaction Successfull");
            }, 2000);
          
        }
        }
        
   // }
   // else if(totalBal<=0||totalBal<0)
    //{
        //alert("Your account balance is "+totalBal+ " you cannot withdraw amount") 
    //}

// canvas pie chart javascript
/*
    var chart = new CanvasJS.Chart("chartContainer", {
        // theme: "dark1", // "light1", "light2", "dark1", "dark2" // gives the background-color to the pie chart 
        // exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Transaction History"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            // toolTipContent: "<b>{label}</b>: {y}%", // works same as html tooltip
            showInLegend: "true",
            legendText: "{label}",
            // indexLabelFontSize: 16,
            // indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: totalBal, label: "Deposit" },
                { y: enterAmt, label: "Withdraw" },
                // you can even check out the below commented options
                // { y: 51.08, label: "Chrome" },
                // { y: 27.34, label: "Internet Explorer" },
                // { y: 10.62, label: "Firefox" },
                // { y: 5.02, label: "Microsoft Edge" },
                // { y: 0.44, label: "Others" }
            ]
        }]
    });
    chart.render();
    */
    }   
    // you will encounter some problem in withdraw and deposit history that is bcoz of pdf function that I am making it to print in pdf and on the webpage 
    // PDF function
      function printDiv() {
        let mywindow = window.open('','','height=650,width=900,top=100,left=150'); 
        
        var enterAmt = Number(document.getElementById("EnterAmount").value)
        var enterDesc1 = document.getElementById("EnterAccountNumber").value
        var selectbankololo = document.getElementById("selectBanks").value



        var enterAmt2 = Number(document.getElementById("EnterAmount2").value)
        var enterDesc2 = document.getElementById("EnterPhoneNo").value
        var selectNetwork = document.getElementById("selectNetworkProvider").value

       // var totalBal = Number(document.getElementById("updateBalance").value)
        var date = new Date()
        var completeDate = '<br>'+date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()+date.getHours() +':'+date.getMinutes()
       // totalBal-=enterAmt
        // PDF body code
        mywindow.document.write(`
        <center>
        <b>Money Trasfer History</b>
        </center><br>
        <p>${completeDate}</p>
        <hr>
        <span style="position: absolute;word-spacing:100px">Balance Acount-Number Amount Bank</span><br>
        <table>
        
        <th>
        ${document.getElementById("updateBalance").value}
        
        </th>
        <th>
        &nbsp;&nbsp;
        ${document.getElementById("showAccountNumber").innerHTML += enterDesc1}
        </th>
        <th style="position: absolute;margin: 0px 0px 0px 150px">
        ${document.getElementById("showAmount1").innerHTML += enterAmt}
        </th>
        <th style="position: absolute;margin: 0px 0px 0px 300px">
        ${document.getElementById("showBank").innerHTML += selectbankololo}
        </th>
        </table>
        
        
        
        
        
        <hr>
        <hr>
        
        <center>
        <b>Airtime Recharge History</b>
        </center><br>
        <p>${completeDate}</p>
     
        <span style="position: absolute;word-spacing:100px">Balance Phone-Number Amount Service-Provider</span><br>
        <table>
        
        <th>
        ${document.getElementById("updateBalance").value}
        
        </th>
        <th>
        &nbsp;&nbsp;
        ${document.getElementById("showDescription").innerHTML += enterDesc2}
        </th>
        <th style="position: absolute;margin: 0px 0px 0px 150px">
        ${document.getElementById("showAmount").innerHTML += enterAmt2}
        </th>
        <th style="position: absolute;margin: 0px 0px 0px 300px">
        ${document.getElementById("showNetworkProvider").innerHTML += selectNetwork}
        </th>
        </table>`
        
        
        
        
        
        
        );

       mywindow.print();
        mywindow.close();
      
        return true;
      }





      function logOut(){
          
  let txt;
  let r = confirm('Are you sure you want to log out!');
  if(r == true){
      txt = 'You pressed ok';
      window.location.replace('bankForm.html');
  }else{
      txt = 'You presses cancel';
      return false;
  }
  
      }