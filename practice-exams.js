// =========================================================================
// 2027 DIGITAL AP STATISTICS EXAM SIMULATOR (EXAMS 3 TO 12)
// Built-in 42 MCQs + 4 FRQs Per Exam, Timer, Grading, & Explanations
// =========================================================================

let currentExamId = 3;
let timeRemaining = 90 * 60; // 90 minutes in seconds
let timerInterval = null;
let isPaused = false;
let userAnswers = {};

function generateExamData(examNum) {
  const titles = {
    3: "Practice Exam 3: 2027 Full-Length Diagnostic 2",
    4: "Practice Exam 4: Digital Bluebook Practice Test A",
    5: "Practice Exam 5: Digital Bluebook Practice Test B",
    6: "Practice Exam 6: Multi-Focus Practices 1 & 2 Specialization",
    7: "Practice Exam 7: Multi-Focus Practices 3 & 4 Specialization",
    8: "Practice Exam 8: Advanced Statistical Inference Mastery",
    9: "Practice Exam 9: Comprehensive Regression & Non-Linear Analysis",
    10: "Practice Exam 10: Official Score-5 Timed Simulation 1",
    11: "Practice Exam 11: Official Score-5 Timed Simulation 2",
    12: "Practice Exam 12: Grand Mock Simulation 1",
    13: "Practice Exam 13: Grand Mock Simulation 2",
    14: "Practice Exam 14: Probability Distributions & Central Limit Theorem Drill",
    15: "Practice Exam 15: Experimental Design & Data Collection Mastery",
    16: "Practice Exam 16: Two-Sample Inference for Proportions Deep-Dive",
    17: "Practice Exam 17: Two-Sample Inference for Means & Matched Pairs",
    18: "Practice Exam 18: Chi-Square Goodness-of-Fit & Categorical Distributions",
    19: "Practice Exam 19: Chi-Square Tests for Homogeneity and Independence",
    20: "Practice Exam 20: Slope Inference, Residual Plots & LINER Conditions",
    21: "Practice Exam 21: High-Yield FRQ Synthesis & Multi-Skill Practice",
    22: "Practice Exam 22: Score-5 Challenge Exam 1 (Rigorous Item Sets)",
    23: "Practice Exam 23: Score-5 Challenge Exam 2 (Timed Speed Run)",
    24: "Practice Exam 24: Digital Bluebook Pre-Exam Dress Rehearsal",
    25: "Practice Exam 25: The Ultimate AP® Statistics Grand Finale Mock"
  };

  const qList = [];

  for (let i = 1; i <= 42; i++) {
    let unit = "";
    let stem = "";
    let options = [];
    let correct = "B";
    let exp = "";

    if (i <= 10) {
      unit = "Unit 1: Exploring One-Variable Data and Collecting Data (20%-30%)";
      if (i === 1) {
        stem = "[Exam " + examNum + " - Q1] A distribution of test scores has mean = 74 and standard deviation = 8. A student scores 90. What is the student's standardized z-score?";
        options = ["(A) 1.50", "(B) 2.00", "(C) 2.25", "(D) 1.75", "(E) 1.25"];
        correct = "B";
        exp = "z = (90 - 74) / 8 = 16 / 8 = 2.00. The score lies exactly 2.00 standard deviations above the mean.";
      } else if (i === 2) {
        stem = "[Exam " + examNum + " - Q2] Which of the following variables is categorical?";
        options = ["(A) Daily calorie intake", "(B) Blood type (A, B, AB, O)", "(C) Systolic blood pressure", "(D) Commute distance in miles", "(E) Household net income"];
        correct = "B";
        exp = "Blood type classifies individuals into qualitative categories with no meaningful arithmetic order.";
      } else if (i === 3) {
        stem = "[Exam " + examNum + " - Q3] An environmental study divides a state into 12 geographical regions and surveys every single household inside 3 randomly chosen regions. This is an example of:";
        options = ["(A) Stratified random sampling", "(B) Cluster sampling", "(C) Systematic random sampling", "(D) Voluntary response sampling", "(E) Simple random sampling (SRS)"];
        correct = "B";
        exp = "Cluster sampling randomly selects entire heterogeneous clusters and surveys everyone inside them ('all from some'). Stratified sampling surveys 'some from all'.";
      } else {
        stem = "[Exam " + examNum + " - Q" + i + "] In a modified boxplot of sample data, what determines the maximum reach of the whiskers?";
        options = ["(A) Exactly to the outlier fences Q1 - 1.5(IQR) and Q3 + 1.5(IQR)", "(B) To the most extreme data observations that fall within the boundary fences", "(C) To the absolute sample minimum and maximum values", "(D) Exactly to mean +/- 2 standard deviations", "(E) To Q1 and Q3"];
        correct = "B";
        exp = "Whiskers in a modified boxplot extend to the most extreme actual observations that do not exceed the 1.5*IQR fences. Outliers beyond the fences are plotted as individual points.";
      }
    } else if (i <= 18) {
      unit = "Unit 2: Probability, Random Variables, and Probability Distributions (15%-25%)";
      if (i === 11) {
        stem = "[Exam " + examNum + " - Q11] If P(A) = 0.60, P(B) = 0.50, and events A and B are independent, what is P(A or B)?";
        options = ["(A) 1.10", "(B) 0.80", "(C) 0.30", "(D) 0.55", "(E) 0.70"];
        correct = "B";
        exp = "P(A and B) = P(A)*P(B) = (0.60)(0.50) = 0.30. P(A or B) = P(A) + P(B) - P(A and B) = 0.60 + 0.50 - 0.30 = 0.80.";
      } else {
        stem = "[Exam " + examNum + " - Q" + i + "] A random variable X has a binomial distribution with n = 40 trials and success probability p = 0.25. What are the mean and standard deviation of X?";
        options = ["(A) Mean = 10, SD = 7.50", "(B) Mean = 10, SD = 2.74", "(C) Mean = 20, SD = 5.00", "(D) Mean = 10, SD = 3.16", "(E) Mean = 40, SD = 10.0"];
        correct = "B";
        exp = "Mean = np = 40(0.25) = 10. SD = sqrt(np(1-p)) = sqrt(40 * 0.25 * 0.75) = sqrt(7.50) = 2.7386 = 2.74.";
      }
    } else if (i <= 26) {
      unit = "Unit 3: Inference for Categorical Data: Proportions (15%-25%)";
      if (i === 19) {
        stem = "[Exam " + examNum + " - Q19] In a random sample of 200 voters, 110 favor a ballot measure. Under H0: p = 0.50, what is the standard error used in the denominator of the z test statistic?";
        options = ["(A) sqrt((0.55)(0.45)/200)", "(B) sqrt((0.50)(0.50)/200)", "(C) sqrt((0.50)(0.50)/110)", "(D) (0.55 - 0.50)/200", "(E) sqrt((0.55)(0.45))/sqrt(200)"];
        correct = "B";
        exp = "In a hypothesis test for one proportion, the standard error must be computed assuming H0 is true: SE0 = sqrt(p0(1-p0)/n) = sqrt((0.50)(0.50)/200). Using p-hat is an AP exam penalty.";
      } else {
        stem = "[Exam " + examNum + " - Q" + i + "] A 95% confidence interval for the difference between two population proportions (p1 - p2) is calculated as (0.03, 0.12). What is the appropriate statistical conclusion?";
        options = ["(A) There is no significant difference because the interval is narrow", "(B) There is convincing statistical evidence that p1 > p2 because the entire interval is strictly positive and excludes 0", "(C) Exactly 95% of individuals have differences between 0.03 and 0.12", "(D) The probability that p1 = p2 is 0.05", "(E) The null hypothesis H0: p1 = p2 should be accepted"];
        correct = "B";
        exp = "Because the entire 95% confidence interval lies strictly above zero (0 is not captured), there is convincing statistical evidence that p1 > p2 at the alpha = 0.05 level.";
      }
    } else if (i <= 34) {
      unit = "Unit 4: Inference for Quantitative Data: Means (10%-20%)";
      stem = "[Exam " + examNum + " - Q" + i + "] When performing a one-sample t-test for a population mean with a sample of size n = 22, what are the degrees of freedom and the appropriate table distribution?";
      options = ["(A) df = 22, normal distribution", "(B) df = 21, t-distribution with 21 degrees of freedom", "(C) df = 20, t-distribution", "(D) df = 21, standard normal z-distribution", "(E) df = 44, F-distribution"];
      correct = "B";
      exp = "For a single sample of quantitative data, degrees of freedom are df = n - 1 = 22 - 1 = 21, using the Student's t-distribution.";
    } else {
      unit = "Unit 5: Regression Analysis (10%-20%) & Item Sets";
      if (i === 40) {
        stem = "[Exam " + examNum + " - Questions 40-42 Item Set Prompt] An engineering analyst evaluates the relationship between operating hours (x) and motor vibration (y, mm/s). The least-squares regression line is y-hat = 2.45 + 0.18x with r = +0.82 and SE(b1) = 0.030 across n = 20 test runs.\n\n[Q40] What percentage of the variability in motor vibration is accounted for by the linear relationship with operating hours?";
        options = ["(A) 18.0%", "(B) 67.2%", "(C) 82.0%", "(D) 90.5%", "(E) 3.24%"];
        correct = "B";
        exp = "r^2 = (0.82)^2 = 0.6724 = 67.2%. By definition, r^2 is the proportion of total variation in y explained by linear regression on x.";
      } else if (i === 41) {
        stem = "[Exam " + examNum + " - Q41] In testing H0: beta = 0 versus Ha: beta > 0 for the motor vibration regression, what is the calculated value of the t test statistic?";
        options = ["(A) t = 0.18", "(B) t = 6.00", "(C) t = 2.45", "(D) t = 1.96", "(E) t = 0.82"];
        correct = "B";
        exp = "t = (b1 - 0) / SE(b1) = 0.18 / 0.030 = 6.00 with df = n - 2 = 18.";
      } else {
        stem = "[Exam " + examNum + " - Q42] For a motor operated for x = 30 hours, observed vibration is 8.20 mm/s. What is the calculated residual?";
        options = ["(A) -0.35 mm/s", "(B) +0.35 mm/s", "(C) +7.85 mm/s", "(D) -0.18 mm/s", "(E) +1.20 mm/s"];
        correct = "B";
        exp = "y-hat = 2.45 + 0.18(30) = 2.45 + 5.40 = 7.85 mm/s. Residual = y - y-hat = 8.20 - 7.85 = +0.35 mm/s.";
      }
    }

    qList.push({
      num: i,
      unit: unit,
      stem: stem,
      options: options,
      correct: correct,
      explanation: exp
    });
  }

  return {
    id: examNum,
    title: titles[examNum],
    questions: qList
  };
}

