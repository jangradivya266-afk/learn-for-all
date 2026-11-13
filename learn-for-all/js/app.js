// ==========================================================================
// LEARN FOR ALL - Client Application Engine
// Community Service Project for NCU CDOE B.Com
// ==========================================================================

// Global Application State
const state = {
  categories: INITIAL_DATA.categories,
  platforms: INITIAL_DATA.platforms,
  resources: [],
  studyGuides: INITIAL_DATA.studyGuides,
  videos: INITIAL_DATA.videos,
  quizzes: INITIAL_DATA.quizzes,
  digitalAwareness: INITIAL_DATA.digitalAwareness,
  
  // Active Filter States
  activeCategory: "all",
  activeSubcategory: "all",
  searchQuery: "",
  platformFilter: "all",
  
  // Quiz State
  currentQuizId: "quiz-commerce",
  quizQuestionIndex: 0,
  quizSelectedOption: null,
  quizAnswers: [],
  quizScore: 0,
  quizIsSubmitted: false,

  // Admin State
  isAdminLoggedIn: false
};

// Initialize State from LocalStorage or Seed Data
function initStorage() {
  const savedResources = localStorage.getItem("lfa_resources");
  if (savedResources) {
    try {
      state.resources = JSON.parse(savedResources);
    } catch (e) {
      console.warn("Could not parse saved resources, reverting to initial data", e);
      state.resources = [...INITIAL_DATA.resources];
    }
  } else {
    state.resources = [...INITIAL_DATA.resources];
    localStorage.setItem("lfa_resources", JSON.stringify(state.resources));
  }

  // Check admin session
  const adminSession = sessionStorage.getItem("lfa_admin_auth");
  if (adminSession === "true") {
    state.isAdminLoggedIn = true;
  }
}

// Persist Resources to LocalStorage
function persistResources() {
  localStorage.setItem("lfa_resources", JSON.stringify(state.resources));
}

// ==========================================================================
// DOM READY & EVENT LISTENERS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  renderHeroStats();
  renderCategoryPills();
  renderCategoryCards();
  renderResources();
  renderPlatforms();
  renderStudyGuides();
  renderVideos();
  renderDigitalAwareness();
  initQuiz();
  setupEventListeners();
  updateAdminUI();
});

// Setup Global Event Listeners
function setupEventListeners() {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    // Close on clicking links
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }

  // Live Search Input
  const searchInput = document.getElementById("resourceSearchInput");
  const searchClear = document.getElementById("searchClearBtn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (searchClear) {
        searchClear.style.display = state.searchQuery ? "block" : "none";
      }
      renderResources();
    });
  }

  if (searchClear && searchInput) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      searchClear.style.display = "none";
      renderResources();
      searchInput.focus();
    });
  }

  // Platform Filter Dropdown
  const platformSelect = document.getElementById("platformFilterSelect");
  if (platformSelect) {
    platformSelect.addEventListener("change", (e) => {
      state.platformFilter = e.target.value;
      renderResources();
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById("feedbackForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("fbName")?.value || "Anonymous";
      const email = document.getElementById("fbEmail")?.value || "Not provided";
      const suggestion = document.getElementById("fbSuggestion")?.value;
      const message = document.getElementById("fbMessage")?.value;

      showToast(`Thank you, ${name}! Your feedback has been recorded for this community initiative.`, "success");
      contactForm.reset();
    });
  }

  // Modal Backdrop Click to Close
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });

  // Global ESC Key to Close Modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
}

// ==========================================================================
// RENDERING HELPERS
// ==========================================================================

// Update Hero Statistics
function renderHeroStats() {
  const resCountEl = document.getElementById("statResourceCount");
  const catCountEl = document.getElementById("statCategoryCount");
  if (resCountEl) resCountEl.textContent = `${state.resources.length}+`;
  if (catCountEl) catCountEl.textContent = `${state.categories.length}`;
}

