const riskGroups = [
  {
    items: [
      "工具投毒",
      "指令注入",
      "越权访问",
      "自主渗透",
      "沙箱逃逸",
      "提示注入",
      "诱导攻击",
      "权限窃取",
      "隐私泄露",
      "数据投毒",
      "算力DDoS",
      "知识幻觉",
      "不可审计",
      "CBRN风险",
      "多智能体共谋",
      "……",
    ],
  },
] as const;

const roadmapColumns = [
  {
    title: "安全测试工具",
    items: [
      {
        name: "复杂场景风险演练场",
        status: "active",
        subItems: [
          { id: "oasis", name: "社交网络Oasis" },
          { id: "ghostei", name: "手机 GhostEI" },
          { id: "riosworld", name: "电脑RiosWorld" },
          { id: "safeverse", name: "具身孪生SafeVerse" },
          { id: "none", name: "科学发现" },
          { id: "none", name: "……" }
        ],
      },
      { id: "clawreverse", name: "ClawReverse 风险回溯沙箱", status: "active"},
      { id: "openrt", name: "OpenRT 一站式红队", status: "active" },
      { id: "deepsight", name: "DeepSight 评测诊断", status: "active" },
    ],
  },
  {
    title: "可信数据服务",
    items: [
      { name: "即将发布", status: "soon" },
      { id: "dataelf", name: "DataElf 数据安全精灵", status: "active" },
      { id: "riskdb", name: "智能体风险数据库 SATraj", status: "active" },
      { id: "unimark", name: "AI内容标识开发套件 Unimark", status: "active" },
    ],
  },
  {
    title: "加固防御技术",
    items: [
      { id: "trinityguard", name: "群体智能 Trinity Guard", status: "active" },
      { id: "agentdog", name: "AgentDoG 安全防御套件", status: "active" },
      { id: "clawsentry", name: "智能体安全员 ClawSentry", status: "active" },
      { id: "safework-r1", name: "SafeWork-R1 安全模型", status: "active" },
    ],
  },
] as const;

const platformRows = [
  {
    lead: "Safactory 安全工厂框架",
    items: [
      {
        id: "safactory-risk",
        name: "风险推演中台",
        subtitle: "复杂风险场景测试和编排",
        href: "https://github.com/AI45Lab/Safactory",
        summary:
          "面向智能体复杂场景的风险演练与推演中台，统一编排红队能力、演练环境、回溯和报告流程，支持数千智能体并发压测。",
      },
      {
        id: "safactory-data",
        name: "可信数据中台",
        subtitle: "数据安全保证与安全经验沉淀",
        href: "https://github.com/AI45Lab/Safactory",
        summary:
          "围绕智能体风险轨迹、知识记忆和工作空间等建立可信数据扫描和处理机制，服务于数据治理、模型训练和智能体运行。",
      },
      {
        id: "safactory-defense",
        name: "进化防御中台",
        subtitle: "防御能力集成与安全自进化",
        href: "https://github.com/AI45Lab/Safactory",
        summary:
          "汇聚护栏、审查、对齐与运行时防御能力，为智能体应用提供策略配置、效果验证和安全闭环，推动防御能力从测试走向部署。",
      },
    ],
  },
  {
    lead: "DeepLink 超智融合技术",
    items: [
      { id: undefined, name: "大规模池化可信推理", href: undefined },
      { id: undefined, name: "分布式分层数据存储", href: undefined },
      { id: undefined, name: "超智融合训练框架", href: undefined },
    ],
  },
] as const;

