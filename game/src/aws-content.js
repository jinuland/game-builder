// AWS quiz content — service metadata, architecture puzzles (fill-the-blank with
// real AWS service icons), and SAA-style scenario questions. Educational data only;
// scoring/flow logic lives in aws-engine.js.

// AWS service catalog. `icon` maps to game/assets/aws/<icon>.svg. `cat` = category
// (drives palette grouping + icon tint reference). `role` is the one-line job.
export const AWS_SERVICES = {
  route53:     { id: 'route53',     name: 'Amazon Route 53',        cat: 'network', role: 'DNS 및 도메인 라우팅', desc: '관리형 DNS 서비스. 도메인 이름을 IP로 변환하고, 지연·지역·가중치 기반 라우팅과 헬스 체크를 제공한다.' },
  cloudfront:  { id: 'cloudfront',  name: 'Amazon CloudFront',      cat: 'network', role: 'CDN (콘텐츠 전송)', desc: '전 세계 엣지 로케이션에서 정적·동적 콘텐츠를 캐싱해 지연을 줄이는 CDN. S3·ALB 등을 오리진으로 둔다.' },
  elb:         { id: 'elb',         name: 'Elastic Load Balancing', cat: 'network', role: '로드 밸런서', desc: '들어오는 트래픽을 여러 대상(EC2 등)에 분산한다. ALB는 L7(HTTP), NLB는 L4에서 동작한다.' },
  vpc:         { id: 'vpc',         name: 'Amazon VPC',             cat: 'network', role: '가상 네트워크', desc: '논리적으로 격리된 가상 네트워크. 서브넷·라우팅·보안 그룹으로 리소스의 네트워크 경계를 정의한다.' },
  waf:         { id: 'waf',         name: 'AWS WAF',                cat: 'security', role: '웹 방화벽', desc: 'SQL 인젝션·XSS 등 웹 공격을 필터링하는 방화벽. CloudFront·ALB·API Gateway 앞단에 붙는다.' },
  cognito:     { id: 'cognito',     name: 'Amazon Cognito',         cat: 'security', role: '사용자 인증', desc: '웹·모바일 앱의 회원가입/로그인과 소셜·SAML 연동, 토큰 발급을 관리하는 자격 증명 서비스.' },
  ec2:         { id: 'ec2',         name: 'Amazon EC2',             cat: 'compute', role: '가상 서버', desc: '크기 조절 가능한 가상 머신. OS·런타임을 직접 제어하는 전통적 컴퓨트 단위.' },
  autoscaling: { id: 'autoscaling', name: 'EC2 Auto Scaling',       cat: 'compute', role: '자동 확장', desc: '수요에 따라 EC2 인스턴스 수를 자동으로 늘리고 줄여 가용성과 비용을 최적화한다.' },
  lambda:      { id: 'lambda',      name: 'AWS Lambda',             cat: 'compute', role: '서버리스 함수', desc: '서버 관리 없이 코드를 이벤트에 따라 실행하는 서버리스 컴퓨트. 사용한 만큼만 과금.' },
  apigateway:  { id: 'apigateway',  name: 'Amazon API Gateway',     cat: 'compute', role: 'API 관문', desc: 'REST/HTTP/WebSocket API를 생성·게시·인증·스로틀링하는 완전관리형 API 프론트도어.' },
  rds:         { id: 'rds',         name: 'Amazon RDS',             cat: 'database', role: '관계형 DB', desc: 'MySQL·PostgreSQL 등 관계형 데이터베이스의 관리형 서비스. 백업·패치·복제를 자동화한다.' },
  aurora:      { id: 'aurora',      name: 'Amazon Aurora',          cat: 'database', role: '고성능 관계형 DB', desc: 'MySQL/PostgreSQL 호환의 클라우드 네이티브 관계형 DB. RDS보다 높은 성능과 가용성.' },
  dynamodb:    { id: 'dynamodb',    name: 'Amazon DynamoDB',        cat: 'database', role: 'NoSQL DB', desc: '완전관리형 키-값/문서 NoSQL 데이터베이스. 밀리초 지연과 무제한 확장, 서버리스 친화적.' },
  elasticache: { id: 'elasticache', name: 'Amazon ElastiCache',     cat: 'database', role: '인메모리 캐시', desc: 'Redis/Memcached 기반 인메모리 캐시. DB 부하를 줄이고 읽기 응답을 가속한다.' },
  s3:          { id: 's3',          name: 'Amazon S3',              cat: 'storage', role: '오브젝트 스토리지', desc: '내구성 높은 오브젝트 스토리지. 정적 파일·백업·정적 웹사이트 호스팅에 쓰인다.' },
  sqs:         { id: 'sqs',         name: 'Amazon SQS',             cat: 'integration', role: '메시지 큐', desc: '완전관리형 메시지 큐. 생산자와 소비자를 분리(decouple)해 비동기·내결함성 처리를 가능케 한다.' },
  sns:         { id: 'sns',         name: 'Amazon SNS',             cat: 'integration', role: '펍/섭 알림', desc: '발행-구독 메시징. 하나의 메시지를 여러 구독자(Lambda·SQS·이메일 등)에 팬아웃한다.' },
  cloudwatch:  { id: 'cloudwatch',  name: 'Amazon CloudWatch',      cat: 'management', role: '모니터링', desc: '지표·로그·알람을 수집하는 관측 서비스. 임계치 초과 시 Auto Scaling·알림을 트리거한다.' },
};

