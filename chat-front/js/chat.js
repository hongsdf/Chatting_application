// 서버쪽이랑 연결하기 => 로그인으로 대체 필요
let username = prompt("아이디 입력 하시오.");
let roomNumber = prompt('방 번호를 입력하시오.');

// 아이디 초기화
document.querySelector("#username").innerHTML = username; 


// 프로필 이미지 





// SSE 프로토콜 연결하기
const eventSource = new EventSource(`http://localhost:8080/chat/roomNumber/ ${roomNumber}`); // 객체 생성


/// ---------------------------------------
eventSource.onmessage = (event) =>{
    // console.log(1,event);
    const data = JSON.parse(event.data); // event data를 JSON으로 파싱
    // console.log(2,data);
    if(data.sender == username){ // 유저가 보낸 메세지
        if(username == 'hong'){
            const img = document.getElementById("profile_name");
            img.setAttribute('src','profile.png');
        }else{
           
        }
        // 노란박스
        InitMessage(data);
    }else{
        // 회색 박스
        InitReceiveMessage(data);

    }
  

}



 // 노란박스
function SendMessage(data){

    let start = data.createdTime.substring(5,10);
    let end = data.createdTime.substring(11,16);
    convertTime = start +"-" + end;

    return `<div class="sent_msg">
    <p>${data.msg}</p>
    <span class="time_date">${convertTime}/ <b>${data.sender}</b></span>
    </div>`;
}


// 회색 박스
function receiveMessage(data){
    let start = data.createdTime.substring(5,10);
    let end = data.createdTime.substring(11,16);
    convertTime = start +"-" + end;

    return `<div class="received_withd_msg">
    <p>${data.msg}</p>
    <span class="time_date">${convertTime}/ <b>${data.sender}</b></span>
    </div>`;
}



// 노란 박스
function InitMessage(data){
    // alert('click enter');
    let chatBox = document.querySelector('#chat-box'); // id = chat-box 밑에
    let chattingSendBox = document.createElement("div"); // div 태그 생성
    chattingSendBox.className = "outgoing_msg"; // <div class = "outgoing_msg"></div>
    chattingSendBox.innerHTML = SendMessage(data);
    chatBox.append(chattingSendBox) ;

    // 스크롤 내리기
    document.documentElement.scrollTop = document.body.scrollHeight;

   
}

// 회색박스
function InitReceiveMessage(data){
    // alert('click enter');
    let chatBox = document.querySelector('#chat-box');
    let chattingReceiveBox = document.createElement("div");
    chattingReceiveBox.className = "received_msg";
    chattingReceiveBox.innerHTML = receiveMessage(data);
    chatBox.append(chattingReceiveBox) ;

      // 스크롤 내리기
      document.documentElement.scrollTop = document.body.scrollHeight;
}



// DB에 데이터 입력 := 채팅 메세지 전송
async function addMessage(){
     // alert('click enter');
     let msgInput = document.querySelector('#chat-outgoing-msg');
     

    //  // 시간
    //  let date = new Date(); 
    //  let now = date.getMonth()+1+"월"+ date.getDate()+ "일  "+date.getHours()+":"+date.getMinutes();

     let chat ={
        sender :username,
        roomNumber: roomNumber,
        msg : msgInput.value
     };

    fetch("http://localhost:8080/chat",{ // fetch := 비동기 통신 
        method: "post", // post 방식 데이터 저장건
        body: JSON.stringify(chat), // js -> object로 변경하는 := js문법
        headers: {
            "Content-Type":"application/json;charset=utf-8"
        }        
     }) ;

    //  console.log(response);
    //  // response 파싱하기
    //  let parseResponse = await response.json();


    //  chattingBox.innerHTML = getSendMessage(msgInput.value,now);
    //  chatBox.append(chattingBox) ;
 
     // 글 지우기 공백으로
     msgInput.value = "";
}


// 버튼 클릭시 메세지 전송
document.querySelector("#chat-send-button").addEventListener("click",()=>{
    addMessage();
});

// Enter 입력시 메세지 전송
document.querySelector("#chat-outgoing-msg").addEventListener("keydown",(e)=>{
    console.log(e.keyCode);
    // e.keyCode의 13일때 == Enter key
    if(e.keyCode == 13){
        addMessage();
    }
});