import { GraduationCap, Megaphone, MonitorPlay, RefreshCw } from "lucide-react";

type UpcomingClass = {
  title: string;
  date: string;
  time: string;
  location: string;
  trainer: string;
  actionLabel: string;
  actionTone: "amber" | "green";
};

type OnlineClass = {
  title: string;
  lessons: number;
  instructor: string;
  buttonLabel: string;
  buttonTone: "blue" | "indigo" | "neutral";
  progressClass?: string;
  icon: "code" | "marketing" | "ux" | "python";
};

const upcomingClasses: UpcomingClass[] = [
  {
    title: "Leadership Workshop",
    date: "March 28, 2027",
    time: "2:00 PM - 4:00 PM",
    location: "Training Room 1",
    trainer: "HR Department",
    actionLabel: "View Detail",
    actionTone: "amber",
  },
  {
    title: "Safety Training Session",
    date: "March 28, 2027",
    time: "2:00 PM - 4:00 PM",
    location: "Training Room 1",
    trainer: "All Employee",
    actionLabel: "Completed",
    actionTone: "green",
  },
];

const onlineClasses: OnlineClass[] = [
  {
    title: "Web Development",
    lessons: 20,
    instructor: "Jane Smith",
    buttonLabel: "4n Progress",
    buttonTone: "blue",
    progressClass: "w-3/4",
    icon: "code",
  },
  {
    title: "Digital Marketing",
    lessons: 18,
    instructor: "Mark Lee",
    buttonLabel: "Join Now",
    buttonTone: "indigo",
    icon: "marketing",
  },
  {
    title: "UI/UX Design",
    lessons: 15,
    instructor: "Sara Kim",
    buttonLabel: "Continue",
    buttonTone: "neutral",
    icon: "ux",
  },
  {
    title: "Python Programming",
    lessons: 22,
    instructor: "David Wilson",
    buttonLabel: "Resume",
    buttonTone: "blue",
    icon: "python",
  },
];

const actionToneClass = {
  amber: "bg-amber-500 hover:bg-amber-600",
  green: "bg-emerald-600 hover:bg-emerald-700",
};

const classButtonTone = {
  blue: "bg-linear-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600",
  indigo:
    "bg-linear-to-r from-indigo-600 to-violet-500 text-white hover:from-indigo-700 hover:to-violet-600",
  neutral: "bg-slate-200 text-slate-700 hover:bg-slate-300",
};

function Thumbnail({ type }: { type: OnlineClass["icon"] }) {
  const common =
    "flex h-28 w-full items-center justify-center rounded-xl border border-(--line)/60 bg-linear-to-br from-[#f8fbff] to-[#eaf1fb]";

  if (type === "code") {
    return (
      <div className={common}>
        <div className="rounded-xl bg-blue-600 px-6 py-4 text-white shadow-lg">
          <MonitorPlay className="mx-auto h-8 w-8" />
          <p className="mt-1 text-xs font-semibold tracking-wide">DEV</p>
        </div>
      </div>
    );
  }

  if (type === "marketing") {
    return (
      <div className={common}>
        <div className="rounded-full bg-orange-100 p-4 text-orange-600">
          <Megaphone className="h-12 w-12" />
        </div>
      </div>
    );
  }

  if (type === "ux") {
    return (
      <div className={common}>
        <div className="rounded-xl border border-violet-200 bg-violet-100 px-5 py-4 text-violet-700">
          <p className="text-sm font-bold">UI / UX</p>
          <p className="text-xs">Design Flow</p>
        </div>
      </div>
    );
  }

  return (
    <div className={common}>
      <div className="rounded-xl bg-blue-100 px-6 py-4 text-blue-700 shadow-sm">
        <p className="text-3xl font-black">Py</p>
      </div>
    </div>
  );
}

function TrainingLayout() {
  return (
    <div className="space-y-6">
      <div className="runway-panel rounded-2xl p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-(--foreground)/70" />
            <h2 className="text-3xl font-bold text-(--ink)">
              Upcoming Classes
            </h2>
          </div>

          <button
            type="button"
            className="runway-btn-primary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white"
          >
            <RefreshCw className="h-4 w-4" />
            Update
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {upcomingClasses.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-(--line)/65 bg-white/80 p-4 shadow-[0_12px_24px_-22px_rgba(16,36,58,0.5)]"
            >
              <h3 className="text-2xl font-bold text-(--ink)">{item.title}</h3>

              <dl className="mt-3 space-y-2 border-y border-(--line)/60 py-3 text-sm text-(--foreground)/80">
                <div className="grid grid-cols-[84px_1fr] items-center">
                  <dt className="font-semibold text-(--ink)">Date:</dt>
                  <dd>{item.date}</dd>
                </div>
                <div className="grid grid-cols-[84px_1fr] items-center">
                  <dt className="font-semibold text-(--ink)">Time:</dt>
                  <dd>{item.time}</dd>
                </div>
                <div className="grid grid-cols-[84px_1fr] items-center">
                  <dt className="font-semibold text-(--ink)">Location:</dt>
                  <dd>{item.location}</dd>
                </div>
                <div className="grid grid-cols-[84px_1fr] items-center">
                  <dt className="font-semibold text-(--ink)">Trainer:</dt>
                  <dd>{item.trainer}</dd>
                </div>
              </dl>

              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  className={`rounded-lg px-4 py-1.5 text-xs font-semibold text-white transition ${actionToneClass[item.actionTone]}`}
                >
                  {item.actionLabel}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="runway-panel rounded-2xl p-5 md:p-6">
        <div className="mb-5">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-(--foreground)/70" />
            <h2 className="text-3xl font-bold text-(--ink)">Online Classes</h2>
          </div>
          <p className="mt-1 text-lg text-(--foreground)/70">
            Continue your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {onlineClasses.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-(--line)/65 bg-white/80 p-4 shadow-[0_12px_24px_-22px_rgba(16,36,58,0.5)]"
            >
              <h3 className="text-2xl font-bold text-(--ink)">{item.title}</h3>

              <div className="mt-3">
                <Thumbnail type={item.icon} />
              </div>

              <p className="mt-4 text-3xl font-semibold text-(--ink)">
                {item.lessons} Lessons
              </p>
              <p className="mt-1 text-sm text-(--foreground)/70">
                <span className="font-semibold text-(--ink)">Instructor:</span>{" "}
                {item.instructor}
              </p>

              <div className="mt-4">
                <button
                  type="button"
                  className={`w-full rounded-lg py-2.5 text-sm font-semibold transition ${classButtonTone[item.buttonTone]}`}
                >
                  {item.buttonLabel}
                </button>

                {item.progressClass ? (
                  <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
                    <div
                      className={`h-full rounded-full bg-emerald-500 ${item.progressClass}`}
                    />
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrainingLayout;
