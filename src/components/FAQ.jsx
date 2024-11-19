import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: '如何开始使用AI小说生成器？',
    answer: '只需注册账号，选择您喜欢的套餐，然后输入创作要求（如题材、人物等），AI就会为您生成完整的故事。整个过程简单直观，新手也能轻松上手。'
  },
  {
    question: 'AI生成的内容是否有版权保护？',
    answer: '是的，所有通过我们平台生成的内容版权均归创作者所有。您可以自由使用、发布或出版生成的作品。'
  },
  {
    question: '支持哪些小说题材？',
    answer: '我们支持多种流行题材，包括但不限于：重生、复仇、悬疑、霸总、甜宠、虐文、搞笑、穿越、种田、养成、破案、职场等。'
  },
  {
    question: '生成的内容可以修改吗？',
    answer: '当然可以。生成的内容支持在线编辑，您可以根据需要对情节、对话等进行调整和优化。'
  },
  {
    question: '如何导出生成的小说？',
    answer: '我们支持多种导出格式，包括TXT、Word、PDF等。您可以选择最适合的格式导出并保存到本地。'
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function FAQ() {
  return (
    <div id="faq" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">常见问题</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            解答您的疑惑
          </p>
        </div>
        <div className="mx-auto max-w-3xl mt-16">
          <dl className="space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform transition duration-150 ease-in-out'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}