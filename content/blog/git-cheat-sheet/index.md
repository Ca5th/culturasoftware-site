---
title: My personal git cheat sheet
date: "2020-07-05T23:46:37.121Z"
description: "With more than 160 commands available, becoming a git expert takes time. But everyone has a few commands that they use frequently. In this post I’ll share mine..."
---

With more than 160 commands available, becoming a git expert takes time. But everyone has a few commands that they use frequently. In this post I’ll share mine.

### I want a clean working directory, but I don’t want to lose my current changes.

```python
# save the current state of the working directory
git stash

# apply the latest stashed change to your current working tree
git stash pop

# list stashed changes
git stash list
```

### I messed up my last commit message.

```python
# change the latest commit's message
git commit --amend -m "Fixed message"
```

### I accidentally pushed a file. Now I want to remove it from the remote branch (but not from my local branch).

```python
git rm --cached <file-path>
```

### I made a bunch of changes to a file but I regret it :scream:. I want to go back to the main branch version.

```python
git checkout main <file-path>
```

### I want to take a commit from one branch and apply it onto mine.

```python
git cherry-pick <commit-hash>
```

### I want my branch to be based off the most recent commit of the main branch.

```python
# 1. Get the latest version of the main branch
git checkout main
git pull origin

# 2. Checkout your branch
git checkout <my-branch>

# 3. Replay your changes on top of the main branch
git rebase main
```

### I want to squash the commits in my branch to a single commit, before opening a pull request to main.

Before squashing, make sure your development branch is based off the most recent commit of the main branch using rebase. Then:

```python
# 1. Checkout your branch
git checkout <my-branch>

#2 squash commits
git rebase -i main

# The -i does an interactive rebase for you to move and squash commits.
```

### I merged my branch into main but I want to rollback the merge

```python
# 1. Checkout a new branch from the main branch
git checkout -b mybranch-rollback

# 2. Find out the commit hash that merged your branch to develop.
git log

# 3. Revert the merge commit
git revert -m 1 <commit-hash>

# 4. Push the changes to your new branch
git push origin mybranch-rollback

# 5. Open a pull request to main for your new branch
```
