---
name: sol-luna
description: Run the repository's Sol-led, Luna-executed development workflow for implementation, debugging, review, or validation tasks that benefit from bounded subagent delegation. Do not use for simple answers or tasks that do not warrant delegation.
---

# Sol-Luna Workflow

Keep Sol responsible for requirements, decisions, risk, review, and acceptance. Delegate only bounded execution that is clear, testable, reversible, and does not require a new architecture decision.

## Route Work

1. Inspect the request, repository rules, current status, affected surface, and relevant evidence. State observable success criteria and obtain any approval required by `AGENTS.md` before mutation.
2. Decide whether read-only exploration is needed. Use `luna_explorer` for focused code search, ownership mapping, or call-chain evidence.
3. Split approved work into the smallest independently verifiable units. Use `luna_implementer` for a narrow edit and `luna_tester` for reproduction, tests, builds, or log analysis.
4. Parallelize only read-heavy, independent tasks. Serialize tasks that modify the same file or code region. Without isolated worktrees, never allow concurrent edits to overlapping areas.
5. Wait for each delegated result. Review its scope, diff, command exit status, evidence, and unresolved risks. Luna completion is not acceptance.
6. Accept, request a bounded rework, request additional validation, or use the stated rollback. Do not substitute “command started” for a passing result.
7. Call `sol_escalation` only when an escalation trigger below is explicitly met. Otherwise keep the decision with the main Sol thread.
8. Sol performs final diff review, required repository checks, and a concise acceptance report that separates passed checks, inherited failures, and unobservable claims.

## Delegation Contract

Every Luna task must include all of these fields:

- **Objective:** the one outcome this task must produce.
- **Allowed scope:** exact files or directories that may be read and, when applicable, modified.
- **Prohibited scope:** files, behaviors, dependencies, external effects, and decisions that are off limits.
- **Known context:** relevant call chain, constraints, prior evidence, and decisions already made by Sol.
- **Completion criteria:** observable conditions for completion.
- **Validation:** exact commands or behavioral checks and how to interpret success.
- **Rollback:** how to restore the pre-task state if validation fails.
- **Return format:** Investigation Findings; Modified Files; Key Code Changes or Observations; Commands Run; Test Results; Unresolved Questions; Risks and Recommendations.

Do not delegate vague requests such as “finish this feature” or “research and complete it.” If a Luna reports ambiguity, risk, or scope overflow, Sol resolves it or seeks approval before issuing a revised contract.

## Escalation Gate

Use `sol_escalation` only for at least one of:

- cross-subsystem architecture decisions;
- data migration, protocol changes, or irreversible operations;
- security, permissions, concurrency, races, or data consistency;
- alternatives with material long-term costs and major tradeoffs;
- two failed ordinary-Sol attempts to form a credible conclusion;
- credible risk of production failure, data damage, or broad rework from a wrong decision.

Do not escalate ordinary feature work, formatting, routine tests, simple bugs, code searches, or documentation cleanup. Sol must record the trigger and review the escalation result; the escalation agent remains advisory and read-only.

## Acceptance

Before final acceptance, Sol confirms that the approved scope matches the actual diff, required validations completed with real results, temporary outputs were removed or intentionally retained, no unrelated files changed, and rollback remains clear.
