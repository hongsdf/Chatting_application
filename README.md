# Chatting_application information

Chatting_application 기술 정리 블로그 : https://velog.io/@tyuz32450/%EC%B1%84%ED%8C%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A0%95%EB%A6%AC

개발환경세팅 및 선택 이유
IDE : intellj -> spring project를 구성하기에 익숙하고 편리한 IDE

개발환경:Spring boot 5.0 -> 채팅서버를 비동기로 구성하기 위해 5.0을 선택

DB : MongoDB (채팅 이력을 저장) -> 비동기서버에 맞는 비동기 DB를 선택

프로토콜 : SSE

![](https://velog.velcdn.com/images/tyuz32450/post/439b9375-db40-4ecd-b455-f3b0291ce4b6/image.png)
![](https://velog.velcdn.com/images/tyuz32450/post/4e39b9b0-8927-49db-8660-70cde6939471/image.png)
[hong 시점]
![](https://velog.velcdn.com/images/tyuz32450/post/de51a18e-df91-47fd-9f90-5ebe092824c5/image.png)
[면접관 시점]
![](https://velog.velcdn.com/images/tyuz32450/post/4843edf6-a920-4051-b0dd-1228739b63b9/image.png)
[면접관 2시점]
![](https://velog.velcdn.com/images/tyuz32450/post/8ece8acf-c9f6-4f15-a58f-39fc952c8a47/image.png)


<프로젝트 요약>

아이디와 방번호를 입력하여 해당 room으로 접속한다.

총 3명이 등장 : hong, 면접관, 면접관2

자신의 채팅화면에는 노란색으로 설정

다른 사람의 채팅목록은 회색으로 설정 + 글자 크기 확대

