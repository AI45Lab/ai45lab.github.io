const riskGroups = [
  {
    title: "面向极端风险",
    items: ["社会认知操纵", "群体智能失控", "深度合成滥用", "技术伦理失范"],
  },
  {
    title: "面向中端风险",
    items: ["鲁棒性实效", "算法内生缺陷", "认知一致性", "供应链与环境漏洞"],
  },
  {
    title: "面向近端风险",
    items: ["隐私泄露", "生成内容合规", "数据投毒", "越狱攻击"],
  },
] as const;

const roadmapColumns = [
  {
    title: "安全测试工具",
    items: [
      { name: "Oasis百万智能体模拟", status: "active" },
      { name: "即将发布", status: "soon" },
      { id: "openrt", name: "OpenRT一站式红队", status: "active" },
      { name: "复杂环境实战演练场", status: "active" },
      { id: "deepsight", name: "DeepSight 评测诊断", status: "active" },
      { name: "即将发布", status: "soon" },
    ],
  },
  {
    title: "可信数据服务",
    items: [
      { name: "即将发布", status: "soon" },
      { name: "即将发布", status: "soon" },
      { id: "dataelf", name: "DataElf数据安全精灵", status: "active" },
      { id: "riskdb", name: "开源智能体风险数据库", status: "active" },
      { id: "multilingual", name: "跨语种价值语料库", status: "active" },
      { id: "unimark", name: "AI内容标识开发套件 Unimark", status: "active" },
    ],
  },
  {
    title: "加固防御技术",
    items: [
      { name: "即将发布", status: "soon" },
      { id: "trinityguard", name: "群智 Trinity Guard", status: "active" },
      { id: "agentdog", name: "AgentDoG 安全防御套件", status: "active" },
      { id: "clawsentry", name: "智能体安全员 ClawSentry", status: "active" },
      { id: "safework-r1", name: "SafeWork-R1 安全模型", status: "active" },
      {
        id: "security-rl",
        name: "安全加固强化学习方法",
        status: "active",
      },
    ],
  },
] as const;

const platformRows = [
  {
    lead: "Safactory 安全基座框架",
    items: ["风险推演中台", "可信数据中台", "加固防御中台"],
  },
  {
    lead: "DeepLink 国产智算技术",
    items: ["大规模池化可信推理", "分布式分层数据存储", "国产异构训练工具链"],
  },
] as const;

