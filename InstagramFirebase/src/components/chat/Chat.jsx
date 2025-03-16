import EmojiPicker from "emoji-picker-react";
import React from "react";

const Chat = () => {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  return (
    <div className="flex-2 border-l-2 border-r-2 border-[#c5c4c435] h-full flex flex-col">
      <div className="top p-2 flex items-center justify-between border-b border-b-[#c5c4c435]">
        <div className="user flex items-center gap-8">
          <img
            src="/manish_grg.jpg"
            className="h-12 rounded-full object-cover"
            alt=""
          />
          <div className="text flex flex-col gap-1 justify-center">
            <span className="font-semibold">Manish Gurung</span>
            <p className="text font-light text-sm">Offline</p>
          </div>
        </div>
        <div className="icons gap-8 flex text">
          <i class="ri-phone-fill"></i>
          <i class="ri-vidicon-fill"></i>
          <i class="ri-information-fill"></i>
        </div>
      </div>
      <div className="center px-2 py-3 flex-1 overflow-scroll flex flex-col gap-5">
        <div className="message own max-w-[80%] flex gap-4 self-end">
          <div className="texts flex-1 flex flex-col gap-1">
            <p className="bg-gray-200/80 text-sm text-gray-800 p-2 rounded-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio culpa quos sequi magnam quae veritatis animi reiciendis nihil voluptas laboriosam?</p>
            <span className="text-xs text-gray-600">1 min ago</span>
          </div>
        </div>
        <div className="message other max-w-[80%] flex gap-4 self-start">
          <img src="/manish_grg.jpg" className="w-10 h-10 object-cover rounded-full" alt="" />
          <div className="texts flex-1 flex flex-col gap-1">
            <img src="/manish_grg.jpg" className="w-100 max-w-[90%] h-60" alt="" />
            <p className="bg-gray-300/90 text-sm text-gray-800 p-2 rounded-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio culpa quos sequi magnam quae veritatis animi reiciendis nihil voluptas laboriosam?</p>
            <span className="text-xs text-gray-600">1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom p-2 flex items-center gap-5 justify-between border-t border-t-[#c5c4c435] mt-auto">
        <div className="icons flex gap-8">
          <i class="ri-attachment-2 cursor-pointer"></i>
          <i class="ri-camera-fill cursor-pointer" />
          <i class="ri-mic-fill cursor-pointer" />
        </div>
        <input
          type="text"
          className="flex-1 border-transparent border-none outline-none bg-gray-200 text-gray-600 px-2 py-1 rounded-md "
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="emoji">
          <i
            class="ri-emotion-happy-fill text-xl cursor-pointer"
            onClick={() => setOpen(!open)}
          ></i>
          <div className="relative">
            <EmojiPicker className="absolute bottom- left-0" open={open} onEmojiClick={handleEmoji} height={350} width={300}/>

          </div>
        </div>
        <button
          type="submit"
          className="bg-[#5183fe] text-gray-50 px-2 py-1 border-none rounded-md cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
