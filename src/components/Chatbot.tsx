import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Chatbot() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: t.chatbot.greeting, sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    t.chatbot.trackOrder,
    t.chatbot.productRecommendations,
    t.chatbot.contactSupport,
    t.chatbot.shippingInfo,
  ];

  const handleSend = (message?: string) => {
    const textToSend = message || inputValue;
    if (!textToSend.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: textToSend, sender: 'user' },
    ]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = '';
      const lowerText = textToSend.toLowerCase();

      if (lowerText.includes('track') || lowerText.includes('order')) {
        botResponse = t.chatbot.trackResponse;
      } else if (lowerText.includes('recommend') || lowerText.includes('product')) {
        botResponse = t.chatbot.recommendResponse;
      } else if (lowerText.includes('contact') || lowerText.includes('support')) {
        botResponse = t.chatbot.supportResponse;
      } else if (lowerText.includes('shipping')) {
        botResponse = t.chatbot.shippingResponse;
      } else {
        botResponse = t.chatbot.defaultResponse;
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: botResponse, sender: 'bot' },
      ]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-4 z-50 w-[350px] max-w-[calc(100vw-2rem)]"
          >
            <Card className="flex flex-col h-[500px] shadow-lg border-2">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-clay-brown text-cream">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>ZenBot</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-cream hover:bg-cream/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-clay-brown text-cream'
                          : 'bg-cream text-dark-earth'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Replies */}
              <div className="p-3 border-t bg-cream/50">
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickReplies.map((reply) => (
                    <Button
                      key={reply}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSend(reply)}
                      className="text-xs"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t.chatbot.typeMessage}
                  className="flex-1"
                />
                <Button
                  size="icon"
                  onClick={() => handleSend()}
                  className="bg-clay-brown hover:bg-[#A46B47]/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-terracotta hover:bg-[#CB6843]/90 shadow-lg"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </motion.div>
    </>
  );
}