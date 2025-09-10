import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

// Middleware
app.use('*', cors({
  origin: '*',
  allowHeaders: ['*'],
  allowMethods: ['*'],
}));

app.use('*', logger(console.log));

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

// Chat endpoint with AI Flourish
app.post('/make-server-737333e2/chat', async (c) => {
  try {
    const { message } = await c.req.json();
    
    if (!message || typeof message !== 'string') {
      return c.json({ error: 'Message is required' }, 400);
    }

    // Store the chat message
    const chatId = `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    await kv.set(chatId, {
      message,
      timestamp: new Date().toISOString(),
      type: 'user'
    });

    // Generate AI response based on message content
    let response = '';
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('project') || lowerMessage.includes('portfolio')) {
      response = "I've worked on several exciting projects! My portfolio includes full-stack applications, SaaS experiments, and competition-winning solutions. I'm particularly proud of my recent SaaS projects where I focus on solving real-world problems. Would you like to know about any specific project?";
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      response = "I'm proficient in full-stack development with React, Node.js, Python, and databases. I'm currently diving deep into blockchain development with Solidity. I love learning new technologies and I'm always experimenting with the latest tools to build better solutions!";
    } else if (lowerMessage.includes('competition') || lowerMessage.includes('achievement')) {
      response = "I reached Top 5 in a national programming competition out of 1000+ participants! It was an incredible experience that pushed my problem-solving skills to the limit. These competitions taught me to think quickly and code efficiently under pressure.";
    } else if (lowerMessage.includes('saas') || lowerMessage.includes('startup') || lowerMessage.includes('business')) {
      response = "I'm passionate about building SaaS solutions that scale! My goal is to create products that serve 1M+ users. I've been experimenting with different SaaS ideas, learning about product-market fit, and understanding what makes a successful digital business. The future is in solving problems at scale!";
    } else if (lowerMessage.includes('university') || lowerMessage.includes('education') || lowerMessage.includes('study')) {
      response = "I'm a final-year Computer Science student at Achievers University, specializing in Software Engineering. My academic journey has been complemented by hands-on projects and competitions. I'm planning to pursue a Master's degree to deepen my expertise and explore new opportunities!";
    } else if (lowerMessage.includes('future') || lowerMessage.includes('goal') || lowerMessage.includes('plan')) {
      response = "After graduation, I'm excited to relocate for my Master's degree and explore new opportunities! My ultimate goal is to build impactful SaaS products and contribute to solving real-world problems through technology. I believe the future belongs to those who build it, and I'm ready to shape it!";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      response = "Hello! I'm thrilled you're interested in learning more about me. I'm Flourish, a passionate CS student who loves building solutions that matter. What would you like to know about my journey, projects, or aspirations?";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('connect') || lowerMessage.includes('work together')) {
      response = "I'd love to connect! Whether you're looking for collaboration, have an exciting opportunity, or just want to chat about tech, I'm always open to meaningful conversations. Feel free to schedule a call or reach out through my contact form. Let's build something amazing together!";
    } else {
      response = "That's a great question! I'm always eager to share more about my journey in tech. Whether it's about my projects, skills, competitions, or future goals - I'm here to chat! What specific aspect would you like to explore?";
    }

    // Store the AI response
    const responseId = `response_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    await kv.set(responseId, {
      message: response,
      timestamp: new Date().toISOString(),
      type: 'ai',
      originalMessage: message
    });

    return c.json({ response });
  } catch (error) {
    console.error('Chat error:', error);
    return c.json({ error: 'Failed to process chat message' }, 500);
  }
});

// Schedule call endpoint
app.post('/make-server-737333e2/schedule', async (c) => {
  try {
    const { name, email, message, date, time } = await c.req.json();
    
    if (!name || !email || !date || !time) {
      return c.json({ error: 'Name, email, date, and time are required' }, 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: 'Invalid email format' }, 400);
    }

    // Store the scheduling request
    const scheduleId = `schedule_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    await kv.set(scheduleId, {
      name,
      email,
      message: message || '',
      date,
      time,
      timestamp: new Date().toISOString(),
      status: 'pending'
    });

    console.log(`New call scheduled: ${name} (${email}) for ${date} at ${time}`);

    return c.json({ 
      message: 'Call scheduled successfully',
      scheduleId 
    });
  } catch (error) {
    console.error('Schedule error:', error);
    return c.json({ error: 'Failed to schedule call' }, 500);
  }
});

// Get scheduled calls (for admin/dashboard use)
app.get('/make-server-737333e2/schedules', async (c) => {
  try {
    const schedules = await kv.getByPrefix('schedule_');
    return c.json({ schedules });
  } catch (error) {
    console.error('Get schedules error:', error);
    return c.json({ error: 'Failed to retrieve schedules' }, 500);
  }
});

// Get chat history (for admin/dashboard use)
app.get('/make-server-737333e2/chats', async (c) => {
  try {
    const chats = await kv.getByPrefix('chat_');
    const responses = await kv.getByPrefix('response_');
    return c.json({ chats, responses });
  } catch (error) {
    console.error('Get chats error:', error);
    return c.json({ error: 'Failed to retrieve chat history' }, 500);
  }
});

// Health check
app.get('/make-server-737333e2/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

Deno.serve(app.fetch);