// import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//         'cce66dc5-d0be-45c1-b56e-11c9be4d259b',
//         props.user.username,
//         props.user.secret
//     );
//     return (
//         <div style={{height: '100vh'}}>
//             <MultiChatSocket {...chatProps}/>
//             <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
//         </div>
//     )
// }

// export default ChatsPage

import {PrettyChatWindow} from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    return (
        <div style={{height:'100vh'}}>
            <PrettyChatWindow
                projectId='cce66dc5-d0be-45c1-b56e-11c9be4d259b'
                username={props.user.username}
                secret={props.user.secret}
                style={{height:'100vh'}}
            />
        </div>
    );
};

export default ChatsPage;