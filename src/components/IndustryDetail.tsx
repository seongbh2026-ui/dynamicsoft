import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { industryDetails } from '../data/industryDetails';

interface IndustryDetailProps {
  industryId: string;
  onBack: () => void;
}

export const IndustryDetail: React.FC<IndustryDetailProps> = ({ industryId, onBack }) => {
  const details = industryDetails[industryId];

  // Fallback if not found
  if (!details) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <p className="text-blue-800 mb-6">해당 산업분야의 상세 정보를 찾을 수 없습니다.</p>
        <button onClick={onBack} className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2 mx-auto">
          <ArrowLeft size={20} />
          돌아가기
        </button>
      </div>
    );
  }

  const getImageFile = (id: string) => {
    const fileMap: Record<string, string> = {
      'ind-1': 'ind-1.jpg',
      'ind-2': 'ind-2-1.jpg',
      'ind-3': 'ind-3-1.png',
      'ind-4': 'ind-4-1.jpg',
      'ind-5': 'ind-5-1.jpg',
      'ind-6': 'ind-6-1.jpg',
      'ind-7': 'ind-7-1.jpg',
      'ind-8': 'ind-8-1.jpg',
      'ind-9': 'ind-9-1.jpg',
    };
    return fileMap[id] || `${id}.png`;
  };

  const imageFileName = getImageFile(industryId);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-6 py-12 md:py-20"
    >
      <button 
        onClick={onBack} 
        className="group inline-flex items-center justify-center p-3 pr-5 mb-8 bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-800 rounded-full transition-all border border-slate-200 hover:border-blue-300 shadow-sm"
        title="산업분야 목록으로 돌아가기"
      >
        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        <span className="font-semibold text-sm">목록으로</span>
      </button>

      <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight">{details.title}</h1>
      
      {/* Image Area */}
      <div className="w-full max-w-4xl h-56 md:h-80 bg-white border border-slate-200 mb-4 relative overflow-hidden rounded-xl shadow-lg">
         <img 
            src={`/${imageFileName}?v=${Date.now()}`}
            alt={details.title} 
            className="w-full h-full object-cover" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://loremflickr.com/800/400/industry,bright?random=${industryId}`;
            }}
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      </div>
      <div className="mb-16">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-md text-xs text-slate-600 font-mono shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          이미지 파일명: <strong className="text-slate-800">{imageFileName}</strong>
        </span>
      </div>

      <div className="space-y-20 text-slate-700">
        
        {/* Section 1: Business Context */}
        <section>
          <div className="flex items-center gap-4 mb-6 border-b border-slate-200 pb-4">
            <div className="w-8 h-8 rounded-full bg-blue-100/30 flex items-center justify-center text-blue-800 font-bold border border-slate-200 shrink-0">1</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">Business Context</h2>
          </div>
          <p className="whitespace-pre-line leading-relaxed text-slate-600 text-lg">
            {details.context}
          </p>
        </section>

        {/* Section 2: Objectives */}
        <section>
          <div className="flex items-center gap-4 mb-6 border-b border-slate-200 pb-4">
            <div className="w-8 h-8 rounded-full bg-blue-100/30 flex items-center justify-center text-blue-800 font-bold border border-slate-200 shrink-0">2</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">Objectives</h2>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
            <p className="mb-6 text-slate-700 font-medium">다이나믹소프트 고객은 다음과 같은 다양한 목표를 검증하기 위하여 예측 시뮬레이션 소프트웨어를 사용하고 있습니다.</p>
            <ul className="space-y-4">
              {details.objectives.map((obj: string, i: number) => (
                <li key={i} className="flex flex-col sm:flex-row gap-3">
                  <div className="text-blue-500 mt-1 shrink-0">❖</div>
                  <div className="text-slate-600 leading-relaxed text-lg">{obj}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: Techniques & Methods */}
        <section>
          <div className="flex items-center gap-4 mb-6 border-b border-slate-200 pb-4">
            <div className="w-8 h-8 rounded-full bg-blue-100/30 flex items-center justify-center text-blue-800 font-bold border border-slate-200 shrink-0">3</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">Techniques & Methods</h2>
          </div>
          <div className="pl-0 md:pl-12">
            <p className="whitespace-pre-line leading-relaxed text-slate-700 text-lg mb-8">
              {details.techniques.text}
            </p>
            <ul className="space-y-4 mb-10">
              {details.techniques.list.map((item: string, i: number) => (
                 <li key={i} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                    <div className="text-slate-600 text-lg leading-relaxed">{item}</div>
                 </li>
              ))}
            </ul>
            
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white border border-slate-200 rounded-xl relative overflow-hidden hover:border-blue-300 transition-colors">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
               <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3 tracking-wide">
                 <span className="text-blue-600">"</span>Future. Proof.<span className="text-blue-600">"</span>
               </h3>
               <p className="text-slate-600 text-lg">
                 미래의 가상 공장에서 구현되는 시스템의 운영 상황을 오늘 실행하고 분석하며 검증할 수 있습니다.
               </p>
            </div>
          </div>
        </section>

        {/* Section 4: References */}
        <section>
          <div className="flex items-center gap-4 mb-6 border-b border-slate-200 pb-4">
             <div className="w-8 h-8 rounded-full bg-blue-100/30 flex items-center justify-center text-blue-800 font-bold border border-slate-200 shrink-0">4</div>
             <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">References</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {details.references.map((ref: string, i: number) => (
              <div key={i} className="flex gap-3 items-start p-4 rounded-lg bg-blue-50/50 border border-slate-200 hover:border-blue-300 transition-colors shadow-sm">
                <div className="text-emerald-600 mt-0.5 shrink-0 font-bold">✓</div>
                <div className="text-slate-700 leading-relaxed font-medium">{ref}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </motion.div>
  );
};
