# DynamicSoft 프로젝트 분석서

## 프로젝트 개요
- **프로젝트명**: 다이나믹소프트 (DynamicSoft) 홈페이지
- **주요 목적**: 정밀 엔지니어링, 시뮬레이션 솔루션, Predictive Modeling 분야의 기술과 서비스를 소개하는 반응형 SPA(Single Page Application) 웹사이트
- **주요 타겟**: 자동차, 제조업, 국방, 오일&가스, 항공/물류 등 극한 환경 및 고신뢰성이 필요한 B2B 산업군
- **버전**: V1 (React 19 + Vite 기반)

## 기술 스택 및 환경
- **프레임워크**: React (v19) + Vite
- **언어**: TypeScript
- **스타일링**: Tailwind CSS (v4)
- **아이콘**: Lucide React
- **애니메이션**: Motion (Framer Motion v12)로 부드러운 화면 전환과 UI 인터랙션 구현

## 주요 페이지 및 메뉴 (SPA 뷰)
SPA 형태로 구성되어 React 단일 페이지에서 상태(`activeTab`) 변경에 따라 화면을 전환합니다.

1. **Home (메인)**
   - 핵심 비전과 "Core Technologies" (AI-Powered Insights, Real-Time Sync 등)를 소개합니다.
   - 제품 UI 시뮬레이션 및 아키텍처 스펙 정보가 포함되어 있습니다.

2. **산업분야 (Industries)**
   - "자동차", "오일&가스", "제조업", "국방", "원자력" 등 9개 산업분야별 솔루션 목록을 카드형 UI로 제공합니다.
   - 선택 시 `IndustryDetail` 컴포넌트를 통해 해당 산업 분야의 상세 정보와 적용 레퍼런스를 보여줍니다.

3. **제품안내 (Products)**
   - 고정밀 구조 해석 시스템 (WITNESS HORIZON) 및 제품 소개 영역을 담고 있습니다.

4. **고객지원 (Support)**
   - 직접 문의(Email, Phone) 및 폼(이름, 회사명, 이메일, 내용)을 통한 CS 영역과 '교육 서비스 신청' 등을 제공합니다.

## 디렉토리 구조 및 주요 파일
- `package.json`: React, Vite, TailwindCSS 4, Motion 라이브러리 등 의존성 명시
- `src/App.tsx`: 핵심 라우팅(Tab State 기반) 및 대부분의 단일 뷰(ViewHome, ViewIndustries, ViewProducts, ViewSupport 등)가 포함된 Main 쉘 로직. 모바일 최적화를 위한 네비게이션 드롭다운 상태 적용.
- `src/components/IndustryDetail.tsx`: 세부 산업분야를 보여주기위한 동적인 컴포넌트, 이미지 파일(`ind-*.jpg` 등) 매핑 로직 포함.
- `public/`: 홈페이지에서 사용되는 로고 스와이프 이미지 및 기타 에셋 파일(`main-visual.jpg`, `product-ui.png` 등) 보관.

## 모바일 최적화 (Responsive Design)
- **그리드 시스템**: Tailwind CSS의 `md:`, `lg:` 프리픽스를 활용하여 데스크탑과 모바일에서 최적화된 그리드 컬럼 수를 조절 (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3` 등).
- **네비게이션 (GNB)**: 
  - 데스크탑에서는 가로형 탭 UI
  - 모바일에서는 햄버거 메뉴(`Menu`, `X` 아이콘)와 드롭다운 애니메이션 패널 적용. 상태값 `isMobileMenuOpen`을 통해 열림/닫힘 처리

## 테마 및 UI 패턴
- **컬러 시스템**: 신뢰감 있는 밝은 톤 (Light Mode) 기본 제공 (`bg-slate-50`, `text-slate-800`, `blue-600` 포인트 컬러 사용)
- **컴포넌트 특징**: 모션 트랜지션, 곡선/테두리 라운딩(`rounded-2xl`, `rounded-full`), Glassmorphism 효과(`backdrop-blur`)를 사용하여 모던하고 기업적인 브랜드 이미지 구축.
