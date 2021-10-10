# GuideLion 

GuideLion is an IOS application that allows to find a mentor in any area or become a mentor and learn together

**Aim**: To make skill sharing more accessible, using technologies. \
**Target Market**:  Market of IOS mobile applications based on knowledge. \

### Goals and objectives:
* Deploy in the market store - AppStore.
* Gaining first 1000 users, including both clients and mentors, in approximate ratio 80/20.
* Gaining annual revenue of 1500$.
* Set up maximal outflow from our app - 10%.
* Implementing marketing, using Google Ads


![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/w/NurbakZh/GuideLion?color=%2343E0BD&logoColor=%2343E0BD)

![GitHub Repo stars](https://img.shields.io/github/stars/NurbakZh/GuideLion?color=%2343E0BD&label=Github%20Stars&logoColor=%2343E0BD&style=social)

## Development team
1. Dana Kabdullina -
UX/UI designer, product manager: 
Creates user-friendly interfaces, organizes app-architecture
2. Vladislav Zharov -
 CTO of “NDV”, back-end developer, data analytics:
Code back-end part of the app, analyses DB and works with it
3. Nurbek Zhomartov - 
CEO, CFO of “NDV”, front-end developer, main product manager, QA-engineer:
Codes app interfaces, coordinates work of our team, control money flow by negotiating with stakeholders


## 1. Requirements

### Project glossary
* **Mentor** - The person who obtains some skills and knowledge in a certain field and can
share it with clients, with educating or guiding purposes.
* **Client** - The person who wants to gain some knowledge or wants to be guided in a certain
field for self-development.
* **Terms of Service** - Set of rules for both mentor and client type users, which will contain
important information about application.
* **Matching Client with Mentor** - Situation, when client decides to obtain knowledge from a
certain mentor, choosing him/her/etc in application.
* **Online Chatting** - Online chat between user and mentor, similar to chats in Telegram app.
* **Availability of Mentor** - Ability of mentor to obtain more users at a certain period of time.
* **Pricing of Mentors** - Price for mentors work, which are going to be chosen by mentors
themselves, based on the type of mentoring and time used for it. This price can be
changed and negotiated with users.

### Stakeholders Roles

| Role| Responsibility| 
| :---        |:----   |
| Project manager| Prioritize the functional requirements to the development team. Responsible for communicating the project's progress to other stakeholders members. Creating and assigning tasks to the members of development team | 
| Customer| A group of potential users of the application, responsible for providing functional requirements and giving a feedback at weekly reviews.| 
| Sponsor | A person responsible for providing the financial resources for the sucess of the project| 
| Functional Lead| A person responsible for choosing appropriate technology to fulfilling the business needs. |
| Development team members| A group of specialized people responsible for the development and success of a particular are in a project(UX/UI designer, frontend developer, backend developer, QA)| 

### User stories
|User Type| User Story Title| User stories|
| :---        |:----   |:----   |
|All app users| Registration |  As a new user I can register into the application by entering my email password so that I can have access to the full app functionality|
|All app users| Registration | As an authorised user I should be able to upload my profile picture and add a nickname to my account.|
|All app users| Login| As a user I should be able to login to the app using the correct combination of my email and password so that I have access to whole app|
|All app users| Editing client and mentor profiles| As an authorised user, I should be able to change the information in my profile, so that I can keep it up to date|
|All app users| Editing client and mentor profiles|As an authorised user, I should be able to change my password, so that I can restore my account if I forget it|
|Mentor| Displaying the detailed info about mentors|As a mentor, I want to be able to fill in the information about the skills I offer, so that the clients can know it.|
|Mentor| Displaying the detailed info about mentors|As a mentor, I want to show my available time so that clients can book them for meetings.|
|Mentor| Displaying the detailed info about mentors|As a mentor, I should be able to define my pricings on the app, so that clients have an idea of the cost.|
|Mentor| Payment system for mentor’s services|As a mentor, I should fill in the information about my card where I would like to get my funds, so that I can later withdraw them|
|Mentor| Payment system for mentor’s services|As a mentor, I should be able to withdraw the funds that I have earned on the app to my credit card, so that I get my payment.|
|Client| Displaying a list of available mentors for the client|As a client, I want to see the list of available mentors grouped by categories, so that I can easily navigate between them.|
|Client| Displaying a list of available mentors for the client|As a client, I want to search for a mentor by his name or skills, so that I can easily find one|
|Client| Displaying a list of available mentors for the client|As a client, I want to apply sortings and filterings to the mentors, so that it is easy for me to find the suitable one.|
|Client| Matching the client with the mentor of his choice|As a client, I want to choose the available time, so that we can later arrange a meeting|
|Client| Online chatting between a client and a mentor|As a client, I want to text any mentor, so that we can negotiate our plans.|
|Client| Online chatting between a client and a mentor|As a client, I want to receive notifications about new messages so that I do not miss them.|
|Client| Online chatting between a client and a mentor|As a client, I want to see the time zone of the mentor in the chat, so that I can plan out communication.|
|Client| Online chatting between a client and a mentor|As a client, I want to see the history of our messages in the chat, so that I keep the messages in one place.|
|Administrator| Creation of terms of service with rules|As an administrator of the app, I should provide terms of services for all users of the app, so that clients and mentors are familiar with the rules and regulations of the app.|



### Nonfunctional Requirements
|NFR naming| Requirement Description | How do we achieve it|
| :---        |:----   |:----   |
|Security| Secure authorization form for signing up and signing in |Requirements for password: minimum 8 characters, including digits and lower/upper case letters |
|Capacity| Storage amount is scalable and enough to maintain up to 10000 users  |Set a scalable database in postgres |
|Compatibility | Mobile application is compatible on all IOS smartphones starting from IOS 13 or later  |Build an application on using IOS 13 SDK or later on Swift programming language|
|Performance| Messages in the online chat between mentor and client should reach in less than 1 second|Usage of high quality network algorithm|
|Usability| Using client's preferences to suggest optimal mentor|Analyse the previous searches of clients and their inquiries|
|Regulatory | Creation of terms of service with rules. (To help to avoid situations, where users and mentors can move to other fields of communication, bypassing our app.)| Create the rules for the app and make them available to clients and mentors|

## Design

### UML Diagram
### SOLID and Design patterns
We have designed our GuideLion application according to the 5 rules of object oriented design - SOLID. 
1. **S** standing for **Single - Responsibility principle**. Each class and module of our application has a responsibility for a single functionality, so there is exactly one reason of why we might need to make amendments to the class in the future. For example, the class 'Lesson' in our project is only responsible for initializing the lessons between the client and the mentor. So, it's responsibility is limited to a single function of creating a connection in the form of a lesson between a praticular mentor and a particular client
2. **O** standing for  **Open / Closed principle**. We tried to maximize the extendability of our classes without making any additional alters to it. 
3. **L** standing for **Liskov Substitution**. If we derive the class from some base class, then this derived class should substitute the parent class without interrupting the behavior of the project
4. **I** standing for **Interface Segregation principle**. We tried splitting up a larger interfaces into some smaller ones, so that each one is only responsible for a smaller scope of the features that it actually needs.
5. **D** standing for **Dependency Inversion principle**. Relying on this principle, we made the low level modules be dependent on the higher level ones, on the abstraction, but not vice versa.
## Architecture

### Static view diagram
![static view](https://github.com/NurbakZh/GuideLion/blob/e03e8921c802f787c1f1b1141916f0d89971ae53/Static%20View.png)


### Dynamic view diagram
![dynamicview](https://github.com/NurbakZh/GuideLion/blob/66d94ce39df3383d6ec7a9c83a6452265672d1ed/Dynamic%20VIew.png)

## Contribution
Nurbek Zhomartov - Project Manager, Front-end developer \
Dana Kabdullina - UI/UX designer \
Vladislav Zharov - Backend developer \

## Technology stack
* Swift
* PostgresSQL
* Django


## GuideLion app interfaces
![interfaces](https://github.com/NurbakZh/GuideLion/blob/c8b4b8176ebeecf19031c24ce3a1503109b8ca8d/interfaces.png)