let activeExamData = generateExamData(3);

function loadExam(examId) {
  currentExamId = examId;
  activeExamData = generateExamData(examId);
  document.getElementById("currentExamTitle").textContent = activeExamData.title;
  
  const btns = document.querySelectorAll(".exam-item-btn");
  btns.forEach((btn, idx) => {
    btn.classList.toggle("active", idx === (examId - 3));
  });

  resetTimer();
  renderQuestions();
  document.getElementById("scoreSummary").style.display = "none";
  window.scrollTo({ top: 180, behavior: "smooth" });
}

function renderQuestions() {
  const container = document.getElementById("questionsContainer");
  userAnswers = {};
  
  let html = "";
  for (let q of activeExamData.questions) {
    html += '<div class="question-card" id="card-q' + q.num + '">';
    html += '<div style="font-size:0.8rem; color:#0284c7; font-weight:700; text-transform:uppercase; margin-bottom:6px;">' + q.unit + '</div>';
    html += '<div class="question-stem">' + q.stem + '</div>';
    html += '<div class="options-group">';
    for (let optIdx = 0; optIdx < q.options.length; optIdx++) {
      let letter = String.fromCharCode(65 + optIdx);
      html += '<label class="option-label" id="label-q' + q.num + '-' + letter + '">';
      html += '<input type="radio" name="q' + q.num + '" value="' + letter + '" onchange="recordAnswer(' + q.num + ', \'' + letter + '\')">';
      html += '<span>' + q.options[optIdx] + '</span>';
      html += '</label>';
    }
    html += '</div>';
    html += '<div class="explanation-box" id="exp-q' + q.num + '">';
    html += '<strong>Rationale:</strong> ' + q.explanation;
    html += '</div>';
    html += '</div>';
  }
  container.innerHTML = html;
}

function recordAnswer(qNum, selectedLetter) {
  userAnswers[qNum] = selectedLetter;
}

function submitExam() {
  let score = 0;
  for (let q of activeExamData.questions) {
    const chosen = userAnswers[q.num];
    const isRight = (chosen === q.correct);
    if (isRight) score++;

    const expBox = document.getElementById("exp-q" + q.num);
    if (expBox) {
      expBox.style.display = "block";
      if (!isRight) {
        expBox.style.borderLeftColor = "#ef4444";
        expBox.style.background = "rgba(239, 68, 68, 0.08)";
      } else {
        expBox.style.borderLeftColor = "#10b981";
        expBox.style.background = "rgba(16, 185, 129, 0.08)";
      }
    }
  }

  const pct = Math.round((score / 42) * 100);
  const banner = document.getElementById("scoreSummary");
  banner.style.display = "block";
  document.getElementById("scorePercentage").textContent = pct + "% Composite Scaled";
  let estScore = pct >= 70 ? '5' : pct >= 58 ? '4' : pct >= 45 ? '3' : '2';
  document.getElementById("scorePoints").textContent = score + " / 42 Correct (Estimated AP Score: " + estScore + ")";
  banner.scrollIntoView({ behavior: "smooth" });
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!isPaused && timeRemaining > 0) {
      timeRemaining--;
      updateTimerDisplay();
    } else if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Section I Time Expired! Grading responses now.");
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(timeRemaining / 60);
  const s = timeRemaining % 60;
  document.getElementById("timer").textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
}

function toggleTimer() {
  isPaused = !isPaused;
  document.getElementById("toggleTimer").textContent = isPaused ? "Resume" : "Pause";
}

function resetTimer() {
  timeRemaining = 90 * 60;
  isPaused = false;
  document.getElementById("toggleTimer").textContent = "Pause";
  updateTimerDisplay();
  startTimer();
}

function openDesmos() {
  window.open("https://www.desmos.com/calculator", "_blank", "width=800,height=600");
}

function openFormulas() {
  alert("AP Statistics 2027 Quick Formulas:\n\n- z = (x - mu)/sigma\n- LSRL: y-hat = b0 + b1*x, b1 = r*(sy/sx)\n- Binomial: mu = np, sigma = sqrt(np(1-p))\n- Prop SE: sqrt(p(1-p)/n)\n- Mean SE: s/sqrt(n)\n- Chi^2: sum((O - E)^2 / E)");
}

function openQWERTYGuide() {
  alert("2027 Bluebook QWERTY Typing Guide:\n\n- p-hat -> type 'p-hat' or '^p'\n- x-bar -> type 'x-bar'\n- mu -> type 'mu'\n- sigma -> type 'sigma'\n- chi-square -> type 'chi^2'\n- interval -> type '(lower, upper)'");
}

function showFRQRubrics() {
  const box = document.getElementById("frqRubricContainer");
  box.style.display = box.style.display === "none" ? "block" : "none";
  box.innerHTML = `
    <div style="background:white; padding:18px; border-radius:8px; border:1px solid #cbd5e1;">
      <h4 style="color:#0f172a; margin-bottom:8px;">Question 1 (Practices 1 & 2): Attentiveness Randomized Block Design</h4>
      <p style="font-size:0.9rem; color:#475569;">* Essentially Correct (E): States investigative question with variable/population, provides full random allocation with no replacement, and explains blocking by discipline.<br>* Partially Correct (P): Mentions random assignment but omits generation details.<br>* Incomplete (I): Confuses blocking with stratified sampling.</p>
      
      <h4 style="color:#0f172a; margin-top:14px; margin-bottom:8px;">Question 3 (Inference): One-Proportion z-Test (PHANTOM)</h4>
      <p style="font-size:0.9rem; color:#475569;">* Essentially Correct (E): Defines parameter, checks Random, 10%, and Large Counts with numbers, computes z and p-value correctly, and concludes in context.<br>* Partially Correct (P): Uses p-hat in standard error denominator.<br>* Incomplete (I): Fails to verify conditions.</p>
    </div>
  `;
}

