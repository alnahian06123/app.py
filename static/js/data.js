export const phrases = [
    'Python Expert',
    'Math Enthusiast',
    'Excel and Google Sheets Analytic',
    'Problem Solver'
];

export const skillsData = {
    frontend: [
        { name: 'Python (Tkinter / Geometry Canvas)', level: '95%', icon: 'code' },
        { name: 'Mathematical & Algorithmic Visualization', level: '94%', icon: 'sparkles' },
        { name: 'Step-by-Step Educational Animation', level: '92%', icon: 'play-circle' },
        { name: 'Statistical Plotting (Matplotlib / Seaborn)', level: '90%', icon: 'bar-chart-2' },
        { name: 'HTML5 / Modern JS Modules', level: '85%', icon: 'layout' },
    ],
    backend: [
        { name: 'Python Data Structures & Solvers', level: '95%', icon: 'terminal' },
        { name: 'Excel VBA & Macro Automation', level: '94%', icon: 'cpu' },
        { name: 'Google Apps Script (GAS)', level: '92%', icon: 'file-text' },
        { name: 'Statistical Computing (Mean, Median, Ogive)', level: '90%', icon: 'calculator' },
        { name: 'REST APIs & Data Processing', level: '85%', icon: 'network' },
    ],
    devops: [
        { name: 'Git & GitHub Version Control', level: '90%', icon: 'git-branch' },
        { name: 'Desktop App Packaging & Flask', level: '85%', icon: 'box' },
        { name: 'Spreadsheet Workflow Integration', level: '95%', icon: 'file-spreadsheet' },
    ],
    tools: [
        { name: 'Excel Advanced Formulas & KPI Gauges', level: '98%', icon: 'table' },
        { name: 'Google Sheets Dashboards', level: '95%', icon: 'layers' },
        { name: 'Educational Visual Production', level: '90%', icon: 'video' },
        { name: 'UI / UX Layout Design', level: '82%', icon: 'figma' },
    ]
};

export const projectsData = [
    {
        id: '1',
        title: 'Interactive Geometry Angle Construction',
        category: 'ai',
        catLabel: 'Python / Math Animation',
        image: 'angle-construction.png',      // Shown as card thumbnail
        demoGif: 'angle-construction.gif',   // Opened in new tab on Live Preview
        description: 'Interactive step-by-step compass and straightedge geometric angle construction tool (15°, 30°, 45°, 90°, 120°, 135°, 150°, 165°) built in Python Tkinter.',
        tech: ['Python', 'Tkinter Canvas', 'Geometry Algorithms', 'Math Engine'],
        github: 'https://github.com/nhn92'
    },
    {
        id: '2',
        title: 'Square Root by Long Division Animator',
        category: 'ai',
        catLabel: 'Python / Math Animation',
        image: 'square-root.png',            // Shown as card thumbnail
        demoGif: 'square-root.gif',          // Opened in new tab on Live Preview
        description: 'Animated step-by-step arithmetic solver showing decimal-by-decimal square root calculations using the long division method.',
        tech: ['Python', 'Math Animation', 'Algorithmic Solver'],
        github: 'https://github.com/nhn92'
    },
    {
        id: '3',
        title: 'HR & Executive Analytics Dashboard',
        category: 'web',
        catLabel: 'Excel & VBA',
        image: 'hr_dashboard.png',
        demoGif: 'hr_dashboard.png',
        description: 'Comprehensive Dark-theme HR management suite featuring interactive slicers, employee demographics, faith distribution, and KPI metric gauges.',
        tech: ['Excel VBA', 'Interactive Slicers', 'KPI Gauges', 'Dynamic Charts'],
        github: 'https://github.com/nhn92'
    },
    {
        id: '4',
        title: 'Employee Task Tracking & Achievement System',
        category: 'web',
        catLabel: 'Excel Analytics',
        image: 'task_tracking.png',
        demoGif: 'task_tracking.png',
        description: 'Monthly employee task scheduler with automated target calculations, achievement percentage gauges, and weekly comparisons.',
        tech: ['Excel Formulas', 'VBA Automation', 'Task Analytics', 'Gauges'],
        github: 'https://github.com/nhn92'
    },
    {
        id: '5',
        title: 'Automated Student Performance Analysis Sheet',
        category: 'web',
        catLabel: 'Google Sheets & Apps Script',
        image: 'student_grading.png',
        demoGif: 'student_grading.png',
        description: 'Grade distribution and subject percentage tracker with dynamic filtering, top-performer rankings, and threshold tiering (0-60%, 60-70%, etc.).',
        tech: ['Google Sheets', 'Google Apps Script', 'Data Analytics', 'Formulas'],
        github: 'https://github.com/nhn92'
    }
];