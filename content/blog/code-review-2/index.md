---
title: How to do a good code review
date: "2020-03-23T22:12:03.284Z"
description: "Did you read my post “Why do code reviews?”?. If you did, you know that with time, I learned to appreciate and even want other people to review my code...."
---

Did you read my post “Why do code reviews?”?. If you did, you know that with time, I learned to appreciate and even want other people to review my code.

When it was my turn to review other people’s code, the story was different. Many times I had no idea what to look for and, without knowing, ignored many problems in the code. I was also new to that company and didn’t have that much experience. This made me feel like I wasn’t qualified to review the code of people who had been doing this for 10 years.

Now that I have more experience, I want to tell you some things that I would have liked to know back then. These can help any developer that has to review code, regardless of their level of experience.

### What should I look for in a code review?

**That the code is easy to understand.** Can you understand it without asking too many questions? The developer that wrote the code won’t always be there, so it’s ideal if the code is as self-documenting as possible.

**That the code doesn’t introduce new bugs.** You might not always have such a deep knowledge of the code that it allows you to find any bug just by reading it. But, you can try, to the best of your ability, to “run” the code in your mind while you are reading it. This will make it easier to identify the parts that could cause problems.

**That it follows the industry best practices, and your team’s standards.** When everyone writes code “their way”, the codebase becomes messy and inconsistent. As a result, it becomes harder to understand.

### How can I perform better code reviews?

**Ask questions.** Sometimes you will notice obvious problems, and it’s natural to point them out or recommend a change. But sometimes a developer makes a design decision with a particular reason in mind. That reason is not always obvious when you are reviewing the code. In those cases, I recommend asking questions rather than giving direct recommendations. For example, instead of saying: “Move this code to a separate class”, you could say: “Wouldn’t it be better to move this code to a separate class?” Or, “Why did you include this code here and not in a separate class?” As a result, if there is a reason behind that decision, the person can explain it. If not, they can take your suggestion.

**If you’re pointing out a problem, offer a solution.** It is not very helpful to say “this is wrong” or “I can’t understand this code” if you will not offer an alternative. If you know something could be better, take a little time to think about how you would change it and mention it. Remember that the goal is to improve the code, not to be a critic.

**Become familiar with the context of change.** If you review a code change while not knowing ​​its purpose, you cannot assess whether it works. Before you examine the code, look up the requirements. If it’s a bug fix, look up the description of the reported problem. That will give you a better idea of ​​what the code should do, and you can evaluate it based on that.

**Be impartial.** It’s easy to think you should spend more time reviewing the code of a junior developer versus that of an experienced developer. I have missed things before by not being that thorough when reviewing the code of a senior developer. No matter who is the author of the code, there might be mistakes or points for improvement.

### In conclusion...

The most important thing in a code review is attention to detail. The second one is approaching the task with the right attitude. The best way to perform a code review is to assume that there are problems, and that it is your job to find them.
