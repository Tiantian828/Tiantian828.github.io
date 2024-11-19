import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: '基础版',
    price: '29',
    description: '适合个人创作者使用',
    features: [
      '每月10篇小说生成额度',
      '支持3种热门题材',
      '基础故事导出功能',
      '标准客服支持'
    ],
  },
  {
    name: '专业版',
    price: '99',
    description: '适合专业写手使用',
    features: [
      '每月50篇小说生成额度',
      '支持所有题材类型',
      '高级故事导出功能',
      '优先客服支持',
      '自定义角色设定',
      '情节深度定制'
    ],
  },
  {
    name: '团队版',
    price: '299',
    description: '适合工作室和团队使用',
    features: [
      '无限小说生成额度',
      '支持所有题材类型',
      '专业故事导出功能',
      '24/7专属客服',
      '高级角色设定系统',
      '团队协作功能',
      'API接口支持'
    ],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">选择适合您的方案</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们提供多种灵活的订阅方案，满足不同创作者的需求
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          {tiers.map((tier, tierIdx) => (
            <div key={tier.name} className={`p-8 ${tierIdx === 1 ? 'bg-gray-50' : ''}`}>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">{tier.name}</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">¥{tier.price}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/月</span>
              </p>
              <a
                href="#"
                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 shadow-sm ${
                  tierIdx === 1
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                    : 'bg-white text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300'
                }`}
              >
                立即订阅
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}