// Render Category Filter Pills
function renderCategoryPills() {
  const container = document.getElementById("categoryPillsContainer");
  if (!container) return;

  let html = `
    <button class="cat-pill ${state.activeCategory === 'all' ? 'active' : ''}" onclick="selectCategoryFilter('all')">
      <span>🌐</span> All Subjects
    </button>
  `;

  state.categories.forEach(cat => {
    const isActive = state.activeCategory === cat.id;
    html += `
      <button class="cat-pill ${isActive ? 'active' : ''}" onclick="selectCategoryFilter('${cat.id}')">
        <span>${getCategoryEmoji(cat.id)}</span> ${cat.name}
      </button>
    `;
  });

  container.innerHTML = html;
}

// Handle Category Filter Selection
window.selectCategoryFilter = function(catId) {
  state.activeCategory = catId;
  state.activeSubcategory = "all";
  renderCategoryPills();
  renderResources();
  
  // Smooth scroll down to resources section if clicked from categories grid
  const resSection = document.getElementById("resourcesSection");
  if (resSection) {
    resSection.scrollIntoView({ behavior: "smooth" });
  }
};

// Render Category Cards (Overview Grid)
function renderCategoryCards() {
  const container = document.getElementById("categoriesGrid");
  if (!container) return;

  container.innerHTML = state.categories.map(cat => {
    const resourceCount = state.resources.filter(r => r.category === cat.id).length;
    return `
      <div class="category-card" onclick="selectCategoryFilter('${cat.id}')">
        <div class="cat-icon-wrap" style="background: linear-gradient(135deg, ${getCategoryGradient(cat.id)})">
          ${getCategorySVG(cat.id)}
        </div>
        <h3 class="cat-card-title">${cat.name}</h3>
        <p class="cat-card-desc">${cat.description}</p>
        <div class="cat-subtopics">
          ${cat.subcategories.slice(0, 4).map(sub => `<span class="cat-sub-tag">${sub}</span>`).join('')}
          ${cat.subcategories.length > 4 ? `<span class="cat-sub-tag">+${cat.subcategories.length - 4} more</span>` : ''}
        </div>
        <div style="margin-top: 1rem; font-size: 0.82rem; font-weight: 700; color: var(--primary-blue);">
          Browse ${resourceCount} Resources →
        </div>
      </div>
    `;
  }).join('');
}

