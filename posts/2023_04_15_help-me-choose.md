---
title: "Picking the Perfect Path of Exile League Starter"
subtitle: "Using a reddit meme post to create a web application"
date: "2023-04-15"
---

Application can be found <a href="https://helpmechooseleaguestart.vercel.app/" target="_blank">here</a> or by visiting my work page.

Anyone who browses the <a href="http://www.reddit.com/r/pathofexile/" target="_blank">/r/pathofexile</a> subreddit around the start of each league will have undoubtedly come across <a href="http://www.reddit.com/user/MrMeltJr/" target="_blank">/u/MrMeltJr</a>'s League Start Flow Chart series of posts: <a href="https://www.reddit.com/r/pathofexile/comments/zfvx7o/320_league_start_flow_chart_dark_theme_in_comments/" target="_blank">here</a>

![image](/blogImages/2023_03_28_HelpMeChoose/mrmeltjrflowchart.jpg)

These reddit posts feature a flowchart like the one pictured above. While it's a fun and captivating experience to follow the chart to a suggested playstyle, readers might feel a tad bit underwhelmed. This is because they have to now search for a detailed guide on how to actually play the recommended build archetype. To make matters worse, any search for a build guide in POE can lead to a swarm of clickbait videos, which only adds to the frustration. And that's where I decided to step in and help make things a little easier.

### The Design

The flowchart format was definitely worth keeping, as it allows users to explore different decision trees and enjoy the process of answering questions that lead to diverse outcomes. One major change I made was to hide the answers behind a page render. This means that unlike the original flowchart posts, users can't just sneak a peek at the results; they need to make a decision and actively click back if they want to explore other outcomes. While this adds a bit of friction for those who are simply curious about the humor or interested in seeing various responses, I believe it's a small price to pay for the excitement and mystery of uncovering answers through page rerenders.

### Adding features

The initial plan was to simply provide links like those found in mega-threads on Reddit. However, after setting up the prototype, I thought, "Why not go all in?" and started searching for a library that would let me embed YouTube videos. I discovered
<a href="https://www.npmjs.com/package/react-youtube" target="_blank">react-youtube</a> , a straightforward library that enables YouTube embeds and offers some customization options.

The next step was to use a neat trick with Tailwind and Next.js to let users redirect to YouTube without leaving the app. I go over how to enable links to create redirects in new tabs in this blog post <a href="/posts/2023_04_12_opening-links-in-new-tabs" target="_blank">here</a>

Due to this feature above I was able to attach a variety of resources to enhance users experience, such as embedded Youtube videos, links to official forum guides and external guide websites like Pohx's renowned <a href="https://www.pohx.net/" target="_blank">RighteousFire Wiki</a>). To provide additional support and drive traffic to the build creators, I've also included links to their YouTube channels.

Feel free to share any suggestions or ideas for the Help-Me-Choose project. I intend to gradually expand this project over time and potentially incorporate a version of it into Poestack.
