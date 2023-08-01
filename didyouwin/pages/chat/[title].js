import { useRouter } from "next/router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ConfettiExplosion from "react-confetti-explosion";
import useAuth from "../../hooks/useAuth";

import { useEffect, useState } from "react";
import { nftList } from "../../competition";
import TextField from "@mui/material/TextField";

import io from "socket.io-client";

const socket = io("http://15.164.96.192:3232");

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [username, setUsername] = useState("");

  const { loggedIn, getUserInfo } = useAuth();
  if (loggedIn && username === "")
    getUserInfo().then((res) => setUsername(res.name));

  const router = useRouter();
  const title = router.query.title;
  const nft = nftList.find((nft) => nft.title === title);

  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    socket.on("chat message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      const message = {
        username,
        text: messageInput,
      };
      socket.emit("chat message", message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessageInput("");
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="detail">
      {
        <ConfettiExplosion
          particleCount={400}
          duration={2500}
          force={1}
        ></ConfettiExplosion>
      }
      <button
        onClick={goBack}
        style={{
          all: "unset",
          position: "absolute",
          top: "2rem",
          left: "1.5rem",
        }}
      >
        <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
      </button>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div style={{ paddingInline: "1rem" }}>
        <div>
          {messages.map((message, index) => {
            const showUsername =
              index === 0 || message.username !== messages[index - 1].username;

            if (message.username === username) {
              return (
                <div className="my-chat" key={index}>
                  {showUsername && (
                    <h4
                      style={{
                        textAlign: "right",
                        marginBlock: "10px",
                        letterSpacing: "2px",
                      }}
                    >
                      {message.username}
                    </h4>
                  )}
                  <p
                    className="narrow"
                    style={{ textAlign: "right", marginBlock: "5px" }}
                  >
                    {message.text}
                  </p>
                </div>
              );
            }
            return (
              <div className="your-chat" key={index}>
                {showUsername && (
                  <h4 style={{ letterSpacing: "2px" }}>
                    {message.username}&nbsp;&nbsp;🥇🥈{" "}
                  </h4>
                )}
                <p className="narrow">{message.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="input">
        <TextField
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyPress={handleInputKeyPress}
          fullWidth
          id="fullWidth"
        />
        <button
          style={{
            width: "100%",
            borderRadius: "0",
            backgroundColor: "gray",
            color: "white",
          }}
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
      <style global jsx>{`
        .your-chat p {
          max-width: 80%;
          background: var(--point-color);
          width: max-content;
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          margin-right: auto;
          white-space: pre-wrap;
        }

        .my-chat p {
          max-width: 80%;
          background: var(--bg-color);
          width: max-content;
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          margin-left: auto;
          white-space: pre-wrap;
        }
        .input {
          padding: 1px;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
        h3 {
          text-align: center;
        }
        .title {
          padding-block: 1rem;
        }
        html,
        body {
          background: #fff;
          color: #000;
          min-height: 100dvh;
        }
      `}</style>
      `
    </div>
  );
}
