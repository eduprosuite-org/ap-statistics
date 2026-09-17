# Manuscript Content Standards — Master Review Series (Universal Subject Framework)
# Auto-loaded rule file for all sessions and all books.

---

## Rule M1: Page Count Target (MANDATORY)
- Every book manuscript MUST be 300 to 350 pages in Overleaf/PDF output.
- NEVER submit a skeleton/outline-only LaTeX file -- always write FULL content.
- Page count is measured at 12pt font, standard KDP 6x9 trim size.

---

## Rule M2: LaTeX Document Setup (MANDATORY for every book)
Use geometry package: paperwidth=6in, paperheight=9in, top=0.75in, bottom=0.75in, inner=0.875in, outer=0.625in
Use packages: amsmath, amssymb, amsthm, booktabs, longtable, graphicx, xcolor, tcolorbox, enumitem, hyperref, fancyhdr

---

## Rule M3: Mandatory Content Per Unit/Chapter (Core Units/Chapters x ~30 pages = 270+ pages)

Each core unit/chapter of the target curriculum MUST contain ALL sections:

Section A -- Unit/Chapter Overview (1-2 pages):
- Unit/Chapter title, exam/curriculum weight or real-world relevance
- Key vocabulary & core concept list (10-15 terms with definitions)
- "What you will learn" bullet list

Section B -- Core Concept Lessons (10-12 pages):
- MINIMUM 4 full concept explanations per unit/chapter
- Each concept: Definition > Formula/Syntax/Rule > Plain-English explanation > Visual/Architectural description
- All formulas in LaTeX math environments, all code in proper listings/verbatim blocks
- Real-world context paragraph for each concept

Section C -- Worked Examples (6-8 pages):
- MINIMUM 4 fully solved examples per unit/chapter
- Format: Problem statement > Step-by-step solution > Final answer boxed
- Mix of conceptual, multiple choice style, and free-response / applied problem style

Section D -- Hands-On Tool / Calculator / Syntax Playbook (2-3 pages):
- MINIMUM 3 practical procedures or walkthroughs per unit/chapter (e.g., TI-84 keystrokes for Math/Stats, Python syntax/methods for Coding, CLI commands for Tech)
- Detailed description of expected outputs / screens

Section E -- High-Yield Exam / Rubric / Architecture Templates (3-4 pages):
- MINIMUM 2 structured template problems or case studies per unit/chapter
- Grader rubric checklist or best-practice checklist (what earns full points or marks)
- Structured answer framework

Section F -- Practice Problem / Exercise Set (6-8 pages):
- MINIMUM 15 practice problems or exercises per unit/chapter
- Mix: 10 conceptual/multiple-choice + 5 comprehensive/applied problems
- All answers with full worked solutions at end of unit/chapter

Section G -- Unit/Chapter Summary and Quick Review (1-2 pages):
- Formula / Syntax / Rule reference cheat-box
- Key takeaways bullet list
- "Common mistakes & traps to avoid" box

---

## Rule M4: Book-Level Required Sections (30-50 additional pages)

Front Matter: 5 pages -- Title page, Copyright & Nominative Fair Use Disclaimer, Dedication, How to Use, Series Overview
Introduction: 3 pages -- Subject/Exam format, scoring criteria, 5-point success strategy
Practice Exam / Capstone Project 1: 8 pages -- Full exam format / comprehensive applied project
Practice Exam / Capstone Project 2: 8 pages -- Full exam format / comprehensive applied project
Answer Keys: 6 pages -- Both exams/projects fully worked solutions and rubrics
Master Reference Sheet: 2 pages -- Core formulas, syntax, or cheat-sheet rules
Tool & Technology Reference: 3 pages -- Master calculator / environment / library guide
Glossary: 4 pages -- All 100+ subject vocabulary terms alphabetical
Web Companion QR Page: 1 page -- QR code + URL for free digital companion portal

---

## Rule M5: Writing Quality Standards
1. Active voice only
2. Reader/student-friendly language (explain with extreme clarity)
3. No filler content -- every sentence must add value
4. Consistent official curriculum terminology only
5. Every formula in LaTeX math mode, every code block formatted cleanly
6. Every example must have a clear, practical real-world context

---

## Rule M6: Manuscript Generation Workflow in Step 4A
1. Write Front Matter first
2. Write all Chapters/Units -- ALL sections A through G per chapter/unit
3. Write Practice Exams / Projects 1 and 2 -- full realistic format
4. Write Answer Keys -- fully worked solutions
5. Write Reference sections -- formula/syntax sheet, glossary, tool reference
6. Verify page count is 300-350 before GitHub push
7. If under 300 pages -- expand examples and practice problems

---

## Rule M7: NEVER Do This
- NEVER submit only section headings
- NEVER leave TODO placeholders
- NEVER write less than 30 pages per unit/chapter
- NEVER skip Practice Exams / Capstone Projects
- NEVER push without checking page count
