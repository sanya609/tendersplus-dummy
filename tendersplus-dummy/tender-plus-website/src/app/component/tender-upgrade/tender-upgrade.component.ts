// @ts-nocheck
import { AfterViewInit, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tender-upgrade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tender-upgrade.component.html',
  styleUrls: ['./tender-upgrade.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TenderUpgradeComponent implements AfterViewInit, OnDestroy {
  private lottieScript?: HTMLScriptElement;

  ngAfterViewInit(): void {
    this.loadLottie().finally(() => this.initPage());
  }

  ngOnDestroy(): void {
    document.body.classList.remove('nav-open');
  }

  private loadLottie(): Promise<void> {
    if ((window as any).lottie) return Promise.resolve();

    const existingScript = document.querySelector('script[src$="lottie.min.js"]') as HTMLScriptElement | null;
    if (existingScript) {
      return new Promise((resolve) => {
        existingScript.addEventListener('load', () => resolve(), { once: true });
        existingScript.addEventListener('error', () => resolve(), { once: true });
      });
    }

    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = '/lottie.min.js';
      script.onload = () => resolve();
      script.onerror = () => resolve();
      document.body.appendChild(script);
      this.lottieScript = script;
    });
  }

  private initPage(): void {
    const tickerItems = [
      'LIVE: Construction Tender - Delhi PWD  Rs. 4.2 Cr',
      'NEW: IT Equipment Supply - Ministry of Education  Rs. 1.8 Cr',
      'URGENT: Medical Devices - AIIMS Lucknow  Rs. 6.5 Cr',
      'NEW: Road Construction - Maharashtra Highway  Rs. 12 Cr',
      'LIVE: Solar Panel Installation - MNRE  Rs. 3.3 Cr',
      'NEW: Security Services - Central Railways  Rs. 90 Lakh',
    ];
    
    const stats = [
      { value: 12000, suffix: '+', label: 'New Tenders Added Daily', icon: 'file', color: '#38bdf8' },
      { value: 4200, suffix: '+', label: 'Tenders Successfully Bid', icon: 'support', color: '#8b5cf6' },
      { value: 3600, suffix: '+', label: 'GeM Products Registered', icon: 'cart', color: '#f59e0b' },
      { value: 1100, suffix: '+', label: 'Businesses & Clients Served', icon: 'users', color: '#5eead4' },
    ];
    
    const services = [
      {
        title: 'Tender Discovery',
        icon: 'bell',
        color: '#6A5BFF',
        items: [
          'Personalized Tender Alerts',
          'Email Notifications',
          'Keyword-based Smart Search',
          'Daily opportunities from 100+ Sources',
        ],
      },
      {
        title: 'GeM Registration',
        icon: 'user',
        color: '#16a3ee',
        items: [
          'Seller Registration on GeM',
          'Complete Profile Creation',
          'Product & Service Listing',
          'Business Account Setup',
        ],
      },
      {
        title: 'GeM Catalogue Management',
        icon: 'box',
        color: '#f59e0b',
        items: [
          'Product Catalogue Creation',
          'Category Selection & Mapping',
          'Price & Product Comparison',
          'Better Product Visibility',
        ],
      },
      {
        title: 'Tender Bidding Support',
        icon: 'notebookPen',
        color: '#10b981',
        items: [
          'Opportunity Identification',
          'Bid Documentation Support',
          'Technical & Financial Bid Assistance',
          'Bid Submission Guidance',
        ],
      },
      {
        title: 'Vendor Assessment',
        icon: 'file',
        color: '#10a8c7',
        items: [
          'RITES Vendor Assessment',
          'Desktop & Video Assessment',
          'Documentation & Compliance Assistance',
          'Approval Guidance',
        ],
      },
      {
        title: 'Business Registration & Support',
        icon: 'headset',
        color: '#ff3b47',
        items: ['MSME Registration', 'Startup India Registration', 'New Business Registration', 'OEM & Reseller Support'],
      },
    ];
    
    const steps = [
      {
        step: '01',
        icon: 'S',
        title: 'Search Tenders',
        desc: 'Browse thousands of live government tenders filtered by state, category, and value.',
        color: '#0ea5e9',
      },
      {
        step: '02',
        icon: 'D',
        title: 'Prepare Documents',
        desc: 'Our experts help you prepare technically sound and compliant bid documents.',
        color: '#f59e0b',
      },
      {
        step: '03',
        icon: 'B',
        title: 'Submit Your Bid',
        desc: 'We guide you through portal submission with zero errors and on-time delivery.',
        color: '#10b981',
      },
      {
        step: '04',
        icon: 'W',
        title: 'Win & Grow',
        desc: 'Secure the contract and scale your business with our post-award support.',
        color: '#8b5cf6',
      },
    ];
    
    const categories = [
      { icon: 'CN', name: 'Construction', count: '2,400+', color: '#0ea5e9' },
      { icon: 'IT', name: 'IT & Technology', count: '1,800+', color: '#f59e0b' },
      { icon: 'DF', name: 'Defence', count: '900+', color: '#ef4444' },
      { icon: 'ED', name: 'Education', count: '1,200+', color: '#10b981' },
      { icon: 'FN', name: 'Finance', count: '650+', color: '#0ea5e9' },
      { icon: 'IN', name: 'Infrastructure', count: '3,100+', color: '#f59e0b' },
    ];
    
    const advantages = [
      {
        icon: 'clock',
        title: 'Save Valuable Time',
        desc: 'Spend less time searching and more time growing your business. We handle tender discovery and shortlisting.',
        color: '#0ea5e9',
      },
      {
        icon: 'tag',
        title: 'Pay for What You Need',
        desc: 'No unnecessary packages or fixed plans. Choose the services you need and pay accordingly, with complete flexibility.',
        color: '#10b981',
      },
      {
        icon: 'headset',
        title: 'Expert Guidance',
        desc: 'Get experienced guidance at every step - from tender discovery and bid preparation to documentation and submission.',
        color: '#f59e0b',
      },
      {
        icon: 'shieldCheck',
        title: 'Compliance Services',
        desc: 'Get professionally prepared documentation aligned with tender requirements and procurement norms.',
        color: '#0ea5e9',
      },
      {
        icon: 'badge',
        title: 'Money Back Guarantee',
        desc: "Your satisfaction matters. If our service doesn't meet the agreed terms, you're covered by our money-back guarantee.",
        color: '#10b981',
      },
    ];
    
    const states = [
      {
        name: 'Delhi',
        count: '400+',
        img: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
      {
        name: 'Maharashtra',
        count: '310+',
        img: 'https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
      {
        name: 'Uttar Pradesh',
        count: '280+',
        img: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
      {
        name: 'Rajasthan',
        count: '160+',
        img: 'https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
      {
        name: 'Gujarat',
        count: '240+',
        img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
      {
        name: 'Madhya Pradesh',
        count: '120+',
        img: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
    ];
    
    const sources = [
      { name: 'GeM', full: 'Government e-Marketplace', color: '#0ea5e9', link: 'GeM Tenders' },
      { name: 'IREPS', full: 'Indian Railway E-Procurement System', color: '#8b5cf6', link: 'IREPS Tenders' },
      { name: 'CPWD', full: 'Central Public Works Department', color: '#10b981', link: 'CPWD Tenders' },
      { name: 'nProcure', full: 'India e-Procurement System', color: '#f59e0b', link: 'nProcure Tenders' },
    ];
    
    categories.splice(
      0,
      categories.length,
      { icon: 'CW', name: 'Civil and Construction Works', color: '#f97316' },
      { icon: 'CM', name: 'Construction Materials and Products', color: '#ef4444' },
      { icon: 'BS', name: 'Building Services and Equipment', color: '#6366f1' },
      { icon: 'PG', name: 'Power Generation and Distribution', color: '#f59e0b' },
      { icon: 'SE', name: 'Solar and Renewable Energy Products', color: '#eab308' },
      { icon: 'EM', name: 'Electrical and Mechanical Works', color: '#0ea5e9' },
      { icon: 'EE', name: 'Electrical Machinery and Equipment', color: '#8b5cf6' },
      { icon: 'ME', name: 'Machinery and Equipment', color: '#64748b' },
      { icon: 'PM', name: 'Pharmaceuticals and Medical Supplies', color: '#ec4899' },
      { icon: 'MI', name: 'Medical Equipment and Instruments', color: '#06b6d4' },
      { icon: 'MF', name: 'Medical Furniture and Supplies', color: '#14b8a6' },
      { icon: 'HS', name: 'Healthcare Services', color: '#ef4444' },
      { icon: 'IT', name: 'Software and IT Services', color: '#2563eb' },
      { icon: 'CP', name: 'Computers and Peripherals', color: '#3b82f6' },
      { icon: 'TC', name: 'Telecommunications', color: '#7c3aed' },
      { icon: 'MV', name: 'Motor Vehicles and Parts', color: '#dc2626' },
      { icon: 'TL', name: 'Transport and Logistics Services', color: '#ea580c' },
      { icon: 'AG', name: 'Agricultural Products and Services', color: '#65a30d' },
      { icon: 'FB', name: 'Food and Beverages', color: '#d97706' },
      { icon: 'EP', name: 'Educational Products and Supplies', color: '#0891b2' },
      { icon: 'ET', name: 'Education and Training Services', color: '#4f46e5' },
      { icon: 'FM', name: 'Facility Management', color: '#475569' },
      { icon: 'SS', name: 'Security and Safety Equipment', color: '#991b1b' },
      { icon: 'SC', name: 'Security Services', color: '#1d4ed8' },
      { icon: 'MT', name: 'Metals and Metal Products', color: '#71717a' },
      { icon: 'CH', name: 'Chemical Products', color: '#9333ea' },
      { icon: 'FF', name: 'Furniture and Fixtures', color: '#a16207' },
      { icon: 'OS', name: 'Office Equipment and Stationery', color: '#0f766e' },
      { icon: 'CS', name: 'Consultancy Services', color: '#0284c7' },
      { icon: 'SG', name: 'Survey and Geospatial Services', color: '#db2777' },
      { icon: 'TI', name: 'Testing and Inspection Services', color: '#16a34a' },
      { icon: 'PP', name: 'Printing and Publishing', color: '#7c2d12' },
      { icon: 'MK', name: 'Media and Marketing Services', color: '#c026d3' },
      { icon: 'SD', name: 'Signage and Display Systems', color: '#f97316' },
      { icon: 'MS', name: 'Manpower Supply Services', color: '#ca8a04' },
      { icon: 'CA', name: 'Catering and Hospitality Services', color: '#be123c' },
      { icon: 'MP', name: 'Miscellaneous Products', color: '#64748b' },
      { icon: 'MS', name: 'Miscellaneous Services', color: '#475569' },
      { icon: 'RP', name: 'Rubber and Plastic Products', color: '#16a34a' },
      { icon: 'OG', name: 'Oil, Gas and Petroleum', color: '#0f172a' },
      { icon: 'WM', name: 'Waste Management and Environmental Services', color: '#15803d' },
      { icon: 'AV', name: 'Electronics and AV Equipment', color: '#2563eb' },
      { icon: 'VR', name: 'Vehicle Maintenance and Repair', color: '#ea580c' },
      { icon: 'MN', name: 'Mining and Minerals', color: '#854d0e' },
      { icon: 'AF', name: 'Animal and Fishing Products', color: '#0891b2' },
      { icon: 'TA', name: 'Textiles and Apparel', color: '#db2777' },
      { icon: 'WP', name: 'Wood and Paper Products', color: '#166534' },
      { icon: 'NM', name: 'Non-Metallic Mineral Products', color: '#78716c' },
      { icon: 'HA', name: 'Electrical and Home Appliances', color: '#0ea5e9' },
      { icon: 'KC', name: 'Kitchen and Catering Equipment', color: '#f59e0b' },
      { icon: 'UR', name: 'Unmanned Systems and Robotics', color: '#6366f1' },
      { icon: 'PV', name: 'Photography and Videography Equipment', color: '#9333ea' },
      { icon: 'SM', name: 'Scientific and Measuring Instruments', color: '#06b6d4' },
      { icon: 'AA', name: 'Aerospace and Aviation', color: '#0284c7' },
      { icon: 'MS', name: 'Marine and Shipping', color: '#0369a1' },
      { icon: 'AD', name: 'Accessibility and Assistive Devices', color: '#2563eb' },
      { icon: 'IF', name: 'Insurance and Finance', color: '#16a34a' },
      { icon: 'RD', name: 'Research and Development', color: '#7c3aed' },
      { icon: 'DS', name: 'Defence and Security Equipment', color: '#dc2626' },
      { icon: 'DM', name: 'Disaster Management', color: '#ef4444' },
      { icon: 'AS', name: 'Aviation Services', color: '#0ea5e9' },
      { icon: 'MS', name: 'Marine and Shipping Services', color: '#075985' },
      { icon: 'RD', name: 'Retail and Distribution', color: '#10b981' },
      { icon: 'RE', name: 'Real Estate Services', color: '#8b5cf6' },
    );
    
    states.splice(
      0,
      states.length,
      {
        name: 'Maharashtra',
        count: '8000+',
        img: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Haryana',
        count: '8000+',
        img: 'https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'West Bengal',
        count: '8000+',
        img: 'https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Telangana',
        count: '8000+',
        img: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Madhya Pradesh',
        count: '8000+',
        img: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Rajasthan',
        count: '8000+',
        img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Delhi',
        count: '8000+',
        img: 'https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Uttar Pradesh',
        count: '8000+',
        img: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Gujarat',
        count: '8000+',
        img: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Tamil Nadu',
        count: '8000+',
        img: 'https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Karnataka',
        count: '8000+',
        img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Kerala',
        count: '8000+',
        img: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    );
    
    sources.splice(
      0,
      sources.length,
      { name: 'GeM', full: 'Government e-Marketplace', color: '#0ea5e9', logoImage: '/gem-logo.png', link: 'GeM' },
      { name: 'IREPS', full: 'Indian Railway E-Procurement', color: '#ef4444', logoImage: '/ireps-logo.png', link: 'IREPS' },
      { name: 'CPWD', full: 'Central Public Works Department', color: '#10b981', logoImage: '/cpwd-logo.png', link: 'CPWD' },
      {
        name: 'nProcure',
        full: 'National e-Procurement',
        color: '#f59e0b',
        logoImage: '/nprocure-logo.png',
        link: 'nProcure',
      },
      {
        name: 'CPPP eProcure',
        full: 'Central Public Procurement Portal',
        color: '#111827',
        logoImage: '/cppp-logo.png',
        link: 'CPPP eProcure',
      },
      {
        name: 'MSTC',
        full: 'Metal and Scrap Trading Corporation',
        color: '#0f766e',
        logoImage: '/mstc-logo.png',
        link: 'MSTC',
      },
      {
        name: 'GeM Auction',
        full: 'Government e-Marketplace Auction',
        color: '#7c3aed',
        logoImage: '/gem-auction-logo.png',
        link: 'GeM Auction',
      },
      { name: '100+', full: 'Sources Covered', color: '#6A5BFF', logo: '100+', link: '100+' },
    );
    
    function scrollToSection(selector) {
      const target = document.querySelector(selector);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    const testimonialCategories = ['All', 'MSME', 'Construction', 'IT Services', 'Manufacturing'];
    const testimonials = [
      {
        category: 'Construction',
        name: 'Rakesh Sharma',
        company: 'Director, BuildTech Pvt Ltd',
        rating: 5,
        text: 'TendersPlus helped us win our first government contract within 3 months.',
      },
      {
        category: 'IT Services',
        name: 'Priya Mehta',
        company: 'TechVision Solutions, Mumbai',
        rating: 5,
        text: 'The GeM registration process was seamless. We are now listed and receiving purchase orders regularly. Highly recommend!',
      },
      {
        category: 'Manufacturing',
        name: 'Anil Kumar',
        company: 'Kumar Enterprises, Lucknow',
        rating: 5,
        text: 'Excellent support team. They responded within hours and helped us clear every compliance issue. Our success rate improved drastically.',
      },
      {
        category: 'MSME',
        name: 'Neha Verma',
        company: 'Verma MSME Solutions, Jaipur',
        rating: 5,
        text: 'TendersPlus simplified our MSME registration and tender documentation, helping our growing business confidently participate in government opportunities.',
      },
    ];
    
    // Counter animation
    function animateCounter(element, target, duration = 1800) {
      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        element.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
    });
    
    // Accessible mobile navigation
    const navToggle = document.querySelector('.nav-toggle');
    const mobileNav = document.getElementById('mobileNav');
    function setMobileNav(open) {
      if (!navToggle || !mobileNav) return;
      document.body.classList.toggle('nav-open', open);
      mobileNav.classList.toggle('is-open', open);
      mobileNav.setAttribute('aria-hidden', String(!open));
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    }
    navToggle?.addEventListener('click', () => setMobileNav(navToggle.getAttribute('aria-expanded') !== 'true'));
    mobileNav?.querySelectorAll('a, button').forEach((item) => item.addEventListener('click', () => setMobileNav(false)));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) setMobileNav(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMobileNav(false);
    });
    
    // Ticker
    const tickerInner = document.getElementById('tickerInner');
    [...tickerItems, ...tickerItems].forEach((item) => {
      const span = document.createElement('span');
      span.className = 'ticker-item';
      span.innerHTML = `${item}<span class="ticker-sep">⬢</span>`;
      tickerInner.appendChild(span);
    });
    
    // Trust avatars
    const trustAvatars = document.getElementById('trustAvatars');
    [
      { bg: 'linear-gradient(135deg, #38bdf8, #0ea5e9)', text: '' },
      { bg: 'linear-gradient(135deg, #34d399, #10b981)', text: '' },
      { bg: 'linear-gradient(135deg, #fbbf24, #f59e0b)', text: '' },
      { bg: 'linear-gradient(135deg, #fb7185, #ef4444)', text: '' },
      { bg: 'linear-gradient(135deg, #64748b, #334155)', text: '+500' },
    ].forEach((item) => {
      const div = document.createElement('div');
      div.className = 'trust-av';
      div.style.background = item.bg;
      div.textContent = item.text;
      trustAvatars.appendChild(div);
    });
    
    // Stats
    const statsGrid = document.getElementById('statsGrid');
    const statIcons = {
      file: '<svg class="stat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h8"/></svg>',
      users:
        '<svg class="stat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      cart: '<svg class="stat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.36-6.18H5.12"/></svg>',
      support:
        '<svg class="stat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14a9 9 0 0 1 18 0"/><path d="M5 14h2a2 2 0 0 1 2 2v3H6a3 3 0 0 1-3-3v-2Z"/><path d="M19 14h-2a2 2 0 0 0-2 2v3h3a3 3 0 0 0 3-3v-2Z"/><path d="M12 19v2"/><path d="M9 21h6"/></svg>',
    };
    let statsVisible = false;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !statsVisible) {
          statsVisible = true;
          stats.forEach((s) => {
            const card = document.createElement('div');
            card.className = 'stat-card';
            card.style.setProperty('--stat-color', s.color);
            card.innerHTML = `
            <div class="stat-icon">${statIcons[s.icon]}</div>
            <div class="stat-num"><span class="counter" data-target="${s.value}">0</span>${s.suffix}</div>
            <div class="stat-label">${s.label}</div>
            <span class="stat-line"></span>
          `;
            statsGrid.appendChild(card);
          });
          document.querySelectorAll('.counter').forEach((el) => {
            animateCounter(el, parseInt(el.dataset.target, 10));
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(statsGrid);
    
    // Services
    const servicesGrid = document.getElementById('servicesGrid');
    const serviceIcons = {
      user: '<svg class="svc-main-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>',
      box: '<svg class="svc-main-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m21 8-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/><path d="m7.5 5.5 9 5"/></svg>',
      file: '<svg class="svc-main-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>',
      notebookPen:
        '<svg class="svc-main-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>',
      headset:
        '<svg class="svc-main-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3H5a2 2 0 0 1-2-2v-3Z"/><path d="M16 16a2 2 0 0 1 2-2h3v3a2 2 0 0 1-2 2h-3v-3Z"/><path d="M3 14a9 9 0 0 1 18 0"/><path d="M12 19v2"/><path d="M9 21h6"/></svg>',
      bell: '<svg class="svc-main-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    };
    services.forEach((s) => {
      const card = document.createElement('div');
      card.className = 'svc-card';
      card.style.setProperty('--a', s.color);
      card.innerHTML = `
        <div class="svc-bar" style="background:${s.color}"></div>
        <div class="svc-icon-wrap" style="color:${s.color}; background:${s.color}14">${serviceIcons[s.icon]}</div>
        <h4 class="svc-title">${s.title}</h4>
        <ul class="svc-list">
          ${s.items.map((i) => `<li><svg class="svc-icon" viewBox="0 0 24 24" fill="none" stroke="${s.color}" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>${i}</li>`).join('')}
        </ul>
      `;
      servicesGrid.appendChild(card);
    });
    
    // Steps
    const stepsGrid = document.getElementById('stepsGrid');
    steps.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'step-card';
      card.innerHTML = `
        <div class="step-num">${s.step}</div>
        <div class="step-icon" style="background:${s.color}15">${s.icon}</div>
        <h4 class="step-title">${s.title}</h4>
        <p class="step-desc">${s.desc}</p>
        ${i < steps.length - 1 ? '<div class="step-arrow">&#8594;</div>' : ''}
      `;
      stepsGrid.appendChild(card);
    });
    
    // Sources
    const sourcesGrid = document.getElementById('sourcesGrid');
    sources.forEach((src) => {
      const card = document.createElement('div');
      card.className = 'source-card';
      card.innerHTML = `
        <div class="source-bar" style="background:${src.color}"></div>
        <div class="source-logo${src.logoImage ? ' source-logo-img' : ''}" style="color:${src.color}; background:${src.color}12">${src.logoImage ? `<img src="${src.logoImage}" alt="${src.name} logo">` : src.logo || src.name[0]}</div>
        <div class="source-name">${src.name}</div>
        <p class="source-full">${src.full}</p>
        <a href="#" class="source-link" style="color:${src.color}">${src.link} &#8594;</a>
      `;
      sourcesGrid.appendChild(card);
    });
    
    // Categories
    const catsGrid = document.getElementById('catsGrid');
    const catIconSvgs = {
      building:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
      package:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 8-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/><path d="m7.5 5.5 9 5"/></svg>',
      wrench:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94Z"/></svg>',
      zap: '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>',
      sun: '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
      pulse:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"/></svg>',
      laptop:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M2 20h20"/></svg>',
      phone:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z"/></svg>',
      truck:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1"/><path d="M14 9h4l3 3v5a1 1 0 0 1-1 1h-1"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
      wheat:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22 12 12"/><path d="M12 12c2-2 2-6 0-8-2 2-2 6 0 8Z"/><path d="M16 8c2-2 2-6 0-8"/><path d="M8 16c2-2 2-6 0-8-2 2-2 6 0 8Z"/></svg>',
      book: '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>',
      users:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      shield:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
      flask:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6L3.5 18a2 2 0 0 0 1.8 3h13.4a2 2 0 0 0 1.8-3L15 8V2"/><path d="M9 2h6"/><path d="M7 15h10"/></svg>',
      sofa: '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4Z"/><path d="M2 14v4a1 1 0 0 0 1 1h1v2M20 14v4a1 1 0 0 1-1 1h-1v2"/><path d="M4 18h16"/></svg>',
      clipboard:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 13h6M9 17h6"/></svg>',
      printer:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
      camera:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3"/></svg>',
      ship: '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a3 3 0 0 0 3 1 3 3 0 0 0 3-1 3 3 0 0 1 3-1 3 3 0 0 1 3 1 3 3 0 0 0 3 1 3 3 0 0 0 3-1"/><path d="M4 18 2.5 12h19L20 18"/><path d="M6 12V6h5l3 6"/><path d="M12 2v4"/></svg>',
      plane:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-1 .1-1.3.5l-.7.9c-.4.5-.2 1.2.4 1.4L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 2.7 5.8c.3.6.9.8 1.5.4l.9-.7c.4-.3.6-.8.5-1.3Z"/></svg>',
      robot:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="9" width="16" height="11" rx="2"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/><path d="M9 18h6"/></svg>',
      microscope:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 3v4"/><path d="M7 3h4"/></svg>',
      flame:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 17a2.5 2.5 0 0 0 2.5-2.5c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7.5 7.5 0 1 1-15 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
      mountain:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3Z"/></svg>',
      recycle:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 7.196 9.5 3.1 10.598"/><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 12 3a1.83 1.83 0 0 1 1.563.918l4.096 7.096"/><path d="m13.378 9.633 4.096-1.096"/></svg>',
      landmark:
        '<svg class="cat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22h18"/><path d="M6 18v-9M10 18v-9M14 18v-9M18 18v-9"/><path d="M2 9h20L12 2Z"/></svg>',
    };
    function pickCategoryIcon(name) {
      const n = name.toLowerCase();
      const rules = [
        [/solar|renewable|energy products/, 'sun'],
        [/power|electrical and mechanical|electrical machinery|home appliance/, 'zap'],
        [/construction materials|non-metallic|metal|rubber|plastic|wood|paper|textile/, 'package'],
        [/civil and construction|building services|signage/, 'building'],
        [/machinery|equipment$|kitchen and catering equipment/, 'wrench'],
        [/pharma|medical|health|assistive/, 'pulse'],
        [/software|it services|computers|scientific|research/, 'laptop'],
        [/telecom|electronics and av/, 'phone'],
        [/vehicle|motor|transport|logistics/, 'truck'],
        [/agricultur|animal|fishing/, 'wheat'],
        [/education/, 'book'],
        [/facility management|manpower|catering and hospitality/, 'users'],
        [/security|defence|disaster/, 'shield'],
        [/chemical|oil, gas/, 'flask'],
        [/furniture/, 'sofa'],
        [/office|consultancy|survey|testing/, 'clipboard'],
        [/printing|publishing|media|marketing/, 'printer'],
        [/photography|videography/, 'camera'],
        [/marine|shipping/, 'ship'],
        [/aerospace|aviation/, 'plane'],
        [/unmanned|robotics/, 'robot'],
        [/waste|environmental/, 'recycle'],
        [/insurance|finance|real estate|retail/, 'landmark'],
        [/mining|minerals/, 'mountain'],
      ];
      for (const [re, key] of rules) if (re.test(n)) return catIconSvgs[key];
      return catIconSvgs.package;
    }
    const categoryPrev = document.getElementById('categoryPrev');
    const categoryNext = document.getElementById('categoryNext');
    const getCategoryPageSize = () => (window.innerWidth <= 1024 ? 2 : 6);
    let categoryStart = 0;
    
    function renderCategoryCards() {
      if (!catsGrid) return;
    
      const categoryPageSize = getCategoryPageSize();
      const currentCategories = categories.slice(categoryStart, categoryStart + categoryPageSize);
      catsGrid.innerHTML = '';
    
      currentCategories.forEach((c) => {
        const card = document.createElement('div');
        card.className = 'cat-card';
        card.innerHTML = `
          <div class="cat-icon" style="color:${c.color}; background:${c.color}15">${pickCategoryIcon(c.name)}</div>
          <h4 class="cat-name">${c.name}</h4>
          ${c.count ? `<span class="cat-count" style="color:${c.color}">${c.count} tenders</span>` : ''}
          <span class="cat-arrow" style="color:${c.color}">&#8594;</span>
        `;
        catsGrid.appendChild(card);
      });
    
      if (categoryPrev) {
        categoryPrev.disabled = categoryStart === 0;
      }
      if (categoryNext) {
        categoryNext.disabled = categoryStart + categoryPageSize >= categories.length;
      }
    }
    
    // Mobile latest-tenders carousel controls
    const tenderCardsTrack = document.querySelector('.latest-tenders-section .tenders-cards');
    const tenderMobilePrev = document.querySelector('.tender-mobile-prev');
    const tenderMobileNext = document.querySelector('.tender-mobile-next');
    function scrollTenderCards(direction) {
      if (!tenderCardsTrack) return;
      tenderCardsTrack.scrollBy({ left: direction * tenderCardsTrack.clientWidth, behavior: 'smooth' });
    }
    tenderMobilePrev?.addEventListener('click', () => scrollTenderCards(-1));
    tenderMobileNext?.addEventListener('click', () => scrollTenderCards(1));
    
    categoryPrev?.addEventListener('click', () => {
      const categoryPageSize = getCategoryPageSize();
      categoryStart = Math.max(0, categoryStart - categoryPageSize);
      renderCategoryCards();
    });
    
    categoryNext?.addEventListener('click', () => {
      const categoryPageSize = getCategoryPageSize();
      const nextStart = categoryStart + categoryPageSize;
      if (nextStart < categories.length) {
        categoryStart = nextStart;
        renderCategoryCards();
      }
    });
    
    renderCategoryCards();
    // Advantages
    const advGrid = document.getElementById('advGrid');
    const advIcons = {
      clock:
        '<svg class="adv-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/></svg>',
      tag: '<svg class="adv-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42Z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',
      headset:
        '<svg class="adv-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3H5a2 2 0 0 1-2-2v-3Z"/><path d="M16 16a2 2 0 0 1 2-2h3v3a2 2 0 0 1-2 2h-3v-3Z"/><path d="M3 14a9 9 0 0 1 18 0"/><path d="M12 19v2"/><path d="M9 21h6"/></svg>',
      shieldCheck:
        '<svg class="adv-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/></svg>',
      badge:
        '<svg class="adv-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg>',
    };
    advantages.slice(0, 5).forEach((a) => {
      const card = document.createElement('div');
      card.className = 'adv-card';
      card.innerHTML = `
        <div class="adv-icon" style="color:${a.color}; background:${a.color}18">${advIcons[a.icon] || ''}</div>
        <h4 class="adv-title">${a.title}</h4>
        <p class="adv-desc">${a.desc}</p>
      `;
      advGrid.appendChild(card);
    });
    
    // States
    const statesGrid = document.getElementById('statesGrid');
    const statePrev = document.getElementById('statePrev');
    const stateNext = document.getElementById('stateNext');
    const getStatePageSize = () => (window.innerWidth <= 1024 ? 2 : 6);
    let stateStart = 0;
    
    function renderStateCards() {
      if (!statesGrid) return;
    
      const statePageSize = getStatePageSize();
      const currentStates = states.slice(stateStart, stateStart + statePageSize);
      statesGrid.innerHTML = '';
    
      currentStates.forEach((s) => {
        const card = document.createElement('div');
        card.className = 'state-card';
        card.innerHTML = `
          <img src="${s.img}" alt="${s.name}" class="state-img" loading="lazy" />
          <div class="state-overlay">
            <h3>${s.name}</h3>
            <span>${s.count} Tenders</span>
          </div>
        `;
        statesGrid.appendChild(card);
      });
    
      if (statePrev) {
        statePrev.disabled = stateStart === 0;
      }
      if (stateNext) {
        stateNext.disabled = stateStart + statePageSize >= states.length;
      }
    }
    
    statePrev?.addEventListener('click', () => {
      const statePageSize = getStatePageSize();
      stateStart = Math.max(0, stateStart - statePageSize);
      renderStateCards();
    });
    
    stateNext?.addEventListener('click', () => {
      const statePageSize = getStatePageSize();
      const nextStart = stateStart + statePageSize;
      if (nextStart < states.length) {
        stateStart = nextStart;
        renderStateCards();
      }
    });
    
    renderStateCards();
    
    // Shared mobile carousel controls for source, blog and news tracks
    document.querySelectorAll('[data-scroll-target]').forEach((button) => {
      button.addEventListener('click', () => {
        const track = document.querySelector(button.dataset.scrollTarget);
        if (!track) return;
        track.scrollBy({ left: Number(button.dataset.direction) * track.clientWidth, behavior: 'smooth' });
      });
    });
    document.querySelectorAll('.blog-block').forEach((block) => {
      const track = block.querySelector('.blog-card-grid, .news-card-grid');
      block
        .querySelector('.blog-arrow-left')
        ?.addEventListener('click', () => track?.scrollBy({ left: -track.clientWidth, behavior: 'smooth' }));
      block
        .querySelector('.blog-arrow-right')
        ?.addEventListener('click', () => track?.scrollBy({ left: track.clientWidth, behavior: 'smooth' }));
    });
    // Testimonials
    const tabsRow = document.getElementById('tabsRow');
    const starRating = document.getElementById('starRating');
    const testimonialText = document.getElementById('testimonialText');
    const authorAv = document.getElementById('authorAv');
    const authorName = document.getElementById('authorName');
    const authorCompany = document.getElementById('authorCompany');
    
    function renderTestimonial(category = 'All') {
      const t =
        category === 'All' ? testimonials[0] : testimonials.find((item) => item.category === category) || testimonials[0];
    
      tabsRow.innerHTML = '';
      testimonialCategories.forEach((item) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `tab-btn${item === category ? ' tab-active' : ''}`;
        btn.textContent = item;
        btn.addEventListener('click', () => renderTestimonial(item));
        tabsRow.appendChild(btn);
      });
    
      starRating.textContent = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
      testimonialText.textContent = t.text;
      authorAv.textContent = t.name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2);
      authorName.textContent = t.name;
      authorCompany.textContent = t.company;
    }
    
    renderTestimonial('All');
    let mobileTestimonialIndex = 0;
    document.querySelector('.testimonial-prev')?.addEventListener('click', () => {
      mobileTestimonialIndex = (mobileTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      renderTestimonial(testimonials[mobileTestimonialIndex].category);
    });
    document.querySelector('.testimonial-next')?.addEventListener('click', () => {
      mobileTestimonialIndex = (mobileTestimonialIndex + 1) % testimonials.length;
      renderTestimonial(testimonials[mobileTestimonialIndex].category);
    });
    
    // Growth section "Get Started Today" entry point
    document.querySelectorAll('[data-existing-registration]').forEach((button) => {
      button.addEventListener('click', () => {
        scrollToSection('#company');
      });
    });
    // Growth section Lottie animation
    const growthAnimationContainer = document.getElementById('growthAnimation');
    if (growthAnimationContainer && window.lottie) {
      const growthAnimation = window.lottie.loadAnimation({
        container: growthAnimationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        path: '/growth-software.json',
        rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
      });
    
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        growthAnimation.addEventListener('DOMLoaded', () => growthAnimation.goToAndStop(0, true));
      }
    }
    
  }
}
