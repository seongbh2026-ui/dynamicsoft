import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Briefcase,
  Building2,
  Car,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  Database,
  Droplet,
  Factory,
  Globe,
  HardDrive,
  Layers,
  LayoutDashboard,
  Mail,
  MapPin,
  MemoryStick,
  Monitor,
  Phone,
  Plane,
  Server,
  Shield,
  Truck,
  Zap,
} from 'lucide-react';
import { IndustryDetail } from './components/IndustryDetail';

// ==========================================
// 1. 코어 데이터 모델 (Structured JSON Data)
// ==========================================
const SITE_DATA = {
  company: '다이나믹소프트',
  companyEn: 'DynamicSoft',
  tagline: 'Simulation Analysis & Optimization',
  contact: {
    tel: '02-3280-3123',
    email: 'support@dynamic.co.kr',
    hours: 'Mon - Fri: 09:00 - 18:00 KST',
  },
  copyright: '2026 Dynamicsoft',
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'industries', label: '산업분야' },
    { id: 'products', label: '제품안내' },
    { id: 'support', label: '고객지원' },
  ],
  coreValue: {
    title: 'Advanced Solutions for Future-Proof Engineering',
    desc: '우리의 역할은 고객이 미래를 예측하고 올바른 의사결정을 할 수 있도록 지원하는 것입니다.',
  },
  technologies: [
    {
      id: 'tech-1',
      icon: <Briefcase className="w-8 h-8" />,
      title: '전략 수립',
      desc: '위험 최소화 및 이익 극대화 전략 수립을 위한 데이터 기반 프레임워크 구축',
    },
    {
      id: 'tech-2',
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: '계획 및 추진',
      desc: '검증된 전산 방법론을 통한 체계적인 투자, 생산, 물류 계획 수립 및 실행',
    },
    {
      id: 'tech-3',
      icon: <Server className="w-8 h-8" />,
      title: '프로세스 최적화',
      desc: '고급 알고리즘 분석을 활용한 구조적 워크플로우의 지속적인 개선 및 검증',
    },
    {
      id: 'tech-4',
      icon: <Globe className="w-8 h-8" />,
      title: '가상현실 환경 구축',
      desc: '고도로 정밀한 디지털 트윈 및 몰입형 가상현실(Real 3D) 커뮤니케이션 환경 구축',
    },
  ],
  benefits: [
    { id: 'bene-1', icon: <ArrowRight className="w-6 h-6" />, title: '비용 절감 (빠른 ROI)' },
    { id: 'bene-2', icon: <Clock className="w-6 h-6" />, title: '시간 단축 (What-if 시나리오)' },
    { id: 'bene-3', icon: <CheckCircle2 className="w-6 h-6" />, title: '과학적 대안 검증' },
    { id: 'bene-4', icon: <Globe className="w-6 h-6" />, title: '구성원 간 합의 도출 촉진' },
  ],
  industries: [
    { id: 'ind-1', title: '자동차', icon: <Car className="w-6 h-6" />, desc: '미래 모빌리티를 위한 정밀 엔지니어링 및 시뮬레이션 솔루션' },
    { id: 'ind-2', title: '오일&가스', icon: <Droplet className="w-6 h-6" />, desc: '극한 환경에서의 설비 안정성 확보 및 프로세스 최적화' },
    { id: 'ind-3', title: '제조업', icon: <Factory className="w-6 h-6" />, desc: '스마트 팩토리 구축 및 생산 공정 고도화 솔루션' },
    { id: 'ind-4', title: '물류', icon: <Truck className="w-6 h-6" />, desc: '공급망 최적화 및 물류 자동화 시스템 설계' },
    { id: 'ind-5', title: '공항', icon: <Plane className="w-6 h-6" />, desc: '항공 인프라 및 수하물 처리 시스템의 안정성 검증' },
    { id: 'ind-6', title: '국방', icon: <Shield className="w-6 h-6" />, desc: '첨단 무기 체계 및 방위 산업용 고신뢰성 소프트웨어' },
    { id: 'ind-7', title: '스포츠', icon: <Activity className="w-6 h-6" />, desc: '생체 역학 분석 및 스포츠 용품 성능 극대화 시뮬레이션' },
    { id: 'ind-8', title: '철강', icon: <Layers className="w-6 h-6" />, desc: '고강도 소재 개발 및 제철 공정의 구조적 안전성 평가' },
    { id: 'ind-9', title: '원자력', icon: <Zap className="w-6 h-6" />, desc: '발전 설비의 무결성 검증 및 재난 대응 시뮬레이션' },
  ],
  product: {
    name: 'WITNESS HORIZON',
    subtitle: 'FLAGSHIP SIMULATION PLATFORM',
    desc: 'Advanced predictive modeling and simulation software designed for high-precision operational environments. Architect continuous improvement through rigorous data-driven scenarios and dynamic 3D visualizations.',
    features: [
      {
        icon: <Monitor className="w-6 h-6 text-blue-600" />,
        title: 'Synchronous 2D/3D Environment',
        desc: 'Transition seamlessly between orthographic 2D schematics and fully rendered 3D spatial models without data loss or computational lag. Built on a proprietary rendering pipeline.',
      },
      {
        icon: <Database className="w-6 h-6 text-blue-600" />,
        title: 'Data-Driven Modeling',
        desc: 'Direct integration with SQL, Oracle, and proprietary historical datasets. Models dynamically update as source parameters shift.',
      },
      {
        icon: <Layers className="w-6 h-6 text-blue-600" />,
        title: 'Complex Logic Ruleset',
        desc: 'Define intricate operational routing, resource constraints, and multi-variable dependencies using our visual logic builder.',
      },
      {
        icon: <Activity className="w-6 h-6 text-blue-600" />,
        title: 'Predictive Output Engine',
        desc: 'Generate deterministic and stochastic reports instantly. Export raw metrics or high-fidelity dashboard views for executive review.',
      },
    ],
    specs: [
      {
        component: 'Processor (CPU)',
        min: 'Intel Core i5 / AMD Ryzen 5',
        rec: 'Intel Core i9 / AMD Ryzen 9 (Multi-core optimized)',
        icon: <Cpu className="w-5 h-5" />,
      },
      {
        component: 'Memory (RAM)',
        min: '16 GB DDR4',
        rec: '64 GB DDR5 ECC',
        icon: <MemoryStick className="w-5 h-5" />,
      },
      {
        component: 'Graphics (GPU)',
        min: 'DirectX 11 Compatible (4GB VRAM)',
        rec: 'NVIDIA RTX A-Series / Quadro (16GB+ VRAM)',
        icon: <Monitor className="w-5 h-5" />,
      },
      {
        component: 'Storage',
        min: '256 GB SSD',
        rec: '1 TB NVMe M.2 SSD',
        icon: <HardDrive className="w-5 h-5" />,
      },
    ],
  },
};