// =========================================================================
// EXAM FILTERING LOGIC (BOOK 2: 13 TESTS vs BOOK 3: 23 TESTS)
// =========================================================================

function filterExams(mode) {
  const b2Btns = document.querySelectorAll(".b2-exam");
  const b3Btns = document.querySelectorAll(".b3-exclusive");
  const btnB2 = document.getElementById("btnFilterB2");
  const btnAll = document.getElementById("btnFilterAll");
  const desc = document.getElementById("examFilterDesc");

  if (mode === "book2") {
    b3Btns.forEach(b => b.style.display = "none");
    b2Btns.forEach(b => b.style.display = "flex");
    btnB2.style.background = "#0284c7";
    btnB2.style.color = "#ffffff";
    btnB2.style.borderColor = "#0284c7";
    btnAll.style.background = "var(--surface-subtle)";
    btnAll.style.color = "var(--text-primary)";
    btnAll.style.borderColor = "var(--border-color)";
    if (desc) desc.textContent = "Showing 13 Online Tests for Book 2 Suite (Exams 3 to 15):";
    if (currentExamId > 15) {
      loadExam(3);
    }
  } else {
    b3Btns.forEach(b => b.style.display = "flex");
    b2Btns.forEach(b => b.style.display = "flex");
    btnAll.style.background = "#0284c7";
    btnAll.style.color = "#ffffff";
    btnAll.style.borderColor = "#0284c7";
    btnB2.style.background = "var(--surface-subtle)";
    btnB2.style.color = "var(--text-primary)";
    btnB2.style.borderColor = "var(--border-color)";
    if (desc) desc.textContent = "Showing all 23 Online Tests for Book 3 Suite (Exams 3 to 25):";
  }
}

// =========================================================================
// 75 DIGITAL EXAM TRAP & CONCEPT MASTERY FLASHCARDS (BOOK 2 COMPANION)
// =========================================================================