export const AWS_CATEGORIES = {
  network:     { name: '네트워킹/전송', color: '#8c4fff' },
  security:    { name: '보안/자격증명', color: '#dd344c' },
  compute:     { name: '컴퓨팅',        color: '#ed7100' },
  database:    { name: '데이터베이스',   color: '#3334b9' },
  storage:     { name: '스토리지',      color: '#7aa116' },
  integration: { name: '통합/메시징',   color: '#e7157b' },
  management:  { name: '관리/모니터링',  color: '#c925d1' },
};

export function serviceList() { return Object.values(AWS_SERVICES); }

// Architecture puzzles: a diagram with labeled nodes; some are BLANKS the player fills.
// `nodes`: {key, label, x, y, service|null (null=blank), tier}. `answer` on blanks.
// `flow`: [[fromKey,toKey], ...] request/data flow edges.
// `options` per blank = 1 correct + 3 distractors. `explain` teaches the why.
export const ARCH_PUZZLES = [
  {
    id: 'web3tier',
    title: '3-Tier 웹 애플리케이션',
    brief: '고가용성 웹 서비스를 설계하라. 사용자 요청이 DNS→CDN→로드밸런서→웹서버→DB로 흐른다. 빈칸에 알맞은 AWS 서비스를 채워라.',
    level: 'SAA 기본',
    nodes: [
      { key: 'dns',  label: '사용자 도메인', x: 0.5, y: 0.06, service: 'route53', tier: 'client' },
      { key: 'cdn',  label: '정적 콘텐츠 캐싱', x: 0.5, y: 0.24, service: null, blank: true, tier: 'edge' },
      { key: 'lb',   label: '트래픽 분산', x: 0.5, y: 0.44, service: null, blank: true, tier: 'edge' },
      { key: 'web1', label: '웹/앱 서버', x: 0.32, y: 0.64, service: 'ec2', tier: 'compute' },
      { key: 'web2', label: '웹/앱 서버', x: 0.68, y: 0.64, service: 'ec2', tier: 'compute' },
      { key: 'scale',label: '자동 확장', x: 0.5, y: 0.62, service: null, blank: true, tier: 'compute', badge: true },
      { key: 'db',   label: '관계형 DB (Multi-AZ)', x: 0.5, y: 0.86, service: null, blank: true, tier: 'data' },
    ],
    flow: [['dns', 'cdn'], ['cdn', 'lb'], ['lb', 'web1'], ['lb', 'web2'], ['web1', 'db'], ['web2', 'db']],
    blanks: {
      cdn:  { answer: 'cloudfront', options: ['cloudfront', 's3', 'apigateway', 'vpc'], explain: 'CloudFront는 엣지에서 정적·동적 콘텐츠를 캐싱하는 CDN이다. Route 53 다음, 로드밸런서 앞에 위치해 지연을 줄인다.' },
      lb:   { answer: 'elb', options: ['elb', 'route53', 'sqs', 'lambda'], explain: 'Elastic Load Balancing(ALB)이 다수의 EC2 웹 서버로 L7 트래픽을 분산한다. Route 53은 DNS라 이미 상단에 있다.' },
      scale:{ answer: 'autoscaling', options: ['autoscaling', 'cloudwatch', 'ec2', 'lambda'], explain: 'EC2 Auto Scaling이 수요에 따라 웹 서버 대수를 자동 조절한다. 고가용성·비용 최적화의 핵심.' },
      db:   { answer: 'rds', options: ['rds', 's3', 'dynamodb', 'elasticache'], explain: '관계형 데이터에는 RDS(Multi-AZ)가 적합하다. DynamoDB는 NoSQL, S3는 오브젝트 스토리지라 요구와 맞지 않는다.' },
    },
  },
  {
    id: 'serverlessapi',
    title: '서버리스 REST API',
    brief: '서버를 직접 관리하지 않는 API 백엔드를 설계하라. 클라이언트 → API 관문 → 함수 → NoSQL DB.',
    level: 'SAA 기본',
    nodes: [
      { key: 'client', label: '모바일/웹 클라이언트', x: 0.5, y: 0.08, service: 'cognito', tier: 'client' },
      { key: 'api',    label: 'API 관문', x: 0.5, y: 0.32, service: null, blank: true, tier: 'edge' },
      { key: 'fn',     label: '비즈니스 로직', x: 0.5, y: 0.56, service: null, blank: true, tier: 'compute' },
      { key: 'db',     label: '밀리초 지연 NoSQL', x: 0.5, y: 0.82, service: null, blank: true, tier: 'data' },
    ],
    flow: [['client', 'api'], ['api', 'fn'], ['fn', 'db']],
    blanks: {
      api: { answer: 'apigateway', options: ['apigateway', 'elb', 'cloudfront', 'route53'], explain: 'API Gateway가 REST/HTTP API의 관문 역할을 하며 인증·스로틀링·라우팅을 담당한다. ELB는 서버(EC2)용 로드밸런서다.' },
      fn:  { answer: 'lambda', options: ['lambda', 'ec2', 'autoscaling', 'sqs'], explain: 'Lambda는 서버 없이 이벤트로 코드를 실행하는 서버리스 컴퓨트다. EC2는 서버를 직접 관리해야 하므로 "서버리스"와 배치된다.' },
      db:  { answer: 'dynamodb', options: ['dynamodb', 'rds', 'aurora', 's3'], explain: '밀리초 지연·무제한 확장·서버리스 친화 요구에는 DynamoDB(NoSQL)가 정답. RDS/Aurora는 관계형이라 서버리스 스택과 결이 다르다.' },
    },
  },
  {
    id: 'staticsite',
    title: '정적 웹사이트 + 보안',
    brief: '정적 프론트엔드를 안전하고 빠르게 전 세계에 배포하라.',
    level: 'SAA 기본',
    nodes: [
      { key: 'dns', label: '도메인', x: 0.5, y: 0.08, service: 'route53', tier: 'client' },
      { key: 'waf', label: '웹 공격 차단', x: 0.5, y: 0.3, service: null, blank: true, tier: 'edge' },
      { key: 'cdn', label: '글로벌 캐싱', x: 0.5, y: 0.54, service: 'cloudfront', tier: 'edge' },
      { key: 'origin', label: '정적 파일 저장(오리진)', x: 0.5, y: 0.82, service: null, blank: true, tier: 'data' },
    ],
    flow: [['dns', 'waf'], ['waf', 'cdn'], ['cdn', 'origin']],
    blanks: {
      waf:    { answer: 'waf', options: ['waf', 'cognito', 'vpc', 'elb'], explain: 'AWS WAF가 SQL 인젝션·XSS 등 웹 공격을 CloudFront 앞단에서 필터링한다. Cognito는 인증이지 공격 차단이 아니다.' },
      origin: { answer: 's3', options: ['s3', 'ec2', 'rds', 'dynamodb'], explain: 'S3는 정적 웹사이트 호스팅의 표준 오리진이다. 서버가 필요 없고 내구성이 높다.' },
    },
  },
  {
    id: 'eventdriven',
    title: '이벤트 기반 비동기 처리',
    brief: '주문 폭주에도 버티는 비동기 파이프라인을 설계하라. 생산자와 소비자를 분리(decouple)하는 것이 핵심.',
    level: 'SAA 중급',
    nodes: [
      { key: 'api', label: '주문 수신 API', x: 0.5, y: 0.08, service: 'apigateway', tier: 'edge' },
      { key: 'producer', label: '주문 접수 함수', x: 0.5, y: 0.3, service: 'lambda', tier: 'compute' },
      { key: 'queue', label: '주문 버퍼(디커플링)', x: 0.5, y: 0.52, service: null, blank: true, tier: 'integration' },
      { key: 'worker', label: '주문 처리 함수', x: 0.5, y: 0.74, service: 'lambda', tier: 'compute' },
      { key: 'db', label: '주문 저장', x: 0.5, y: 0.93, service: 'dynamodb', tier: 'data' },
    ],
    flow: [['api', 'producer'], ['producer', 'queue'], ['queue', 'worker'], ['worker', 'db']],
    blanks: {
      queue: { answer: 'sqs', options: ['sqs', 'sns', 'elasticache', 'cloudwatch'], explain: 'SQS 큐가 생산자-소비자를 분리해 트래픽 급증을 버퍼링한다. SNS는 팬아웃(1:N 발행)이라 "버퍼링/디커플링"과 다르다.' },
    },
  },
  {
    id: 'fanout',
    title: '알림 팬아웃',
    brief: '한 이벤트를 여러 시스템(이메일·큐·함수)에 동시에 뿌려야 한다. 어떤 서비스가 1:N 발행에 맞을까?',
    level: 'SAA 중급',
    nodes: [
      { key: 'src', label: '이벤트 소스', x: 0.5, y: 0.1, service: 'lambda', tier: 'compute' },
      { key: 'topic', label: '1:N 발행', x: 0.5, y: 0.36, service: null, blank: true, tier: 'integration' },
      { key: 'q', label: '주문 큐', x: 0.24, y: 0.72, service: 'sqs', tier: 'integration' },
      { key: 'fn', label: '분석 함수', x: 0.5, y: 0.72, service: 'lambda', tier: 'compute' },
      { key: 'mon', label: '지표/알람', x: 0.76, y: 0.72, service: 'cloudwatch', tier: 'management' },
    ],
    flow: [['src', 'topic'], ['topic', 'q'], ['topic', 'fn'], ['topic', 'mon']],
    blanks: {
      topic: { answer: 'sns', options: ['sns', 'sqs', 'apigateway', 'route53'], explain: 'SNS는 발행-구독으로 하나의 메시지를 여러 구독자에게 팬아웃한다. SQS는 1:1 소비 큐라 팬아웃에는 SNS가 정답.' },
    },
  },
  {
    id: 'readscale',
    title: '읽기 부하 분산',
    brief: '읽기 트래픽이 폭증하는 DB를 최적화하라. DB 앞에 무엇을 두어야 반복 조회를 가속할까?',
    level: 'SAA 중급',
    nodes: [
      { key: 'app', label: '앱 서버', x: 0.5, y: 0.12, service: 'ec2', tier: 'compute' },
      { key: 'cache', label: '인메모리 캐시', x: 0.5, y: 0.4, service: null, blank: true, tier: 'database' },
      { key: 'db', label: '관계형 DB', x: 0.5, y: 0.7, service: null, blank: true, tier: 'data' },
    ],
    flow: [['app', 'cache'], ['cache', 'db']],
    blanks: {
      cache: { answer: 'elasticache', options: ['elasticache', 's3', 'dynamodb', 'sqs'], explain: 'ElastiCache(Redis/Memcached)가 자주 읽는 데이터를 메모리에 캐싱해 DB 부하를 줄이고 응답을 가속한다.' },
      db:    { answer: 'aurora', options: ['aurora', 's3', 'sqs', 'cognito'], explain: 'Aurora는 읽기 복제본으로 읽기 확장이 뛰어난 관계형 DB다. S3·SQS는 관계형 DB가 아니다.' },
    },
  },
];