// ==========================================
// 2. 재사용 가능한 UI 컴포넌트 & 플레이스홀더
// ==========================================

const LogoWithFallback = ({ className = "", type = "header" }: { className?: string, type?: "header" | "footer" }) => {
  const isFooter = type === "footer";
  const imgClass = isFooter ? "h-10 opacity-70 grayscale hover:grayscale-0 transition-all" : "h-12";
  const placeholderClass = isFooter ? "h-10" : "h-12";

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="DynamicSoft Logo"
        className={`${imgClass} w-auto object-contain drop-shadow-md`}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <div className={`hidden ${placeholderClass} px-4 border border-dashed border-blue-500/50 rounded-lg bg-white flex flex-col items-center justify-center text-blue-600 font-mono text-[10px] leading-tight text-center whitespace-nowrap`}>
        <div className="font-bold">LOGO UPLOAD REQUIRED</div>
        <div>Upload logo.png to public/</div>
      </div>
    </div>
  );
};

const ImagePlaceholder = ({ id, text, className = '' }: { id: string; text: string; className?: string }) => (
  <div
    id={id}
    className={`flex flex-col items-center justify-center bg-slate-100 border-2 border-dashed border-slate-300 text-slate-500 rounded-lg overflow-hidden relative group ${className}`}
  >
    {/* 향후 <img> 태그로 교체될 영역 */}
    <span className="text-sm font-medium z-10 px-4 py-2 bg-white/80 rounded backdrop-blur-sm">{text}</span>
    <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const SectionHeading = ({ children, align = 'left', className = '' }: { children: React.ReactNode; align?: 'left' | 'center', className?: string }) => (
  <h2 className={`text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6 ${align === 'center' ? 'text-center' : ''} ${className}`}>
    {children}
  </h2>
);

// ==========================================
// 3. 페이지 뷰 (SPA 라우팅용)
// ==========================================

// --- Home & Solutions View ---
const ViewHome = () => (
  <div className="p-4 md:p-6 max-w-7xl mx-auto pb-24 grid grid-cols-1 md:grid-cols-12 gap-4">
    {/* Main Hero & Core Value */}
    <section className="md:col-span-8 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-2xl p-8 md:p-12 border-none relative overflow-hidden shadow-2xl flex flex-col justify-center">
      <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      <span className="text-blue-100 font-mono text-sm tracking-widest uppercase mb-4 block">Core Competency</span>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
        {SITE_DATA.coreValue.title}
      </h1>
      <p className="text-lg text-blue-50 leading-relaxed max-w-lg mb-8 opacity-90">
        {SITE_DATA.coreValue.desc}
      </p>
      <div className="flex gap-4 relative z-10">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-sm">
          Get Started <ArrowRight className="w-5 h-5" />
        </button>
        <div className="hidden md:flex bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-lg flex items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
          <span className="text-xs text-white font-medium">Real-Time Optimization Enabled</span>
        </div>
      </div>
    </section>
    
    <section className="md:col-span-4 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col items-center justify-center relative overflow-hidden">
      {/* ID: #main-visual */}
      <img 
        src={`/main-visual.jpg?v=${Date.now()}`}
        alt="Main Visual" 
        className="w-full h-full min-h-[240px] object-cover shadow-2xl rounded-xl border border-slate-200"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <div className="hidden w-full h-full min-h-[240px] px-4 border border-dashed border-blue-500/50 rounded-xl bg-white flex flex-col items-center justify-center text-blue-600 font-mono text-sm leading-relaxed text-center shadow-2xl">
        <div className="font-bold mb-2">IMAGE UPLOAD REQUIRED</div>
        <div>좌측 파일 탐색기를 통해<br/>업로드하신 이미지를<br/><span className="text-slate-900 bg-blue-100/30 px-2 py-1 rounded mt-1 inline-block">public/main-visual.jpg</span><br/>경로에 저장해주세요.</div>
      </div>
    </section>

    {/* Core Technologies */}
    <section className="md:col-span-8 bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
      <SectionHeading className="!text-slate-900 mb-2 flex items-center">
        <span className="w-1 h-6 bg-blue-500 mr-3 inline-block"></span>
        Core Technologies
      </SectionHeading>
      <p className="text-blue-800 text-sm mb-8">
        자사의 모델링, 시뮬레이션, 최적화 및 가상현실 기술은 다음과 같은 업무 수행을 지원합니다.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SITE_DATA.technologies.map((tech, idx) => (
          <div key={tech.id} className="bg-blue-50 p-5 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors flex items-start gap-4">
            <div className="text-blue-600 p-2 bg-blue-100 rounded-lg shrink-0">
              {tech.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] text-blue-600 font-mono">0{idx + 1}</span>
                <h3 className="text-base font-bold text-slate-900">{tech.title}</h3>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Customer Benefits */}
    <section className="md:col-span-4 bg-slate-100 rounded-2xl p-6 md:p-8 border border-slate-200 flex flex-col justify-center">
      <SectionHeading className="!text-slate-900 mb-2 text-xl">Customer Benefits</SectionHeading>
      <p className="text-blue-600 text-xs font-bold uppercase mb-6">Our Purpose</p>
      <div className="space-y-3">
        {SITE_DATA.benefits.map((benefit) => (
          <div key={benefit.id} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 transition-colors shadow-sm">
            <div className="text-green-600 shrink-0">
              {benefit.icon}
            </div>
            <h4 className="font-semibold text-sm text-slate-900">{benefit.title}</h4>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// --- Industries View ---
const ViewIndustries = ({ onSelectIndustry }: { onSelectIndustry: (id: string) => void }) => (
  <div className="pt-16 pb-24 max-w-7xl mx-auto px-4 md:px-6">
    <div className="text-center mb-12 max-w-3xl mx-auto">
      <SectionHeading align="center">다양한 산업분야의 프로젝트 수행 경험</SectionHeading>
      <p className="text-lg text-slate-600">
        (주)다이나믹소프트는 수십 년간 축적된 엔지니어링 전문성을 바탕으로 각 산업의 특수성을 완벽히 이해하고, 최적화된 디지털 솔루션을 제공합니다.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SITE_DATA.industries.map((ind) => {
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
        const imageFileName = fileMap[ind.id] || `${ind.id}.png`;

        return (
        <button 
          key={ind.id} 
          onClick={() => onSelectIndustry(ind.id)}
          className="text-left w-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          {/* Industry Image */}
          <div className="w-full h-48 border-b border-slate-200 bg-white relative">
            <img 
              src={`/${imageFileName}?v=${Date.now()}`}
              alt={ind.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-blue-600 font-mono text-[10px] sm:text-xs leading-relaxed text-center px-4">
              <div className="font-bold mb-1 opacity-70">이미지 첨부 필요</div>
              <div>경로: <span className="text-slate-900 bg-blue-100/30 px-1 py-0.5 rounded inline-block">public/{imageFileName}</span></div>
            </div>
          </div>
          <div className="p-6 flex-1">
            <div className="flex items-center justify-between mb-4 text-blue-600">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                {ind.icon} {ind.title}
              </h3>
              <ChevronRight className="w-5 h-5 opacity-70" />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{ind.desc}</p>
          </div>
        </button>
        );
      })}
    </div>
  </div>
);

// --- Products View ---
const ViewProducts = () => (
  <div className="pt-16 pb-24 space-y-16">
    {/* Product Hero */}
    <section className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="inline-block py-1 px-3 bg-blue-100/60 text-blue-800 font-mono text-xs tracking-wider rounded border border-slate-200 mb-6 uppercase">
          {SITE_DATA.product.subtitle}
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          WITNESS<br/><span className="text-blue-500">HORIZON</span>
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed mb-8">
          {SITE_DATA.product.desc}
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-2 font-bold text-sm">
            Request Demo <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-transparent text-blue-800 border border-blue-300 hover:border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50/50 transition-colors flex items-center gap-2 font-bold text-sm">
            Technical Specs
          </button>
        </div>
      </div>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
        <img 
          src={`/product-ui.png?v=${Date.now()}`}
          alt="WITNESS HORIZON Mockup" 
          className="w-full aspect-video object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden w-full aspect-video px-4 flex flex-col items-center justify-center text-blue-600 font-mono text-sm leading-relaxed text-center">
          <div className="font-bold mb-2 opacity-70">IMAGE UPLOAD REQUIRED</div>
          <div>경로: <span className="text-slate-900 bg-blue-100/30 px-2 py-1 rounded inline-block mt-1">public/product-ui.png</span></div>
        </div>
      </div>
    </section>

    {/* Architecture Features */}
    <section className="bg-slate-50 py-20 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading>Predictive Modeling Architecture</SectionHeading>
        <p className="text-slate-600 max-w-2xl mb-12">
          Engineered for absolute structural integrity, WITNESS HORIZON combines vast datasets with unparalleled spatial rendering capabilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SITE_DATA.product.features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 transition-colors hover:border-blue-300">
              <div className="bg-blue-100/60 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* System Requirements */}
    <section className="max-w-5xl mx-auto px-4 md:px-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">System Requirements</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-white text-blue-800 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Component</th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Minimum Specification</th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Recommended (3D Workloads)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-slate-50 hover:bg-slate-50 transition-colors duration-300">
            {SITE_DATA.product.specs.map((spec, idx) => (
              <tr key={idx} className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-700 flex items-center gap-3">
                  <span className="text-blue-500">{spec.icon}</span> {spec.component}
                </td>
                <td className="px-6 py-4 text-slate-500 font-mono text-xs">{spec.min}</td>
                <td className="px-6 py-4 text-slate-500 font-mono text-xs">{spec.rec || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </div>
);

// --- Support View ---
const ViewSupport = () => (
  <div className="pt-16 pb-24 max-w-7xl mx-auto px-4 md:px-6">
    <SectionHeading align="center">Customer Support & Contact Us</SectionHeading>
    <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
      고객 여러분의 제품, 서비스 관련 문의 및 지원 요청을 환영합니다.
      언제든 아래 채널로 연락해주시면 빈틈없이 신속하게 답변해 드리겠습니다.
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Info */}
      <div className="lg:col-span-1 space-y-8 bg-gradient-to-br from-blue-600 to-blue-500 text-white p-8 md:p-12 border-none rounded-2xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 pointer-events-none" />
        <h3 className="text-2xl font-bold mb-8 relative z-10 text-white">Direct Contact</h3>
        
        <div className="flex items-start gap-4 relative z-10">
          <Mail className="w-6 h-6 text-white mt-1" />
          <div>
            <p className="text-sm font-medium text-blue-100 mb-1 tracking-widest uppercase">Email Support</p>
            <a href={`mailto:${SITE_DATA.contact.email}`} className="text-base text-white hover:text-blue-200 transition-colors">{SITE_DATA.contact.email}</a>
          </div>
        </div>

        <div className="flex items-start gap-4 relative z-10">
          <Phone className="w-6 h-6 text-white mt-1" />
          <div>
            <p className="text-sm font-medium text-blue-100 mb-1 tracking-widest uppercase">Phone Support</p>
            <a href={`tel:${SITE_DATA.contact.tel.replace(/-/g, '')}`} className="text-base text-white hover:text-blue-200 transition-colors">{SITE_DATA.contact.tel}</a>
          </div>
        </div>

        <div className="flex items-start gap-4 relative z-10">
          <Clock className="w-6 h-6 text-white mt-1" />
          <div>
            <p className="text-sm font-medium text-blue-100 mb-1 tracking-widest uppercase">Business Hours</p>
            <p className="text-base text-white">{SITE_DATA.contact.hours}</p>
          </div>
        </div>
        
        <div className="mt-12 pt-12 border-t border-blue-400/30 relative z-10">
           {/* ID: #youtube-link - Requested by markdown */}
           <a href="#youtube" id="youtube-link" className="inline-flex items-center gap-2 text-blue-600 bg-white hover:bg-blue-50 px-6 py-3 rounded font-bold text-sm transition-colors w-full justify-center">
             Watch YouTube Guides
           </a>
        </div>
      </div>

      {/* Form */}
      <div className="lg:col-span-2 bg-white border border-slate-200 p-8 md:p-10 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-blue-800 tracking-wider uppercase mb-2">Full Name</label>
              <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 bg-white border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-blue-800 tracking-wider uppercase mb-2">Company</label>
              <input type="text" placeholder="Your company name" className="w-full px-4 py-3 bg-white border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-blue-800 tracking-wider uppercase mb-2">Email Address</label>
            <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 bg-white border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-blue-800 tracking-wider uppercase mb-2">Message</label>
            <textarea rows={6} placeholder="How can we help you?" className="w-full px-4 py-3 bg-white border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400 resize-none"></textarea>
          </div>
          <div className="flex justify-end pt-4">
            <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-500 transition-colors flex items-center gap-2 text-sm">
              Submit Request <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

// ==========================================
// 4. 메인 App 컴포넌트 (SPA 쉘)
// ==========================================
export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // 모바일 메뉴 토글 상태 (필요 시 확장 가능)
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedIndustryId, setSelectedIndustryId] = useState<string | null>(null);

  const renderView = () => {
    switch (activeTab) {
      case 'home': return <ViewHome />;
      case 'industries': return <ViewIndustries onSelectIndustry={(id) => { setSelectedIndustryId(id); setActiveTab('industry_detail'); }}/>;
      case 'industry_detail': return <IndustryDetail industryId={selectedIndustryId!} onBack={() => { setActiveTab('industries'); setSelectedIndustryId(null); }} />;
      case 'products': return <ViewProducts />;
      case 'support': return <ViewSupport />;
      default: return <ViewHome />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800 selection:bg-blue-500/30 selection:text-slate-900 overflow-x-hidden">
      
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* 로고 영역 - Image 1 */}
          <div 
            className="cursor-pointer transition-opacity hover:opacity-80 flex items-center"
            onClick={() => setActiveTab('home')}
          >
            {/* ID: #logo - Hotlink Placeholder */}
            {/* 실제 로고 이미지 교체 영역 (logo.png) */}
            <div id="company-logo" className="flex items-center">
              <LogoWithFallback type="header" />
            </div>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8">
            {SITE_DATA.nav.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm font-medium transition-colors relative py-2 ${
                  activeTab === item.id ? 'text-slate-900' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-blue-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* 우측 유틸 (문의버튼) */}
          <div className="hidden md:block">
            <button 
              onClick={() => setActiveTab('support')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded text-sm transition-colors font-semibold"
            >
              교육 서비스 신청
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area with AnimatePresence for SPA transitions */}
      <main className="flex-grow flex flex-col relative top-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex-grow w-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 text-[11px] text-blue-600/70 font-mono py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <LogoWithFallback type="footer" />
            </div>
            <p className="max-w-sm leading-relaxed mb-4 text-slate-400">
              {SITE_DATA.tagline}<br />
              고객이 미래를 예측하고 올바른 결정을 할 수 있도록 돕겠습니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-700 font-semibold mb-4 uppercase">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Phone className="w-3 h-3" /> TEL: {SITE_DATA.contact.tel}</li>
              <li className="flex items-center gap-2"><Mail className="w-3 h-3" /> MAIL: {SITE_DATA.contact.email}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-700 font-semibold mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setActiveTab('products')} className="hover:text-blue-800 transition-colors">Products</button></li>
              <li><button onClick={() => setActiveTab('support')} className="hover:text-blue-800 transition-colors">Support</button></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-4 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 uppercase">
          <p>{SITE_DATA.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-800 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-800 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
