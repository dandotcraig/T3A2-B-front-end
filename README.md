# Introduction

This is the write up for Sup Invoice - an invoicing app designed for freelance creatives. It's simple and helps them get the job done and pay their bills.

We've tested this app with two users:
* one: a designer 
* two: a video editor

The app is named 'Sup Invoice' as its a domain name that was short, cheap and a memorable word. People use the word sup to say hello, which is friendly and its short for super.

---

# R1	

#### At a minimum use the following technologies: MongoDB, Express, React & Node
---
Front-end technologies. Mainly React, with Tailwind & ShadCN component libraries.
<img src="src/assets/assignment-images/frontEndTech.png" alt="Front-end technologies" width="300px">


Back-end technologies. Mainly MongoDB (with Mongoose), Express and Node (paired with Nodemon) to run everything.

<img src="src/assets/assignment-images/backEndTech.png" alt="Back-end technologies" width="300px">

The rest can be seen in package.json files.

# R2	

#### Write well designed code that:
1. Separates the program into modules that each deal with one particular focus, or concern
2. Demonstrates DRY (Don’t Repeat Yourself) coding principles

    On the front-end my src folder houses all of the assets, compoents, context and lib files. Each file has its own focus and concern, allowing them to be easily applied and reused.

    <img src="src/assets/assignment-images/frontEndModules.png" alt="Back-end technologies" width="300px">

    **Example one**

    * The header has a mode toggle which toggles dark and light mode - this means its only written once, which is super DRY. The theme is built into context, which provides it to the whole site. This allows for extremely swift and worry free developing. This makes updating my shadCN components a breeze.

    **Example two**

    * The loading spinner is used throughout the site for loading components. Its one component which is in one file, but its called upon in many ways.

    **Example three**

    * UserContext supplies the cookies to authorise acess throughout the site.
    <img src="src/assets/assignment-images/fontEndModuleHighlights.png" alt="Back-end technologies" width="300px">

    On the back-end the folders are organised into tests, bruno(API client) controllers, middleware, models and routes. Each file has its own focus and concern, allowing them to be easily applied and reused.

    <img src="src/assets/assignment-images/backEndModules.png" alt="Back-end technologies" width="300px">

    **Example one**

    * Auth Middleware - on developing the backend, the auth checker for cookies, was copy and pasted many times. This lead to it being converted into middleware, meaning it was only written once and could be passed to any route. This made the code very DRY.

        <img src="src/assets/assignment-images/serverfiles.png" alt="Back-end technologies" width="300px">

    **Example two**

    * For testing purposes - the server was modulized. This meant the database could be detached and a mock databse could provide tests the routes. It's also made it incredibly neat. 

    **Example thee**

    * The router files became very clean and try, this allowed making news ones to be extremely swift and easy.
    
        <img src="src/assets/assignment-images/routers.png" alt="Back-end technologies" width="400px">

### Uses appropriate libraries

---

#### Front-End Dependencies

-   @headlessui/react: ^2.1.2 - really great UI library
-   @heroicons/react: ^2.1.5 - I really great icon library
-   @radix-ui/react-dropdown-menu: ^2.1.1 - dropdown is a menu function used in the invoice creation
-   @radix-ui/react-label: ^2.1.0 - react labels are for making labels
-   @radix-ui/react-scroll-area: ^1.1.0 - this has been used in the drop down and on mobile with the invoice maker
-   @radix-ui/react-select: ^2.1.1 - this allows us to select elements like drop downs.
-   @radix-ui/react-slot: ^1.1.0 - slows allows us to pass elements to a component
-   @radix-ui/react-switch: ^1.1.0 - the switch has been used to toggle
-   @radix-ui/react-tabs: ^1.1.0 - react tabs has been used on the dashboard and on the login page
-   class-variance-authority: ^0.7.0 - this allows controll of the classes in CSS sheets
-   clsx: ^2.1.1
-   file-saver: ^2.0.5 - this was used to develop the screenshoting and file saving function
-   html2canvas: ^1.4.1 - this was used to develop the screenshoting and file saving function
-   lucide-react: ^0.418.0 - really great UI library
-   react: ^18.3.1 - the great front end javascript library
-   react-dom: ^18.3.1 - this allows us to change pages in the front end
-   react-router-dom: ^6.26.0 - this allows us to change pages in the front end
-   tailwind-merge: ^2.4.0 - this is the front end front end CSS replacement. It's great, I love it
-   tailwindcss-animate: ^1.0.7 - this is the front end front end CSS replacement. It's great, I love it. The animate was used for the buttons and loading animations

#### Front-End Dev Dependencies

-   tailwindcss: ^3.4.7 - this is the front end front end CSS replacement. It's great, I love it
-   vite: ^5.3.4 - this app was first started and run on vite

#### Back-End Dependencies

-   bcrypt: ^5.1.1 - this does all the auth/encryption for to auth our users
-   cookie-parser: ^1.4.6 - this allows us to pass the users from the backend to the browser and store it
-   cors: ^2.8.5 - checks where the request comes from and validates it
-   dotenv: ^16.4.5 - hides all of our secret info from github
-   express: ^4.19.2 - express is what the server is built and deployed on
-   jsonwebtoken: ^9.0.2 - JWT is what we used to log in and log out - it works with bcrypt to keep things very excure
-   mongodb: ^6.8.0 - the database in which all of our data is saved too.
-   mongoose: the package used to make modals to send the code to our mongoDB database

### Demonstrates good code flow control for user stories

---

The flow control of our users is fundamentally how this app works. The app allows our users to flow through the app based on the inputs they supply. Code is executed on their inputs and this achieves the users desired outcome.

**Login/register**

If a user has an account they can login. If a user wants an account they can register ad add their own personal user/business details.

**Invoice - view/download/create/delete**

If user has login or has registered they can create, download, view and delete invoices. This is all accessable by the home screen

**Users - view/create/delete**

If user has login or has registered they can add, view and edit their own details. This is all accessable by the home screen

**Clients - view/create/delete**

If user has login or has registered they can create, add to invoice and delete clients. This is all accessable by the home screen

<img src="src/assets/assignment-images/controlflow.png" alt="control flow" width="500px">