// Pure knowledge quiz: "이 아이콘/서비스의 역할은?" and scenario MCQs.
export const SERVICE_QUIZ = [
  { id: 'q_s3', kind: 'role', service: 's3', question: '이 서비스의 주된 역할은?', options: ['오브젝트 스토리지', '관계형 데이터베이스', '가상 서버', '메시지 큐'], answer: 0, explain: 'S3는 내구성 높은 오브젝트 스토리지다.' },
  { id: 'q_lambda', kind: 'role', service: 'lambda', question: '이 서비스의 주된 역할은?', options: ['서버리스 함수 실행', 'DNS 라우팅', 'CDN 캐싱', '인메모리 캐시'], answer: 0, explain: 'Lambda는 서버 관리 없이 이벤트로 코드를 실행한다.' },
  { id: 'q_dynamo', kind: 'role', service: 'dynamodb', question: '이 서비스의 주된 역할은?', options: ['NoSQL 키-값 DB', '관계형 DB', '로드 밸런서', '웹 방화벽'], answer: 0, explain: 'DynamoDB는 완전관리형 NoSQL 데이터베이스다.' },
  { id: 'q_scenario_decouple', kind: 'scenario', question: '주문 접수와 처리를 분리해 트래픽 급증에도 유실 없이 버티려면?', options: ['SQS 큐로 디커플링', 'RDS에 직접 쓰기', 'EC2 인스턴스 크기 키우기', 'Route 53 가중치 라우팅'], answer: 0, explain: 'SQS 큐가 생산자와 소비자를 분리해 버퍼 역할을 하므로 급증을 흡수한다.' },
  { id: 'q_scenario_static', kind: 'scenario', question: '전 세계 사용자에게 정적 웹을 가장 빠르게 제공하려면 S3 앞에 무엇을 둘까?', options: ['CloudFront (CDN)', 'ElastiCache', 'API Gateway', 'NAT Gateway'], answer: 0, explain: 'CloudFront가 엣지 로케이션에서 캐싱해 지연을 최소화한다.' },
  { id: 'q_scenario_ha', kind: 'scenario', question: '단일 EC2 웹 서버의 고가용성을 높이는 조합으로 가장 적절한 것은?', options: ['ELB + Auto Scaling(다중 AZ)', 'S3 버킷 추가', 'DynamoDB로 이전', 'Lambda로 교체'], answer: 0, explain: '로드밸런서 뒤에 여러 AZ의 EC2를 Auto Scaling으로 두면 장애·부하에 강해진다.' },
];
