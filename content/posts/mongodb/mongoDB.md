---
title: "MongoDB"
date: 2022-10-08T13:23:17+05:30
draft: false
author: "Manohar Palanisamy"
language: "en"
location: "IN"
tags: ["NoSQL", "Data"]
categories: ["cat1"]
description: Text about this post
cover:
  image: "/posts/mongodb/images/svm.jpg"
  #image: "https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png"
  # can also paste direct link from external site
  # ex. https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png
  caption: "SVM"
  alt: "SVM"
  relative: true # To use relative path for cover image, used in hugo Page-bundles
  #responsiveImages: false
---

# Mongo DB


![image](/posts/mongodb/images/svm.jpg#center)

<!-- {{< figure src="/posts/mongodb/images/svm.jpg" title="Steve Francia" >}} -->

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Example HTML5 Document</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```

```
#include <stdio.h>
int main() {
   int i, space, rows, k = 0;
   printf("Enter the number of rows: ");
   scanf("%d", &rows);
   for (i = 1; i <= rows; ++i, k = 0) {
      for (space = 1; space <= rows - i; ++space) {
         printf("  ");
      }
      while (k != 2 * i - 1) {
         printf("* ");
         ++k;
      }
      printf("\n");
   }
   return 0;
}
```

## code practise

---

# CI/CD Pipeline

**Github CI/CD Pipeline**

[How to Setup a CI/CD Pipeline with GitHub Actions and AWS](https://www.freecodecamp.org/news/how-to-setup-a-ci-cd-pipeline-with-github-actions-and-aws/)

## CI/CD

- **Continuous integration**

  Automate to run builds, tests and integrate into code branch(github).

- **Continuous delivery**

  Automate to deploy our code to UAT then manually triggered to AWS

- **Continuous Deployment**

  Automate to deploy our code to UAT(User Acceptance Testing) to AWS

![https://ik.imagekit.io/wrdkwox8l/ci-cd.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1665898283493](https://ik.imagekit.io/wrdkwox8l/ci-cd.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1665898283493)

![https://ik.imagekit.io/wrdkwox8l/github-actions.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665898070755](https://ik.imagekit.io/wrdkwox8l/github-actions.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665898070755)