const toolboxSections = [
  {
    title: "安全测试工具",
    description:
      "覆盖红队测试、评测诊断与复杂环境演练，帮助团队从风险暴露走向根因定位。",
    accent: "from-[#1d4ed8] to-[#2563eb]",
    items: [
      {
        id: "deepsight",
        name: "DeepSight",
        subtitle: "评测诊断框架",
        href: "https://ai45.shlab.org.cn/deepsight",
        summary:
          "提出“评测-诊断”一体化新范式，提供从风险暴露到根因定位的完整工具链，推动大模型安全从黑盒评估迈向白盒治理。",
      },
      {
        id: "openrt",
        name: "OpenRT",
        subtitle: "一站式红队",
        href: "https://github.com/AI45Lab/OpenRT",
        summary:
          "标准模块化设计，集成 43 种业界攻击方法，用户仅需一行命令即可完成从攻击编排到报告输出的完整流程。",
      },
      {
        name: "GhostEI",
        subtitle: "手机智能体评估",
        href: "https://github.com/AI45Lab/Ghost-EI",
        summary:
          "首个面向安卓恶意环境注入的安全评估框架，涵盖欺骗性指令、动静态环境注入等攻击向量，支持自动化快速评测。",
      },
      {
        name: "RiosWorld",
        subtitle: "computer Use智能体评估",
        href: "https://github.com/AI45Lab/RiOSWorld",
        summary:
          "首个 Computer-Use Agent 安全评估沙箱，包含 492 个风险测试案例，基于 OSworld 仿真环境实现自动化评测。",
      },
      {
        name: "SafeVerse",
        subtitle: "具身智能体评估",
        href: "https://github.com/AI45Lab/SafeVerse",
        summary:
          "面向具身智能的实战化数字孪生演练场，支持将物理世界复刻为 3D 仿真环境，完成“重建-攻防-进化”全闭环评测。",
      },
      {
        name: "ClawReverse",
        subtitle: "风险回溯沙箱",
        href: "https://github.com/OpenKILab/ClawReverse",
        summary:
          "为 Agent 会话和文件安装“存档系统”，支持随时回滚与分叉试错，显著节省复杂任务中的 Token 消耗。",
      },
    ],
  },
  {
    title: "可信数据服务",
    description:
      "围绕安全数据生产、标识与使用建立可信闭环，让数据可用、可控、可追踪。",
    accent: "from-[#0f4da8] to-[#2563eb]",
    items: [
      {
        id: "unimark",
        name: "UniMark",
        subtitle: "通用AI内容标识开发套件",
        href: "https://github.com/AI45Lab/UniMark",
        summary:
          "一站式 AIGC 标识套件，支持多模态显隐式水印。覆盖 GB 45438-2025 国标要求，降低开发者合规成本。",
      },
      {
        id: "dataelf",
        name: "DataElf",
        subtitle: "数据安全精灵",
        href: undefined,
        summary:
          "以安全为核心的智能执行引擎，支持自然语言驱动的自动化数据处理。通过本地黑箱部署实现“数据可用不可见”。",
      },
      {
        id: "riskdb",
        name: "开源智能体风险数据库",
        subtitle: "持续生产的数据资产",
        href: undefined,
        summary:
          "持续生产的智能体轨迹数据集，蒸馏自顶尖国产模型，涵盖多种智能体形态，帮助小模型习得强大智能体能力。",
      },
    ],
  },
  {
    title: "加固防御技术",
    description:
      "面向部署阶段的安全护栏、模型对齐与系统级防御，让智能体能力与安全一同升级。",
    accent: "from-[#1e3a8a] to-[#1d4ed8]",
    items: [
      {
        id: "safework-r1",
        name: "SafeWork-R1",
        subtitle: "安全模型",
        href: "https://huggingface.co/AI45Research/SafeWork-R1",
        summary:
          "基于渐进式安全 RL 训练，发展内在安全推理和自我反思能力，通过“啊哈”时刻实现性能与安全能力的同步增长。",
      },
      {
        id: "agentdog",
        name: "AgentDoG",
        subtitle: "智能体防御套件",
        href: "https://github.com/AI45Lab/AgentDoG",
        summary:
          "首创三维风险分类体系，性能优于 GPT-5.2 等顶尖模型，依托万级工具训练流水线实现决策全链路可追溯。",
      },
      {
        id: "clawsentry",
        name: "ClawSentry",
        subtitle: "智能体安全员",
        href: "https://github.com/AI45Lab/ClawSentry",
        summary:
          "智能体系统内生安全员，提供三层递进决策引擎（规则/语义/审查），支持威胁特征热加载与可视化仪表板。",
      },
      {
        id: "trinityguard",
        name: "TrinityGuard",
        subtitle: "群体智能护栏",
        href: "https://github.com/AI45Lab/TrinityGuard",
        summary:
          "面向多智能体系统的安全框架，采用三层解耦架构，支持主流框架低代码接入，覆盖 20 类协作涌现风险。",
      },
    ],
  },
  {
    title: "底层平台能力",
    description:
      "以安全基座与国产智算能力为底盘，支持私有化部署、大规模推演和可信训练。",
    accent: "from-[#2563eb] to-[#38bdf8]",
    items: [
      {
        name: "Safactory",
        subtitle: "安全基座框架",
        href: undefined,
        summary:
          "模块化融合全栈安全工具，支持国产私有部署。支持数千智能体同时实战压测，独创 ClawReverse 分支回溯沙箱，支持风险节点自动分叉与经验库持续沉淀。",
      },
    ],
  },
] as const;

type ToolCardData = {
  name: string;
  subtitle: string;
  href?: string;
  summary: string;
};

function ToolInfoCard({ item }: { item: ToolCardData }) {
  const card = (
    <div className="rounded-[26px] bg-[linear-gradient(180deg,rgba(5,14,29,0.96),rgba(4,11,23,0.9))] p-6 transition-transform duration-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {item.name}
          </h3>
          <p className="mt-2 text-sm font-semibold text-[#7dd3fc]">
            {item.subtitle}
          </p>
        </div>
        <span className="rounded-full border border-[#1f4c93] bg-[#0b1730] px-3 py-1 text-xs font-semibold tracking-[0.2em] text-[#7dd3fc] uppercase">
          {item.href ? "Open" : "TBA"}
        </span>
      </div>
      <p className="mt-5 text-base leading-8 text-slate-300">{item.summary}</p>
    </div>
  );

  return item.href ? (
    <a href={item.href} target="_blank" rel="noreferrer" className="block">
      {card}
    </a>
  ) : (
    card
  );
}

