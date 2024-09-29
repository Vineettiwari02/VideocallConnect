import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export const Room = () => {
    const { roomId } = useParams();
    const meetingRef = useRef(null); // Create a ref for the meeting container

    useEffect(() => {
        const myMeeting = async () => {
            const appID = Number(process.env.REACT_APP_APPID);
            const serverSecret = process.env.REACT_APP_SERVERSECRET;

            // console.log("AppID:", Numberprocess.env.REACT_APP_APPID);
// console.log("ServerSecret:", process.env.REACT_APP_SERVERSECRET);
// console.log("type of:", typeof(Number(process.env.REACT_APP_APPID)) )
            // Generate Kit Token for the room
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomId,
                Date.now().toString(),
                "vineet"
            );

            // Create the ZegoUIKit instance
            const zc = ZegoUIKitPrebuilt.create(kitToken);

            // Join the room, attaching it to the container ref
            zc.joinRoom({
                container: meetingRef.current, // Attach to the container element
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall, // One-on-one call mode
                },
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: `${process.env.REACT_APP_URL}/room/${roomId}`, // Shareable link to the room
                    },
                ],
                showScreenSharingButton: false, // Hide the screen sharing button
            });
        };

        // Initialize the meeting only if meetingRef is defined
        if (meetingRef.current) {
            myMeeting();
        }
    }, [roomId]); // Ensure the effect runs when roomId changes

    return (
        <div
            style={{
                height: '100vh', // Full screen height
                width: '100%',   // Full screen width
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f0f0f0', // Optional background color
            }}
        >
            {/* Meeting container */}
            <div
                ref={meetingRef} // Ref for ZegoUIKitPrebuilt container
                style={{
                    height: '100%',
                    width: '100%',
                }}
            />
        </div>
    );
};
