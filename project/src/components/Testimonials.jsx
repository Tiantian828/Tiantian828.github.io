import React from 'react';

const testimonials = [
  {
    content: '使用AI小说生成器让我的创作效率提升了10倍，故事情节丰富，人物性格鲜明。',
    author: '张小明',
    role: '网络作家'
  },
  {
    content: '作为一名新手写手，这个工具帮助我快速构建故事框架，节省了大量构思时间。',
    author: '李雨晴',
    role: '自由撰稿人'
  },
  {
    content: '故事生成的质量超出预期，AI对细节的把控和情节的安排都很专业。',
    author: '王大力',
    role: '文学爱好者'
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">用户评价</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            听听他们怎么说
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                <p className="text-gray-900">{testimonial.content}</p>
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="flex-auto">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}