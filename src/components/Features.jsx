import React from 'react';
import { 
  SparklesIcon, 
  DocumentTextIcon, 
  CloudArrowDownIcon,
  CursorArrowRaysIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'AI智能创作',
    description: '采用先进的AI技术，根据您的创意灵感快速生成引人入胜的故事内容。',
    icon: SparklesIcon,
  },
  {
    name: '多种题材支持',
    description: '支持重生、复仇、悬疑、霸总、甜宠等多种热门题材，满足不同创作需求。',
    icon: DocumentTextIcon,
  },
  {
    name: '一键导出',
    description: '支持多种格式导出，轻松保存您的创作成果。',
    icon: CloudArrowDownIcon,
  },
  {
    name: '简单易用',
    description: '无需专业写作经验，只需输入关键信息，即可生成完整故事。',
    icon: CursorArrowRaysIcon,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">强大功能</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            让创作变得简单有趣
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们提供一站式AI小说创作解决方案，让您的创意快速变成精彩故事。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}