// Render Filtered Resources
function renderResources() {
  const container = document.getElementById("resourcesGrid");
  const resultCountEl = document.getElementById("resourceResultCount");
  if (!container) return;

  let filtered = state.resources.filter(res => {
    // Category match
    if (state.activeCategory !== "all" && res.category !== state.activeCategory) {
      return false;
    }
    // Platform match
    if (state.platformFilter !== "all" && !res.platform.toLowerCase().includes(state.platformFilter.toLowerCase())) {
      return false;
    }
    // Search query match (title, description, subcategory, platform)
    if (state.searchQuery) {
      const q = state.searchQuery;
      const match = res.title.toLowerCase().includes(q) ||
                    res.description.toLowerCase().includes(q) ||
                    res.subcategory.toLowerCase().includes(q) ||
                    res.platform.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  if (resultCountEl) {
    resultCountEl.textContent = `Showing ${filtered.length} verified educational resource${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: white; border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
        <div style="font-size: 3rem; margin-bottom: 0.75rem;">🔍</div>
        <h3 style="margin-bottom: 0.5rem;">No matching resources found</h3>
        <p style="margin-bottom: 1.25rem;">Try adjusting your search terms or selecting 'All Subjects'.</p>
        <button class="btn btn-secondary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(res => {
    const cat = state.categories.find(c => c.id === res.category);
    const catName = cat ? cat.name : res.category;

    return `
      <div class="resource-card">
        <div class="res-top-meta">
          <span class="res-platform">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            ${res.platform}
          </span>
          <span class="badge ${res.pricingTag.includes('100% Free') ? 'badge-green' : 'badge-blue'}">
            ${res.pricingTag}
          </span>
        </div>

        <h3 class="res-title">${escapeHTML(res.title)}</h3>
        <p class="res-desc">${escapeHTML(res.description)}</p>

        <div class="res-tags-row">
          <span class="badge badge-purple">${escapeHTML(catName)}</span>
          <span class="badge badge-blue">${escapeHTML(res.subcategory)}</span>
          ${res.badge ? `<span class="badge badge-amber">${escapeHTML(res.badge)}</span>` : ''}
        </div>

        <div class="res-footer">
          <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex-grow: 1;">
            <span>Visit Resource</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>

          ${res.videoUrl ? `
            <button class="btn btn-purple btn-sm" title="Watch Video" onclick="openVideoModal('${escapeHTML(res.title)}', '${res.videoUrl}', '${escapeHTML(res.description)}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </button>
          ` : ''}

          ${state.isAdminLoggedIn ? `
            <button class="btn btn-secondary btn-sm" title="Edit Resource" onclick="openEditResourceModal('${res.id}')">
              ✏️
            </button>
            <button class="btn btn-secondary btn-sm" title="Delete Resource" onclick="deleteResource('${res.id}')" style="color: var(--accent-rose);">
              🗑️
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// Reset all search and category filters
window.resetFilters = function() {
  state.activeCategory = "all";
  state.activeSubcategory = "all";
  state.searchQuery = "";
  state.platformFilter = "all";
  
  const searchInput = document.getElementById("resourceSearchInput");
  const platformSelect = document.getElementById("platformFilterSelect");
  const searchClear = document.getElementById("searchClearBtn");

  if (searchInput) searchInput.value = "";
  if (platformSelect) platformSelect.value = "all";
  if (searchClear) searchClear.style.display = "none";

  renderCategoryPills();
  renderResources();
};

// Render Platforms Spotlight Cards
function renderPlatforms() {
  const container = document.getElementById("platformsGrid");
  if (!container) return;

  container.innerHTML = state.platforms.map(plat => `
    <div class="platform-card">
      <div class="plat-badge">${plat.badge}</div>
      <h3 class="plat-name">${plat.name}</h3>
      <div class="plat-tagline">${plat.tagline}</div>
      <p class="plat-desc">${plat.description}</p>
      <a href="${plat.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="margin-top: auto;">
        <span>Open ${plat.name}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
    </div>
  `).join('');
}

// Render Study Guides & Notes
function renderStudyGuides() {
  const container = document.getElementById("studyGuidesGrid");
  if (!container) return;

  container.innerHTML = state.studyGuides.map(guide => `
    <div class="study-guide-card">
      <div class="guide-meta">
        <span class="badge badge-purple">${escapeHTML(guide.subject)}</span>
        <span>${guide.readTime}</span>
      </div>
      <h3 class="guide-title">${escapeHTML(guide.title)}</h3>
      <p class="guide-summary">${escapeHTML(guide.summary)}</p>
      <div style="display: flex; gap: 0.5rem; margin-top: auto;">
        <button class="btn btn-primary btn-sm" style="flex-grow: 1;" onclick="openStudyGuideModal('${guide.id}')">
          📖 Read Full Study Guide
        </button>
      </div>
    </div>
  `).join('');
}

// Render Curated Educational Videos
function renderVideos() {
  const container = document.getElementById("videosGrid");
  if (!container) return;

  container.innerHTML = state.videos.map(vid => `
    <div class="video-card">
      <div class="video-thumbnail-wrap" onclick="openVideoModal('${escapeHTML(vid.title)}', '${vid.embedUrl}', '${escapeHTML(vid.description)}')">
        <img src="https://img.youtube.com/vi/${vid.videoId}/hqdefault.jpg" alt="${escapeHTML(vid.title)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80'">
        <div class="video-play-overlay">
          <div class="video-play-btn-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
        </div>
        <div class="video-duration-pill">${vid.duration}</div>
      </div>
      <div class="video-info-body">
        <span class="video-subject-tag">${escapeHTML(vid.subject)}</span>
        <h4 class="video-card-title">${escapeHTML(vid.title)}</h4>
        <p class="video-card-desc">${escapeHTML(vid.description)}</p>
        <div style="display: flex; gap: 0.5rem; margin-top: auto;">
          <button class="btn btn-purple btn-sm" style="flex-grow: 1;" onclick="openVideoModal('${escapeHTML(vid.title)}', '${vid.embedUrl}', '${escapeHTML(vid.description)}')">
            ▶ Watch Video
          </button>
          <a href="${vid.watchUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="Open on YouTube">
            ↗
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Digital Awareness & Cyber Safety Cards
function renderDigitalAwareness() {
  const container = document.getElementById("awarenessGrid");
  if (!container) return;

  container.innerHTML = state.digitalAwareness.map(item => `
    <div class="awareness-card">
      <div class="awareness-icon-header">
        <div class="awareness-icon-wrap">
          ${getSecurityIconSVG(item.icon)}
        </div>
        <div>
          <h3 class="awareness-title">${escapeHTML(item.title)}</h3>
          <div class="awareness-tagline">${escapeHTML(item.tagline)}</div>
        </div>
      </div>
      <p class="awareness-summary">${escapeHTML(item.summary)}</p>
      <ul class="awareness-points-list">
        ${item.points.map(pt => `
          <li class="awareness-point-item">${parseMarkdownBold(pt)}</li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// ==========================================================================
// INTERACTIVE QUIZ ENGINE
// ==========================================================================
function initQuiz() {
  renderQuizTabs();
  loadCurrentQuiz();
}

function renderQuizTabs() {
  const container = document.getElementById("quizTabsContainer");
  if (!container) return;

  container.innerHTML = state.quizzes.map(quiz => `
    <button class="quiz-tab-btn ${state.currentQuizId === quiz.id ? 'active' : ''}" onclick="switchQuiz('${quiz.id}')">
      ${quiz.title}
    </button>
  `).join('');
}

window.switchQuiz = function(quizId) {
  state.currentQuizId = quizId;
  state.quizQuestionIndex = 0;
  state.quizSelectedOption = null;
  state.quizAnswers = [];
  state.quizScore = 0;
  state.quizIsSubmitted = false;

  renderQuizTabs();
  loadCurrentQuiz();
};

function loadCurrentQuiz() {
  const quiz = state.quizzes.find(q => q.id === state.currentQuizId);
  if (!quiz) return;

  const activeView = document.getElementById("quizActiveView");
  const resultView = document.getElementById("quizResultView");

  if (activeView) activeView.style.display = "block";
  if (resultView) resultView.classList.remove("show");

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const quiz = state.quizzes.find(q => q.id === state.currentQuizId);
  if (!quiz) return;

  const currentQ = quiz.questions[state.quizQuestionIndex];
  const totalQ = quiz.questions.length;

  // Header info
  const progressEl = document.getElementById("quizProgressText");
  const scoreEl = document.getElementById("quizScorePill");
  if (progressEl) progressEl.textContent = `Question ${state.quizQuestionIndex + 1} of ${totalQ}`;
  if (scoreEl) scoreEl.textContent = `Score: ${state.quizScore} / ${totalQ}`;

  // Question Prompt
  const promptEl = document.getElementById("quizQuestionPrompt");
  if (promptEl) promptEl.textContent = currentQ.question;

  // Render options
  const optionsList = document.getElementById("quizOptionsList");
  if (!optionsList) return;

  const letters = ["A", "B", "C", "D"];
  optionsList.innerHTML = currentQ.options.map((opt, idx) => `
    <button class="quiz-option-btn ${state.quizSelectedOption === idx ? 'selected' : ''}" onclick="selectQuizOption(${idx})" id="quizOptionBtn_${idx}">
      <span class="quiz-option-letter">${letters[idx]}</span>
      <span>${escapeHTML(opt)}</span>
    </button>
  `).join('');

  // Reset explanation and submit button state
  const explanationBox = document.getElementById("quizExplanationBox");
  if (explanationBox) {
    explanationBox.classList.remove("show");
    explanationBox.innerHTML = "";
  }

  const submitBtn = document.getElementById("quizSubmitBtn");
  const nextBtn = document.getElementById("quizNextBtn");

  if (submitBtn) {
    submitBtn.style.display = "inline-flex";
    submitBtn.disabled = state.quizSelectedOption === null;
  }
  if (nextBtn) {
    nextBtn.style.display = "none";
  }

  state.quizIsSubmitted = false;
}

window.selectQuizOption = function(idx) {
  if (state.quizIsSubmitted) return; // already locked
  state.quizSelectedOption = idx;

  document.querySelectorAll(".quiz-option-btn").forEach((btn, i) => {
    btn.classList.toggle("selected", i === idx);
  });

  const submitBtn = document.getElementById("quizSubmitBtn");
  if (submitBtn) submitBtn.disabled = false;
};

window.submitQuizAnswer = function() {
  if (state.quizSelectedOption === null || state.quizIsSubmitted) return;

  const quiz = state.quizzes.find(q => q.id === state.currentQuizId);
  const currentQ = quiz.questions[state.quizQuestionIndex];
  state.quizIsSubmitted = true;

  const isCorrect = state.quizSelectedOption === currentQ.correct;
  if (isCorrect) {
    state.quizScore++;
  }

  // Highlight options
  currentQ.options.forEach((_, idx) => {
    const btn = document.getElementById(`quizOptionBtn_${idx}`);
    if (!btn) return;

    btn.disabled = true;
    if (idx === currentQ.correct) {
      btn.classList.add("correct");
    } else if (idx === state.quizSelectedOption) {
      btn.classList.add("incorrect");
    }
  });

  // Show explanation
  const explanationBox = document.getElementById("quizExplanationBox");
  if (explanationBox) {
    explanationBox.classList.add("show");
    explanationBox.innerHTML = `
      <div style="font-weight: 700; color: ${isCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; margin-bottom: 0.35rem;">
        ${isCorrect ? '🎉 Correct Answer!' : '❌ Not Quite Right!'}
      </div>
      <div style="font-size: 0.92rem; color: var(--text-main); line-height: 1.5;">
        ${escapeHTML(currentQ.explanation)}
      </div>
    `;
  }

  // Update Score Indicator
  const scoreEl = document.getElementById("quizScorePill");
  if (scoreEl) scoreEl.textContent = `Score: ${state.quizScore} / ${quiz.questions.length}`;

  // Toggle buttons
  const submitBtn = document.getElementById("quizSubmitBtn");
  const nextBtn = document.getElementById("quizNextBtn");
  if (submitBtn) submitBtn.style.display = "none";
  if (nextBtn) {
    nextBtn.style.display = "inline-flex";
    const isLast = state.quizQuestionIndex === quiz.questions.length - 1;
    nextBtn.textContent = isLast ? "View Final Score 🏆" : "Next Question →";
  }
};

window.nextQuizQuestion = function() {
  const quiz = state.quizzes.find(q => q.id === state.currentQuizId);
  if (!quiz) return;

  if (state.quizQuestionIndex < quiz.questions.length - 1) {
    state.quizQuestionIndex++;
    state.quizSelectedOption = null;
    renderQuizQuestion();
  } else {
    // Show Results
    showQuizResults();
  }
};

function showQuizResults() {
  const quiz = state.quizzes.find(q => q.id === state.currentQuizId);
  const activeView = document.getElementById("quizActiveView");
  const resultView = document.getElementById("quizResultView");

  if (activeView) activeView.style.display = "none";
  if (resultView) {
    resultView.classList.add("show");

    const total = quiz.questions.length;
    const percentage = Math.round((state.quizScore / total) * 100);

    let message = "";
    if (percentage === 100) {
      message = "Outstanding! Perfect score! You have completely mastered this topic.";
    } else if (percentage >= 80) {
      message = "Great job! You have a solid understanding of these core principles.";
    } else if (percentage >= 60) {
      message = "Good effort! Review the study materials and give it another shot to score higher.";
    } else {
      message = "Keep learning! Check our free study notes and video tutorials, then try again.";
    }

    const scoreBig = document.getElementById("resultScoreBig");
    const msgEl = document.getElementById("resultMessage");

    if (scoreBig) scoreBig.textContent = `${state.quizScore} / ${total} (${percentage}%)`;
    if (msgEl) msgEl.textContent = message;
  }
}

window.retryQuiz = function() {
  switchQuiz(state.currentQuizId);
};

// ==========================================================================
// STUDY GUIDE READER MODAL
// ==========================================================================
window.openStudyGuideModal = function(guideId) {
  const guide = state.studyGuides.find(g => g.id === guideId);
  if (!guide) return;

  const modal = document.getElementById("studyGuideModal");
  const titleEl = document.getElementById("studyGuideModalTitle");
  const bodyEl = document.getElementById("studyGuideModalBody");

  if (titleEl) titleEl.textContent = guide.title;
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; align-items: center;">
        <span class="badge badge-purple">${escapeHTML(guide.subject)}</span>
        <span style="font-size: 0.85rem; color: var(--text-light);">${guide.readTime}</span>
      </div>
      <div class="reader-body">
        ${renderMarkdownToHTML(guide.content)}
      </div>
      <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.8rem; color: var(--text-light);">Learn for All • Free Educational Study Guide</span>
        <button class="btn btn-secondary btn-sm" onclick="window.print()">🖨️ Print / Save PDF</button>
      </div>
    `;
  }

  if (modal) modal.classList.add("show");
};

// ==========================================================================
// VIDEO MODAL PLAYER
// ==========================================================================
window.openVideoModal = function(title, embedUrl, description) {
  const modal = document.getElementById("videoPlayerModal");
  const titleEl = document.getElementById("videoModalTitle");
  const frameEl = document.getElementById("videoModalIframe");
  const descEl = document.getElementById("videoModalDesc");

  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = description || "";
  if (frameEl) {
    // Autoplay embed safely
    const separator = embedUrl.includes("?") ? "&" : "?";
    frameEl.src = `${embedUrl}${separator}autoplay=1`;
  }

  if (modal) modal.classList.add("show");
};

window.closeAllModals = function() {
  document.querySelectorAll(".modal-backdrop").forEach(m => {
    m.classList.remove("show");
  });

  // Stop video playback when closing
  const frameEl = document.getElementById("videoModalIframe");
  if (frameEl) frameEl.src = "";
};

// ==========================================================================
// ADMIN DASHBOARD & CRUD MANAGER
// ==========================================================================
window.openAdminModal = function() {
  if (state.isAdminLoggedIn) {
    showAdminDashboard();
  } else {
    const modal = document.getElementById("adminLoginModal");
    if (modal) modal.classList.add("show");
  }
};

window.handleAdminLogin = function(e) {
  e.preventDefault();
  const passwordInput = document.getElementById("adminPasswordInput");
  const password = passwordInput?.value.trim();

  // Simple, student-friendly admin access password:
  // Default: learnforall2026 or admin123
  if (password === "learnforall2026" || password === "admin123" || password === "admin") {
    state.isAdminLoggedIn = true;
    sessionStorage.setItem("lfa_admin_auth", "true");
    closeAllModals();
    passwordInput.value = "";
    showToast("Admin access unlocked successfully!", "success");
    updateAdminUI();
    showAdminDashboard();
  } else {
    showToast("Incorrect password. Default is: learnforall2026", "error");
  }
};

window.handleAdminLogout = function() {
  state.isAdminLoggedIn = false;
  sessionStorage.removeItem("lfa_admin_auth");
  updateAdminUI();
  closeAllModals();
  showToast("Logged out of Admin mode.", "success");
  renderResources();
};

function updateAdminUI() {
  const adminNavBtn = document.getElementById("adminNavBtn");
  if (adminNavBtn) {
    if (state.isAdminLoggedIn) {
      adminNavBtn.innerHTML = `⚙️ Admin Dashboard (Active)`;
      adminNavBtn.classList.add("admin-btn");
    } else {
      adminNavBtn.innerHTML = `🔒 Admin Login`;
      adminNavBtn.classList.remove("admin-btn");
    }
  }
}

function showAdminDashboard() {
  const modal = document.getElementById("adminDashboardModal");
  renderAdminTable();
  if (modal) modal.classList.add("show");
}

function renderAdminTable() {
  const tableBody = document.getElementById("adminResourceTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = state.resources.map(res => `
    <tr>
      <td style="font-weight: 600;">${escapeHTML(res.title)}</td>
      <td><span class="badge badge-purple">${escapeHTML(res.category)}</span></td>
      <td>${escapeHTML(res.platform)}</td>
      <td>
        <span class="badge ${res.pricingTag.includes('100% Free') ? 'badge-green' : 'badge-blue'}">
          ${escapeHTML(res.pricingTag)}
        </span>
      </td>
      <td>
        <div class="admin-actions-cell">
          <button class="btn btn-secondary btn-sm" onclick="openEditResourceModal('${res.id}')">Edit</button>
          <button class="btn btn-secondary btn-sm" style="color: var(--accent-rose);" onclick="deleteResource('${res.id}')">Delete</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Add or Edit Resource Modal
window.openAddResourceModal = function() {
  const modal = document.getElementById("resourceFormModal");
  const form = document.getElementById("resourceForm");
  const modalTitle = document.getElementById("resourceFormModalTitle");

  if (form) form.reset();
  document.getElementById("editResourceId").value = "";
  if (modalTitle) modalTitle.textContent = "Add New Educational Resource";

  if (modal) modal.classList.add("show");
};

window.openEditResourceModal = function(id) {
  const res = state.resources.find(r => r.id === id);
  if (!res) return;

  const modal = document.getElementById("resourceFormModal");
  const modalTitle = document.getElementById("resourceFormModalTitle");
  if (modalTitle) modalTitle.textContent = "Edit Educational Resource";

  document.getElementById("editResourceId").value = res.id;
  document.getElementById("formResTitle").value = res.title;
  document.getElementById("formResCategory").value = res.category;
  document.getElementById("formResSubcategory").value = res.subcategory;
  document.getElementById("formResPlatform").value = res.platform;
  document.getElementById("formResUrl").value = res.url;
  document.getElementById("formResVideoUrl").value = res.videoUrl || "";
  document.getElementById("formResPricing").value = res.pricingTag;
  document.getElementById("formResDesc").value = res.description;

  if (modal) modal.classList.add("show");
};

window.saveResourceForm = function(e) {
  e.preventDefault();
  const id = document.getElementById("editResourceId").value;
  const title = document.getElementById("formResTitle").value.trim();
  const category = document.getElementById("formResCategory").value;
  const subcategory = document.getElementById("formResSubcategory").value.trim();
  const platform = document.getElementById("formResPlatform").value.trim();
  const url = document.getElementById("formResUrl").value.trim();
  const videoUrl = document.getElementById("formResVideoUrl").value.trim();
  const pricingTag = document.getElementById("formResPricing").value;
  const description = document.getElementById("formResDesc").value.trim();

  if (!title || !url || !description) {
    showToast("Please fill all required fields.", "error");
    return;
  }

  if (id) {
    // Edit existing
    const index = state.resources.findIndex(r => r.id === id);
    if (index !== -1) {
      state.resources[index] = {
        ...state.resources[index],
        title,
        category,
        subcategory,
        platform,
        url,
        videoUrl: videoUrl || undefined,
        pricingTag,
        description
      };
      showToast("Resource updated successfully!", "success");
    }
  } else {
    // Add new
    const newResource = {
      id: "res-user-" + Date.now(),
      title,
      category,
      subcategory,
      platform,
      url,
      videoUrl: videoUrl || undefined,
      pricingTag,
      description,
      isFree: true,
      badge: "Community Added"
    };
    state.resources.unshift(newResource);
    showToast("New resource added successfully!", "success");
  }

  persistResources();
  renderHeroStats();
  renderResources();
  renderAdminTable();
  closeResourceFormModal();
};

window.closeResourceFormModal = function() {
  const modal = document.getElementById("resourceFormModal");
  if (modal) modal.classList.remove("show");
};

window.deleteResource = function(id) {
  if (!confirm("Are you sure you want to delete this resource?")) return;

  state.resources = state.resources.filter(r => r.id !== id);
  persistResources();
  renderHeroStats();
  renderResources();
  renderAdminTable();
  showToast("Resource deleted.", "success");
};

window.resetDefaultResources = function() {
  if (!confirm("Are you sure you want to restore the default initial resources? Any custom additions will be reset.")) return;

  state.resources = [...INITIAL_DATA.resources];
  persistResources();
  renderHeroStats();
  renderResources();
  renderAdminTable();
  showToast("Default resources restored successfully.", "success");
};

// Export Resources as JSON File
window.exportResourcesJSON = function() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.resources, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `learn-for-all-resources-${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Resources downloaded as JSON backup file!", "success");
};

// Import Resources from JSON File
window.importResourcesJSON = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        state.resources = imported;
        persistResources();
        renderHeroStats();
        renderResources();
        renderAdminTable();
        showToast(`Successfully imported ${imported.length} resources!`, "success");
      } else {
        showToast("Invalid JSON file format. Must be an array of resources.", "error");
      }
    } catch (err) {
      showToast("Error parsing JSON file.", "error");
    }
  };
  reader.readAsText(file);
};

// ==========================================================================
// UTILITIES & HELPERS
// ==========================================================================

function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✔' : '⚠️'}</span>
    <span>${escapeHTML(message)}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function escapeHTML(str) {
  if (!str) return "";
  return str.replace(/[&<>'"]/g, tag => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }[tag] || tag));
}

function parseMarkdownBold(text) {
  // Simple regex to parse **bold** into <strong>bold</strong>
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

function renderMarkdownToHTML(md) {
  // Lightweight markdown converter for study guides
  let html = md.trim();

  // Headings
  html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");
  // Italics
  html = html.replace(/\*(.*?)\*/gim, "<em>$1</em>");

  // Tables
  html = html.replace(/\|(.+)\|/gim, (match) => {
    const cells = match.split("|").filter(c => c.trim().length > 0);
    if (cells.some(c => c.includes("---"))) {
      return "";
    }
    return "<tr>" + cells.map(c => `<td>${c.trim()}</td>`).join("") + "</tr>";
  });
  html = html.replace(/(<tr>.+<\/tr>)/gs, "<table class='reader-table'>$1</table>");

  // Lists
  html = html.replace(/^\* (.*$)/gim, "<li>$1</li>");
  html = html.replace(/(<li>.+<\/li>)/gs, "<ul>$1</ul>");

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, "<blockquote style='border-left: 3px solid var(--primary-blue); padding-left: 1rem; color: var(--text-muted); margin: 1rem 0;'>$1</blockquote>");

  // Paragraphs
  html = html.split("\n\n").map(para => {
    if (para.startsWith("<h") || para.startsWith("<table") || para.startsWith("<ul") || para.startsWith("<blockquote")) {
      return para;
    }
    return `<p>${para}</p>`;
  }).join("");

  return html;
}

function getCategoryEmoji(catId) {
  switch (catId) {
    case "commerce": return "💼";
    case "english": return "📖";
    case "computer": return "💻";
    case "school": return "🎓";
    case "digital": return "✨";
    default: return "📚";
  }
}

function getCategoryGradient(catId) {
  switch (catId) {
    case "commerce": return "#2563eb, #4f46e5";
    case "english": return "#7c3aed, #4f46e5";
    case "computer": return "#0284c7, #2563eb";
    case "school": return "#4f46e5, #7c3aed";
    case "digital": return "#9333ea, #db2777";
    default: return "#2563eb, #7c3aed";
  }
}

function getCategorySVG(catId) {
  switch (catId) {
    case "commerce":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`;
    case "english":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`;
    case "computer":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`;
    case "school":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`;
    case "digital":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    default:
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`;
  }
}

function getSecurityIconSVG(iconName) {
  switch (iconName) {
    case "shield-check":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`;
    case "alert-triangle":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
    case "key":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="7.5" cy="15.5" r="5.5"></circle><path d="m21 2-9.6 9.6"></path><path d="m15.5 7.5 3 3L22 7l-3-3"></path></svg>`;
    case "mail-warning":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="M20 14v4"></path><path d="M20 22v.01"></path></svg>`;
    case "users":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
    case "lock":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;
    default:
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`;
  }
}
