package chat.woo.app;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

import java.time.LocalDateTime;

@RequiredArgsConstructor // 의존성 주입
@RestController // json형태로 리턴
public class ChatController {


    private final ChatRepository chatRepository;

    // SSE 프로토콜 요청 := 데이터가 생길때마다 지속적으로 보내줌, Flux := 여러건 데이터 리턴
    @GetMapping(value="/sender/{sender}/receiver/{receiver}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Chat> getMsg(@PathVariable String sender, @PathVariable String receiver){
        return chatRepository.SenderInformation(sender,receiver).
                subscribeOn(Schedulers.boundedElastic());

    }
    // 메세지 입력
    @PostMapping("/chat")
    public Mono<Chat> setMsg(@RequestBody Chat chat){ // Mono : 데이터 한건을 리턴
        chat.setCreatedTime(LocalDateTime.now()); // 현재 시간 글 등록
        return chatRepository.save(chat);
    }

}
