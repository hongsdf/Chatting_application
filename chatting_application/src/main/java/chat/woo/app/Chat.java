package chat.woo.app;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "chat") //컬렉션 이름 지정
public class Chat {
    @Id
    private String id;
    private String msg;
    private String sender; // 보내는 사람
    private String receiver; // 받는 사람 (귓속말)
    private Integer roomNumber; // 방으로 채팅 구분
    private LocalDateTime createdTime; // 메세지 시간


}
