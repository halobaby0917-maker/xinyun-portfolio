export type MediaPlaceholder = {
  label: string;
  description: string;
};

export type CaseSection = {
  title: string;
  intro?: string;
  bullets?: string[];
};

export type Project = {
  index: string;
  slug: string;
  title: string;
  englishTitle?: string;
  kind: string;
  tags: string[];
  summary: string;
  cardNote: string;
  facts: string[];
  featured?: boolean;
  liveUrl?: string;
  platformLinks?: Array<{
    label: string;
    url?: string;
    status?: string;
  }>;
  placeholders: MediaPlaceholder[];
  sections: CaseSection[];
};

export const profileLinks = {
  email: {
    label: 'Email',
    value: '2386473063@qq.com',
    url: 'mailto:2386473063@qq.com',
  },
  github: {
    label: 'GitHub',
    value: 'halobaby0917-maker',
    url: 'https://github.com/halobaby0917-maker',
  },
  xiaohongshu: {
    label: 'Xiaohongshu',
    value: '麻辣辣007',
    url: 'https://xhslink.cn/o/1DeFXOwRHUi',
  },
} as const;

export const projects: Project[] = [
  {
    index: '01',
    slug: 'dbti-personality-test',
    title: 'DBTI Personality Test',
    kind: 'Hero product case · 2026.06',
    tags: ['AI Product', '0→1', 'Growth', 'Consumer'],
    summary: '面向年轻用户人格表达与社交传播需求设计的四轴人格测试。',
    cardNote: '32 scenarios → four axes → 16 shareable profiles.',
    facts: ['32 题 · 约 3 分钟', '一周 1,000+ 互动', 'VibeHacks 社区人气奖'],
    featured: true,
    liveUrl: 'https://dbti-test.pages.dev/',
    placeholders: [
      { label: 'Live Product', description: '32 道情境题 · 四轴计分 · 16 种上头人格 · 可生成分享图' },
      { label: 'User Flow', description: '建议放答题 → 计分 → 结果 → 分享路径' },
      { label: 'Metrics', description: '建议放上线一周互动与社区反馈截图' },
      { label: 'Demo Video', description: '建议放 30–45 秒移动端完整体验录屏' },
    ],
    sections: [
      {
        title: 'Overview',
        intro:
          'DBTI 是一个围绕年轻用户人格表达与社交传播需求设计的四轴人格测试。我独立完成从产品框架到网页 MVP 的完整闭环，并通过真实发布验证用户是否愿意完成、讨论与分享。',
      },
      {
        title: 'Problem',
        intro:
          '很多人格测试能提供结论，却没有同时解决三个问题：完成门槛是否足够低、结果是否能形成自我表达、表达是否自然进入社交传播。',
      },
      {
        title: 'Insight',
        intro:
          '年轻用户并不只是在寻找“准确答案”。他们也在寻找一种低成本的自我叙事：既能解释自己，又能成为与朋友开始讨论的媒介。',
      },
      {
        title: 'My Role',
        bullets: [
          '独立定义产品框架与四轴人格体系',
          '完成 32 道题目的设计与计分逻辑',
          '设计结果页的信息层级与分享语境',
          '使用 Codex 等 AI Coding 工具完成网页 MVP',
          '负责上线后的内容传播与用户反馈观察',
        ],
      },
      {
        title: 'Product Decisions',
        bullets: [
          '将完整体验控制在约 3 分钟，减少中途退出',
          '用四轴组合承载差异，而不是只给单一标签',
          '让结果内容同时满足“我是谁”与“我想怎么被看见”',
          '优先交付移动网页，降低首次访问和转发成本',
        ],
      },
      {
        title: 'Process',
        intro:
          '从用户表达场景出发定义题目与维度，再搭建计分和结果映射，随后完成可测试的网页版本。上线后，通过互动数据和社交反馈观察哪些结果最容易触发认同与讨论。',
      },
      {
        title: 'Prototype',
        intro:
          'MVP 覆盖答题、进度、计分、人格结果与分享语境。页面以手机端连续操作为核心，素材可在后续版本中独立替换，不影响产品结构。',
      },
      {
        title: 'Outcome',
        bullets: ['上线后一周获得 1,000+ 互动', '获得 VibeHacks 小红书社区人气奖'],
      },
      {
        title: 'What I Learned',
        intro:
          '消费型 AI 产品的“可用”只是起点。结果是否能成为用户愿意带走的身份语言，决定了产品能否从一次体验进入真实传播。',
      },
    ],
  },
  {
    index: '02',
    slug: 'food-compliance-ai',
    title: '食审 AI',
    englishTitle: 'Food Compliance AI',
    kind: 'B2B product case · 2026.05',
    tags: ['AI Product', 'B2B', 'Compliance', 'Information Architecture'],
    summary: '面向跨境食品卖家的 AI 合规查询工具。',
    cardNote: 'Materials → risk signals → tailored compliance report.',
    facts: ['用户痛点分析', '材料上传 → 风险识别 → 定制报告', '延展代办方撮合 · 工具 → 服务'],
    placeholders: [
      { label: 'User Flow', description: '建议放材料上传到报告交付的完整流程' },
      { label: 'Prototype', description: '建议放风险识别与报告页面 Demo' },
      { label: 'Information Architecture', description: '建议放功能结构与报告信息层级' },
      { label: 'Service Blueprint', description: '建议放工具到专家服务的衔接方式' },
    ],
    sections: [
      {
        title: 'Overview',
        intro:
          '食审 AI 面向跨境食品卖家，将分散、专业且高风险的合规信息整理为一条可操作的决策路径：上传材料，识别风险，获得定制报告与出海建议。',
      },
      {
        title: 'Problem',
        intro:
          '跨境食品卖家面对的并不是单一查询问题。材料是否完整、规则如何对应、风险优先级是什么，以及下一步该找谁解决，往往散落在不同信息源和服务环节中。',
      },
      {
        title: 'Insight',
        intro:
          '用户真正需要的不是更多法规文本，而是把“我现在有什么材料”翻译成“我面临什么风险、下一步做什么”的清晰判断。',
      },
      {
        title: 'My Role',
        bullets: [
          '梳理用户痛点与关键决策场景',
          '设计产品信息架构和核心任务流',
          '完成交互原型与视觉 Demo',
          '探索从轻量查询工具延伸至定制服务的商业化路径',
        ],
      },
      {
        title: 'Product Decisions',
        bullets: [
          '以材料上传作为任务起点，减少用户自行组织专业问题的成本',
          '先给风险分层和证据来源，再给行动建议',
          '把报告设计成决策界面，而不是法规内容堆叠',
          '为高风险或高复杂度场景保留专业服务承接入口',
        ],
      },
      {
        title: 'Process',
        intro:
          '从卖家的实际任务倒推信息结构，梳理输入材料、风险判断、解释依据与行动建议之间的关系，再用原型验证页面是否能支持快速理解与下一步决策。',
      },
      {
        title: 'Prototype',
        intro:
          'Demo 围绕三段式体验展开：材料上传与识别、风险总览与定位、定制报告及出海建议。每一步都控制信息密度，并让关键风险保持可追溯。',
      },
      {
        title: 'Outcome',
        intro:
          '完成从用户问题、信息架构到视觉 Demo 的产品表达，并形成“工具负责初筛、服务承接复杂交付”的商业化假设。',
      },
      {
        title: 'What I Learned',
        intro:
          '在专业 B2B 场景里，AI 的价值不只是给答案，而是降低理解成本、明确风险边界，并把用户带到可信的下一步。',
      },
    ],
  },
  {
    index: '03',
    slug: 'twoher',
    title: '家音 Twoher',
    kind: 'Rapid MVP case',
    tags: ['AI Product', 'Family', 'Communication', 'Rapid MVP'],
    summary: '为“因为亲近，反而难以开启对话”的家庭成员设计沟通入口。',
    cardNote: 'Three modules. One working MVP. Three hours.',
    facts: ['今日 · 长河 · 印记', '3 小时独立完成 MVP 与路演', 'SheNicest Hackathon Top 12'],
    placeholders: [
      { label: 'Prototype', description: '建议放今日、长河、印记三个模块界面' },
      { label: 'Demo Video', description: '建议放核心对话体验录屏' },
      { label: 'Pitch', description: '建议放路演核心问题与方案页' },
    ],
    sections: [
      { title: 'Overview', intro: '家音 Twoher 是一个家庭沟通产品概念，通过“今日、长河、印记”三个模块，为日常对话、长期理解与共同记忆提供不同入口。' },
      { title: 'Problem', intro: '家庭成员并不缺少关系，却常常缺少一个不会显得突兀的对话开场。' },
      { title: 'Insight', intro: '亲密关系中的沟通阻力，往往不是没有内容，而是不知道如何自然地开始。' },
      { title: 'My Role', bullets: ['独立定义产品框架', '设计三个核心模块', '3 小时内完成 MVP 与路演'] },
      { title: 'Product Decisions', bullets: ['“今日”降低即时开口门槛', '“长河”帮助理解长期变化', '“印记”沉淀共同记忆'] },
      { title: 'Outcome', intro: '入选 SheNicest 母亲节 Hackathon Top 12。' },
      { title: 'What I Learned', intro: '极短时间的 MVP 需要先保护最核心的行为闭环，而不是追求功能完整。' },
    ],
  },
  {
    index: '04',
    slug: 'onpoint',
    title: 'ONPOINT',
    kind: 'Product concept',
    tags: ['Wearable', 'Recovery', 'Community'],
    summary: '基于可穿戴数据的恢复力产品，把个人信号与群体支持连接起来。',
    cardNote: 'Personal data, private reflection, collective signal.',
    facts: ['Recovery Score', 'Private Journal', 'Anonymous Community Signal'],
    placeholders: [
      { label: 'Product Screenshot', description: '建议放 Recovery Score 首页' },
      { label: 'Prototype', description: '建议放 Journal 与 Community Signal 交互' },
      { label: 'User Flow', description: '建议放数据 → 反思 → 社区信号路径' },
    ],
    sections: [
      { title: 'Overview', intro: 'ONPOINT 将可穿戴设备的恢复数据转化为更可理解、更具行动感的日常体验，并加入私人记录与匿名社区信号。' },
      { title: 'Problem', intro: '身体数据很多，但数字本身不一定能帮助用户理解状态或持续行动。' },
      { title: 'Insight', intro: '恢复既是个人感受，也需要“我并不孤单”的社会参照，但这种参照必须保护隐私。' },
      { title: 'My Role', bullets: ['完成 PRD', '设计交互 Demo', '完成路演材料'] },
      { title: 'Product Decisions', bullets: ['Recovery Score 提供当下状态入口', 'Private Journal 保留个体解释空间', 'Anonymous Community Signal 提供非暴露式群体支持'] },
      { title: 'Outcome', intro: '完成产品定义、交互 Demo 与路演表达。' },
      { title: 'What I Learned', intro: '健康数据产品需要在量化、感受和隐私之间建立可信的边界。' },
    ],
  },
  {
    index: '05',
    slug: 'mala-007',
    title: '麻辣辣007',
    kind: 'Growth case · 2025.07—2026.05',
    tags: ['Growth', 'Content Product', 'User Insight'],
    summary: '把街访当作内容产品持续迭代，形成可重复的用户洞察与增长模型。',
    cardNote: 'Audience clarity turned content into a repeatable system.',
    facts: ['历史增长峰值：27K+ 跨平台粉丝', '46 集街访 · 10+ 百万级作品', '单条最高约 300K 赞 / 11.44M 播放'],
    platformLinks: [
      { label: 'Xiaohongshu', url: profileLinks.xiaohongshu.url },
      { label: 'Douyin', status: 'Link coming soon' },
      { label: 'WeChat Channels', status: 'Link coming soon' },
    ],
    placeholders: [
      { label: 'Metrics', description: '建议放跨平台增长曲线与代表作品数据' },
      { label: 'Content System', description: '建议放选题、人物、剪辑、分发迭代框架' },
      { label: 'Social Feedback', description: '建议放高质量评论与用户共鸣截图' },
      { label: 'Content Samples', description: '建议放 3–5 条代表街访封面' },
    ],
    sections: [
      { title: 'Problem', intro: '早期摄影内容有表达，但栏目边界和受众认知不够清晰，难以稳定形成用户期待与持续增长。' },
      { title: 'Audience', intro: '将核心受众聚焦到 18–24 岁女性，围绕她们对关系、自我与现实选择的关注设计街访问答。' },
      { title: 'Strategy', bullets: ['从单点摄影内容重新定义为可持续的街访栏目', '让问题设计同时具备真实感、代入感和讨论空间', '通过统一栏目结构形成用户预期', '把平台反馈纳入下一轮选题与制作判断'] },
      { title: 'Experiments', bullets: ['持续迭代问题设计与人物选择', '测试不同剪辑节奏与信息密度', '优化标题、配乐和封面表达', '针对平台语境调整内容分发方式'] },
      { title: 'Results', bullets: ['2 个月突破 20K 粉丝；历史增长峰值为小红书、抖音与微信视频号合计 27K+，当前平台数据后续可更新', '完成 46 集街访，累计约 900K 点赞', '单条最高约 300K 点赞、约 11.44M 播放', '产出 10+ 个百万级传播作品'] },
      { title: 'What I Learned', intro: '内容增长和产品增长共享同一逻辑：清楚为谁解决什么需求，快速实验，再把有效判断沉淀成可重复系统。' },
    ],
  },
  {
    index: '06',
    slug: 'feel-your-heartbeat',
    title: '《体会你的心动》',
    englishTitle: 'Feel Your Heartbeat',
    kind: 'Founder case',
    tags: ['Founder', '0→1', 'Media Product', 'Growth'],
    summary: '四人初始团队联合发起的校园恋综，从节目机制到传播与商业合作完整落地。',
    cardNote: 'A campus media product built, launched and distributed.',
    facts: ['联合创始人', '首期 25K+ 播放', '后获江苏卫视展播'],
    placeholders: [
      { label: 'Program Identity', description: '建议放节目主视觉与 UI' },
      { label: 'Interaction Flow', description: '建议放节目环节与互动机制' },
      { label: 'Metrics', description: '建议放首期播放与校园传播数据' },
      { label: 'Media Coverage', description: '建议放江苏卫视展播与赞助合作素材' },
    ],
    sections: [
      { title: 'Overview', intro: '《体会你的心动》是由四人初始团队从 0 到 1 发起的校园恋综项目，覆盖节目设计、主持、传播、视觉与商业合作。' },
      { title: 'Problem', intro: '如何在校园场景中做出既有参与感、又能形成传播和持续制作价值的媒体产品。' },
      { title: 'Insight', intro: '校园内容的优势不只在“身边感”，更在于观众可以成为项目传播和讨论的一部分。' },
      { title: 'My Role', bullets: ['联合创始人', '节目环节与互动流程设计', '主持', '宣发文案与 UI'] },
      { title: 'Product Decisions', bullets: ['以节目环节设计保证观看节奏', '加入学生传播活动扩大校园参与', '用统一文案与 UI 建立节目识别', '引入商业赞助支持项目落地'] },
      { title: 'Outcome', bullets: ['首期播放量 25K+', '项目后获江苏卫视展播', '成功引入商业赞助'] },
      { title: 'What I Learned', intro: 'Founder 型工作不是只提出概念，而是同时推动内容、体验、团队和外部资源到达交付。' },
    ],
  },
];

export const processSteps = [
  { index: '01', title: 'Observe', description: '发现真实用户问题' },
  { index: '02', title: 'Define', description: '把模糊感受转化为具体产品问题' },
  { index: '03', title: 'Build', description: '借助 AI 快速构建 MVP' },
  { index: '04', title: 'Validate', description: '通过用户、内容与市场拿反馈' },
];

export const profileMetrics = [
  { value: '6', label: 'AI Hackathons' },
  { value: '4', label: 'Awards' },
  { value: 'Grew to 27K+', label: 'cross-platform followers' },
  { value: '11.44M', label: 'Peak Views' },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