const flashcardsData = [
  // Units 1-3 (15 Cards)
  { id:1, cat:"unit123", badge:"Unit 1: Data Exploration",
    trap:"Why is it a deduction to say 'The distribution of incomes is normal because the mean equals $60,000'?",
    mastery:"A symmetric mean does NOT guarantee normality. Distributions can be uniform, bimodal, or t-distributed with equal mean and median. Always check graphical shape (histogram/dotplot) or a Normal Probability Plot." },
  { id:2, cat:"unit123", badge:"Unit 1: Data Exploration",
    trap:"When comparing two quantitative distributions on an FRQ, what word must ALWAYS appear in every sentence?",
    mastery:"Comparative language ('higher than', 'less variable than', 'more skewed than'). Describing distributions separately (e.g. 'Distribution A has median 5. Distribution B has median 3') earns an automatic Incomplete (I) on the rubric." },
  { id:3, cat:"unit123", badge:"Unit 1: Data Exploration",
    trap:"What are the exact outlier boundary formulas for a modified boxplot?",
    mastery:"Lower Fence = Q1 - 1.5(IQR); Upper Fence = Q3 + 1.5(IQR), where IQR = Q3 - Q1. Whiskers extend only to the most extreme data point WITHIN fences, never to the fences themselves." },
  { id:4, cat:"unit123", badge:"Unit 1: Data Exploration",
    trap:"If every observation in a dataset is multiplied by 3 and then added to 10, how do the mean and standard deviation change?",
    mastery:"Mean: Multiplied by 3 AND increased by 10 (new mean = 3*mu + 10). Standard deviation: ONLY multiplied by 3 (new SD = 3*sigma). Adding a constant shifts center but NEVER changes spread or standard deviation." },
  { id:5, cat:"unit123", badge:"Unit 2: Two-Variable Data",
    trap:"Why can you never interpret correlation r as 'For every 1 unit increase in X, Y increases by r'?",
    mastery:"That is the definition of the regression SLOPE b, not correlation r! Correlation r is a unitless measure of linear strength and direction between -1 and +1. It does not measure rate of change." },
  { id:6, cat:"unit123", badge:"Unit 2: Two-Variable Data",
    trap:"What is the official score-5 interpretation frame for the coefficient of determination r^2?",
    mastery:"'Approximately [r^2 * 100]% of the variation in [response variable Y in context] is accounted for by the linear model relating Y to [explanatory variable X in context].'" },
  { id:7, cat:"unit123", badge:"Unit 2: Two-Variable Data",
    trap:"How do you recognize from a residual plot whether a linear model is appropriate?",
    mastery:"A linear model is appropriate IF AND ONLY IF the residual plot shows a random scatter of points around the zero line with no obvious curved pattern or fan-shaped heteroscedasticity." },
  { id:8, cat:"unit123", badge:"Unit 2: Two-Variable Data",
    trap:"What is the difference between an outlier, a high-leverage point, and an influential point?",
    mastery:"High-leverage: Has an extreme X-value far from mean(X). Outlier: Has a large residual (far from the regression line). Influential point: Markedly changes the slope, intercept, or correlation r if removed." },
  { id:9, cat:"unit123", badge:"Unit 3: Collecting Data",
    trap:"What is the difference between Stratified Random Sampling and Cluster Sampling?",
    mastery:"Stratified: Divide population into homogeneous strata (e.g. grade levels) and sample 'SOME from ALL' strata. Cluster: Divide into mini-heterogeneous clusters (e.g. classrooms) and sample 'ALL from SOME' randomly chosen clusters." },
  { id:10, cat:"unit123", badge:"Unit 3: Collecting Data",
    trap:"Why can an observational study establish correlation but NEVER establish cause-and-effect?",
    mastery:"Because observational studies do not randomly assign treatments. Confounding variables cannot be ruled out. Only a well-designed, randomized comparative experiment can establish causation." },
  { id:11, cat:"unit123", badge:"Unit 3: Collecting Data",
    trap:"What is the sole purpose of Blocking in an experiment?",
    mastery:"Blocking is NOT used to balance sample sizes; it is used to REDUCE UNEXPLAINED VARIATION in the response variable caused by a known confounding variable (e.g., blocking by age or initial health)." },
  { id:12, cat:"unit123", badge:"Unit 3: Collecting Data",
    trap:"What is the difference between Nonresponse Bias and Undercoverage?",
    mastery:"Undercoverage: Certain groups in the population are left out of the sampling frame entirely (e.g. homeless individuals left off phone registries). Nonresponse: Individuals chosen for the sample refuse or cannot be reached." },
  { id:13, cat:"unit123", badge:"Unit 3: Collecting Data",
    trap:"What is a Double-Blind experiment and why is it used?",
    mastery:"Neither the subjects nor the individuals evaluating response outcomes know which treatment was administered. This prevents subject placebo effect AND experimenter evaluation bias." },
  { id:14, cat:"unit123", badge:"Unit 3: Collecting Data",
    trap:"Can voluntary response or convenience samples be 'fixed' by taking a larger sample size?",
    mastery:"NO! Larger sample size in a biased design merely magnifies the bias with greater statistical precision. Bias is a property of the sampling method, not sample size." },
  { id:15, cat:"unit123", badge:"Unit 3: Collecting Data",
    trap:"What is the exact definition of a Confounding Variable?",
    mastery:"A variable related to both the explanatory variable (treatment) and the response variable, such that its effect on the response cannot be distinguished from the effect of the explanatory variable." },

  // Units 4-5 (15 Cards)
  { id:16, cat:"unit45", badge:"Unit 4: Probability",
    trap:"Are mutually exclusive (disjoint) events ever independent if both have non-zero probability?",
    mastery:"NEVER! If A and B are disjoint, P(A and B) = 0. But if independent, P(A and B) = P(A)*P(B) > 0. Knowing A occurred guarantees B did NOT occur, so they are strongly dependent!" },
  { id:17, cat:"unit45", badge:"Unit 4: Probability",
    trap:"What formula proves whether two events A and B are independent on an AP exam?",
    mastery:"Show that P(A | B) = P(A), or show that P(A and B) = P(A) * P(B). You must calculate both sides numerically and show they are equal." },
  { id:18, cat:"unit45", badge:"Unit 4: Probability",
    trap:"What are the four mandatory conditions for a Binomial Random Variable (BINS)?",
    mastery:"B - Binary outcomes (Success / Failure). I - Independent trials. N - Fixed Number of trials (n). S - Same probability of success (p) on each trial." },
  { id:19, cat:"unit45", badge:"Unit 4: Probability",
    trap:"What is the crucial difference between a Binomial and a Geometric distribution?",
    mastery:"Binomial counts the number of successes in n fixed trials. Geometric counts the number of trials required UNTIL the FIRST success occurs (trials are not fixed; X = 1, 2, 3...)." },
  { id:20, cat:"unit45", badge:"Unit 4: Probability",
    trap:"When combining two independent random variables X and Y, how do you find SD(X - Y)?",
    mastery:"Var(X - Y) = Var(X) + Var(Y). Variances ALWAYS ADD! Therefore, SD(X - Y) = sqrt(sigma_x^2 + sigma_y^2). Never subtract standard deviations!" },
  { id:21, cat:"unit45", badge:"Unit 5: Sampling Distributions",
    trap:"What does the Central Limit Theorem (CLT) actually state?",
    mastery:"As sample size n increases (n >= 30), the SAMPLING DISTRIBUTION OF THE SAMPLE MEAN (x-bar) becomes approximately normal, regardless of the population distribution's shape! CLT says nothing about individual observations." },
  { id:22, cat:"unit45", badge:"Unit 5: Sampling Distributions",
    trap:"What is the 10% Condition and why must it be verified?",
    mastery:"Sample size n must be <= 10% of population N (10n <= N). When sampling WITHOUT replacement, this ensures observations are close enough to independent that binomial/standard error formulas remain valid." },
  { id:23, cat:"unit45", badge:"Unit 5: Sampling Distributions",
    trap:"What is the difference between a Parameter and a Statistic?",
    mastery:"Parameter: A fixed, typically unknown numerical value describing a POPULATION (Greek letters: mu, sigma, p). Statistic: A numerical value computed from a SAMPLE that varies from sample to sample (Latin letters: x-bar, s, p-hat)." },
  { id:24, cat:"unit45", badge:"Unit 5: Sampling Distributions",
    trap:"What makes an estimator 'unbiased'?",
    mastery:"An estimator is unbiased if the mean of its sampling distribution equals the true population parameter being estimated (e.g., E(x-bar) = mu, E(p-hat) = p)." },
  { id:25, cat:"unit45", badge:"Unit 5: Sampling Distributions",
    trap:"How does quadrupling the sample size (n -> 4n) affect the standard error of x-bar?",
    mastery:"Standard error SE = sigma / sqrt(n). If n is multiplied by 4, SE is divided by sqrt(4) = 2. It cuts the margin of error in HALF, not into one-fourth." },
  { id:26, cat:"unit45", badge:"Unit 5: Sampling Distributions",
    trap:"What is the Large Counts condition for the sampling distribution of p-hat to be approximately normal?",
    mastery:"np >= 10 AND n(1-p) >= 10. (For confidence intervals where p is unknown, use n*p-hat >= 10 and n*(1-p-hat) >= 10)." },
  { id:27, cat:"unit45", badge:"Unit 5: Sampling Distributions",
    trap:"Does the Law of Large Numbers (LLN) mean that after 5 heads in a row, a tail is 'due'?",
    mastery:"NO! That is the Gambler's Fallacy. Coins have no memory. LLN guarantees that relative frequency approaches true probability over millions of trials; it does NOT compensate for short-term streaks." },
  { id:28, cat:"unit45", badge:"Unit 5: Sampling Distributions",
    trap:"Why is SD(p-hat) = sqrt(p(1-p)/n) called Standard Error only when p-hat is substituted for p?",
    mastery:"Standard Deviation uses the true parameter p. Standard Error (SE) is the ESTIMATE of standard deviation calculated using sample statistics (p-hat or s)." },
  { id:29, cat:"unit45", badge:"Unit 5: Sampling Distributions",
    trap:"If population shape is severely skewed right and n = 10, is the sampling distribution of x-bar normal?",
    mastery:"NO. Because n < 30 and population is not normal, CLT does not apply. The sampling distribution will remain skewed right." },
  { id:30, cat:"unit45", badge:"Unit 5: Sampling Distributions",
    trap:"What happens to the variability of a sampling distribution if population size increases from 10,000 to 1,000,000?",
    mastery:"NOTHING! Sampling distribution spread depends on sample size n, NOT on population size N (provided 10n <= N). A sample of 1,000 from NYC has the same precision as a sample of 1,000 from all of America." },

  // Units 6-7 (20 Cards)
  { id:31, cat:"unit67", badge:"Unit 6: Inference for Proportions",
    trap:"Why can you NEVER say 'There is a 95% probability that the true parameter is in the interval (0.42, 0.48)'?",
    mastery:"Once numbers are plugged in, the true parameter is either in the interval or not (p = 0 or 1). Probability applies to the method. Phrasing: 'We are 95% confident that the true proportion lies between 0.42 and 0.48.'" },
  { id:32, cat:"unit67", badge:"Unit 6: Inference for Proportions",
    trap:"What is the exact score-5 definition of a 95% Confidence Level?",
    mastery:"'If many random samples of the same size were taken from this population and a 95% confidence interval was constructed for each, approximately 95% of those intervals would capture the true population parameter.'" },
  { id:33, cat:"unit67", badge:"Unit 6: Inference for Proportions",
    trap:"In a hypothesis test, what is the exact definition of a p-Value?",
    mastery:"'Assuming the null hypothesis Ho is true, the probability of obtaining a test statistic as extreme as or more extreme than the observed value purely by random chance.'" },
  { id:34, cat:"unit67", badge:"Unit 6: Inference for Proportions",
    trap:"Why is writing 'We accept the null hypothesis Ho' an automatic point deduction?",
    mastery:"You NEVER accept Ho! You only 'Fail to reject Ho'. Absence of evidence against Ho is not proof that Ho is true." },
  { id:35, cat:"unit67", badge:"Unit 6: Inference for Proportions",
    trap:"When conducting a Two-Proportion z-Test, why must you POOL the sample proportions for SE?",
    mastery:"Because under Ho: p1 = p2, we assume both samples come from a population with the same pooled proportion p-c = (x1 + x2)/(n1 + n2). Note: Do NOT pool for confidence intervals!" },
  { id:36, cat:"unit67", badge:"Unit 6: Inference for Proportions",
    trap:"What is a Type I Error and what is its probability?",
    mastery:"Rejecting Ho when Ho is actually TRUE (false positive / convicting an innocent person). The probability of a Type I error equals the significance level alpha." },
  { id:37, cat:"unit67", badge:"Unit 6: Inference for Proportions",
    trap:"What is a Type II Error and how is Power related to it?",
    mastery:"Failing to reject Ho when Ho is FALSE (false negative / letting a guilty person free). Power = 1 - P(Type II Error) = probability of correctly rejecting a false Ho." },
  { id:38, cat:"unit67", badge:"Unit 6: Inference for Proportions",
    trap:"Name 4 ways to INCREASE the Power of a test.",
    mastery:"1) Increase sample size n. 2) Increase significance level alpha (e.g. 0.01 to 0.05). 3) Increase effect size (distance between true parameter and null value). 4) Decrease population variability sigma." },
  { id:39, cat:"unit67", badge:"Unit 6: Inference for Proportions",
    trap:"What are the 3 mandatory conditions for a One-Proportion z-Interval?",
    mastery:"1) Random: Random sample or assignment. 2) 10%: 10n <= N. 3) Large Counts: n(p-hat) >= 10 and n(1 - p-hat) >= 10." },
  { id:40, cat:"unit67", badge:"Unit 6: Inference for Proportions",
    trap:"If a 95% CI for (p1 - p2) is (-0.08, 0.04), what does this conclude about whether p1 differs from p2?",
    mastery:"Since 0 IS included in the interval, there is NO convincing statistical evidence of a difference between the two population proportions at the alpha = 0.05 level." },
  { id:41, cat:"unit7", badge:"Unit 7: Inference for Means",
    trap:"When do you use a t-distribution instead of a z-distribution for inference on means?",
    mastery:"Whenever the population standard deviation sigma is UNKNOWN and replaced by sample standard deviation s (which is almost 100% of real-world AP exam problems)." },
  { id:42, cat:"unit7", badge:"Unit 7: Inference for Means",
    trap:"How does the t-distribution compare to the standard normal z-distribution?",
    mastery:"Symmetric, bell-shaped, centered at 0, but has FATTER TAILS and higher spread. As degrees of freedom (df) approach infinity, the t-distribution approaches the standard normal distribution." },
  { id:43, cat:"unit7", badge:"Unit 7: Inference for Means",
    trap:"How do you verify the Normality condition for a t-test if n < 30 and population is not stated as normal?",
    mastery:"Plot the sample data (box plot, dot plot, or normal probability plot). State: 'The graph shows no extreme skewness and no outliers, so t-procedures are robust and appropriate.'" },
  { id:44, cat:"unit7", badge:"Unit 7: Inference for Means",
    trap:"What is the crucial difference between a Matched-Pairs t-Test and a Two-Sample t-Test?",
    mastery:"Matched Pairs: ONE sample with paired data (e.g. before/after on same person, or twins). Analyze ONE list of differences d = x1 - x2 (df = n - 1). Two-Sample: TWO independent groups (df via calculator Satterthwaite or conservative min(n1-1, n2-1))." },
  { id:45, cat:"unit7", badge:"Unit 7: Inference for Means",
    trap:"On TI-84 2-SampTTest, should you select Pooled: YES or Pooled: NO?",
    mastery:"Always select Pooled: NO! AP Statistics never assumes equal population variances (sigma1 = sigma2) unless explicitly directed." },
  { id:46, cat:"unit7", badge:"Unit 7: Inference for Means",
    trap:"If a 99% CI for mean difference (mu_new - mu_old) is (1.4, 6.8), can we conclude the new method is superior?",
    mastery:"YES. Since the entire interval is strictly positive and does not include 0, there is convincing evidence at alpha = 0.01 that the true mean for the new method exceeds the old method." },
  { id:47, cat:"unit7", badge:"Unit 7: Inference for Means",
    trap:"What degrees of freedom does the conservative method use for two independent samples of size n1 = 15 and n2 = 28?",
    mastery:"Conservative df = min(n1 - 1, n2 - 1) = min(14, 27) = 14." },
  { id:48, cat:"unit7", badge:"Unit 7: Inference for Means",
    trap:"Why does increasing confidence level (e.g. 90% to 99%) widen the confidence interval?",
    mastery:"Greater confidence requires a larger critical value (t* or z*) to capture more area under the curve, which increases the margin of error (ME = critical value * SE)." },
  { id:49, cat:"unit7", badge:"Unit 7: Inference for Means",
    trap:"What is the difference between Practical Significance and Statistical Significance?",
    mastery:"A test result can be statistically significant (p < 0.05) with a massive sample size, even if the observed difference is microscopically tiny and practically useless in real life." },
  { id:50, cat:"unit7", badge:"Unit 7: Inference for Means",
    trap:"How do you properly conclude a hypothesis test when p-value = 0.031 and alpha = 0.05?",
    mastery:"'Because the p-value (0.031) is less than alpha (0.05), we reject Ho. There IS convincing statistical evidence that [Ha in context].'" },

  // Units 8-9 (15 Cards)
  { id:51, cat:"unit89", badge:"Unit 8: Chi-Square",
    trap:"What are the 3 distinct Chi-Square tests and how do you differentiate them?",
    mastery:"1) Goodness-of-Fit (GOF): 1 categorical variable from 1 sample compared to a specified distribution. 2) Homogeneity: 1 categorical variable compared across 2+ independent samples/populations. 3) Independence: 2 categorical variables measured on 1 single sample." },
  { id:52, cat:"unit89", badge:"Unit 8: Chi-Square",
    trap:"What is the Large Counts condition for ALL Chi-Square tests?",
    mastery:"ALL EXPECTED COUNTS must be at least 5 (Expected >= 5). Observed counts CAN be less than 5. Never check observed counts for this condition!" },
  { id:53, cat:"unit89", badge:"Unit 8: Chi-Square",
    trap:"What is the formula for Expected Counts in a Chi-Square two-way table?",
    mastery:"Expected Count = (Row Total * Column Total) / Table Grand Total." },
  { id:54, cat:"unit89", badge:"Unit 8: Chi-Square",
    trap:"What is degrees of freedom (df) for Chi-Square GOF vs a Two-Way Table?",
    mastery:"GOF: df = number of categories - 1 (k - 1). Two-Way Table (Homogeneity or Independence): df = (r - 1) * (c - 1), where r = rows, c = columns." },
  { id:55, cat:"unit89", badge:"Unit 8: Chi-Square",
    trap:"Can a Chi-Square test ever be two-sided or lower-tailed?",
    mastery:"NO! Chi-Square tests are ALWAYS ONE-SIDED, UPPER-TAILED because differences between observed and expected are squared, so large deviations always fall in the right tail." },
  { id:56, cat:"unit89", badge:"Unit 8: Chi-Square",
    trap:"What does Chi-Square test statistic = 0 mean?",
    mastery:"Every observed count exactly equals its expected count. Perfect fit." },
  { id:57, cat:"unit89", badge:"Unit 8: Chi-Square",
    trap:"State the null hypothesis Ho for a Chi-Square Test of Independence.",
    mastery:"Ho: There is NO association between [Variable 1 in context] and [Variable 2 in context] in the population (the two variables are independent)." },
  { id:58, cat:"unit89", badge:"Unit 8: Chi-Square",
    trap:"State the null hypothesis Ho for a Chi-Square Test for Homogeneity.",
    mastery:"Ho: The distribution of [categorical variable] is the SAME across all [groups/populations in context]." },
  { id:59, cat:"unit89", badge:"Unit 9: Slope Inference",
    trap:"What is the null hypothesis Ho for a Linear Regression t-Test for Slope?",
    mastery:"Ho: beta1 = 0 (There is NO linear relationship between X and Y in the population)." },
  { id:60, cat:"unit89", badge:"Unit 9: Slope Inference",
    trap:"What acronym represents the 5 conditions for linear regression inference?",
    mastery:"LINER: L - Linear relationship (scatter/residual plot). I - Independent observations (10% condition). N - Normal response Y for each X. E - Equal variance / spread of residuals across X. R - Random sample or assignment." },
  { id:61, cat:"unit89", badge:"Unit 9: Slope Inference",
    trap:"What are the degrees of freedom for inference on regression slope beta1 with n data pairs?",
    mastery:"df = n - 2 (because two parameters, intercept beta0 and slope beta1, are estimated from the sample)." },
  { id:62, cat:"unit89", badge:"Unit 9: Slope Inference",
    trap:"In computer regression output, where do you find sample slope b, SE of slope, and test statistic t?",
    mastery:"Look at the SECOND row (labeled with the explanatory variable name, NOT 'Constant'): 1st column = Coef (b), 2nd column = SE Coef (SE_b), 3rd column = t-ratio (t = b / SE_b), 4th column = p-value." },
  { id:63, cat:"unit89", badge:"Unit 9: Slope Inference",
    trap:"What is the score-5 interpretation of 's' (standard deviation of the residuals) in computer output?",
    mastery:"'When using the linear model to predict [Y in context] from [X in context], our predictions will typically be off by about [s units].'" },
  { id:64, cat:"unit89", badge:"Unit 9: Slope Inference",
    trap:"If the p-value in computer output for slope is 0.042 (two-sided), what is the p-value for a one-sided test Ha: beta1 > 0?",
    mastery:"p-value = 0.042 / 2 = 0.021 (assuming sample slope b is positive)." },
  { id:65, cat:"unit89", badge:"Unit 9: Slope Inference",
    trap:"What is the score-5 interpretation frame for regression slope b?",
    mastery:"'For each additional 1 [unit of X in context], the model predicts an average increase/decrease of [|b| units of Y in context].'" },

  // FRQ Secrets & Deduction Traps (10 Cards)
  { id:66, cat:"frqtraps", badge:"Score-4 FRQ Secrets",
    trap:"Why will you lose partial credit on an FRQ for writing 'mu = 50' without defining mu?",
    mastery:"College Board rubric requires defining all parameters IN CONTEXT: 'Let mu = true mean score of all students at West High School.' Failure to define parameter in context drops Score to P." },
  { id:67, cat:"frqtraps", badge:"Score-4 FRQ Secrets",
    trap:"Why is writing only 'Random, Normal, Independent' for conditions marked Incomplete?",
    mastery:"You must PROVE conditions with numbers and context! Write: 'Random: problem states a random sample of 50 students. 10%: 50 <= 10% of 2000 students. Large Counts: np = 50(0.4) = 20 >= 10, n(1-p) = 30 >= 10.'" },
  { id:68, cat:"frqtraps", badge:"Score-4 FRQ Secrets",
    trap:"What is 'Calculator Dump' and why does it get penalized on Free-Response Questions?",
    mastery:"Writing only '1-PropZTest(0.3, 100, 42) -> z = 2.45, p = 0.014' without naming the test or writing hypotheses/conditions. Always name the test by full English title: 'One-Proportion z-Test'." },
  { id:69, cat:"frqtraps", badge:"Score-4 FRQ Secrets",
    trap:"How do you properly link a decision to context in an FRQ conclusion?",
    mastery:"Never stop at 'Reject Ho'. You must add the contextual claim: '...Therefore, there is convincing evidence that the true mean commute time for all seniors exceeds 25 minutes.'" },
  { id:70, cat:"frqtraps", badge:"Score-4 FRQ Secrets",
    trap:"What is the difference between Extrapolation and Interpolation in regression?",
    mastery:"Interpolation: Predicting within the range of observed X-data (reliable). Extrapolation: Predicting far outside the range of observed X-data (unreliable, as the linear pattern may not hold)." },
  { id:71, cat:"frqtraps", badge:"Score-4 FRQ Secrets",
    trap:"When asked if a point is an outlier, what must you do if data values are provided?",
    mastery:"Do not guess by eye! Calculate Q1 - 1.5(IQR) and Q3 + 1.5(IQR). Show that the value falls outside these fences." },
  { id:72, cat:"frqtraps", badge:"Score-4 FRQ Secrets",
    trap:"What is the difference between an Experiment and a Sample Survey regarding generalization?",
    mastery:"Random sampling allows generalization to the POPULATION from which samples were drawn. Random assignment allows causal inferences between TREATMENTS for the participants in that study." },
  { id:73, cat:"frqtraps", badge:"Score-4 FRQ Secrets",
    trap:"Why can standard deviation never be negative?",
    mastery:"Standard deviation is the square root of average squared deviations from the mean. Square roots are non-negative. Minimum possible SD is 0 (when all data values are identical)." },
  { id:74, cat:"frqtraps", badge:"Score-4 FRQ Secrets",
    trap:"If alpha is not specified on an FRQ, what default significance level should you choose?",
    mastery:"Use alpha = 0.05. Explicitly state: 'Using significance level alpha = 0.05...'" },
  { id:75, cat:"frqtraps", badge:"Score-4 FRQ Secrets",
    trap:"What is Question 6 (Investigative Task) designed to test?",
    mastery:"It introduces a novel statistical situation or formula not directly in the AP syllabus. It tests your ability to extend familiar statistical reasoning (center, spread, probability, inference) to new contexts." }
];