const toolboxSections = [
  {
    title: "安全测试",
    description:
      "覆盖红队测试、评测诊断与复杂环境演练，帮助团队从风险暴露走向根因定位。",
    accent: "from-[#1d4ed8] to-[#2563eb]",
    items: [
      {
        id: "oasis",
        name: "Oasis",
        subtitle: "百万智能体模拟",
        href: "https://github.com/camel-ai/oasis",
        summary:
          "面向大规模社会智能体交互的模拟平台，支持百万级智能体在社交环境中运行，用于观察信息传播、群体极化和涌现行为。",
      },
      {
        id: "deepsight",
        name: "DeepSight",
        subtitle: "评测诊断框架",
        href: "https://ai45.shlab.org.cn/deepsight",
        summary:
          "提出“评测-诊断”一体化新范式，提供从风险暴露到根因定位的完整链路，推动大模型安全从黑盒评估迈向白盒治理。",
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
        id: "ghostei",
        name: "GhostEI",
        subtitle: "手机智能体评估",
        href: "https://github.com/AI45Lab/Ghost-EI",
        summary:
          "首个面向安卓恶意环境注入的安全评估框架，涵盖欺骗性指令、动静态环境注入等攻击向量，支持自动化快速评测。",
      },
      {
        id: "riosworld",
        name: "RiosWorld",
        subtitle: "computer Use智能体评估",
        href: "https://github.com/AI45Lab/RiOSWorld",
        summary:
          "首个 Computer-Use Agent 安全评估沙箱，包含 492 个风险测试案例，基于 OSworld 仿真环境实现自动化评测。",
      },
      {
        id: "safeverse",
        name: "SafeVerse",
        subtitle: "具身智能体评估",
        href: "https://github.com/AI45Lab/SafeVerse",
        summary:
          "面向具身智能的实战化数字孪生演练场，支持将物理世界复刻为 3D 仿真环境，完成“重建-攻防-进化”全闭环评测。",
      },
      {
        id: "clawreverse",
        name: "ClawReverse",
        subtitle: "风险回溯沙箱",
        href: "https://github.com/AI45Lab/ClawReverse",
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
        href: "https://github.com/AI45Lab/DataElf",
        summary:
          "以安全为核心的智能执行引擎，支持自然语言驱动的自动化数据处理。通过本地黑箱部署实现“数据可用不可见”。",
      },
      {
        id: "riskdb",
        name: "智能体风险数据库 SATraj",
        subtitle: "持续生产的数据资产",
        href: "https://huggingface.co/collections/AI45Research/safactory",
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
          "基于渐进式安全 RL 训练，发展内在安全推理和自我反思能力，通过“Aha Moment”实现性能与安全能力的同步增长。",
      },
      {
        id: "agentdog",
        name: "AgentDoG",
        subtitle: "智能体防御套件",
        href: "https://github.com/AI45Lab/AgentDoG",
        summary:
          "首创三维风险分类体系，性能优于 GPT-5.2 等顶尖模型，依托万级能力训练流水线实现决策全链路可追溯。",
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
      "以安全工厂与智算能力为底盘，支持私有化部署、大规模运行和模块化拆解。",
    accent: "from-[#2563eb] to-[#38bdf8]",
    items: [
      {
        name: "Safactory",
        subtitle: "安全工厂框架",
        href: "https://github.com/AI45Lab/Safactory",
        summary:
          "模块化融合全栈安全能力。支持数千智能体同时实战压测与经验库持续沉淀。测训一体，前台规模化运行，后台持续进化。",
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

type RoadmapSubItem = {
  name: string;
  tooltipId?: string;
};

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

for (const row of platformRows) {
  for (const item of row.items) {
    if (item.id) {
      tooltipById[item.id] = {
        name: item.name,
        subtitle: item.subtitle,
        href: item.href,
        summary: item.summary,
      };
    }
  }
}

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
  tooltipId,
  subItems,
  tone = "tool",
}: {
  name: string;
  status: "active" | "soon";
  tooltipId?: string;
  subItems?: RoadmapSubItem[];
  tone?: "tool" | "platform";
}) {
  return (
    <div
      data-roadmap-card=""
      data-tooltip-id={tooltipId}
      data-tooltip-anchor={tooltipId ? "" : undefined}
      className={[
        "relative flex flex-col items-center justify-center overflow-visible rounded-[16px] text-center text-sm font-semibold leading-snug tracking-tight shadow-[0_10px_24px_rgba(2,8,23,0.18)] backdrop-blur sm:text-base",
        subItems?.length
          ? "min-h-[92px] px-2 py-2 sm:min-h-[98px]"
          : "min-h-14 px-3 py-2 sm:min-h-[62px]",
        status === "soon"
          ? "border-[#9eb8e6] bg-[#e7ebf2] text-[#111827]"
          : tone === "tool"
            ? "border-[#f1c784] bg-[#f7dfb8] text-[#111827]"
            : "border-[#e8ab82] bg-[#f3d2bc] text-[#111827]",
      ].join(" ")}
    >
      <span>{name}</span>
      <TooltipPopup tooltipId={tooltipId} />
      {subItems?.length ? (
        <div className="mt-1.5 grid w-full grid-cols-3 gap-1">
          {subItems.map((subItem) => (
            <div
              key={subItem.name}
              className="relative"
              data-tooltip-id={subItem.tooltipId}
              data-tooltip-anchor={subItem.tooltipId ? "" : undefined}
            >
              <span className="flex min-h-6 items-center justify-center rounded-[8px] bg-white/35 px-1 py-0.5 text-[11px] font-semibold leading-tight text-[#17428d] ring-1 ring-white/30">
                {subItem.name}
              </span>
              <TooltipPopup tooltipId={subItem.tooltipId} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function TooltipPopup({ tooltipId }: { tooltipId?: string }) {
  const item = tooltipId ? tooltipById[tooltipId] : undefined;

  if (!item) {
    return null;
  }

  return (
    <div
      data-tooltip-popup
      className="absolute left-1/2 top-full z-[2147483647] hidden w-[min(430px,calc(100vw-4rem))] -translate-x-1/2 pt-3 text-left"
    >
      <ToolInfoCard item={item} />
    </div>
  );
}

export default function Home() {
  const tooltipStyles = `
    [data-tooltip-anchor] {
      position: relative;
    }

    [data-tooltip-anchor]:hover,
    [data-tooltip-anchor]:focus-within {
      z-index: 2147483646;
    }

    [data-roadmap-column]:has([data-tooltip-anchor]:hover),
    [data-roadmap-column]:has([data-tooltip-anchor]:focus-within),
    [data-roadmap-card]:has([data-tooltip-anchor]:hover),
    [data-roadmap-card]:has([data-tooltip-anchor]:focus-within) {
      z-index: 2147483645;
    }

    [data-tooltip-anchor]:hover > [data-tooltip-popup],
    [data-tooltip-anchor]:focus-within > [data-tooltip-popup] {
      display: block;
    }
  `;

  return (
    <main
      data-tooltip-root
      className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 lg:px-8 p-0 sm:p-4"
    >
      <section className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(145deg,rgba(4,11,24,0.98),rgba(2,7,18,0.99))] px-6 py-10 shadow-[0_30px_120px_rgba(2,8,23,0.78)] backdrop-blur sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#2563eb]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#0ea5e9]/10 blur-3xl" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex h-[320px] flex-col justify-between">
            <span className="w-fit inline-flex rounded-full border border-[#2f5ea8] bg-[#0a1730] px-4 py-1 text-sm font-semibold tracking-[0.24em] text-[#7dd3fc] uppercase shadow-[0_0_0_1px_rgba(56,189,248,0.08)]">
              Agent Safety ToolBox
            </span>
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              面向智能体全生命周期的
              <span className="block bg-gradient-to-r from-[#7dd3fc] via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
                安全工具箱“墨铠”
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
                  核心能力模块
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
                  150+
                </p>
                <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-base text-[#d6e5ff]">
                  细分工具类型
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#16325a] bg-[#07132b] shadow-[0_0_0_3px_rgba(4,8,25,0.4)]">
              <div className="h-3.5 w-3.5 rounded-full bg-[#e8f2ff]" />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full overflow-visible flex justify-center sm:rounded-[30px] pb-20 sm:pb-0">
        <div className="flex-shrink-0 origin-top w-full max-sm:mb-[-110%] max-sm:w-[980px] max-sm:scale-[0.385]">
          <div
            className="grid bg-[#f2f3f5] p-3"
            style={{
              columnGap: "24px",
              rowGap: "12px",
              gridTemplateColumns: `22% repeat(${roadmapColumns.length}, minmax(0, 1fr))`,
              gridTemplateRows: "48px 340px 88px 88px",
            }}
          >
            <div
              className="mx-auto flex w-full max-w-[280px] flex-col items-start gap-3 text-[11px] font-semibold text-[#1247ab] sm:text-xs"
              style={{ gridColumn: 1, gridRow: 1 }}
            >
              <div className="flex items-center gap-2">
                <span className="h-5 w-12 rounded-md bg-[#f3d2bc]" />
                已开源或研发完毕
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-12 rounded-md bg-[#e7ebf2]" />
                即将发布
              </div>
            </div>

            {roadmapColumns.map((column, columnIndex) => (
              <div
                key={column.title}
                className="align-middle"
                style={{ gridColumn: columnIndex + 2, gridRow: 1 }}
              >
                <div className="rounded-[14px] bg-[#1543ad] px-4 py-2.5 text-center text-lg font-semibold text-white">
                  {column.title}
                </div>
              </div>
            ))}

            <div
              className="mx-auto h-full w-full max-w-[280px] px-3"
              style={{ gridColumn: 1, gridRow: 2 }}
            >
              <div className="min-h-0">
                <div className="mb-3 flex min-h-10 items-center justify-center text-center text-2xl font-semibold tracking-tight text-[#1543ad]">
                  风险维度
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {riskGroups[0].items.map((item) => (
                    <div
                      key={item}
                      className="flex min-h-8 items-center justify-center rounded-[10px] bg-[#d5dfef] px-2 py-1 text-center text-[12px] font-semibold leading-snug text-[#3f6fb8] sm:min-h-[30px] sm:text-sm"
                    >
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {roadmapColumns.map((column, columnIndex) => (
              <div
                key={`${column.title}-frame`}
                aria-hidden="true"
                className="pointer-events-none rounded-[22px] border-2 border-[#efbb86] bg-[#fff4e3]/55 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55)]"
                style={{
                  gridColumn: columnIndex + 2,
                  gridRow: "2 / 4",
                }}
              />
            ))}

            {roadmapColumns.map((column, columnIndex) => {
              return (
                <div
                  key={column.title}
                  data-roadmap-column=""
                  className="relative z-[1] flex min-h-0 flex-col justify-between gap-3 p-3"
                  style={{ gridColumn: columnIndex + 2, gridRow: 2 }}
                >
                  {column.items.map((item, itemIndex) => (
                    <RoadmapCard
                      key={`${column.title}-${item.name}-${itemIndex}`}
                      name={item.name}
                      status={item.status}
                      tooltipId={
                        "id" in item && item.id && tooltipById[item.id]
                          ? item.id
                          : undefined
                      }
                      subItems={
                        "subItems" in item
                          ? item.subItems.map((subItem) => ({
                              name: subItem.name,
                              tooltipId: tooltipById[subItem.id]
                                ? subItem.id
                                : undefined,
                            }))
                          : undefined
                      }
                    />
                  ))}
                </div>
              );
            })}

            <div
              className="flex h-full items-center justify-center p-2.5"
              style={{ gridColumn: 1, gridRow: 3 }}
            >
              <div className="flex h-full w-full items-center justify-center overflow-visible rounded-[18px] bg-[#1543ad] px-4 py-3 text-center text-sm font-semibold leading-snug tracking-tight text-white sm:text-lg">
                {platformRows[0].lead}
              </div>
            </div>

            {platformRows[0].items.map((platformItem, columnIndex) => (
              <div
                key={`${platformRows[0].lead}-${platformItem.name}`}
                data-roadmap-column=""
                className="relative z-[1] flex h-full items-center justify-center p-2.5"
                style={{ gridColumn: columnIndex + 2, gridRow: 3 }}
              >
                <div
                  data-tooltip-id={platformItem.id}
                  data-tooltip-anchor=""
                  className="flex h-full w-full items-center justify-center overflow-visible rounded-[18px] bg-[#f3d2bc] px-4 py-3 text-center text-sm font-semibold leading-snug tracking-tight text-[#111827] shadow-[0_10px_24px_rgba(2,8,23,0.22)] backdrop-blur sm:text-base"
                >
                  <a
                    href={platformItem.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-full w-full items-center justify-center"
                  >
                    {platformItem.name}
                  </a>
                  <TooltipPopup tooltipId={platformItem.id} />
                </div>
              </div>
            ))}

            <div
              className="flex h-full items-center justify-center p-2.5"
              style={{ gridColumn: 1, gridRow: 4 }}
            >
              <div className="flex h-full w-full items-center justify-center overflow-visible rounded-[18px] bg-[#1543ad] px-4 py-3 text-center text-sm font-semibold leading-snug tracking-tight text-white sm:text-lg">
                {platformRows[1].lead}
              </div>
            </div>

            {platformRows[1].items.map((item, itemIndex) => (
              <div
                key={`${platformRows[1].lead}-${item.name}-${itemIndex}`}
                className="flex h-full items-center justify-center p-2.5"
                style={{ gridColumn: itemIndex + 2, gridRow: 4 }}
              >
                <div className="flex h-full w-full items-center justify-center overflow-visible rounded-[18px] bg-[#f3d2bc] px-4 py-3 text-center text-sm font-semibold leading-snug tracking-tight text-[#111827] shadow-[0_10px_24px_rgba(2,8,23,0.22)] backdrop-blur sm:text-base">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-full w-full items-center justify-center"
                    >
                      {item.name}
                    </a>
                  ) : (
                    item.name
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{tooltipStyles}</style>

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
