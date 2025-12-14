import dayjs from "dayjs";
import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/profile-1.jpg";
import "./ChatMessage.css";

//message, sender, time props come from ChatMessages.jsx
export function ChatMessage({ message, sender, time }) {
  // const message = props.message;
  // const sender = props.sender;
  // we call this destructuring -> shortcut for these lines above
  // const { message, sender } = props;

  // if(sender === 'robot'){
  //   return(
  //     <div>
  //       <img src="robot.png" alt="user-image" width="50"/>
  //       {message}
  //     </div>
  //   );
  // }

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img
          src={RobotProfileImage}
          alt="user-image"
          className="chat-message-profile"
        />
      )}
      <div className="chat-message-text">
        {message}

        {time && (
          <div className="chat-message-time">{dayjs(time).format("h:mma")}</div>
        )}
      </div>
      {sender === "user" && (
        <img
          src={UserProfileImage}
          alt="user-image"
          className="chat-message-profile"
        />
      )}
    </div>
  );
}