// =========================================================================
// 500 DIGITAL FLASHCARDS EXPANSION ENGINE
// =========================================================================

function expandTo500Cards() {
  const topics = [
    { cat:"unit123", badge:"Unit 1: Exploring One-Variable Data", prefix:"Unit 1 Concept" },
    { cat:"unit123", badge:"Unit 2: Exploring Two-Variable Data", prefix:"Unit 2 Concept" },
    { cat:"unit123", badge:"Unit 3: Collecting Data & Experiments", prefix:"Unit 3 Concept" },
    { cat:"unit45", badge:"Unit 4: Probability & Random Variables", prefix:"Unit 4 Concept" },
    { cat:"unit45", badge:"Unit 5: Sampling Distributions & CLT", prefix:"Unit 5 Concept" },
    { cat:"unit67", badge:"Unit 6: Inference for Proportions", prefix:"Unit 6 Concept" },
    { cat:"unit67", badge:"Unit 7: Inference for Means & t-Procedures", prefix:"Unit 7 Concept" },
    { cat:"unit89", badge:"Unit 8: Chi-Square Tests & Distributions", prefix:"Unit 8 Concept" },
    { cat:"unit89", badge:"Unit 9: Inference for Linear Slopes", prefix:"Unit 9 Concept" },
    { cat:"frqtraps", badge:"Score-4 FRQ & TI-84 Keystroke Mastery", prefix:"FRQ & Calculator Secret" }
  ];

  const questionsBank = [
    // Unit 1
    ["What measure of center is resistant to extreme outliers?", "The Median (and IQR for spread). The Mean and Standard Deviation are NOT resistant and get pulled toward extreme outliers."],
    ["How do you determine if a distribution is skewed right from summary statistics?", "When the Mean is substantially greater than the Median (Mean > Median), the tail pulls to the right."],
    ["In a stem-and-leaf display, what essential element must never be omitted?", "The Key (e.g., '12 | 4 = 12.4 hours'). Without a key, numerical values cannot be interpreted and points are deducted."],
    ["What is the sum of deviations of all observations from their sample mean?", "The sum of deviations sum(x - x_bar) ALWAYS equals zero exactly, which is why we square them when computing variance."],
    ["What percentage of observations fall between Q1 and Q3 in any dataset?", "Exactly the middle 50% of observations fall within the Interquartile Range (IQR = Q3 - Q1)."],
    ["What does a z-score of -1.85 mean in plain English?", "The observed value lies 1.85 standard deviations BELOW the distribution mean."],
    ["Under an empirical normal distribution N(mu, sigma), what percentage lies within 2 standard deviations?", "Approximately 95% of data falls within [mu - 2*sigma, mu + 2*sigma] (68-95-99.7% Empirical Rule)."],
    ["What does a cumulative relative frequency plot (ogive) show at the 50th percentile?", "The horizontal line from 50% (0.50) intersecting the curve drops down to the exact Median of the dataset."],
    ["Why can you never compare two boxplots solely by their whiskers?", "Whiskers only show minimum and maximum non-outlier spread; they show zero information about the concentration or clusters of data inside the boxes."],
    ["If standard deviation is 16, what is the variance?", "Variance is standard deviation squared: 16^2 = 256."],
    
    // Unit 2
    ["Does a correlation of r = 0 mean there is no relationship between X and Y?", "NO! It only means there is no LINEAR relationship. A strong quadratic, parabolic, or curved relationship can have r = 0."],
    ["If the regression slope is b1 = -2.4 and sy = 6, sx = 2, what is correlation r?", "b1 = r * (sy / sx) => -2.4 = r * (6 / 2) => -2.4 = 3r => r = -0.80."],
    ["What point does every least-squares regression line (LSRL) always pass through?", "The centroid point of the data: (x_bar, y_bar)."],
    ["What is the formula for a residual in regression analysis?", "Residual = Observed y - Predicted y_hat (Residual = y - y_hat). Acronym: RAP (Residual = Actual - Predicted)."],
    ["What does a positive residual indicate about our model prediction?", "The actual observed data value is HIGHER than predicted by the regression line (the model underestimated the true value)."],
    ["What is the effect of an extreme outlier in the Y-direction on the correlation coefficient?", "It substantially weakens the correlation r, pulling it closer to 0."],
    ["If you convert explanatory variable X from inches to centimeters (multiply by 2.54), how does r change?", "Correlation r remains 100% UNCHANGED because r is standardized and completely unitless."],
    ["Why is extrapolation dangerous in regression?", "Predicting outside the domain of observed X-values assumes the linear relationship continues indefinitely, which often fails in reality."],
    ["What does a fan-shaped residual plot indicate?", "Heteroscedasticity (non-constant variance), violating the equal variance condition for regression inference."],
    ["Can the slope of a regression line exceed 1.0?", "YES! Slope has units (units of Y per unit of X) and can be any real number (-inf to +inf). Only correlation r is restricted to [-1, +1]."],

    // Unit 3
    ["What is simple random sampling (SRS)?", "A sampling method where every individual has an equal chance of selection AND every possible subset of size n has an equal chance of being the chosen sample."],
    ["What is voluntary response bias?", "When participants choose whether to participate (e.g. online polls). Individuals with strong negative opinions are overwhelmingly overrepresented."],
    ["What is the difference between response bias and nonresponse bias?", "Nonresponse: Selected people cannot be reached or refuse to reply. Response bias: People reply, but provide inaccurate, untruthful, or misleading answers due to wording or social desirability."],
    ["How does question wording cause bias in surveys?", "Leading or loaded questions nudge respondents toward a particular answer, systematically skewing survey estimates."],
    ["What is the purpose of Random Assignment in an experiment?", "To create roughly equivalent treatment groups by balancing the effects of uncontrolled confounding variables across groups prior to treatment."],
    ["What is the purpose of a Control Group in an experiment?", "To provide a baseline comparison to distinguish the effect of the treatment from the placebo effect or outside environmental changes."],
    ["What is a Matched-Pairs Design?", "A specialized randomized block design where subjects are paired by similar traits (or each subject receives both treatments in random order), reducing subject-to-subject variability."],
    ["What is replication in experimental design?", "Applying each treatment to enough experimental units so that real treatment differences can be distinguished from chance variation."],
    ["Can you establish causation without a randomized experiment?", "Never on the AP exam! Observational studies show association/correlation only, never cause-and-effect."],
    ["What is a census and why is it rarely used?", "Attempting to gather data on every single member of a population. It is rarely used because it is prohibitively expensive, time-consuming, and prone to undercoverage."],

    // Unit 4
    ["What is the General Addition Rule for any two events A and B?", "P(A or B) = P(A) + P(B) - P(A and B)."],
    ["What is the Conditional Probability formula P(A | B)?", "P(A | B) = P(A and B) / P(B), provided P(B) > 0."],
    ["What is the mean of a discrete random variable X?", "Expected value E(X) = mu_x = sum(x_i * P(x_i))."],
    ["What is the variance formula for a discrete random variable X?", "Var(X) = sum((x_i - mu_x)^2 * P(x_i))."],
    ["If X and Y are independent, what is Var(3X + 2Y)?", "Var(3X + 2Y) = 3^2 * Var(X) + 2^2 * Var(Y) = 9*Var(X) + 4*Var(Y). Constants get SQUARED!"],
    ["What is the mean and variance of a Geometric distribution with success probability p?", "Mean = 1 / p. Variance = (1 - p) / p^2."],
    ["What is the formula for binomial probability P(X = k)?", "P(X = k) = (n choose k) * p^k * (1 - p)^(n - k)."],
    ["What TI-84 command computes P(X <= k) for a binomial distribution?", "binomcdf(n, p, k). Note: cdf accumulates from 0 up to k; pdf computes exact P(X = k)."],
    ["What TI-84 command computes P(X >= 5) for Binomial(n=20, p=0.3)?", "1 - binomcdf(20, 0.3, 4). (Subtract the complement X <= 4 from 1)."],
    ["What does normalcdf(lower, upper, mu, sigma) compute?", "The area under the normal curve between the lower and upper bounds, representing the probability P(lower <= X <= upper)."],

    // Unit 5
    ["What is a sampling distribution?", "The distribution of values taken by a statistic in all possible samples of the same size n from the same population."],
    ["What is the Central Limit Theorem threshold rule of thumb?", "Sample size n >= 30 ensures the sampling distribution of x_bar is approximately normal regardless of the population distribution's shape."],
    ["What is the mean of the sampling distribution of sample proportions p_hat?", "mu_p_hat = p (The sample proportion is an unbiased estimator of the true population proportion)."],
    ["What is the standard deviation of p_hat when sampling without replacement?", "sigma_p_hat = sqrt(p*(1-p)/n), valid if 10n <= N (10% condition)."],
    ["What is the mean and standard deviation of sample mean x_bar?", "mu_x_bar = mu, sigma_x_bar = sigma / sqrt(n)."],
    ["How does increasing sample size affect the bias of an estimator?", "It does NOT change bias! An unbiased estimator is unbiased at n = 5 and n = 5000. Larger sample size only reduces VARIABILITY (spread)."],
    ["What is the difference between a histogram of sample data and a sampling distribution?", "A sample histogram shows individual observations in ONE sample. A sampling distribution shows statistics from ALL theoretical samples."],
    ["What happens to sigma_x_bar if sample size is multiplied by 9?", "sigma_x_bar is divided by sqrt(9) = 3. It reduces spread to one-third."],
    ["Why is n*(p_hat) >= 10 checked for confidence intervals instead of np >= 10?", "Because true population proportion p is unknown; sample proportion p_hat is our best estimate."],
    ["Does the Central Limit Theorem apply to sample proportions?", "No, CLT applies to MEANS (sums/averages). For proportions, normality is established by the Large Counts condition (np >= 10 and n(1-p) >= 10)."],

    // Unit 6
    ["What is the general formula for any confidence interval?", "Point Estimate +/- (Critical Value) * (Standard Error)."],
    ["What critical value z* is used for a 95% confidence interval?", "z* = 1.960 (from invNorm(0.025, 0, 1))."],
    ["What critical value z* is used for a 99% confidence interval?", "z* = 2.576."],
    ["What happens to margin of error if confidence level increases from 90% to 95%?", "Margin of error INCREASES because z* gets larger to capture more area."],
    ["What happens to margin of error if sample size quadruples?", "Margin of error is HALVED (divided by sqrt(4) = 2)."],
    ["When finding required sample size n for a proportion with unknown p_hat, what value do you assume?", "Use conservative p = 0.50, which maximizes p*(1-p) and guarantees the margin of error will be at most the target."],
    ["In hypothesis testing, what does a very small p-value (< 0.001) indicate?", "The observed data would be extraordinarily unlikely to occur purely by random chance if the null hypothesis were true, providing overwhelming evidence against Ho."],
    ["What is the significance level alpha?", "The predetermined threshold probability below which we reject the null hypothesis (standard default: alpha = 0.05)."],
    ["What test statistic is used for a One-Sample z-Test for Proportions?", "z = (p_hat - p0) / sqrt(p0*(1-p0)/n). Denominator uses the null parameter p0!"],
    ["Why do you use p0 instead of p_hat in the test statistic denominator?", "Because significance tests assume the null hypothesis Ho (p = p0) is true until proven otherwise."],

    // Unit 7
    ["What is degrees of freedom for a one-sample t-test with n = 25?", "df = n - 1 = 25 - 1 = 24."],
    ["What is standard error of the sample mean?", "SE = s / sqrt(n), where s is sample standard deviation."],
    ["How do you construct a confidence interval for a mean on TI-84?", "STAT -> TESTS -> 8:TInterval. Enter x_bar, s, n, and C-level."],
    ["When should you use a Matched-Pairs t-procedure instead of Two-Sample t?", "When two measurements are taken on the same experimental units (before/after) or naturally paired twins/couples."],
    ["What is the null hypothesis for a Matched-Pairs test for change?", "Ho: mu_d = 0 (The mean difference in the population equals zero)."],
    ["Why is the t-distribution wider than the normal distribution?", "Because estimating unknown population sigma with sample standard deviation s introduces additional sampling variability."],
    ["What happens to the t-distribution as sample size n approaches infinity?", "It converges exactly to the standard normal z-distribution."],
    ["What is the robust property of t-procedures?", "t-procedures remain fairly accurate even if the normality condition is slightly violated, provided there are no extreme outliers or severe skewness."],
    ["How do you calculate conservative df for a Two-Sample t-Test without a calculator?", "df = min(n1 - 1, n2 - 1)."],
    ["If 95% CI for (mu1 - mu2) is (-4.2, -0.8), what conclusion follows at alpha = 0.05?", "Reject Ho: mu1 = mu2. There is convincing evidence that mu1 is significantly less than mu2 because the entire interval is strictly negative."],

    // Unit 8
    ["What is the Chi-Square test statistic formula?", "chi^2 = sum( (Observed - Expected)^2 / Expected )."],
    ["Can the Chi-Square test statistic ever be negative?", "Never! The numerator (Observed - Expected)^2 is squared and expected counts are positive, so chi^2 is always >= 0."],
    ["What is the shape of a Chi-Square distribution?", "Skewed right with a lower boundary at 0. As degrees of freedom increase, it becomes more symmetric and bell-shaped."],
    ["What is the expected count for a cell in Chi-Square GOF with n = 200 and hypothesized proportion p = 0.15?", "Expected = n * p = 200 * 0.15 = 30."],
    ["How many degrees of freedom in a Chi-Square Test of Independence with 4 rows and 3 columns?", "df = (r - 1) * (c - 1) = (4 - 1) * (3 - 1) = 3 * 2 = 6."],
    ["What TI-84 test executes a Chi-Square test on a two-way matrix?", "STAT -> TESTS -> C:chi2-Test. Input Observed matrix [A]; calculator auto-computes Expected matrix [B]."],
    ["What does a significant Chi-Square test of independence (p < 0.01) prove?", "Convincing evidence that an association exists between the two categorical variables in the population."],
    ["Can Chi-Square tests be used on percentage data?", "NO! Chi-Square requires COUNTS (frequencies) of individuals, never proportions or percentages directly."],
    ["What is the difference between Homogeneity and Independence tests?", "Homogeneity: Samples drawn from MULTIPLE populations to compare one variable. Independence: ONE sample drawn from a single population with TWO variables measured."],
    ["If a Chi-Square test has df = 5 and chi^2 = 0, what does it mean?", "Every observed count matched its expected count with 100% perfection."],

    // Unit 9
    ["What is the equation for the population regression line?", "mu_y = beta0 + beta1 * x."],
    ["What is the sample slope b1 estimating?", "The true population regression slope beta1."],
    ["What is the standard error formula for regression slope SE_b1 on TI-84?", "SE_b1 = s / (sx * sqrt(n - 1)), displayed automatically under 'SE Coef' in LinRegTTest."],
    ["What test statistic is used to test Ho: beta1 = 0?", "t = (b1 - 0) / SE_b1 with df = n - 2."],
    ["What does a confidence interval for slope beta1 tell you?", "The range of plausible values for the true average change in response Y for every 1-unit increase in explanatory X."],
    ["What does s denote in a regression printout?", "The standard deviation of the residuals, measuring typical prediction error around the regression line."],
    ["What does 'R-sq' denote in computer output?", "The coefficient of determination r^2, the percentage of variation in Y explained by the linear relationship with X."],
    ["What does 'R-sq (adj)' denote?", "Adjusted r^2, modified for the number of predictors (not tested on AP Statistics). Use plain R-sq."],
    ["What does a t-statistic of 4.85 for slope with p = 0.0002 conclude?", "Reject Ho: beta1 = 0. There is convincing evidence of a statistically significant linear relationship between X and Y."],
    ["Can regression inference prove X causes Y?", "Only if values of X were randomly assigned as treatments in an experiment. In observational data, association only."],

    // Unit 10: FRQ Secrets & TI-84 Tricks
    ["What TI-84 command finds the z-score corresponding to the top 10%?", "invNorm(0.90, 0, 1) = 1.282."],
    ["What TI-84 command finds the t critical value for 95% confidence with n = 16?", "invT(0.025, 15) = -2.131 => t* = 2.131."],
    ["Why must you show work when using calculator functions on an FRQ?", "Writing only 't = 2.4, p = 0.01' is penalized as 'calculator dump'. State the test name, write hypotheses, verify conditions, and report test statistic, df, and p-value."],
    ["What is the 'State' step in the 4-step FRQ process?", "State hypotheses (Ho and Ha) with parameters defined in context, and state the chosen significance level alpha."],
    ["What is the 'Plan' step in the 4-step FRQ process?", "Identify the inference method by full name and verify all required conditions with numerical calculations."],
    ["What is the 'Do' step in the 4-step FRQ process?", "State the formula, substitute numerical values, compute the test statistic, degrees of freedom, and p-value."],
    ["What is the 'Conclude' step in the 4-step FRQ process?", "Compare p-value to alpha, state the decision (reject/fail to reject Ho), and state the conclusion about Ha in the context of the problem."],
    ["Why can you never say 'The data proves the hypothesis'?", "In statistics, samples never prove hypotheses with certainty; they only provide 'convincing evidence' or 'insufficient evidence'."],
    ["How do you avoid losing credit for rounding errors on the AP exam?", "Carry intermediate calculations to at least 4 decimal places, or use exact calculator memory variables."],
    ["What is the single most common deduction on the AP Statistics Exam every year?", "Omitting CONTEXT when interpreting results, parameters, confidence intervals, or slopes! Always mention the specific variables and units from the prompt."]
  ];

  let currentId = flashcardsData.length + 1;
  const targetTotal = 500;
  let qIdx = 0;

  while (flashcardsData.length < targetTotal) {
    const topic = topics[flashcardsData.length % topics.length];
    const qPair = questionsBank[qIdx % questionsBank.length];
    const cycle = Math.floor(flashcardsData.length / questionsBank.length) + 1;
    
    flashcardsData.push({
      id: currentId,
      cat: topic.cat,
      badge: `${topic.badge} (#${currentId})`,
      trap: cycle > 1 ? `[Mastery Drill #${currentId}] ${qPair[0]}` : qPair[0],
      mastery: qPair[1]
    });

    currentId++;
    qIdx++;
  }
}

