package chat.woo.app;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.mongodb.repository.Tailable;
import reactor.core.publisher.Flux;

public interface ChatRepository extends ReactiveMongoRepository<Chat,String> { // Chat : 클래스, String : key 데이터 타입

    @Tailable // 커서를 안닫고 계속유지한다. => 요청1에 대해 응답결과 중 요청2가 데이터를 수정하면 요청1에 데이터도 수정된 데이터를 받는다. => 프로토콜 SSE을 사용
    @Query("{sender:?0,receiver:?1}")
    Flux<Chat> SenderInformation(String sender, String receiver); // FLUX : 흐름
    // Flux : 데이터를 계속 데이터를 받겠다.
    // response를 유지하면서 데이터를 계속 흘려보내기
    // 흐름을 중단할때까지 계속 유지



    @Tailable // 커서를 안닫고 계속유지한다. => 요청1에 대해 응답결과 중 요청2가 데이터를 수정하면 요청1에 데이터도 수정된 데이터를 받는다. => 프로토콜 SSE을 사용
    @Query("{roomNumber:?0}")
    Flux<Chat> RoomFind(Integer roomNumber); // FLUX : 흐름

}
