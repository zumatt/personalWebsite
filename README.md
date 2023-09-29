# Interaction Designer Portfolio

The goal is to create a personal website to showcase my projects. My aim is to use [chatGPT](https://openai.com/blog/chatgpt), an AI language model, to create the entire portfolio.
The website will have a homepage that will display four featured projects, a repository page containing all completed projects, and a blog page for news related to the interaction design industry. To build the website, I will use standard pages connected to a database created through [Notion](https://www.notion.so/). This will make it easy to insert my projects into the website.
The website's texts, images, and videos will be retrieved directly from a public Notion page. This will give me a simple CMS to use, and I can also use [NotionAI](https://www.notion.so/help/guides/using-notion-ai) to write the texts for the projects and news. The project aims to test the limits of chatGPT and fully understand its functionalities.
By creating a personal website using chatGPT, I hope to showcase the power and capabilities of AI in web development. Moreover, I believe that this project will serve as a stress-test for chatGPT, allowing me to gain a deeper understanding of the platform's limitations and possibilities.

## ChatGPT conversations - Part 1: Creating the projects page with Notion connected
*Me:*
  > Hello chatGPT, let's call this chat "personalWebsite". I want to co-create with you my portfolio are you ready?
  
*ChatGPT:*
  > Hello! I'm ready to assist you in co-creating your portfolio for your personal website. Let's get started!

*Me:*
  > First of all, the website will have 3 main sections: the homepage, projects page and blog page.
Inside the homepage there will be a text that represents what I'm doing and 4 main projects. Inside the projects page will be placed all the projects done, and in the blog page all the news written.
The website needs to communicate with a Notion public database that I will create.
Let's start creating the webpage for the projects.
Write a code for a mobile first website using html, css, javascript, and any other languages supported that will show all the entries from a Notion database with a main image, a title, a short description, and tags. The page need to show projects in a table, for mobile one column and rows as the number of database entries, for tablet two columns and for the desktop version three columns. The website should have a black background, white "NeueMachina-Inktrap" text, and each box of the table need to have a white border. Insert also a sticky header that has at the left a text "ZUMAT" and at the right a menu with three call to actions "home" "projects" and "blog"; the header should have a horizontal white line at the bottom. Be sure that the menu in the tablet and mobile version will be collapsed inside a burger menu. Insert then a footer that contains the link to an instagram page, and the a mailto link; the footer should have a horizontal white line at the top.

*ChatGPT:*
  >Sure, I can help you with that. Here is an example code for the projects page that retrieves data from a Notion database and displays it in a table, as per your requirements:

<sub>ChatGPT started writing the code for the HTML page, then at a certain point of the CSS code it stops.</sub>

*Me:*
  >continue with writing the css code

*ChatGPT:*
  >Sure, here's the continuation of the CSS code:

<sub>ChatGPT continued the code and also wrote the Javascript script</sub>

  >Make sure to replace the placeholders YOUR_DATABASE_ID and YOUR_API_KEY with your actual Notion database ID and API key, respectively.
I hope this helps! Let me know if you need further assistance.

*Me:*
  >where can I found YOUR_DATABASE_ID and YOUR_API_KEY for Notion?

*ChatGPT:*
  >To obtain your Notion database ID and API key, you can follow these steps:
Create a Notion account, if you don't have one already.
Create a new page and add a database to it.
In the database view, click the "Share" button in the top-right corner and select "Share to web".
In the "Embed options" section, click "Copy" next to the "Database ID" field to copy your database ID.
To get your Notion API key, go to the Notion API page (https://developers.notion.com/docs/getting-started#step-2-share-a-database-with-your-integration), and click the "Get started" button.
Follow the instructions to create a new integration and obtain your API key.
Once you have your database ID and API key, you can replace the placeholders YOUR_DATABASE_ID and YOUR_API_KEY in the JavaScript code I provided with your actual values.

**Here I copied the code and I creted the first iteration folder**

_Test number 1:_
With the first test I copied the whole code from chatGPT and replaced with my Notion Database ID and API key.

The first test failed, the problem was on using the wrong API. In fact chatGPT used the API from Airtable instead of using the ones from Notion.

_Test number 2:_ Here I simply asked chatGPT to rewrite the code using the API from Notion.

The second test failed, the problem was on an error of Notion API, that chatGPT cannot get starting looping inside the same error. Here I choosed to ask wich method can I use to create the same result. ChatGPT suggest to use Airtable instead of Notion. Anyway I want to try another time by creating a new chat and simplify the first request.

## ChatGPT conversations - Part 2: Create a webpage and read data from a Notion database.
*Me:*
  >Hey ChatGPT, could you code a simple webpage that reads data from a Notion Database?

*ChatGPT:*
  >Sure, I can help you with that! Here's a simple webpage that uses Notion's API to read data from a database:

Another time the code that ChatGPT is sharing is not working, I tried asking few other trial but the error persist. After a research, I discovered that to use Notion APIs you need to install Node.js. So I asked to chatGPT if this is true:

*Me:*
  >It seems that the Notion APIs require node.js do work. Maybe I need to install something before?

*ChatGPT:*
  >Yes, to use the Notion API in JavaScript, you will need to have Node.js installed on your computer. If you haven't installed it already, you can download it from the official Node.js website (https://nodejs.org/en/).

So, I will move to another method.

## ChatGPT conversations - Part 3: Changing database, trial with JSON file.
*Me:*
  >Can you create a html page that contains projects that takes title, description and image from a JSON file?

*ChatGPT:*
  >Yes, I can help you with that. Here is an example of an HTML page that uses JavaScript to load project data from a JSON file and display it on the page:

**Here I copied the code and I creted the third iteration folder**

*Me:*
  >Could you create a page for each project that displays the description and the image?

*ChatGPT:*
  >Yes, I can help you with that. Here's an example of how you can create a separate HTML page for each project, with the description and image displayed: First, let's modify the JSON file to include a unique ID for each project: Then, let's create a new HTML file for each project, with the ID of the project included in the filename (e.g. "project1.html", "project2.html", etc.). Here's an example of what the HTML file for project 1 might look like: We can generate these HTML files dynamically using JavaScript. Here's an updated version of the JavaScript code that loads the project data from the JSON file and generates the HTML files:

**Here I updated the code and I creted the third iteration folder**

## ChatGPT retry with new version
Since I left this project for a few, I tried asking another time what I asked prevoisly and ChatGPT answered me in a better way.
Here the link to check the conversation: https://chat.openai.com/share/02c1f300-ad1a-47e5-86ac-41b813cc23bd
