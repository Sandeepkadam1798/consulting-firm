//  consulting firm chatbot 

"use client"
import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
   
    (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '66fe6c4019d0f7b6bf3bc1b3' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
          });
        }
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    })(document, 'script');

  }, []);

  return (
    <div
      id="voiceflow-chat"
      className="fixed bottom-0 right-0 m-4 p- bg-transparent  shadow-lg rounded-lg"
    ></div>
  );
};

export default Chatbot;