STORY TESTS CONTROL FLOW [HERE](https://docs.google.com/spreadsheets/d/1_ZV2VED6lpS2cvqT7ImGNyekecFCfuunWcNHRNDakc0/edit?usp=sharing)


### Applies Object Oriented (OO) principles/patterns

---

Object Oriented (OO) principles have been heavily applied to mongoose schema structures. 

<img src="src/assets/assignment-images/oo1.png" alt="oo" width="300px">

<img src="src/assets/assignment-images/oo2.png" alt="oo" width="300px">

<img src="src/assets/assignment-images/oo3.png" alt="oo" width="300px">

<img src="src/assets/assignment-images/oo4.png" alt="oo" width="300px">

<img src="src/assets/assignment-images/oo5.png" alt="oo" width="300px">

Object Oriented (OO) principles have been heavily applied to all controller routes.

<img src="src/assets/assignment-images/oo6.png" alt="oo" width="300px">

<img src="src/assets/assignment-images/oo7.png" alt="oo" width="300px">

<img src="src/assets/assignment-images/oo8.png" alt="oo" width="300px">

<img src="src/assets/assignment-images/oo9.png" alt="oo" width="300px">

<img src="src/assets/assignment-images/oo10.png" alt="oo" width="300px">

### Uses appropriate data structures

---

**Functions**

Functions have been used throughout to create resuable code. Here are a couple of examples:

This auth middleware was created and reused thoughout the backend.

<img src="src/assets/assignment-images/authmiddleware.png" alt="oo" width="300px">

This header function was made once but used on every page on the app.

<img src="src/assets/assignment-images/header.png" alt="oo" width="300px">

**Ranges**

Ranges have been used throughout to to handle data. Here are a couple of examples:

Reducers and filers were used throughout to find and complete math logic, here are some examples:

<img src="src/assets/assignment-images/filter.png" alt="oo" width="300px">

<img src="src/assets/assignment-images/reducer.png" alt="oo" width="300px">

**Classes (useState/useEffect etc)**

Classes have been updated in recent years in react, therefore hooks which are a newer practice have been used throughout. The app is full of useState/useEffect.

useState and useEffect were used throughout the project to complete almost every useable function on the app, here are some examples:

<img src="src/assets/assignment-images/state.png" alt="oo" width="300px">

<img src="src/assets/assignment-images/effect.png" alt="oo" width="300px">

---

# R3	

#### Employ and utilise proper source control methodology (git)
---
**Front-End**

At the time of writing this my front-end has 72 commits, with 6 completed feature branches. This was important for setting up new fetch routes, adding providers/context, refactoring the code to make it dryer and adding in line-items to invoices, which was was an oversight in the original plan.

<img src="src/assets/assignment-images/serverfrontend.png" alt="front end git" width="400px">

**Back-End**

At the time of writing this my back-end has 69 commits, with 9 completed feature branches. The branches were extremely important for features like middleware, line items and fragmenting it into files. I had it working and on making these major updates I didn't want to be adding these experiments to main.

<img src="src/assets/assignment-images/servergit.png" alt="server git" width="400px">

Backend:

* Middleware setup branches
* line item experimentation branches (this was important as I wasn't sure if it would work)
* Router controller development.

# R4	

#### **Demonstrate your ability to work in a team**:
* Use a recognised project management methodology
* Use a recognised task delegation methodology
---

We've used a Kanban framework to impliment agile development processes to complete this first working version of Sup Invoice.

Trello was utilized to impliment deligate tasks, plan the project and follow it through.

**July 18**

Init setup and auth setup

<img src="src/assets/assignment-images/july18-19.png" alt="" width="500px">

**July 19**

Create invoice modals and invoices - finish profile/login from Auth setup

<img src="src/assets/assignment-images/july19.png" alt="" width="500px">

**July 20**

Invoice routes setup

<img src="src/assets/assignment-images/July20.png" alt="" width="500px">

**July 21**

Client routes setup

<img src="src/assets/assignment-images/July21.png" alt="" width="500px">

**July 22**

Users routes setup

<img src="src/assets/assignment-images/July22.png" alt="" width="500px">

**July 23**

Restructure the file for DRY code

<img src="src/assets/assignment-images/July23.png" alt="" width="500px">

**July 24**

Create line items

<img src="src/assets/assignment-images/July24.png" alt="" width="500px">

**July 25-31**

Testing

<img src="src/assets/assignment-images/July25-31.png" alt="" width="500px">

**Aug 1**

Setup vite, headers and router

<img src="src/assets/assignment-images/Aug1.png" alt="" width="500px">

**Aug 2**

UX and component setup

<img src="src/assets/assignment-images/Aug2.png" alt="" width="500px">

**Aug 3**

UX and component setup with some logic setup

<img src="src/assets/assignment-images/aug3.png" alt="" width="500px">

**Aug 4**

UX and component setup

<img src="src/assets/assignment-images/aug4.png" alt="" width="500px">

**Aug 5**

Auth logic applied to UX

<img src="src/assets/assignment-images/aug5.png" alt="" width="500px">

**Aug 6**

Invoice logic developed

<img src="src/assets/assignment-images/aug6.png" alt="" width="500px">

**Aug 7**

Invoice logic developed

<img src="src/assets/assignment-images/aug7.png" alt="" width="500px">

**Aug 8**

Invoice logic developed

<img src="src/assets/assignment-images/aug8th.png" alt="" width="500px">

**Aug 9**

Invoice logic developed, tidy up and delete functions 

<img src="src/assets/assignment-images/aug9th.png" alt="" width="500px">

**Aug 10**

More tidy up and deployment

<img src="src/assets/assignment-images/aug10th.png" alt="" width="500px">

**Aug 11**

Final user feedback before launch

<img src="src/assets/assignment-images/aug11.png" alt="" width="500px">


# R5/ R6

#### Produce a working application that meets client and user needs
#### Deploy the application to a cloud hosting service
---


Deployed Sup Invoice can be found [HERE](https://supinvoice.com)

Netlify subdomain [HERE](sup-invoice.netlify.app)

API can be found [HERE](https://t3a2-b-server.onrender.com)

# R7	

#### Produce an application with an intuitive user interface
---

This web application has utilized the ShadCN UI library, as well as tailwind. This mean't that the site is high user friendly and sleakly designed. Which is perfect for our itended users - professional freelance designers. We were tasked with developing an invoicing app. Below are five examples of great intuitive user interface design.
        
**Utilizing tabs**

Tabs are great as they don't feel like you're changing page, as the UX doesn't reload. This means you can display a lot of info and make it extremely easy to access. We used tabs on the home page to display the different pages. Overview, which shows all of the invoices, clients which displays all of the clients and settings which is a form to update the registers users details.

<img src="src/assets/assignment-images/tabsUX.png" alt="tabs" width="500px">

**Modals** 

Modals are another great UX trick, it makes the user feel like they are still on the home page. Making the pages minimal makes it feel less complex. The fact the user can see the app behind it (blurred) means it doesn't feel hard to get back to the main interface. Modals were utilized twice for client creation, invoice creation and invoice viewing.

<img src="src/assets/assignment-images/ModalUX.png" alt="modal" width="500px">

**Dark and light mode**

With more and more users getting large 4k screens with strong blue light - light mode is becoming less and less. This is due to it putting a lot of strain on the eyes due to its brightness. The ShadCN library made it really easy to impliment this.

<img src="src/assets/assignment-images/dropdownUX.png" alt="dropdown" width="500px">

**Dropdowns**

A user could have hundreds of clients. Thats why we've used dropdowns to display the clients. This means it will appear in a scrollable list, easy for the user to find them. 

<img src="src/assets/assignment-images/darklightUX.png" alt="darklightmode" width="500px">

**Register flow**

The registration flow consists of two screens, one the registration section, which takes an email and password. Then once its been completed, the cookies are stored - meaning the user can be logged straight in. A pop up is added which gets the users details and stores them. Once complete it redirects to the home page so users can start making some invoices!


# R8 / R9	

#### Provides evidence of user testing:
* In the development environment
* In the production environment

#### Utilises a formal testing framework

---

## User Story testing

MANUAL USER STORY TESTS - sheet [HERE](https://docs.google.com/spreadsheets/d/1_ZV2VED6lpS2cvqT7ImGNyekecFCfuunWcNHRNDakc0/edit?usp=sharing)

Primary - designer

1. As a freelance designer I want a simple web app for managing my invoicing needs, including clients, projects, and invoices. So that I have more design work time and administrative tasks take less time. 

    
    ✅ **Manual user test**
  
    <img src="src/assets/assignment-images/1US.png" alt="" width="500px">

    ✅ **Solution**

    <img src="src/assets/assignment-images/desktop.png" alt="" width="500px">

    User interface is simple and easy to use. Everything that a user could want is on the home page, with easy access. This is exactly inline with our users needs


2. As a freelance designer, I want to make and send minimalistic invoices to my clients, so that I can speed up my billing and sleep easily.

    ✅ **Manual user test**
    
    <img src="src/assets/assignment-images/2US.png" alt="" width="500px">

    
    ✅ **Solution**

    <img src="src/assets/assignment-images/view invoice.png" alt="" width="500px">
    
    The invoice is all there and easy to access. It has a download button for easy and simplistic sharing.

3. As a freelance designer, I need to be able to see all of my invoices, so that I can follow up on payments and manage my clients effectively.

    
    ✅ **Manual user test**

    <img src="src/assets/assignment-images/desktop.png" alt="" width="500px">

    The dashboard has everything this designer needs. The date is the first thing, so users can look, see when they made it and make any follow ups or checks with their clients.


4. As a freelance designer, I need to be able to add or expense design assets, so that I can charge these expenses to my clients.

    ✅ **Manual user test**

    <img src="src/assets/assignment-images/4US.png" alt="" width="500px">

    ✅ **Solution**

    <img src="src/assets/assignment-images/lineitem.png" alt="" width="500px">
        
    A simple yet simplistic way to add new line items to the invoice. They are added on the left and users can see them on the right side. They automatically sum up and they're easy to delete.

Secondary - Video editor
1. As a freelance video editor, I want a simple web app for managing my invoicing needs, including clients, projects, and invoices. So that I can spend more time on video editing and less time on administrative tasks.

    
    ✅ **Manual user test**

    <img src="src/assets/assignment-images/5US.png" alt="" width="500px">

    ✅ **Solution**

    <img src="src/assets/assignment-images/desktop.png" alt="" width="500px">

    User interface is simple and easy to use. Everything that a user could want is on the home page, with easy access. This is exactly inline with our users needs
        

2. As a Video Editor, I want to create invoices that include hour rates, day rates and project details, So that my clients clearly understand what they are paying for.

    ✅ **Manual user test**

    <img src="src/assets/assignment-images/6US.png" alt="" width="500px">

    
    ✅ **Solution**

    <img src="src/assets/assignment-images/lineitem.png" alt="" width="500px">
        
    A simple yet simplistic way to add new line items to the invoice. They are added on the left and users can see them on the right side. They automatically sum up and they're easy to delete.
        

3. As a Video Editor, I want mobile access to create and look after invoices when I am out and about, So that I can make my job flexible and responsive to client needs.

    
    ✅ **Manual user test**

    <img src="src/assets/assignment-images/7US.png" alt="" width="500px">

    ✅ **Solution**

    <img src="src/assets/assignment-images/mobile1.png" alt="" width="300px">

    <img src="src/assets/assignment-images/mobile2.png" alt="" width="300px">

    <img src="src/assets/assignment-images/mobile3.png" alt="" width="300px">
        

    The design is completely responsive and even works on devices with small screens - down to 300px in width. Which by todays standards - is small.

4. As a Video Editor, I need to be able to add or expense stock footage or hard drive processing, so that I can charge these expenses to my clients.

    
    ✅ **Manual user test**

    <img src="src/assets/assignment-images/8US.png" alt="" width="500px">

    ✅ **Solution**

    <img src="src/assets/assignment-images/lineitem.png" alt="" width="500px">
        
    A simple yet simplistic way to add new line items to the invoice. They are added on the left and users can see them on the right side. They automatically sum up and they're easy to delete.


## Overall manual testing ✅ 


MANUAL BRUNO TESTING - sheet [HERE](https://docs.google.com/spreadsheets/d/1_ZV2VED6lpS2cvqT7ImGNyekecFCfuunWcNHRNDakc0/edit?usp=sharing)

Manual testing was done with Bruno to insure it would work prefectly when implimented while also a result to compare it too in the browser.

<img src="src/assets/assignment-images/manualauth.png" alt="" width="500px">

<img src="src/assets/assignment-images/manualclients.png" alt="" width="500px">

<img src="src/assets/assignment-images/manualinvoice.png" alt="" width="500px">

<img src="src/assets/assignment-images/manuallineitems.png" alt="" width="500px">

<img src="src/assets/assignment-images/manualuser.png" alt="" width="500px">

**Web interface end points:**

MANUAL UX TESTING - sheet [HERE](https://docs.google.com/spreadsheets/d/1_ZV2VED6lpS2cvqT7ImGNyekecFCfuunWcNHRNDakc0/edit?usp=sharing)

Following on from the bruno testing, we tested everything hard in the browser. Some routes weren't used and might be used down the track.

<img src="src/assets/assignment-images/front1.png" alt="" width="500px">

<img src="src/assets/assignment-images/front2.png" alt="" width="500px">


## Overall automated testing ✅ 

AUTOMATED JEST TESTS - sheet [HERE](https://docs.google.com/spreadsheets/d/1_ZV2VED6lpS2cvqT7ImGNyekecFCfuunWcNHRNDakc0/edit?usp=sharing)

<img src="src/assets/assignment-images/1bruno.png" alt="" width="500px">

<img src="src/assets/assignment-images/2bruno.png" alt="" width="500px">

<img src="src/assets/assignment-images/3bruno.png" alt="" width="500px">

<img src="src/assets/assignment-images/4bruno.png" alt="" width="500px">

<img src="src/assets/assignment-images/5bruno.png" alt="" width="500px">

<img src="src/assets/assignment-images/jesttest1.png" alt="" width="300px">

<img src="src/assets/assignment-images/jesttest2.png" alt="" width="300px">


## User feature implimentation tests.

INVOICE MAKER EXPECTATIONS - sheet [HERE](https://docs.google.com/spreadsheets/d/1_ZV2VED6lpS2cvqT7ImGNyekecFCfuunWcNHRNDakc0/edit?usp=sharing)

<img src="src/assets/assignment-images/Expectations.png" alt="" width="300px">

### User testing and agile iteration

USER FEEDBACK - sheet [HERE](https://docs.google.com/spreadsheets/d/1_ZV2VED6lpS2cvqT7ImGNyekecFCfuunWcNHRNDakc0/edit?usp=sharing)


## User testing 1 & Feedback

Feedback: "The heading doesnt have a background - a blurred background would look good"

<img src="src/assets/assignment-images/testing1.png" alt="" width="400px">

Feedback: "The padding on the logo is causing it to cut off"

<img src="src/assets/assignment-images/IMG_8357.jpeg" alt="" width="400px">

Feedback: "Changing between login and register makes the whole box move, it looks strange"

<img src="src/assets/assignment-images/testing2.png" alt="" width="400px">

<img src="src/assets/assignment-images/testing4.png" alt="" width="400px">

<img src="src/assets/assignment-images/IMG_8356.jpeg" alt="" width="400px">

Feedback: "Empty table is confusing, it needs place holder text"

<img src="src/assets/assignment-images/testing5.png" alt="" width="400px">

Feedback: "Empty table is confusing, it needs place holder text"

<img src="src/assets/assignment-images/testing6.png" alt="" width="400px">

<img src="src/assets/assignment-images/testing7.png" alt="" width="400px">

Feedback: "these notifications don't look professional or premium"

<img src="src/assets/assignment-images/testing8.png" alt="" width="400px">

<img src="src/assets/assignment-images/testing9.png" alt="" width="400px">

Feedback: "Home page is not friendly, it feels very corporate"

<img src="src/assets/assignment-images/notfriendly.png" alt="" width="400px">

## User testing 2 & Feedback

Implemented feedback: Placeholder data implimented:

<img src="src/assets/assignment-images/placeholder1.png" alt="" width="400px">

<img src="src/assets/assignment-images/placeholder2.png" alt="" width="400px">

Implemented feedback: Blurred background added to header:

<img src="src/assets/assignment-images/blurred.png" alt="" width="400px">

Implemented feedback: Alerts/notifcations/toast added: 

<img src="src/assets/assignment-images/not2.png" alt="" width="400px">

<img src="src/assets/assignment-images/not1.png" alt="" width="400px">

Implemented feedback: Updated to have a friendly welcome message

<img src="src/assets/assignment-images/message.png" alt="" width="400px">

# Reference



* YouTube. Mocking JWT in Jest. Available at: https://www.youtube.com/watch?v=HVPy-gNp5pc.
* Stack Overflow. Mocking JSON Web Token Module with Jest. Available at: https://stackoverflow.com/questions/64471965/mocking-jsonwebtoken-module-with-jest.
* Medium. Express TypeScript: Properly Mocking JWT Verify in Unit Test. Available at: https://zhifei-dev.medium.com/express-typescript-properly-mocking-jwt-verify-in-unit-test-b2dfd2e337a8.
* Medium. Unit Tests with Jest. Available at: https://medium.com/@fadime.ozdemir11/unit-tests-with-jest-364d61238420.
* Jest. Using Matchers. Available at: https://jestjs.io/docs/using-matchers.
* YouTube. Testing with Jest and Supertest. Available at: https://www.youtube.com/watch?v=IDjF6-s1hGk&list=PL0X6fGhFFNTd5_wsAMasuLarx_VSkqYYX&index=6.
* YouTube. JWT Authentication in Node.js. Available at: https://www.youtube.com/watch?v=mYy-d6BtqmU.
* YouTube. Understanding Node.js Authentication. Available at: https://www.youtube.com/watch?v=xKs2IZZya7c&t=5571s.
* YouTube. Express.js Middleware Explained. Available at: https://www.youtube.com/watch?v=-42K44A1oMA.
* YouTube. Understanding Express.js Middleware. Available at: https://www.youtube.com/watch?v=wcTzlJi2Oz4&list=PL4cUxeGkcC9h1NXLUuiAQ7c4UtdEInqma.
* shadcn. Installation with Vite. Available at: https://ui.shadcn.com/docs/installation/vite.
* YouTube. Getting Started with Tailwind CSS. Available at: https://www.youtube.com/watch?v=gXSC5eMw68o.
* Aceternity UI. Components Library. Available at: https://ui.aceternity.com/components.
* YouTube. Advanced React Hooks Tutorial. Available at: https://www.youtube.com/watch?v=cCQZ0_y-4Os&list=PL4cUxeGkcC9h1NXLUuiAQ7c4UtdEInqma&index=4.
* YouTube. Introduction to Tailwind CSS. Available at: https://www.youtube.com/watch?v=oidnyW71W0A.
* YouTube. Tailwind CSS Tutorial. Available at: https://www.youtube.com/watch?v=vGiYuaquCo4.
* shadcn. UI Components. Available at: https://ui.shadcn.com/docs/components.
* YouTube. Flexbox Tutorial for Beginners. Available at: https://www.youtube.com/watch?v=XkOXNlHJP6M&t=1017s.
* YouTube. Advanced Flexbox Techniques. Available at: https://www.youtube.com/watch?v=UND-kib_iw4.
* Tailwind CSS. Flex Basis. Available at: https://tailwindcss.com/docs/flex-basis.
* Transform Tools. TypeScript to JavaScript. Available at: https://transform.tools/typescript-to-javascript.
* Stack Overflow. Converting TypeScript to JavaScript. Available at: https://stackoverflow.com/questions/69696825/converting-typescript-to-javascript.
* Tailwind UI. Modal Dialogs. Available at: https://tailwindui.com/components/application-ui/overlays/modal-dialogs.
* Flowbite React. Modal Components. Available at: https://flowbite-react.com/docs/components/modal.
* Crozat, B. Dialog Backdrop Styling with Tailwind CSS. Available at: https://benjamincrozat.com/dialog-backdrop-styling-tailwind-css.
* Creative Tim. Tailwind Starter Kit Documentation. Available at: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular.
* Lucide. X Icon. Available at: https://lucide.dev/icons/x.
* Tailwind CSS. Grid Template Columns. Available at: https://tailwindcss.com/docs/grid-template-columns.
* Medium. ReactJS MUI5 Color Themes with Dark/Light Modes. Available at: https://medium.com/@facinick/reactjs-mui5-color-themes-with-dark-light-modes-theme-color-design-27039fd3d5de.
* Pugazhenthi. Vite React Tailwind Shadcn. Available at: https://www.pugazhenthi.in/blog/vite-react-tailwind-shadcn.
* MDN Web Docs. Event.stopPropagation(). Available at: https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation.
* GeeksforGeeks. How to Use Calc in Tailwind CSS. Available at: https://www.geeksforgeeks.org/how-to-use-calc-in-tailwind-css/.
* Stack Overflow. React Open/Close Modal Component onClick. Available at: https://stackoverflow.com/questions/67090762/react-open-close-modal-component-onclick.
* Pluralsight. How to Open and Close React Bootstrap Modal Programmatically. Available at: https://www.pluralsight.com/resources/blog/guides/how-to-open-and-close-react-bootstrap-modal-programmatically.
* Medium. How to Get a React Bootstrap Modal to Open and Close Using a Button. Available at: https://medium.com/nerd-for-tech/how-to-get-a-react-bootstrap-modal-to-open-and-close-using-a-button-of-your-choice-in-a-p-cde3ef6c0d4c.
* YouTube. React Modal Tutorial. Available at: https://www.youtube.com/watch?v=mhjbACbSeSU.
* YouTube. Advanced React Modals. Available at: https://www.youtube.com/watch?v=WkREeDy2WQ4.
* React Router. Getting Started Tutorial. Available at: https://reactrouter.com/en/main/start/tutorial.
* GitHub. React Router Examples. Available at: https://github.com/remix-run/react-router/tree/dev/examples.
* Medium. Using useLocation Hook in React Router. Available at: https://medium.com/@alexanie_/https-ocxigin-hashnode-dev-uselocation-hook-in-react-router-758a0a711308.
* React Router. useLocation Hook. Available at: https://reactrouter.com/en/main/hooks/use-location.
* Medium. React Router: Get Current Route. Available at: https://medium.com/codingbeauty-tutorials/react-router-get-current-route-9c2e6bd8d689.
* Medium. Understanding React Outlet. Available at: https://medium.com/@shruti.latthe/understanding-react-outlet-a-comprehensive-guide-b122b1e5e7ff.
* Stack Overflow. React Router: Purpose of Using Outlet Alone. Available at: https://stackoverflow.com/questions/73573071/react-router-what-is-the-purpose-of-using-outlet-alone-without-context.
* React Router. Outlet Component. Available at: https://reactrouter.com/en/main/components/outlet.
* MUI. Material-UI Integrations with Routing. Available at: https://mui.com/material-ui/integrations/routing/#tabs.
* Medium. React JS Localhost with HTTPS Using mkcert. Available at: https://medium.com/projectwt/react-js-localhost-with-https-using-mkcert-338927e94212.
* YouTube. Understanding Node.js Authentication. Available at: https://www.youtube.com/watch?v=xKs2IZZya7c&t=9120s.
* YouTube. MongoDB Quick Start. Available at: https://www.youtube.com/watch?v=-NfsmF-6BHo.
* MongoDB. Quick Start: How to Get Connected to Your Database. Available at: https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database.
* YouTube. Express.js Middleware Explained. Available at: https://www.youtube.com/watch?v=-42K44A1oMA.
* YouTube. Node.js Authentication Tutorial. Available at: https://www.youtube.com/watch?v=DZBGEVgL2eE&t=30s.
* LoginRadius. Node.js Authentication Guide. Available at: https://www.loginradius.com/blog/engineering/guest-post/nodejs-authentication-guide/.
* Medium. How to Check if a String is a Valid MongoDB ObjectID in Node.js. Available at: https://medium.com/@emmaw4430/how-to-check-if-a-string-is-a-valid-mongodb-objectid-in-node-js-283361445e10.
* npm. bcrypt. Available at: https://www.npmjs.com/package/bcrypt.
* GitHub. node-jsonwebtoken. Available at: https://github.com/auth0/node-jsonwebtoken.
* YouTube. JWT Authentication in Node.js. Available at: https://www.youtube.com/watch?v=mYy-d6BtqmU.
* YouTube. Understanding JWT in Node.js. Available at: https://www.youtube.com/watch?v=vgocTvahk18.
* Medium. Things to Note When Signing and Verifying JWT Token in Node.js. Available at: https://medium.com/@ardipurba/things-to-note-when-signing-and-verifying-jwt-token-in-nodejs-fad0ee4cbfad.
* MDN Web Docs. async function. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function.
* MongoDB. findOneAndUpdate. Available at: https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndUpdate/.
* GitHub. Contact Model Example. Available at: https://github.com/AlexStormwood/oct23-t3w11-mongooseintro/blob/main/src/models/ContactModel.js.
* Express.js. Session Middleware. Available at: https://expressjs.com/en/resources/middleware/session.html.
* YouTube. Node.js User Authentication Example. Available at: https://www.youtube.com/watch?v=MrEoixi8QY4&list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT&index=14.
* Stack Overflow. How to Make a Page Only Accessible When Logged in with Express EJS. Available at: https://stackoverflow.com/questions/61669346/how-to-make-a-page-only-accessible-when-logged-in-with-express-ejs.
* Dev.to. Fix Cannot Set Headers After They Are Sent to the Client. Available at: https://dev.to/collegewap/fix-cannot-set-headers-after-they-are-sent-to-the-client-19gk.
* MongoDB. BSON Type Date. Available at: https://www.mongodb.com/docs/manual/reference/bson-types/#document-bson-type-date.
* Mongoose. Mongoose Dates Tutorial. Available at: https://mongoosejs.com/docs/tutorials/dates.html.
* Stack Overflow. Difference Between Date.now() and new Date() in Mongoose. Available at: https://stackoverflow.com/questions/35501273/what-is-the-difference-between-date-now-and-date-now-in-mongoose.
* Stack Overflow. How to Properly Embed Documents in Mongoose. Available at: https://stackoverflow.com/questions/43429500/how-do-i-properly-embed-documents-in-mongoose.
* Medium. When to Use Embedded vs Reference Schema in Mongoose. Available at: https://medium.com/@truong.minh.michael/when-to-use-embedded-vs-reference-schema-in-mongoose-and-when-to-use-single-reference-vs-reference-36b757acab7e.
* GeeksforGeeks. Mongoose insertMany Function. Available at: https://www.geeksforgeeks.org/mongoose-insertmany-function/.
* GeeksforGeeks. Mongoose Document Model insertMany API. Available at: https://www.geeksforgeeks.org/mongoose-documen-model-insertmany-api/.
* GeeksforGeeks. How Query.prototype.map Works in Mongoose. Available at: https://www.geeksforgeeks.org/how-does-query-prototype-map-works-in-mongoose/.
* Stack Overflow. Fetching Documents from Mongoose Inside a map Function Returns Promise Pending. Available at: https://stackoverflow.com/questions/69780763/fetching-documents-from-mongoose-inside-a-map-function-returns-promise-pending-a.
* YouTube. Mongoose with Node.js. Available at: https://www.youtube.com/watch?v=lY6icfhap2o&t=309s.
* Express.js. Writing Middleware. Available at: https://expressjs.com/en/guide/writing-middleware.html.
* MDN Web Docs. HTTP Status Codes. Available at: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status.
* Dev.to. Testing with MongoDB Memory Server. Available at: https://dev.to/remrkabledev/testing-with-mongodb-memory-server-4ja2.
* GitHub. MongoDB Memory Server Releases. Available at: https://github.com/typegoose/mongodb-memory-server/releases.
* npm. mongodb-memory-server. Available at: https://www.npmjs.com/package/mongodb-memory-server.
* Easy on the Web. In-Memory MongoDB for Testing. Available at: https://easyontheweb.com/in-memory-mongodb-for-testing/.
* Dev.to. Testing Node.js Mongoose with an In-Memory Database. Available at: https://dev.to/paulasantamaria/testing-node-js-mongoose-with-an-in-memory-database-32np.
* Medium. Jest Test Lifecycle and Test Environment. Available at: https://medium.com/@yiqun.rong2/jest-test-lifecycle-and-test-environment-06cfbf90f612.
* Medium. Integration and Unit Testing with Jest in Node.js and Mongoose. Available at: https://medium.com/@tehvicke/integration-and-unit-testing-with-jest-in-nodejs-and-mongoose-bd41c61c9fbc.
* Medium. Unit Tests in Jest with Supertest and MongoDB. Available at: https://medium.com/@adammalej/unit-tests-in-jest-with-supertest-and-mongodb-e4d56e918ce8.
* Jest. Mock Functions. Available at: https://jestjs.io/docs/mock-functions.
* GitHub. express_jest_and_mocks Repository. Available at: https://github.com/Sam-Meech-Ward/express_jest_and_mocks.
* GitHub. express_jest_and_mocks - app.test.js. Available at: https://github.com/Sam-Meech-Ward/express_jest_and_mocks/blob/master/app.test.js.
* YouTube. Jest and Supertest for Testing Node.js Apps. Available at: https://www.youtube.com/watch?v=r5L1XRZaCR0.
* DigitalOcean. Node.js JWT Express.js Tutorial. Available at: https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs.
* LinkedIn. JWT Authentication Middleware in Express.js. Available at: https://www.linkedin.com/pulse/jwt-authentication-middleware-expressjs-building-secure-tamjid-ahmed/.
* Medium. Express.js Testing: Mocking MongoDB. Available at: https://medium.com/weekly-webtips/express-js-testing-mocking-mongodb-46c3797a201.
* GitHub. express_jest_and_mocks - app.js. Available at: https://github.com/Sam-Meech-Ward/express_jest_and_mocks/blob/master/app.js.
* Stack Overflow. Mocking Express Request with Jest and TypeScript Using Correct Types. Available at: https://stackoverflow.com/questions/57964299/mocking-express-request-with-jest-and-typescript-using-correct-types.
* Dev.to, 'ExpressJS: Handling Cross-Origin Cookies'. Available at: https://dev.to/alexmercedcoder/expressjs-handling-cross-origin-cookies-38l9
* Reddit, 'How to Avoid Getting CORS Error in Production'. Available at: https://www.reddit.com/r/reactjs/comments/15s76rw/how_to_avoid_getting_cors_error_in_production/
* Stack Overflow, 'Issue with Cross-Site Cookies: How to Set Cookie from Backend to Frontend'. Available at: https://stackoverflow.com/questions/63010545/issue-with-cross-site-cookies-how-to-set-cookie-from-backend-to-frontend
* Reddit, 'Set-Cookie Header Was Blocked Because it Had the "Secure" Attribute but Was Not Encrypted'. Available at: https://www.reddit.com/r/reactjs/comments/16z3e5d/help_setcookie_header_was_blocked_because_it_had/
* MDN Web Docs, 'Set-Cookie'. Available at: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
* PortSwigger, 'Bypassing SameSite Restrictions'. Available at: https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions
* Stack Overflow, 'Node.js Express CORS Not Working, Pending Options Requests'. Available at: https://stackoverflow.com/questions/46742605/node-js-express-cors-not-working-pending-options-requests
* Chrome DevTools, 'Network Reference'. Available at: https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#timing-explanation
* Google Cloud Community, 'Session Cookie Won’t Be Set Due to Domain Name Mismatch'. Available at: https://www.googlecloudcommunity.com/gc/Serverless/Session-cookie-won-t-be-set-due-to-domain-name-mis-match-despite/m-p/490932
* Stack Overflow, 'How Does the Access-Control-Allow-Origin Header Work?'. Available at: https://stackoverflow.com/questions/10636611/how-does-the-access-control-allow-origin-header-work
* Medium, '3 Ways to Fix the CORS Error and How Access-Control-Allow-Origin Works'. Available at: https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
* MDN Web Docs, 'Cross-Origin Resource Sharing (CORS)'. Available at: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
* Reddit, 'Error: Not Allowed by CORS on Render'. Available at: https://www.reddit.com/r/learnprogramming/comments/18zxfg3/error_not_allowed_by_cors_on_render/
* Amazon Web Services, 'How to Enable CORS in API Gateway'. Available at: https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html
* Medium, 'React JS: Localhost with HTTPS Using mkcert'. Available at: https://medium.com/projectwt/react-js-localhost-with-https-using-mkcert-338927e94212
* YouTube, 'ReactJS: Handling CORS Issues'. Available at: https://www.youtube.com/watch?v=l134cBAJCuc&t=131s
* YouTube, 'ReactJS: Cross-Origin Cookies'. Available at: https://www.youtube.com/watch?v=0XSDAup85SA
* MUI, 'React Select Component'. Available at: https://mui.com/material-ui/react-select/
* YouTube, 'ReactJS: React Select Component'. Available at: https://www.youtube.com/watch?v=oGq9o2BxlaI
* YouTube, 'ReactJS: Get Current Date'. Available at: https://www.youtube.com/watch?v=u-m0XINQUy&t=2s
* MDN Web Docs, 'Array.prototype.find()'. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
* Medium, 'Get Current Date, Month, Year in React JS'. Available at: https://web-tuts.medium.com/get-current-date-month-year-in-react-js-a45c067ab190
* Stack Overflow, 'React JS: Get Current Date'. Available at: https://stackoverflow.com/questions/43744312/react-js-get-current-date
* Medium, 'Get Current Date in React JS'. Available at: https://webtuts.medium.com/get-current-date-in-react-js-55283583186a
* SheCodes, 'How to Get the Current Date in React'. Available at: https://www.shecodes.io/athena/7466-how-to-get-current-date-in-react#:~:text=To%20get%20the%20current%20date%20in%20React%2C%20you,use%20the%20Date()%20function.
* Medium, 'How to Pre-populate Inputs When Editing Forms in React'. Available at: https://medium.com/@vanthedev/how-to-pre-populate-inputs-when-editing-forms-in-react-2530d6069ab3
* Stack Overflow, 'How to Programmatically Fill Input Field Value with React'. Available at: https://stackoverflow.com/questions/44671082/how-do-i-programatically-fill-input-field-value-with-react
* freeCodeCamp, '4 Methods to Search an Array'. Available at: https://www.freecodecamp.org/news/4-methods-to-search-an-array/
* DigitalOcean, 'React Select Component'. Available at: https://www.digitalocean.com/community/tutorials/react-react-select
* Mabl, 'Interacting with HTML Select Dropdowns'. Available at: https://help.mabl.com/hc/en-us/articles/19078186418324-Interacting-with-HTML-select-dropdowns
* W3C, 'ARIA: Accessible Rich Internet Applications'. Available at: https://w3c.github.io/aria/#aria-hidden
* Medium, 'Handling Browser Refresh in React: Best Practices and Pitfalls'. Available at: https://medium.com/@stheodorejohn/handling-browser-refresh-in-react-best-practices-and-pitfalls-5d4451d579ff
* LogRocket, 'Understanding React useEffect Cleanup Function'. Available at: https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/
* Jason Watmore, 'Fetch HTTP DELETE Request Examples'. Available at: https://jasonwatmore.com/post/2021/09/21/fetch-http-delete-request-examples
* Dev.to, 'React Fetch Example: GET, POST, PUT, DELETE with API'. Available at: https://dev.to/collegewap/react-fetch-example-getpostputdelete-with-api-3l00
* Express.js, 'CORS Middleware'. Available at: https://expressjs.com/en/resources/middleware/cors.html
* React, 'Updating Arrays in State'. Available at: https://react.dev/learn/updating-arrays-in-state
* freeCodeCamp, 'How to Render Lists in React'. Available at: https://www.freecodecamp.org/news/how-to-render-lists-in-react/
* Scrimba, 'React List Array with map() Function'. Available at: https://scrimba.com/articles/react-list-array-with-map-function/
* Dev.to, 'Creating a Dynamic Table in React Using react-table v7.8.0'. Available at: https://dev.to/hcoco1/creating-a-dynamic-table-in-react-using-react-table-v780-3823
* GeeksforGeeks, 'How to Pass Data into Table from a Form Using React Components'. Available at: https://www.geeksforgeeks.org/how-to-pass-data-into-table-from-a-form-using-react-components/
* YouTube, 'ReactJS: Dynamic Tables in React'. Available at: https://www.youtube.com/watch?v=xNWVkyDYKA4
* YouTube, 'ReactJS: Append to State Array'. Available at: https://www.youtube.com/watch?app=desktop&v=tkDym1sohI4
* DhiWise, 'React Append to State Array: Understanding Immutability'. Available at: https://www.dhiwise.com/post/react-append-to-state-array-understanding-immutability3
* Stack Overflow, 'Call Multiple Functions onClick ReactJS'. Available at: https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs
* Stack Overflow. How to reload a component/part of page in ReactJS. Available at: https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs.
* YouTube. Nxe-9PkP8Nw. Available at: https://www.youtube.com/watch?v=Nxe-9PkP8Nw.
* FreeCodeCamp Forum. React: Correct way to handle a component refresh on post request. Available at: https://forum.freecodecamp.org/t/react-correct-way-to-handle-a-component-refresh-on-post-request/502426/2.
* React Documentation. Lifting State Up. Available at: https://legacy.reactjs.org/docs/lifting-state-up.html.
* React.dev. Sharing State Between Components. Available at: https://react.dev/learn/sharing-state-between-components.
* Medium. Using useNavigate in React Router 6: A complete guide. Available at: https://medium.com/@bobjunior542/using-usenavigate-in-react-router-6-a-complete-guide-46f51403f430.
* FreeCodeCamp. Refresh the page in JavaScript (JS): Reload window tutorial. Available at: https://www.freecodecamp.org/news/refresh-the-page-in-javascript-js-reload-window-tutorial/.
* YouTube. xKs2IZZya7c&t=5286s. Available at: https://www.youtube.com/watch?v=xKs2IZZya7c&t=5286s.
* FreeCodeCamp Forum. React: Use state to toggle an element. Available at: https://forum.freecodecamp.org/t/react-use-state-to-toggle-an-element/620947/2.
* FreeCodeCamp. How to format a date with JavaScript: Date formatting in JS. Available at: https://www.freecodecamp.org/news/how-to-format-a-date-with-javascript-date-formatting-in-js/.
* MDN Web Docs. Date.prototype.toLocaleString(). Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString.
* Educative. How to sum a JavaScript array with reduce. Available at: https://www.educative.io/answers/how-to-sum-a-javascript-array-with-reduce.
* FreeCodeCamp Forum. Why is there a 0 in the function and what does reduce do?. Available at: https://forum.freecodecamp.org/t/why-is-there-a-0-in-the-function-and-what-does-reduce-do/487065.
* TutorialsPoint. How to format a number with two decimals in JavaScript. Available at: https://www.tutorialspoint.com/how-to-format-a-number-with-two-decimals-in-javascript.
* React SVGR. Playground. Available at: https://react-svgr.com/playground/.
* Stack Overflow. How to save img to user’s local computer using html2canvas. Available at: https://stackoverflow.com/questions/31656689/how-to-save-img-to-users-local-computer-using-html2canvas.
* HTML2Canvas. Getting Started. Available at: https://html2canvas.hertzen.com/getting-started.
* npm. file-saver. Available at: https://www.npmjs.com/package/file-saver.
* Expo. captureRef - Expo Documentation. Available at: https://docs.expo.dev/versions/latest/sdk/captureRef/.
* GitHub Gist. HTML2Canvas and saving images. Available at: https://gist.github.com/origamid/772d5b7edc2b18cfa4f34107612520dd.
* LogRocket. Export React components as images using HTML2Canvas. Available at: https://blog.logrocket.com/export-react-components-as-images-html2canvas/.
* npm. html2canvas version 1.4.1. Available at: https://www.npmjs.com/package/html2canvas/v/1.4.1.
* MDN Web Docs. HTMLCanvasElement.toBlob(). Available at: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob.
* Sonner. Sonner - Toast Notifications. Available at: https://sonner.emilkowal.ski/.
* YouTube. 8JTrY1dlXCw. Available at: https://www.youtube.com/watch?v=8JTrY1dlXCw.
* YouTube. -42K44A1oMA&t=1127s. Available at: https://www.youtube.com/watch?v=-42K44A1oMA&t=1127s.
* Radix UI. Toast Component Documentation. Available at: https://www.radix-ui.com/primitives/docs/components/toast.
* GeeksforGeeks. How to connect Node.js to MongoDB Atlas using Mongoose. Available at: https://www.geeksforgeeks.org/how-to-connect-node-js-to-mongodb-atlas-using-mongoose/.
* MongoDB Documentation. Getting Started with MongoDB Atlas. Available at: https://www.mongodb.com/docs/atlas/getting-started/.
* Medium. Mastering the connection: A step-by-step guide to linking Node.js and MongoDB Atlas with Mongoose. Available at: https://luqmanshaban.medium.com/mastering-the-connection-a-step-by-step-guide-to-linking-node-js-and-mongodb-atlas-with-mongoose-3941cfbbc2c7.
* Mongoose Documentation. Available at: https://mongoosejs.com/docs/.
* MongoDB Developer Hub. Getting started with MongoDB and Mongoose. Available at: https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/.
* npm. dotenv. Available at: https://www.npmjs.com/package/dotenv.
* npm. bcryptjs. Available at: https://www.npmjs.com/package/bcryptjs.
* npm. bcrypt. Available at: https://www.npmjs.com/package/bcrypt.
* npm. jsonwebtoken. Available at: https://www.npmjs.com/package/jsonwebtoken.
* JWT.io. JSON Web Tokens - Introduction. Available at: https://jwt.io/.
* React Documentation. React DOM. Available at: https://legacy.reactjs.org/docs/react-dom.html.
* React Router. Main Documentation. Available at: https://reactrouter.com/en/main.
* npm. mongodb-memory-server. Available at: https://www.npmjs.com/package/mongodb-memory-server.
* npm. mongodb-memory-server-global. Available at: https://www.npmjs.com/package/mongodb-memory-server-global.
* Stack Overflow. How to use file-saver.js to save text files. Available at: https://stackoverflow.com/questions/50126062/how-to-use-filesaver-js-to-save-text-files.
* npm. framer-motion. Available at: https://www.npmjs.com/package/framer-motion.
* Framer Motion. Spring Transitions. Available at: https://www.framer.com/motion/transition/#spring?utm_source=motion-readme-docs.
* Lucide. Lucide React Guide. Available at: https://lucide.dev/guide/packages/lucide-react.
* npm. lucide-react. Available at: https://www.npmjs.com/package/lucide-react.
* Headless UI. Available at: https://headlessui.com/.
* Jest. Available at: https://jestjs.io/.
* Jest. Getting Started Documentation. Available at: https://jestjs.io/docs/getting-started.
* Testim Blog. Jest Testing: A Helpful Introductory Tutorial. Available at: https://www.testim.io/blog/jest-testing-a-helpful-introductory-tutorial/.
* FreeCodeCamp. How to test JavaScript code with Jest. Available at: https://www.freecodecamp.org/news/how-to-test-javascript-code-with-jest/.
* MDN Web Docs. Array.prototype.length. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length.
* W3Schools. JavaScript Array length Property. Available at: https://www.w3schools.com/jsref/jsref_length_array.asp.
* React Documentation. Introduction to Hooks. Available at: https://legacy.reactjs.org/docs/hooks-intro.html.
* React.dev. Reference for React Hooks. Available at: https://react.dev/reference/react/hooks.
* Bitsrc Blog. Build a simple modal component with React. Available at: https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6.
* LogRocket. Creating a reusable pop-up modal in React. Available at: https://blog.logrocket.com/creating-reusable-pop-up-modal-react/.
* GeeksforGeeks. How to use Modal Component in ReactJS. Available at: https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/.
* Render. No ‘Access-Control-Allow-Origin’ header. Available at: https://community.render.com/t/no-access-control-allow-origin-header/12947/3













