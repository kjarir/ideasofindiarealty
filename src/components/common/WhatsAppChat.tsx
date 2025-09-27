import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // You can update this number when you're ready
  const whatsappNumber = "+919999999999"; // Replace with your actual WhatsApp number
  
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in your services. Could you please help me with more information?");
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-elegant hover-lift"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-card rounded-lg shadow-elegant border animate-scale-in">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Ideas of India Realty</h3>
                <p className="text-sm text-muted-foreground">We're here to help!</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="p-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-4">
              <p className="text-sm">
                👋 Hi there! Ready to get started with your approvals and clearances? 
                Chat with us directly on WhatsApp for instant support.
              </p>
            </div>
            
            <Button 
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Start WhatsApp Chat
            </Button>
            
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Get instant responses to your queries
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;