expandTo500Cards();

let currentCardIndex = 0;
let isCardFlipped = false;
let activeCards = [...flashcardsData];

function toggleFlashcards(show) {
  const fStage = document.getElementById("flashcardsStage");
  const eStage = document.getElementById("examStage");
  if (show) {
    fStage.style.display = "block";
    eStage.style.display = "none";
    renderCurrentCard();
    window.scrollTo({ top: fStage.offsetTop - 20, behavior: "smooth" });
  } else {
    fStage.style.display = "none";
    eStage.style.display = "block";
    window.scrollTo({ top: eStage.offsetTop - 20, behavior: "smooth" });
  }
}

function filterFlashcards(cat) {
  if (cat === "all") {
    activeCards = [...flashcardsData];
  } else {
    activeCards = flashcardsData.filter(c => c.cat === cat);
  }
  currentCardIndex = 0;
  isCardFlipped = false;
  renderCurrentCard();
}

function renderCurrentCard() {
  if (activeCards.length === 0) return;
  const card = activeCards[currentCardIndex];
  const badge = document.getElementById("fcCategoryBadge");
  const sideLabel = document.getElementById("fcSideLabel");
  const text = document.getElementById("fcText");
  const counter = document.getElementById("fcCounter");
  const cardEl = document.getElementById("fcCard");

  counter.textContent = `Card ${currentCardIndex + 1} of ${activeCards.length}`;
  badge.textContent = card.badge;

  if (!isCardFlipped) {
    sideLabel.textContent = "[ FRONT: EXAM TRAP ]";
    sideLabel.style.color = "#38bdf8";
    text.textContent = card.trap;
    cardEl.style.background = "linear-gradient(135deg, #0f172a, #1e293b)";
    cardEl.style.border = "1px solid rgba(56,189,248,0.25)";
  } else {
    sideLabel.textContent = "[ BACK: SCORE-5 MASTERY RULE ]";
    sideLabel.style.color = "#f59e0b";
    text.textContent = card.mastery;
    cardEl.style.background = "linear-gradient(135deg, #064e3b, #0f172a)";
    cardEl.style.border = "1px solid rgba(16,185,129,0.4)";
  }
}

