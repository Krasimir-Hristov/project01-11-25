'use client';

// Core React imports
import { useEffect, useRef, useState } from 'react';
// Page component imports
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Work from './components/Work';

// Chat dependencies
import { useChat } from '@ai-sdk/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// UI Component imports
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Icon imports
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MessageCircle,
  Send,
  Loader2,
  ArrowDownCircleIcon,
} from 'lucide-react';
import Chatbot from './components/Chatbot';

// Custom code block component for markdown rendering
interface MyCodeProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

// CodeBlock component implementation for markdown code formatting
function CodeBlock({ inline, children, className, ...props }: MyCodeProps) {
  if (inline) {
    return (
      <code
        {...props}
        className={`bg-gray-200 px-1 rounded ${className || ''}`}
      >
        {children}
      </code>
    );
  }
  return (
    <pre {...props} className={`bg-gray-200 p-2 rounded ${className || ''}`}>
      <code>{children}</code>
    </pre>
  );
}

export default function Home() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Chat UI states
  const [isChatOpen, setIsChatOpen] = useState(false); // Controls chat window visibility
  const [showChatIcon, setShowChatIcon] = useState(false); // Controls chat icon visibility
  const chatIconRef = useRef<HTMLButtonElement>(null); // Reference to chat button

  // Initialize AI chat functionality
  const {
    messages, // Chat message history
    input, // Current input field value
    handleInputChange, // Input change handler
    handleSubmit, // Form submission handler
    isLoading, // Loading state indicator
    stop, // Stop message generation
    reload, // Retry failed requests
    error, // Error state
  } = useChat({ api: '/api/gemini' });

  // Reference for auto-scrolling to latest message
  const scrollRef = useRef<HTMLDivElement>(null);

  // Show/hide chat icon based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowChatIcon(true);
      } else {
        setShowChatIcon(false);
        setIsChatOpen(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Chat window toggle handler
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Auto-scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Dark mode initialization
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // Dark mode application
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Main page content */}
      <Navbar />
      <div id='home'>
        <Header />
      </div>
      <div>
        <Chatbot />
      </div>
      <div id='about'>
        <About isDarkMode={isDarkMode} />
      </div>
      <div id='tech'>
        <Services />
      </div>
      <div id='projects'>
        <Work isDarkMode={isDarkMode} />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <div>
        <Footer isDarkMode={isDarkMode} />
      </div>

      {/* Floating Chat Button */}
      <AnimatePresence>
        {showChatIcon && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2 }}
            className='fixed bottom-4 right-4 z-50'
          >
            <Button
              ref={chatIconRef}
              onClick={toggleChat}
              size='icon'
              className='rounded-full size-14 p-2 shadow-lg'
            >
              {!isChatOpen ? (
                <MessageCircle className='size-12' />
              ) : (
                <ArrowDownCircleIcon />
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className='fixed bottom-20 right-4 z-50 w-[95%] md:w-[500px]'
          >
            <Card className='border-2'>
              {/* Chat Header */}
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-3'>
                <CardTitle className='text-lg font-bold'>
                  Chat With Krasimir AI Bot
                </CardTitle>
                <Button
                  onClick={toggleChat}
                  size='sm'
                  variant='ghost'
                  className='px-2 py-0'
                >
                  <X className='size-4' />
                  <span className='sr-only'>Close</span>
                </Button>
              </CardHeader>

              {/* Chat Messages Area */}
              <CardContent>
                <ScrollArea className='h-[300px] pr-4'>
                  {/* Empty State */}
                  {messages?.length === 0 && (
                    <div className='w-full mt-32 text-gray-500 items-center justify-center flex gap-3'>
                      No message yet.
                    </div>
                  )}

                  {/* Message List */}
                  {messages?.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${
                        message.role === 'user' ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div
                        className={`inline-block rounded-lg p-4 ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            code: CodeBlock, // Ползваме си нашия типизиран компонент
                            ul: ({ children }) => (
                              <ul className='list-disc ml-4'>{children}</ul>
                            ),
                            ol: ({ children }) => (
                              <ol className='list-decimal ml-4'>{children}</ol>
                            ),
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}

                  {/* Loading Indicator */}
                  {isLoading && (
                    <div className='w-full items-center flex justify-center gap-3'>
                      <Loader2 className='animate-spin h-5 w-5 text-primary' />
                      <button
                        className='underline'
                        type='button'
                        onClick={() => stop()}
                      >
                        Abort
                      </button>
                    </div>
                  )}

                  {/* Error State */}
                  {error && (
                    <div className='w-full items-center flex justify-center gap-3'>
                      <p>An error occurred.</p>
                      <button
                        className='underline'
                        type='button'
                        onClick={() => reload()}
                      >
                        Retry
                      </button>
                    </div>
                  )}

                  {/* Auto-scroll anchor */}
                  <div ref={scrollRef}></div>
                </ScrollArea>
              </CardContent>

              {/* Message Input Form */}
              <CardFooter>
                <form
                  onSubmit={handleSubmit}
                  className='flex w-full items-center space-x-2'
                >
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    className='flex-1'
                    placeholder='Type your message here...'
                  />
                  <Button
                    type='submit'
                    className='size-9'
                    disabled={isLoading}
                    size='icon'
                  >
                    <Send className='size-4' />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Добавете други секции тук с уникални id атрибути */}
    </>
  );
}
