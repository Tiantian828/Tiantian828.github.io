import React from 'react';
import { 
  PencilSquareIcon,
  DocumentDuplicateIcon,
  ArrowDownTrayIcon 
} from '@heroicons/react/24/outline';

const steps = [
  {
    name: '输入创作信息',
    description: '选择小说题材，输入人物名称和关键情节点。',
    icon: PencilSquareIcon,
  },
  {
    name: 'AI智能生成',
    description: 'AI系统快速分析并生成完整的故事情节，包括背景、人物性格、故事发展等。',
    icon: DocumentDuplicateIcon,
  },
  {
    name: '导出成果',
    description: '预览生成的内容，可一键导出保存您的创作成果。',
    icon: ArrowDownTrayIcon,
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">使用方法</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            三步轻松创作
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            无需复杂操作，只需简单三步即可完成创作。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {steps.map((step) => (
              <div key={step.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}