function RoadmapCard({
  name,
  status,
  tooltip,
}: {
  name: string;
  status: "active" | "soon";
  tooltip?: ToolCardData;
}) {
  return (
    <div
      className={[
        "group relative flex h-full min-h-12 items-center justify-center overflow-visible rounded-[18px] px-3 py-2 text-center text-[11px] font-semibold tracking-tight shadow-[0_10px_24px_rgba(2,8,23,0.22)] backdrop-blur sm:min-h-14 sm:text-xs",
        status === "active"
          ? "border-[#e8ab82] bg-[#f3d2bc] text-[#111827]"
          : "border-[#9eb8e6] bg-[#e7ebf2] text-[#111827]",
      ].join(" ")}
    >
      {name}
      {tooltip ? (
        <div className="text-left absolute pb-3 bottom-full right-0 z-40 w-[520px] transition-[opacity,visibility] opacity-0 group-hover:opacity-100 invisible group-hover:visible pointer-events-none group-hover:pointer-events-auto">
          <ToolInfoCard item={tooltip} />
        </div>
      ) : null}
    </div>
  );
}

export default function Home() {
  const tooltipById: Record<string, ToolCardData> = {};

  for (const section of toolboxSections) {
    for (const item of section.items) {
      if ("id" in item && item.id) {
        tooltipById[item.id] = {
          name: item.name,
          subtitle: item.subtitle,
          href: item.href,
          summary: item.summary,
        };
      }
    }
  }

  const rowGroups = riskGroups.map((riskGroup, rowIndex) => ({
    risk: riskGroup,
    columns: roadmapColumns.map((column) =>
      column.items.slice(rowIndex * 2, rowIndex * 2 + 2),
    ),
  }));

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 lg:px-8 p-0 sm:p-4">
      <section className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(145deg,rgba(4,11,24,0.98),rgba(2,7,18,0.99))] px-6 py-10 shadow-[0_30px_120px_rgba(2,8,23,0.78)] backdrop-blur sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#2563eb]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#0ea5e9]/10 blur-3xl" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex h-[320px] flex-col justify-between">
            <span className="w-fit inline-flex rounded-full border border-[#2f5ea8] bg-[#0a1730] px-4 py-1 text-sm font-semibold tracking-[0.24em] text-[#7dd3fc] uppercase shadow-[0_0_0_1px_rgba(56,189,248,0.08)]">
              AI Agent Safety Toolbox
            </span>
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              面向智能体全生命周期的
              <span className="block bg-gradient-to-r from-[#7dd3fc] via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
                安全工具箱介绍页
              </span>
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-300">
              围绕风险发现、可信数据和系统加固构建统一能力图谱，服务于评测、演练、防御、部署与持续演进。
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-[#265baf] bg-[#102141] px-4 py-1.5 text-sm font-semibold text-[#dbeafe]">
                Modular
              </span>
              <span className="rounded-full border border-[#265baf] bg-[#102141] px-4 py-1.5 text-sm font-semibold text-[#dbeafe]">
                Research-to-Product
              </span>
              <span className="rounded-full border border-[#1f4c93] bg-[#0b1730] px-4 py-1.5 text-sm font-semibold text-[#7dd3fc]">
                Safety · Data · Defense
              </span>
            </div>
          </div>
          <div className="relative h-[320px] overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.12),transparent_38%),linear-gradient(155deg,#0b1a34_0%,#0a1730_56%,#081427_100%)] shadow-[0_20px_45px_rgba(1,6,18,0.45)]">
            <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[#132748]" />
            <div className="pointer-events-none absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-[#132748]" />
            <div className="grid h-full grid-cols-2 grid-rows-2 gap-0">
              <div className="flex h-full flex-col items-center justify-center px-4 text-center">
                <p className="text-4xl font-semibold tracking-tight text-[#e8f2ff]">
                  14+
                </p>
                <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-base text-[#d6e5ff]">
                  核心工具与能力模块
                </p>
              </div>
              <div className="flex h-full flex-col items-center justify-center px-4 text-center">
                <p className="text-4xl font-semibold tracking-tight text-[#e8f2ff]">
                  3
                </p>
                <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-base text-[#d6e5ff]">
                  主能力域
                </p>
              </div>
              <div className="flex h-full flex-col items-center justify-center px-4 text-center">
                <p className="text-3xl font-semibold tracking-tight text-[#e8f2ff]">
                  AI45
                </p>
                <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-base text-[#d6e5ff]">
                  安全生态持续迭代
                </p>
              </div>
              <div className="flex h-full flex-col items-center justify-center px-4 text-center">
                <p className="text-4xl font-semibold tracking-tight text-[#e8f2ff]">
                  9
                </p>
                <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-base text-[#d6e5ff]">
                  平台与中台能力节点
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#16325a] bg-[#07132b] shadow-[0_0_0_3px_rgba(4,8,25,0.4)]">
              <div className="h-3.5 w-3.5 rounded-full bg-[#e8f2ff]" />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full overflow-hidden flex justify-center sm:rounded-[30px]">
        <div className="flex-shrink-0 origin-top scale-[0.385] sm:scale-100 w-[980px] sm:w-full mb-[-125%] sm:mb-0">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="w-[30%] bg-[#f2f3f5] p-4 align-middle">
                  <div className="flex flex-wrap items-center justify-center gap-5 text-[11px] font-semibold text-[#1247ab] sm:text-xs">
                    <div className="flex items-center gap-2">
                      <span className="h-5 w-16 rounded-md bg-[#f3d2bc]" />
                      已开源或研发完毕
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-5 w-16 rounded-md bg-[#e7ebf2]" />
                      即将发布
                    </div>
                  </div>
                </th>
                {roadmapColumns.map((column, index) => (
                  <th
                    key={column.title}
                    className={[
                      "w-[23.33%] bg-[#f2f3f5] p-3 align-middle",
                    ].join(" ")}
                  >
                    <div className="rounded-[14px] bg-[#1543ad] px-4 py-2.5 text-center text-lg font-semibold text-white">
                      {column.title}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowGroups.map((groupRow, rowIndex) => (
                <tr key={groupRow.risk.title}>
                  <td className="bg-[#f2f3f5] p-4 align-middle">
                    <div className="grid gap-3 sm:grid-cols-[170px_1fr]">
                      <div className="flex items-center justify-center">
                        <h2 className="text-xl font-semibold leading-tight text-[#1247ab] sm:text-2xl">
                          {groupRow.risk.title}
                        </h2>
                      </div>
                      <div className="grid gap-2">
                        {groupRow.risk.items.map((item) => (
                          <div
                            key={item}
                            className="flex min-h-7 items-center justify-center rounded-md bg-[#d5dfef] px-2.5 py-1 text-center text-xs font-semibold text-[#4d70b4]"
                          >
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                  {groupRow.columns.map((cellItems, cellIndex) => (
                    <td
                      key={`${groupRow.risk.title}-${cellIndex}`}
                      className="bg-[#f2f3f5] p-3 align-middle"
                    >
                      <div className="grid gap-2.5">
                        {cellItems.map((item, itemIndex) => (
                          <RoadmapCard
                            key={`${roadmapColumns[cellIndex]?.title}-${item.name}-${rowIndex}-${itemIndex}`}
                            name={item.name}
                            status={item.status}
                            tooltip={
                              "id" in item && item.id
                                ? tooltipById[item.id]
                                : undefined
                            }
                          />
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="bg-[#f2f3f5] p-3 align-middle">
                  <div className="grid gap-2.5">
                    {platformRows.map((row) => (
                      <div
                        key={row.lead}
                        className="flex h-full min-h-12 items-center justify-center overflow-visible rounded-[18px] bg-[#1543ad] px-3 py-2 text-center text-[11px] font-semibold tracking-tight text-white sm:min-h-14 sm:text-lg"
                      >
                        {row.lead}
                      </div>
                    ))}
                  </div>
                </td>
                {platformRows[0].items.map((_, itemIndex) => (
                  <td
                    key={`platform-col-${itemIndex}`}
                    className="bg-[#f2f3f5] p-3 align-middle"
                  >
                    <div className="grid gap-2.5">
                      {platformRows.map((row) => (
                        <div
                          key={`${row.lead}-${row.items[itemIndex]}`}
                          className="flex h-full min-h-12 items-center justify-center overflow-visible rounded-[18px] bg-[#f3d2bc] px-3 py-2 text-center text-[11px] font-semibold tracking-tight shadow-[0_10px_24px_rgba(2,8,23,0.22)] backdrop-blur text-[#111827] sm:min-h-14 sm:text-xs"
                        >
                          {row.items[itemIndex]}
                        </div>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <section className="grid gap-6">
        {toolboxSections.map((section) => (
          <article
            key={section.title}
            className="overflow-hidden rounded-[32px] border border-[#183053] bg-[linear-gradient(180deg,rgba(4,12,26,0.98),rgba(3,8,18,0.96))] shadow-[0_24px_90px_rgba(2,8,23,0.72)] backdrop-blur"
          >
            <div
              className={`bg-gradient-to-r ${section.accent} px-6 py-6 text-white shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)] sm:px-8`}
            >
              <h2 className="text-2xl font-semibold sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
                {section.description}
              </p>
            </div>
            <div className="grid gap-5 p-6 sm:p-8 lg:grid-cols-2">
              {section.items.map((item, itemIndex) => (
                <div
                  key={`${section.title}-${item.name}-${itemIndex}`}
                  className="rounded-[26px] relative hover:-translate-y-1 border border-[#183053] hover:border-[#2f5ea8]"
                >
                  <ToolInfoCard item={item} />
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
