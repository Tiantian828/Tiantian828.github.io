import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const GENRES = [
  { value: 'rebirth', label: '重生' },
  { value: 'revenge', label: '复仇' },
  { value: 'mystery', label: '悬疑' },
  { value: 'boss', label: '霸总' },
  { value: 'sweet', label: '甜宠' },
  { value: 'tragic', label: '虐文' },
  { value: 'comedy', label: '搞笑' },
  { value: 'timeTravel', label: '穿越' },
  { value: 'farming', label: '种田' },
  { value: 'cultivation', label: '养成' },
  { value: 'detective', label: '破案' },
  { value: 'workplace', label: '职场' }
];

export default function NovelGenerator() {
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      setStory(result.story);
    } catch (error) {
      console.error('Error generating story:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    const blob = new Blob([story], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '我的小说.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            小说标题
          </label>
          <input
            type="text"
            id="title"
            {...register('title', { required: '请输入小说标题' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
            小说题材
          </label>
          <select
            id="genre"
            {...register('genre', { required: '请选择小说题材' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">请选择题材</option>
            {GENRES.map(genre => (
              <option key={genre.value} value={genre.value}>
                {genre.label}
              </option>
            ))}
          </select>
          {errors.genre && (
            <p className="mt-1 text-sm text-red-600">{errors.genre.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="characters" className="block text-sm font-medium text-gray-700">
            主要人物
          </label>
          <textarea
            id="characters"
            {...register('characters', { required: '请输入主要人物信息' })}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="请输入主要人物的姓名和简单描述，用逗号分隔"
          />
          {errors.characters && (
            <p className="mt-1 text-sm text-red-600">{errors.characters.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="plotPoints" className="block text-sm font-medium text-gray-700">
            关键情节
          </label>
          <textarea
            id="plotPoints"
            {...register('plotPoints', { required: '请输入关键情节点' })}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="请输入故事中的关键情节点，用逗号分隔"
          />
          {errors.plotPoints && (
            <p className="mt-1 text-sm text-red-600">{errors.plotPoints.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? '生成中...' : '开始创作'}
          </button>
        </div>
      </form>

      {story && (
        <div className="mt-8">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">生成的故事</h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <pre className="whitespace-pre-wrap">{story}</pre>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  onClick={handleExport}
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  导出故事
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}