// Story-mode content: advanced AWS services (container/AI/data/security),
// a narrative arc with mentor characters, and story-framed advanced-certification
// (SAP / Specialty) questions. Data only; flow + scoring live in aws-engine.js.
import { AWS_SERVICES, AWS_CATEGORIES } from './aws-content.js';

// ---- advanced services (merge into the shared catalog) -------------------
export const ADV_SERVICES = {
  // containers
  ecs:   { id: 'ecs',   name: 'Amazon ECS',      cat: 'container', role: '컨테이너 오케스트레이션', desc: 'AWS 네이티브 컨테이너 오케스트레이터. 태스크·서비스로 컨테이너를 배포하며 EC2 또는 Fargate에서 실행한다.' },
  eks:   { id: 'eks',   name: 'Amazon EKS',      cat: 'container', role: '관리형 쿠버네티스', desc: '관리형 Kubernetes 컨트롤 플레인. 표준 K8s 워크로드·에코시스템을 그대로 쓰되 운영 부담을 줄인다.' },
  fargate:{ id: 'fargate', name: 'AWS Fargate',  cat: 'container', role: '서버리스 컨테이너', desc: 'EC2 인스턴스를 직접 관리하지 않고 컨테이너를 실행하는 서버리스 컴퓨트 엔진. ECS/EKS와 함께 쓴다.' },
  ecr:   { id: 'ecr',   name: 'Amazon ECR',      cat: 'container', role: '컨테이너 레지스트리', desc: '컨테이너 이미지를 저장·스캔·배포하는 완전관리형 레지스트리. ECS/EKS의 이미지 소스.' },
  // AI/ML
  bedrock:  { id: 'bedrock',  name: 'Amazon Bedrock',  cat: 'ai', role: '생성형 AI (파운데이션 모델)', desc: '기반 모델(LLM 등)을 API로 호출하는 서버리스 생성형 AI 서비스. 파인튜닝·RAG·에이전트 지원.' },
  sagemaker:{ id: 'sagemaker',name: 'Amazon SageMaker',cat: 'ai', role: 'ML 학습/배포 플랫폼', desc: '커스텀 ML 모델의 데이터 준비·학습·튜닝·배포·모니터링을 아우르는 완전관리형 ML 플랫폼.' },
  rekognition:{ id:'rekognition',name:'Amazon Rekognition',cat:'ai', role:'이미지/영상 분석', desc:'사전학습 비전 API. 객체·얼굴·텍스트·부적절 콘텐츠 탐지를 코드 없이 수행한다.' },
  comprehend:{ id:'comprehend',name:'Amazon Comprehend',cat:'ai', role:'자연어 처리(NLP)', desc:'텍스트에서 감정·개체·핵심구·언어를 추출하는 관리형 NLP 서비스.' },
  textract: { id:'textract', name:'Amazon Textract', cat:'ai', role:'문서 텍스트 추출(OCR)', desc:'스캔 문서·양식·표에서 텍스트와 구조화 데이터를 추출하는 OCR/문서 이해 서비스.' },
  // data & analytics
  kinesis:  { id:'kinesis',  name:'Amazon Kinesis',  cat:'analytics', role:'실시간 스트리밍', desc:'대규모 실시간 스트리밍 데이터를 수집·처리하는 서비스. 로그·이벤트·클릭스트림 인제스트.' },
  glue:     { id:'glue',     name:'AWS Glue',        cat:'analytics', role:'서버리스 ETL', desc:'서버리스 ETL 및 데이터 카탈로그. 소스 데이터를 추출·변환·적재하고 스키마를 관리한다.' },
  redshift: { id:'redshift', name:'Amazon Redshift', cat:'analytics', role:'데이터 웨어하우스', desc:'페타바이트급 컬럼형 데이터 웨어하우스. 복잡한 분석 쿼리를 대규모로 수행한다.' },
  athena:   { id:'athena',   name:'Amazon Athena',   cat:'analytics', role:'S3 SQL 쿼리(서버리스)', desc:'S3의 데이터를 표준 SQL로 직접 쿼리하는 서버리스 대화형 분석. 인프라 관리 불필요.' },
  emr:      { id:'emr',      name:'Amazon EMR',      cat:'analytics', role:'빅데이터 처리(Spark/Hadoop)', desc:'Spark·Hadoop 등 오픈소스 빅데이터 프레임워크를 대규모 클러스터로 실행한다.' },
  lakeformation:{id:'lakeformation',name:'AWS Lake Formation',cat:'analytics',role:'데이터 레이크 거버넌스', desc:'데이터 레이크 구축과 세분화된 접근 제어·거버넌스를 중앙에서 관리한다.' },
  opensearch:{ id:'opensearch',name:'Amazon OpenSearch',cat:'analytics', role:'검색/로그 분석', desc:'로그·텍스트를 인덱싱해 검색·분석·대시보드를 제공하는 서비스(Elasticsearch 호환).' },
  // security
  iam:      { id:'iam',      name:'AWS IAM',         cat:'security', role:'자격 증명/권한', desc:'사용자·역할·정책으로 누가 무엇을 할 수 있는지 제어하는 접근 관리의 근간.' },
  kms:      { id:'kms',      name:'AWS KMS',         cat:'security', role:'암호화 키 관리', desc:'암호화 키를 생성·관리·회전한다. S3·EBS·RDS 등의 저장 데이터 암호화에 통합된다.' },
  guardduty:{ id:'guardduty',name:'Amazon GuardDuty',cat:'security', role:'위협 탐지', desc:'로그·네트워크·계정 활동을 ML로 분석해 악성 활동·이상 징후를 탐지하는 서비스.' },
  secretsmanager:{id:'secretsmanager',name:'AWS Secrets Manager',cat:'security',role:'비밀 관리/회전', desc:'DB 자격증명·API 키 등 비밀을 안전하게 저장하고 자동 회전한다. 코드에 하드코딩 방지.' },
  shield:   { id:'shield',   name:'AWS Shield',      cat:'security', role:'DDoS 방어', desc:'네트워크·전송 계층 DDoS 공격을 방어한다. Shield Advanced는 상시 대응과 비용 보호를 제공.' },
  macie:    { id:'macie',    name:'Amazon Macie',    cat:'security', role:'민감정보 탐지', desc:'ML로 S3의 개인정보(PII) 등 민감 데이터를 자동 발견·분류·보호한다.' },
  cloudtrail:{id:'cloudtrail',name:'AWS CloudTrail', cat:'security', role:'API 감사 로그', desc:'계정의 모든 API 호출을 기록하는 거버넌스·감사·규정준수 로그. 누가 언제 무엇을 했는지 추적.' },
  // integration extras used in stories
  stepfunctions:{id:'stepfunctions',name:'AWS Step Functions',cat:'integration',role:'워크플로 오케스트레이션', desc:'여러 서비스·함수를 상태 머신으로 조율하는 서버리스 워크플로.' },
  eventbridge:{id:'eventbridge',name:'Amazon EventBridge',cat:'integration',role:'이벤트 버스', desc:'서비스 간 이벤트를 규칙 기반으로 라우팅하는 서버리스 이벤트 버스.' },
};