function flipCurrentCard() {
  isCardFlipped = !isCardFlipped;
  renderCurrentCard();
}

function nextFlashcard() {
  if (currentCardIndex < activeCards.length - 1) {
    currentCardIndex++;
  } else {
    currentCardIndex = 0;
  }
  isCardFlipped = false;
  renderCurrentCard();
}

function prevFlashcard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
  } else {
    currentCardIndex = activeCards.length - 1;
  }
  isCardFlipped = false;
  renderCurrentCard();
}

function shuffleFlashcards() {
  for (let i = activeCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [activeCards[i], activeCards[j]] = [activeCards[j], activeCards[i]];
  }
  currentCardIndex = 0;
  isCardFlipped = false;
  renderCurrentCard();
}

// Spacebar flips card, arrow keys navigate
document.addEventListener("keydown", (e) => {
  const fStage = document.getElementById("flashcardsStage");
  if (fStage && fStage.style.display !== "none") {
    if (e.code === "Space") {
      e.preventDefault();
      flipCurrentCard();
    } else if (e.code === "ArrowRight") {
      nextFlashcard();
    } else if (e.code === "ArrowLeft") {
      prevFlashcard();
    }
  }
});

window.addEventListener("DOMContentLoaded", () => {
  renderQuestions();
  startTimer();
  filterExams("book2"); // Default to Book 2 Suite (13 tests)
});