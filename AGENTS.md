# Portfolio Project Instructions

## Project workflow

- Treat this repository as the user's personal portfolio website. Inspect the existing files, stack, conventions, current branch, remote, and Git status before making changes.
- Implement requested work in the existing stack and repository structure. Make reasonable decisions and carry each requested coding task through to a coherent, usable result.
- Preserve unrelated files and all pre-existing user changes. Do not reset, discard, overwrite, or include pre-existing changes in a commit.

## Git commits and pushes

- Write every commit message strictly in lowercase letters, including its type and summary (for example, `feat: add project cards`).
- For each coherent implementation milestone completed in response to the user's request, review the diff, stage only files and changes made for that milestone, create a concise commit, and push it to the current branch's configured upstream (normally `origin`) without asking again.
- Do not create empty commits. If the task makes no file changes, do not commit or push.
- Never force-push, rewrite published history, merge pull requests, or deploy the site unless the user separately asks.
- Never commit secrets, credentials, `.env` files, local machine metadata, or generated build artifacts. Inspect the staged diff before committing.
- If existing uncommitted work overlaps with the requested changes and cannot be cleanly excluded, or if the upstream push is rejected, stop before committing/pushing the affected work and explain the specific blocker. Do not resolve divergence by discarding or rewriting history.

## Verification and reporting

- Do not add or run tests unless the user asks for testing or verification. Do not claim checks passed unless they were actually run.
- After each commit and push, report the commit hash, branch, and push result. If a push fails, report what remains local and why.