// extra category colors (match AWS category hues)
export const ADV_CATEGORIES = {
  container:  { name: '컨테이너',       color: '#ed7100' },
  ai:         { name: 'AI/ML',          color: '#01a88d' },
  analytics:  { name: '데이터/분석',     color: '#8c4fff' },
};

// Merge advanced services/categories into the shared catalog (idempotent).
export function mergeAdvanced() {
  Object.assign(AWS_SERVICES, ADV_SERVICES);
  Object.assign(AWS_CATEGORIES, ADV_CATEGORIES);
}

// ---- mentors -------------------------------------------------------------
export const MENTORS = {
  nova:  { id: 'nova',  name: '노바', title: '컨테이너 리드', icon: 'char_nova.webp', color: '#1a7a7a' },
  rai:   { id: 'rai',   name: '라이', title: 'AI 엔지니어',   icon: 'char_rai.webp',  color: '#8c4fff' },
  dara:  { id: 'dara',  name: '다라', title: '데이터 아키텍트', icon: 'char_dara.webp', color: '#7aa116' },
  sable: { id: 'sable', name: '세이블', title: '보안 스페셜리스트', icon: 'char_sable.webp', color: '#dd344c' },
};

// ---- story chapters ------------------------------------------------------
// Each chapter: mentor, scene (cutscene lines), then questions[].
// Questions are 'puzzle' (fill a blank in a mini-architecture) or 'mcq' (scenario).
// All framed narratively. Advanced-cert difficulty (SAP / Specialty level).
export const STORY = {
  intro: {
    title: '넥서스 테크: 클라우드 위기 대응팀',
    lines: [
      '3년 차가 된 아키는 이제 넥서스 테크의 "클라우드 위기 대응팀"에 합류했다.',
      '단순 설계를 넘어, 실제 서비스에서 터지는 컨테이너·AI·데이터·보안 난제를 해결해야 한다.',
      '네 명의 스페셜리스트가 각 분야의 위기 현장에서 아키를 시험한다. 모든 챕터를 통과하면 사내 "클라우드 프로" 인증이 발급된다.',
    ],
  },
  chapters: [
    {
      id: 'container',
      title: '챕터 1 — 컨테이너 대이주',
      mentor: 'nova',
      badge: 'SAP / DevOps',
      scene: [
        '노바: "아키, 우리 결제 서비스가 아직도 거대한 모놀리식이야. 블랙프라이데이가 2주 남았는데 이대로면 못 버텨."',
        '노바: "컨테이너로 쪼개서 옮긴다. 인프라 관리 부담은 최소로, 확장은 자동으로. 네 판단이 필요해."',
      ],
      questions: [
        {
          type: 'mcq', kind: 'scenario',
          question: '결제팀은 서버(EC2) 관리를 전혀 하고 싶지 않고, 컨테이너만 신경 쓰고 싶다. 어떤 실행 방식이 가장 적합한가?',
          options: ['AWS Fargate (서버리스 컨테이너)', 'EC2 시작 유형으로 직접 관리', 'Lambda로 전부 재작성', 'EKS 자체 관리 노드그룹'],
          answer: 0,
          explain: 'Fargate는 EC2를 프로비저닝·패치·스케일링할 필요 없이 컨테이너만 정의하면 실행되는 서버리스 방식이다. "서버 관리 없음" 요구에 정확히 부합한다.',
        },
        {
          type: 'mcq', kind: 'scenario',
          question: '이미 온프레미스에서 표준 Kubernetes로 운영 중이고, 기존 K8s 매니페스트·툴링을 그대로 재사용하려 한다. 무엇을 선택할까?',
          options: ['Amazon EKS', 'Amazon ECS', 'AWS Batch', 'Elastic Beanstalk'],
          answer: 0,
          explain: 'EKS는 표준 Kubernetes API를 제공하므로 기존 매니페스트·헬름 차트·에코시스템을 그대로 쓸 수 있다. ECS는 AWS 고유 모델이라 재작성이 필요하다.',
        },
        {
          type: 'puzzle',
          title: '컨테이너 배포 파이프라인',
          brief: '개발자가 이미지를 푸시하면 → 레지스트리에 저장 → 오케스트레이터가 Fargate로 배포한다. 빈칸을 채워라.',
          nodes: [
            { key: 'dev', label: '개발자 CI 빌드', x: 0.5, y: 0.1, service: 'stepfunctions', tier: 'compute' },
            { key: 'reg', label: '이미지 저장·스캔', x: 0.5, y: 0.38, service: null, blank: true },
            { key: 'orch', label: '오케스트레이션', x: 0.5, y: 0.64, service: null, blank: true },
            { key: 'run', label: '서버리스 실행', x: 0.5, y: 0.9, service: 'fargate', tier: 'compute' },
          ],
          flow: [['dev', 'reg'], ['reg', 'orch'], ['orch', 'run']],
          blanks: {
            reg:  { answer: 'ecr', options: ['ecr', 's3', 'dynamodb', 'glue'], explain: 'ECR은 컨테이너 이미지를 저장·취약점 스캔·배포하는 전용 레지스트리다. S3는 오브젝트 스토리지로 이미지 레지스트리 기능이 없다.' },
            orch: { answer: 'ecs', options: ['ecs', 'lambda', 'redshift', 'sns'], explain: 'ECS가 태스크·서비스로 컨테이너를 오케스트레이션하며 Fargate를 실행 대상으로 삼는다.' },
          },
        },
        {
          type: 'mcq', kind: 'scenario',
          question: '컨테이너가 DB 비밀번호를 필요로 한다. 이미지나 환경변수에 하드코딩하지 않고 안전하게 주입하려면?',
          options: ['Secrets Manager에서 런타임에 주입', '이미지 레이어에 평문 저장', 'ECR 태그에 기록', 'S3 공개 버킷에 저장'],
          answer: 0,
          explain: 'Secrets Manager는 비밀을 안전 저장하고 자동 회전하며, ECS 태스크 정의가 런타임에 안전하게 참조한다. 하드코딩은 유출 위험이 크다.',
        },
      ],
    },
    {
      id: 'ai',
      title: '챕터 2 — 지능형 고객 지원',
      mentor: 'rai',
      badge: 'AI/ML Specialty',
      scene: [
        '라이: "고객 지원팀이 문의 폭탄에 파묻혔어. 영수증 이미지 판독, 문의 감정 분석, 자동 답변… 사람 손으론 무리야."',
        '라이: "각 문제에 딱 맞는 AI 서비스를 골라줘. 오버엔지니어링은 금물이야."',
      ],
      questions: [
        {
          type: 'mcq', kind: 'scenario',
          question: '고객이 업로드한 영수증·청구서 이미지에서 금액·항목 같은 구조화된 텍스트를 추출해야 한다. 가장 적합한 서비스는?',
          options: ['Amazon Textract', 'Amazon Rekognition', 'Amazon Comprehend', 'Amazon Translate'],
          answer: 0,
          explain: 'Textract는 문서·양식·표에서 텍스트와 구조(키-값, 표)를 추출하는 OCR/문서 이해 서비스다. Rekognition은 일반 이미지(객체·얼굴) 분석용이다.',
        },
        {
          type: 'mcq', kind: 'scenario',
          question: '수천 건의 고객 리뷰에서 긍정/부정 감정과 핵심 키워드를 자동 분석하려면?',
          options: ['Amazon Comprehend', 'Amazon Textract', 'Amazon Polly', 'Amazon SageMaker 커스텀 학습'],
          answer: 0,
          explain: 'Comprehend는 감정·개체·핵심구 추출을 제공하는 관리형 NLP다. 사전학습으로 즉시 쓸 수 있어, 커스텀 SageMaker 학습은 이 요구엔 과하다.',
        },
        {
          type: 'mcq', kind: 'scenario',
          question: 'FAQ를 학습한 챗봇이 자연스러운 답변을 생성하길 원한다. 모델을 직접 학습·운영하지 않고 파운데이션 모델로 빠르게 구현하려면?',
          options: ['Amazon Bedrock', 'Amazon SageMaker로 LLM 처음부터 학습', 'Amazon EMR', 'Amazon Rekognition'],
          answer: 0,
          explain: 'Bedrock은 기반 모델(LLM)을 API로 호출하고 RAG·에이전트를 붙일 수 있는 서버리스 생성형 AI다. LLM을 처음부터 학습하는 것은 비용·시간이 비현실적이다.',
        },
        {
          type: 'mcq', kind: 'scenario',
          question: '회사 고유 데이터로 예측 모델(이탈 예측 등)을 커스텀 학습·튜닝·배포하고 파이프라인을 관리해야 한다. 중심 서비스는?',
          options: ['Amazon SageMaker', 'Amazon Bedrock', 'Amazon Comprehend', 'AWS Glue'],
          answer: 0,
          explain: 'SageMaker는 데이터 준비→학습→튜닝→배포→모니터링 전 과정을 다루는 커스텀 ML 플랫폼이다. Bedrock은 기성 파운데이션 모델 활용에 가깝다.',
        },
      ],
    },
    {
      id: 'data',
      title: '챕터 3 — 데이터 레이크 구축',
      mentor: 'dara',
      badge: 'Data Analytics Specialty',
      scene: [
        '다라: "실시간 클릭스트림이 초당 수만 건씩 쏟아지는데, 우린 그걸 버리고 있어. 분석팀은 데이터 레이크를 원해."',
        '다라: "수집 → 저장 → 변환 → 분석까지, 각 단계에 맞는 서비스를 정확히 배치해. 서버리스를 우선해."',
      ],
      questions: [
        {
          type: 'puzzle',
          title: '실시간 분석 파이프라인',
          brief: '실시간 이벤트 → 스트림 수집 → 데이터 레이크(S3) 저장 → 변환/카탈로그 → SQL 분석. 빈칸을 채워라.',
          nodes: [
            { key: 'src', label: '클릭스트림 이벤트', x: 0.5, y: 0.08, service: 'eventbridge', tier: 'integration' },
            { key: 'stream', label: '실시간 수집', x: 0.5, y: 0.3, service: null, blank: true },
            { key: 'lake', label: '데이터 레이크 저장', x: 0.5, y: 0.52, service: 's3', tier: 'storage' },
            { key: 'etl', label: 'ETL·카탈로그', x: 0.5, y: 0.72, service: null, blank: true },
            { key: 'query', label: '서버리스 SQL 분석', x: 0.5, y: 0.92, service: null, blank: true },
          ],
          flow: [['src', 'stream'], ['stream', 'lake'], ['lake', 'etl'], ['etl', 'query']],
          blanks: {
            stream: { answer: 'kinesis', options: ['kinesis', 'sqs', 'glue', 'redshift'], explain: 'Kinesis는 초당 대규모 실시간 스트리밍 데이터를 수집한다. SQS는 메시지 큐로 대규모 스트리밍 분석 인제스트에는 Kinesis가 표준이다.' },
            etl:    { answer: 'glue', options: ['glue', 'emr', 'athena', 'lambda'], explain: 'Glue는 서버리스 ETL과 데이터 카탈로그(스키마)를 제공한다. EMR도 변환 가능하지만 클러스터 관리가 필요해 "서버리스 우선"엔 Glue가 맞다.' },
            query:  { answer: 'athena', options: ['athena', 'redshift', 'dynamodb', 'opensearch'], explain: 'Athena는 S3 데이터를 서버리스로 표준 SQL 쿼리한다. Redshift는 강력하지만 프로비저닝된 웨어하우스라 "서버리스"와 결이 다르다.' },
          },
        },
        {
          type: 'mcq', kind: 'scenario',
          question: '분석팀이 페타바이트급 정형 데이터에 복잡한 조인·집계 쿼리를 지속적으로, 매우 빠르게 실행해야 한다. 무엇이 최적인가?',
          options: ['Amazon Redshift', 'Amazon Athena', 'Amazon DynamoDB', 'Amazon S3 Select'],
          answer: 0,
          explain: 'Redshift는 컬럼형 데이터 웨어하우스로 대규모·반복적 복잡 분석 쿼리에 최적화돼 있다. Athena는 애드혹·간헐적 쿼리에 적합하다.',
        },
        {
          type: 'mcq', kind: 'scenario',
          question: '데이터 레이크의 테이블·컬럼 단위로 부서별 접근 권한을 세분화해 중앙에서 거버넌스하려면?',
          options: ['AWS Lake Formation', 'S3 버킷 정책만 사용', 'IAM 사용자 그룹만 사용', 'KMS 키 정책'],
          answer: 0,
          explain: 'Lake Formation은 데이터 레이크에 테이블·컬럼·행 수준의 세분화된 권한과 중앙 거버넌스를 제공한다. S3 정책만으로는 이 수준의 세밀함이 어렵다.',
        },
        {
          type: 'mcq', kind: 'scenario',
          question: '기존 Apache Spark 잡을 대규모 클러스터에서 그대로 돌려 대량 배치 변환을 하려 한다. 적합한 서비스는?',
          options: ['Amazon EMR', 'Amazon Athena', 'AWS Glue DataBrew', 'Amazon QuickSight'],
          answer: 0,
          explain: 'EMR은 Spark·Hadoop 등 오픈소스 프레임워크를 대규모 클러스터로 실행한다. 기존 Spark 코드를 그대로 이관하기에 적합하다.',
        },
      ],
    },
    {
      id: 'security',
      title: '챕터 4 — 보안 사고 대응',
      mentor: 'sable',
      badge: 'Security Specialty',
      scene: [
        '세이블: "새벽 3시에 알람이 울렸다. 누군가 우리 계정에서 이상한 API 호출을 하고 있어. 데이터 유출 정황도 있고."',
        '세이블: "탐지·추적·차단·보호. 각 상황에 정확한 무기를 골라. 실수하면 진짜 유출로 이어진다."',
      ],
      questions: [
        {
          type: 'mcq', kind: 'scenario',
          question: '"누가 언제 어떤 API를 호출했는가"를 사후 추적·감사해 침해 경로를 재구성하려면?',
          options: ['AWS CloudTrail', 'Amazon CloudWatch Logs', 'AWS Config', 'Amazon GuardDuty'],
          answer: 0,
          explain: 'CloudTrail은 계정의 모든 API 호출을 기록하는 감사 로그다. 침해 사고의 "누가·언제·무엇을"을 추적하는 1차 증거다.',
        },
        {
          type: 'mcq', kind: 'scenario',
          question: '악성 IP·비정상 로그인·크립토마이닝 같은 위협을 ML로 자동 탐지하려면?',
          options: ['Amazon GuardDuty', 'AWS WAF', 'AWS Shield', 'Amazon Inspector'],
          answer: 0,
          explain: 'GuardDuty는 CloudTrail·VPC 흐름·DNS 로그를 ML로 분석해 위협을 지능적으로 탐지한다. WAF/Shield는 예방(웹공격/DDoS) 중심이다.',
        },
        {
          type: 'mcq', kind: 'scenario',
          question: 'S3 버킷에 고객 개인정보(PII)가 실수로 저장됐는지 자동으로 발견·분류해야 한다. 무엇을 쓸까?',
          options: ['Amazon Macie', 'Amazon Rekognition', 'AWS KMS', 'AWS Config'],
          answer: 0,
          explain: 'Macie는 ML로 S3의 민감 데이터(PII 등)를 자동 발견·분류·경고한다. 개인정보 노출 위험 식별의 전용 도구다.',
        },
        {
          type: 'puzzle',
          title: '보안 심층 방어(Defense in Depth)',
          brief: '엣지에서 웹공격 차단 → DDoS 방어 → 저장 데이터 암호화. 각 계층에 맞는 서비스를 채워라.',
          nodes: [
            { key: 'user', label: '사용자 트래픽', x: 0.5, y: 0.08, service: 'route53', tier: 'network' },
            { key: 'ddos', label: 'DDoS 방어', x: 0.5, y: 0.3, service: null, blank: true },
            { key: 'waf', label: '웹 공격 필터', x: 0.5, y: 0.52, service: 'waf', tier: 'security' },
            { key: 'app', label: '애플리케이션', x: 0.5, y: 0.72, service: 'ec2', tier: 'compute' },
            { key: 'enc', label: '저장 데이터 암호화', x: 0.5, y: 0.92, service: null, blank: true },
          ],
          flow: [['user', 'ddos'], ['ddos', 'waf'], ['waf', 'app'], ['app', 'enc']],
          blanks: {
            ddos: { answer: 'shield', options: ['shield', 'guardduty', 'macie', 'cloudtrail'], explain: 'Shield는 네트워크/전송 계층 DDoS 공격을 방어한다. GuardDuty는 탐지, Macie는 데이터 분류로 역할이 다르다.' },
            enc:  { answer: 'kms', options: ['kms', 'iam', 'secretsmanager', 'shield'], explain: 'KMS는 암호화 키를 관리하며 S3·EBS·RDS의 저장 데이터 암호화에 통합된다. Secrets Manager는 비밀(자격증명) 저장·회전용이다.' },
          },
        },
        {
          type: 'mcq', kind: 'scenario',
          question: '침해 대응 결과, 특정 역할의 권한이 과도했다. 최소 권한 원칙(least privilege)을 적용할 핵심 서비스는?',
          options: ['AWS IAM (역할·정책 세분화)', 'AWS Shield', 'Amazon Macie', 'Amazon Kinesis'],
          answer: 0,
          explain: 'IAM으로 역할·정책을 필요한 최소 권한만 부여하도록 재설계한다. 권한 경계·조건을 활용해 과도한 접근을 제거한다.',
        },
      ],
    },
  ],
  // Certificate metadata shown/issued at completion.
  cert: {
    org: 'NEXUS TECH CLOUD ACADEMY',
    title: '클라우드 프로 인증 (Cloud Pro Certification)',
    domains: ['컨테이너', 'AI/ML', '데이터 분석', '보안'],
  },
};

// Total questions across the story (for progress + scoring reference).
export function storyQuestionCount() {
  return STORY.chapters.reduce((n, c) => n + c.questions.length, 0);
}
