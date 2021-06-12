---
title: HashMap vs Hashtable in Java
date: "2021-06-12T12:48:37.121Z"
description: "When I first started learning about data structures, I learned about the Hash Table. A few months later, I started learning Java..."
---

When I first started learning about data structures, I learned about the Hash Table. A few months later, I started learning Java. It was confusing to find out that there was a class called HashMap, which fit into the definition of what I learned was a Hash Table. It got worse: there was also a Hashtable class.

Hashtable vs HashMap can be confusing. It seems like they both do the same thing, so what’s the difference?

HashMap and Hashtable are both used to store a group of key-value pair objects. Each of these objects is called an Entry. In both HashMap and Hashtable, every key must be unique.

**Other similarities between the two classes:**

- In both, the methods put(), get(), remove() and containsKey() have O(1) performance (which means constant time no matter the size of the data structure).
- Key objects need to implement hashCode() and equals().
- They don’t maintain the insertion order of the elements.

**So what are the differences?**

Hashtable is synchronized. This also means that it is thread safe, so it can be shared between multiple threads in an application. HashMap is not synchronized, so if you want it to be accessed by multiple threads, you have to add additional synchronization code. This means that HashMap is faster (synchronized objects are generally slower than unsynchronized ones).

HashMap allows null values, while Hashtable does not. You can use null as both a key and a value in HashMap. There can only be one null key, since keys are unique, and as many null values as you want. Trying to add null as either a key or a value in a Hashtable will result in a NullPointerException.

HashMap uses Iterator, while Hashtable uses Enumerator. Enumerator was added in JDK1.0, while Iterator was added in JDK1.2 and it’s a little more advanced. They can both be used to traverse the elements of a collection, but they are different in that with an Enumerator you can only read objects while with Iterator you can also remove. Another difference is that iterator is fail fast (throws a ConcurrentModificationException if the collection is modified while iterating), while enumerator is fail safe (won’t throw an exception).

**When to use one or the other?**

You should use Hashmap for a single threaded use case.

Hashtable is obsolete, so it’s not a good idea to use it anymore. A good replacement is ConcurrentHashMap.
