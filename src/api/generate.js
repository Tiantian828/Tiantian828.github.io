import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

export async function generateStory({ title, genre, characters, plotPoints }) {
  const prompt = `
    创作一个标题为"${title}"的${genre}小说。  
    主要人物：${characters}
    关键情节：${plotPoints}
    
    要求：
    1. 故事要有完整的起因、经过、结果 
    2. 人物性格鲜明，情节合理  
    3. 故事要有吸引力和代入感  
    4. 分段落输出，包含适当的对话  
  `;

  const completion = await openai.chat.completions.create({


    model: "gpt-4",  
    messages: [  
      {
        role: "system",  
        content: "你是一个专业的小说创作者，擅长创作各种类型的小说。"  
      },
      {
        role: "user",  
        content: prompt  
      }
    ],
    temperature: 0.8,  
    max_tokens: 2000,  
  });

  return completion.choices[0].message.content;  
}