---
title: Humans, not computers.
date: "2021-05-16T11:00:37.121Z"
description: "A memory leak happens when an application is no longer using certain objects, but they’re still being referenced...."
---

The other day I was reading [this](https://shopify.engineering/building-mental-models) post by [Hammad Khalid](https://shopify.engineering/search?link_search=true&q=Hammad+Khalid), and in it he mentioned what I think is a very important principle in software development: Write for humans, not for computers.

I remember taking my first computer science class, when code readability was not even a known concept to me. I would use variable names like a,b and x. I would create a Java program and pack all of my code in one class.

Now gone are the days of writing code that does the job and calling it a day. As are the days of one letter variable names.

I’m sure you have met developers that are very concerned about writing error free code and about performance and memory usage (which are all important things), but don’t care about whether their code is easily readable. I think most of us have been there at some point in our journey. 

### What’s the problem?

The problem with only caring about functionality and performance is that while the computer won’t care what your code looks like as long as it runs, at the end of the day, it’s humans that will have to deal with your code.

Your code might be perfect now, but it will likely require changes in the future. These changes will likely be made by other people. Or what if a bug is reported? If the code isn’t easily readable, it will be way harder for whoever is trying to fix it to understand what is going on. In fact, writing readable code will even make your future self’s job easier. Do not underestimate the possibility of being confused by your own code.

You could be thinking: “Well, that means I should write more comments then, so that when someone else reads my code they can understand what I’m trying to do”. Think again. The problem with relying on comments to make your code understandable is that they might eventually be wrong. There is no guarantee that the next person that changes your code will also update your comments. So the comments end up being inaccurate and confusing anyone who is reading the code. This is why it’s better for your code to be self explanatory. 

### So what IS the way then?

Here’s what you can do: If you feel like you’re code needs comments, try refactoring to make it more readable instead.

#### How?

- Use method names to make it clear what the code is supposed to do.
- Try your hardest so that each method does only one thing. For example, if you end up with a method name like createReservationAndEmailGuest, you can probably split it into 2 smaller methods, one that creates the reservation and another one that emails the guest. 
- If there’s a lot of code in one method, look for a way to separate it into smaller methods. 
- Use descriptive variable names. It doesn’t matter if they’re long. Get rid of a, b, c and abbreviations. 
- Avoid magic numbers at all costs. A magic number is a value with unexplained meaning. Basically a number thrown in the code that doesn’t mean anything to someone that didn’t write it. For example:

    ```
    If(password.length < 8){
        return “Invalid password”;
    }
    ```

Here you should replace the 8 with a constant such as MIN\_PASSWORD\_SIZE:

    If(password.length < MIN_PASSWORD_SIZE){
        return “Invalid password”;
    }

This gives the reader a more complete picture of what you're comparing _password.length_ to. 

- Write unit tests. Unit tests actually provide documentation. If an application has good test coverage, developers can look at tests to learn what functionality it provides and have a general understanding of the app’s interface.
- Don’t optimize prematurely. First focus on writing code that is readable, and then optimize if necessary. If a 0.1% of performance improvement is going to make your code less readable, chances are it’s not worth it.
- Include a readme in new projects. Here you should include an overview of the purpose of the project, an explanation of the design/architecture, and instructions on how to deploy it locally, if applicable. 

It might be annoying to do all this if you’re not used to it, and you might feel like you’re wasting time. But believe it or not, it will save you time along the way. Think about it: A lot of your work as a developer probably consists in reading other people’s code, especially if you’re fixing a bug. So actually, making your code easier to read will make new code easier to write, which will make your team more efficient overall.