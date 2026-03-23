// Dark Mode
document.getElementById("darkToggle").onclick = () => {
document.body.classList.toggle("dark");
};

// Scroll Reveal
function reveal(){
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("active");
}
});
}
window.addEventListener("scroll", reveal);

// Project Details
const projects = {
p1: `
<h2>Cipher Sentinel Imager</h2>

<p>
Enterprise-grade forensic acquisition solution designed for secure disk imaging,
memory acquisition, and evidence validation across local and enterprise environments.
</p>

<h3>Key Features</h3>
<ul>
<li>Multi-format imaging (E01, RAW, DD)</li>
<li>Live RAM acquisition for volatile data</li>
<li>Network-based acquisition (NAS/SAN)</li>
<li>Secure wiping and disk cloning</li>
<li>SHA256 hashing for forensic integrity</li>
<li>High-speed multithreaded processing</li>
</ul>

<h3>Architecture</h3>
<p>
Modular architecture built using Python and Qt5 with optimized I/O pipelines,
parallel processing, and integrated hashing mechanisms for reliability and speed.
</p>

<h3>Challenges Solved</h3>
<ul>
<li>Handling large-scale disk imaging efficiently</li>
<li>Ensuring data integrity during acquisition</li>
<li>Supporting remote and distributed systems</li>
</ul>

<p class="tech-stack">
<strong>Tech Stack:</strong> Python, Qt5, Multithreading, File Systems, SHA256, Networking
</p>

<p class="impact">
<strong>Impact:</strong> Provides secure and scalable forensic acquisition used in real-world DFIR investigations.
</p>
`,

p2: `
<h2>RAM Dump Analysis Framework</h2>

<p>
Advanced memory forensics framework designed to analyze RAM dumps and extract
critical system artifacts for incident response and threat detection.
</p>

<h3>Key Features</h3>
<ul>
<li>Automated analysis of memory dumps using integrated forensic modules</li>
<li>Process enumeration and suspicious process detection</li>
<li>DLL and injected code analysis</li>
<li>Extraction of network connections and artifacts</li>
<li>Correlation of memory artifacts for investigation workflows</li>
<li>Structured output generation for reporting</li>
</ul>

<h3>Architecture</h3>
<p>
Built on top of Volatility3 with custom automation layers and Python-based
processing pipelines. Designed to integrate multiple forensic plugins into a
unified analysis workflow for faster investigation.
</p>

<h3>Challenges Solved</h3>
<ul>
<li>Handling large memory dumps efficiently</li>
<li>Automating complex forensic analysis workflows</li>
<li>Correlating multiple artifacts into meaningful insights</li>
</ul>

<p class="tech-stack">
<strong>Tech Stack:</strong> Python, Volatility3, Memory Forensics, JSON, Automation Pipelines
</p>

<p class="impact">
<strong>Impact:</strong> Enables faster and more accurate memory analysis,
reducing investigation time and improving threat detection capabilities.
</p>
`,

p3: `
<h2>Network Traffic Tracer</h2>

<p>
Real-time network monitoring and analysis system designed to capture, inspect,
and correlate network traffic with system-level processes for deep visibility
and threat detection.
</p>

<h3>Key Features</h3>
<ul>
<li>Real-time packet capture using TCP/UDP protocols</li>
<li>Process-to-network correlation for identifying active connections</li>
<li>Live monitoring of inbound and outbound traffic</li>
<li>Connection tracking and session analysis</li>
<li>Structured data output for integration with dashboards</li>
<li>Lightweight and high-performance monitoring engine</li>
</ul>

<h3>Architecture</h3>
<p>
Built using low-level socket programming and multithreaded architecture to
capture and process network packets efficiently. Data is processed in parallel
pipelines and exposed via structured JSON for visualization and analysis.
</p>

<h3>Challenges Solved</h3>
<ul>
<li>Capturing high-throughput network traffic without packet loss</li>
<li>Mapping network connections to system processes</li>
<li>Maintaining real-time performance with minimal system overhead</li>
</ul>

<p class="tech-stack">
<strong>Tech Stack:</strong> C++, TCP/IP, UDP, Raw Sockets, Multithreading, JSON
</p>

<p class="impact">
<strong>Impact:</strong> Provides deep visibility into system network behavior,
helping in real-time monitoring, debugging, and security analysis.
</p>
`,

p4: `
<h2>MultiViewer Monitoring System</h2>

<p>
Real-time video monitoring system designed for broadcast environments to
simultaneously process and display multiple live video streams with high
performance and low latency.
</p>

<h3>Key Features</h3>
<ul>
<li>Simultaneous monitoring of multiple live video streams</li>
<li>Support for UDP, RTMP, and HLS streaming protocols</li>
<li>Real-time video decoding and rendering</li>
<li>Dynamic layout management for multi-stream display</li>
<li>Low-latency playback optimized for live environments</li>
<li>Scalable architecture for handling multiple channels</li>
</ul>

<h3>Architecture</h3>
<p>
Built using C++ with FFMpeg integration for decoding and stream processing.
The system uses a multithreaded pipeline to handle input streams, decoding,
and rendering independently for smooth and efficient performance.
</p>

<h3>Challenges Solved</h3>
<ul>
<li>Managing multiple high-resolution streams simultaneously</li>
<li>Reducing latency in live video playback</li>
<li>Ensuring stable performance under high load conditions</li>
</ul>

<p class="tech-stack">
<strong>Tech Stack:</strong> C++, FFMpeg, Multithreading, UDP, RTMP, HLS
</p>

<p class="impact">
<strong>Impact:</strong> Enables efficient real-time monitoring of multiple
video streams, improving operational visibility in broadcast and media systems.
</p>
`,

p5: `
<h2>Windows Prefetch Parser</h2>

<p>
Forensic analysis tool designed to parse Windows Prefetch files and extract
application execution history for system investigation and timeline reconstruction.
</p>

<h3>Key Features</h3>
<ul>
<li>Parsing of Windows Prefetch (.pf) files</li>
<li>Extraction of application execution timestamps</li>
<li>Identification of frequently executed programs</li>
<li>File and path reference extraction</li>
<li>Timeline generation for forensic investigations</li>
<li>Structured output for reporting and analysis</li>
</ul>

<h3>Architecture</h3>
<p>
Built using C++ with deep understanding of Windows Prefetch file structure.
Implements binary parsing techniques to extract metadata and convert it into
human-readable forensic insights.
</p>

<h3>Challenges Solved</h3>
<ul>
<li>Decoding complex binary Prefetch file format</li>
<li>Accurate extraction of execution timestamps</li>
<li>Handling variations across Windows versions</li>
</ul>

<p class="tech-stack">
<strong>Tech Stack:</strong> C++, Windows Internals, File System Analysis, Binary Parsing
</p>

<p class="impact">
<strong>Impact:</strong> Helps investigators reconstruct system activity and identify
program execution patterns during forensic analysis.
</p>
`,

p6: `
<h2>NTFS MFT Forensic Parser</h2>

<p>
Advanced forensic tool designed to analyze NTFS Master File Table (MFT) records
to extract file metadata, reconstruct timelines, and identify deleted files
for digital investigations.
</p>

<h3>Key Features</h3>
<ul>
<li>Parsing of NTFS MFT records for file metadata extraction</li>
<li>Detection and analysis of deleted file entries</li>
<li>MACB (Modified, Accessed, Created, Changed) timeline reconstruction</li>
<li>Extraction of file attributes and metadata structures</li>
<li>Identification of hidden or suspicious file activity</li>
<li>Structured output for forensic reporting</li>
</ul>

<h3>Architecture</h3>
<p>
Built using C++ with deep understanding of NTFS file system internals.
Implements low-level parsing of MFT structures and attribute records to
extract meaningful forensic information from raw disk data.
</p>

<h3>Challenges Solved</h3>
<ul>
<li>Parsing complex NTFS metadata structures accurately</li>
<li>Identifying deleted and orphaned file records</li>
<li>Reconstructing reliable forensic timelines from raw data</li>
</ul>

<p class="tech-stack">
<strong>Tech Stack:</strong> C++, NTFS Internals, File System Analysis, Binary Parsing
</p>

<p class="impact">
<strong>Impact:</strong> Enables investigators to recover deleted file information
and reconstruct system activity, significantly enhancing forensic analysis capabilities.
</p>
`,
p7: `
<h2>Live Memory Forensics Tool</h2>

<p>
Advanced live memory forensics tool designed to collect and analyze runtime system data
during active incident response. Enables investigators to inspect volatile memory,
running processes, and system state without requiring system shutdown.
</p>

<h3>Key Features</h3>
<ul>
<li>Live system memory inspection during runtime</li>
<li>Detection of fileless and in-memory malware</li>
<li>Analysis of running processes and loaded modules</li>
<li>Runtime memory acquisition capabilities</li>
<li>Real-time visibility into volatile system state</li>
</ul>

<h3>Architecture</h3>
<p>
Built using C++ with deep integration into Windows Internals and Win32 APIs.
Utilizes memory acquisition techniques combined with structured JSON-based
output to enable efficient analysis and reporting of runtime artifacts.
</p>

<h3>Challenges Solved</h3>
<ul>
<li>Analyzing volatile memory without disrupting system execution</li>
<li>Detecting fileless threats that leave no disk artifacts</li>
<li>Capturing accurate runtime system state during live analysis</li>
</ul>

<p class="tech-stack">
<strong>Tech Stack:</strong> C++, Windows Internals, Win32 API, WMI, Memory Acquisition, nlohmann/json
</p>

<p class="impact">
<strong>Impact:</strong> Enhances incident response capabilities by enabling real-time
analysis of volatile memory, improving detection of advanced threats such as
fileless malware and in-memory attacks.
</p>
`,
p8: `
<h2>Windows Forensic Artifact Collector</h2>

<p>
Automated forensic triage tool designed to rapidly collect critical system artifacts
from Windows machines during incident response, enabling faster investigation and
early-stage threat detection.
</p>

<h3>Key Features</h3>
<ul>
<li>Automated collection of system artifacts (processes, registry, logs, network data)</li>
<li>Unified platform for forensic data acquisition</li>
<li>Support for multiple evidence formats (RAM, DD, E01)</li>
<li>Cross-artifact correlation for deeper analysis</li>
<li>Structured data output for efficient investigation workflows</li>
</ul>

<h3>Architecture</h3>
<p>
Built using Python and C++ with integration into Windows APIs for system-level
data extraction. Designed with modular data collection pipelines and structured
output formats to enable scalable and efficient forensic analysis.
</p>

<h3>Challenges Solved</h3>
<ul>
<li>Automating manual forensic data collection processes</li>
<li>Collecting diverse system artifacts in a unified workflow</li>
<li>Minimizing system impact during live data acquisition</li>
</ul>

<p class="tech-stack">
<strong>Tech Stack:</strong> Python, C++, Windows APIs, System Forensics, Data Automation
</p>

<p class="impact">
<strong>Impact:</strong> Accelerates incident response by enabling rapid and reliable
forensic data collection, helping investigators quickly assess compromised systems
and prioritize further analysis.
</p>
`,
p9: `
<h2>RapidDFIR – AI-Driven Digital Forensics Platform</h2>

<p>
Enterprise-scale digital forensics and incident response (DFIR) platform designed
to perform end-to-end investigations across Windows systems. Integrates memory,
disk, and artifact analysis into a centralized and scalable solution.
</p>

<h3>Key Features</h3>
<ul>
<li>Remote forensic data acquisition from distributed systems</li>
<li>AI-assisted analysis for identifying suspicious patterns and anomalies</li>
<li>Centralized case management for organizing investigations</li>
<li>Support for multiple evidence formats (RAM, DD, E01)</li>
<li>Real-time analysis and processing pipelines</li>
<li>Integrated memory, disk, and artifact forensics workflows</li>
</ul>

<h3>Architecture</h3>
<p>
Designed as a modular and scalable platform using Python and C++ with integrated
forensic processing pipelines. Combines remote acquisition modules, analysis engines,
and structured case management to enable seamless end-to-end investigations.
AI-driven components assist in pattern recognition and anomaly detection.
</p>

<h3>Challenges Solved</h3>
<ul>
<li>Performing large-scale remote forensic investigations</li>
<li>Integrating multiple forensic domains into a unified platform</li>
<li>Reducing dependency on on-site forensic teams</li>
<li>Handling and processing large volumes of forensic data efficiently</li>
</ul>

<p class="tech-stack">
<strong>Tech Stack:</strong> Python, C++, DFIR Tools, AI-based Analysis, Evidence Processing, Distributed Systems
</p>

<p class="impact">
<strong>Impact:</strong> Significantly improves incident response efficiency by enabling
remote, scalable, and AI-assisted forensic investigations, reducing operational overhead
and accelerating threat detection and response.
</p>
`,
p10: `
<h2>Cipher Triage – Forensic Triage & Monitoring Platform</h2>

<p>
Rapid forensic triage and system monitoring platform designed to detect illicit content,
analyze system activity, and provide real-time visibility into Windows environments
during incident response.
</p>

<h3>Key Features</h3>
<ul>
<li>Detection of malware, suspicious user activity, and hidden system artifacts</li>
<li>Real-time monitoring of CPU, memory, disk, and network usage</li>
<li>Process-level visibility and system behavior tracking</li>
<li>Uptime monitoring and system health analysis</li>
<li>Early anomaly detection and performance insights</li>
</ul>

<h3>Architecture</h3>
<p>
Designed as a modular monitoring and forensic triage platform combining system-level
data collection with real-time analytics. Integrates process monitoring, resource tracking,
and artifact analysis into a unified and user-friendly interface.
</p>

<h3>Challenges Solved</h3>
<ul>
<li>Providing real-time visibility into system and network behavior</li>
<li>Detecting hidden or suspicious activities across multiple system layers</li>
<li>Balancing performance monitoring with forensic data collection</li>
</ul>

<p class="tech-stack">
<strong>Tech Stack:</strong> C++, Python, Windows Internals, System Monitoring, Networking
</p>

<p class="impact">
<strong>Impact:</strong> Enables rapid identification and analysis of cyber threats by
providing unified system and network visibility, significantly reducing investigation time
and improving incident response decision-making.
</p>
`,
p11: `
<h2>Sigma-Based Detection System – CDR/IPDR Intelligence Platform</h2>

<p>
Large-scale data analysis and threat intelligence platform designed to process
Call Detail Records (CDR) and Internet Protocol Detail Records (IPDR) for
detecting suspicious communication patterns and uncovering hidden relationships.
</p>

<h3>Key Features</h3>
<ul>
<li>Processing and analysis of large-scale CDR and IPDR datasets</li>
<li>Rule-based detection using Sigma for identifying suspicious patterns</li>
<li>Cross-data correlation of calls, messages, and IP sessions</li>
<li>Advanced filtering and querying for rapid investigation</li>
<li>Interactive dashboards for data visualization and analysis</li>
</ul>

<h3>Architecture</h3>
<p>
Designed using Python and PySide6 with scalable data processing pipelines and
Sigma-based rule engines. Combines data ingestion, correlation logic, and
visualization layers to provide an end-to-end intelligence analysis platform.
</p>

<h3>Challenges Solved</h3>
<ul>
<li>Handling and processing large-scale telecom datasets efficiently</li>
<li>Correlating multiple data sources to uncover hidden relationships</li>
<li>Providing real-time insights through interactive visualization</li>
</ul>

<h3>Data Analysis & Visualization</h3>
<ul>
<li>Timeline reconstruction for event sequence analysis</li>
<li>Dynamic charts and network graphs for relationship mapping</li>
<li>Visualization of communication patterns and behavioral trends</li>
<li>Real-time filtering and exploration of large datasets</li>
</ul>

<p class="tech-stack">
<strong>Tech Stack:</strong> Python, PySide6, Sigma Rules, Data Correlation, Visualization Systems, Large-Scale Data Processing
</p>

<p class="impact">
<strong>Impact:</strong> Enables investigators to uncover hidden connections,
reconstruct communication timelines, and generate actionable intelligence,
significantly improving efficiency and accuracy in large-scale investigations.
</p>
`,
p12: `
<h2>KOSTAC PLC Design Software</h2>

<p>
Industrial automation software developed for designing and validating PLC
configurations, ensuring system integrity and efficient engineering workflows
in production environments.
</p>

<h3>Key Features</h3>
<ul>
<li>Validation of PLC configurations for accuracy and consistency</li>
<li>Enforcement of unique PLC identifiers and system constraints</li>
<li>Support for structured design workflows in automation systems</li>
<li>Improved reliability of configuration management</li>
</ul>

<h3>Architecture</h3>
<p>
Developed using C++ with MFC and Win32 API, focusing on robust desktop
application design. Implemented validation layers and structured logic to
ensure correctness and stability of PLC configurations.
</p>

<h3>Challenges Solved</h3>
<ul>
<li>Ensuring correctness and uniqueness in PLC configurations</li>
<li>Maintaining system stability in industrial environments</li>
<li>Improving usability of engineering workflows</li>
</ul>

<p class="tech-stack">
<strong>Tech Stack:</strong> C++, MFC, Win32 API, Industrial Systems
</p>

<p class="impact">
<strong>Impact:</strong> Improved reliability and integrity of PLC design
processes, supporting efficient and error-free industrial automation workflows.
</p>
`,
p13: `
<h2>Asrun Generator – Broadcast Scheduling Tool</h2>

<p>
Python-based application designed to automate the generation of broadcast
scheduling (Asrun) data by integrating with databases and producing outputs
in multiple formats for different channels.
</p>

<h3>Key Features</h3>
<ul>
<li>Automated generation of broadcast scheduling (Asrun) data</li>
<li>Database integration for dynamic data retrieval</li>
<li>Support for multiple output formats across channels</li>
<li>Streamlined workflow for broadcasting operations</li>
</ul>

<h3>Architecture</h3>
<p>
Developed as a console-based application using Python with database integration.
Implements structured data processing pipelines to generate and format scheduling
outputs efficiently.
</p>

<h3>Challenges Solved</h3>
<ul>
<li>Automating manual scheduling data generation</li>
<li>Handling multiple output formats for different channels</li>
<li>Ensuring consistency and accuracy in broadcast data</li>
</ul>

<p class="tech-stack">
<strong>Tech Stack:</strong> Python, Database Systems, Data Processing
</p>

<p class="impact">
<strong>Impact:</strong> Improved efficiency in broadcast scheduling workflows by
automating data generation and reducing manual effort.
</p>
`

};

function openProject(id){
    const modal = document.getElementById("projectModal");
    modal.style.display = "flex";  // ✅ show only when clicked
    document.getElementById("projectDetails").innerHTML = projects[id];
}

function closeProject(){
    document.getElementById("projectModal").style.display = "none";
}

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
    particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        size: Math.random()*2,
        speedX: Math.random()*0.5,
        speedY: Math.random()*0.5
    });
}

function animateParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
        p.x += p.speedX;
        p.y += p.speedY;

        if(p.x > canvas.width) p.x = 0;
        if(p.y > canvas.height) p.y = 0;

        ctx.fillStyle = "rgba(79,172,254,0.5)";
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
        let x = e.offsetX;
        let y = e.offsetY;

        let rotateX = (y / card.offsetHeight - 0.5) * 10;
        let rotateY = (x / card.offsetWidth - 0.5) * -10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});

window.onload = () => {
    document.getElementById("projectModal").style.display = "none";
};