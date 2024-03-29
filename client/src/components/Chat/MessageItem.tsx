import React, {useContext} from 'react';
import { MessageData } from '../../types/messageData';

import { UserContext } from '../../context/UserContext';
import { UserContextType } from '../../types/userContextType';

interface MessageProps {
  messageData: MessageData;
}

const MessageItem: React.FC<MessageProps> = ({ messageData }) => {

  const { currUser } = useContext(UserContext) as UserContextType;

  const timeDisplay = (time: Date) => {
    const currDate = new Date();
    const datesAreDifferent = time.getFullYear() !== currDate.getFullYear() ||
                              time.getMonth() !== currDate.getMonth() ||
                              time.getDate() !== currDate.getDate();
    if (datesAreDifferent) {
      return time.toLocaleDateString('en-US');
    }

    return time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }

  if (currUser === null) {
    return <></>
  }

  return (
    <div className={`message px-4 py-1 flex flex-col ${messageData.fromUserId === currUser._id ? 'items-end' : 'items-start'}`}>
      <div className={` max-w-full
        message-content p-2 rounded-lg whitespace-pre-wrap min-w-32
        ${messageData.fromUserId === currUser._id ? 'bg-secondary text-white' : 'bg-gray-300 text-black'}`}>
        <div className='max-w-[500px] break-words'>
          <p>{messageData.message}</p>
        </div>
        {messageData.imageUrl && <img src={messageData.imageUrl} alt='sentImage' className='max-w-[500px] max-h-[500px]' />}
        <p className='flex justify-end text-xs'>
          {timeDisplay(new Date(messageData.sentAt))}
        </p>
      </div>
    </div>
  );
};

export default MessageItem;