Övningsuppgift - Blogginlägg (React + API)
 

<!-- Vid start av applikationen, hämta samtliga inlägg från följande API: https://jsonplaceholder.typicode.com/posts
 -->
<!-- För varje post, rendera en <Post/>-komponent med ett inlägg som visar ut dess titel och textinnehåll. Längst ner i varje post ska det finnas en knapp för att visa information om användaren som skrev inlägget.
 -->
<!-- När knappen klickas på ska komponenten <UserInfo/> renderas inuti <Post/>-komponenten. -->

<!-- När <UserInfo/> renderas, ska data för användaren hämtas från /users-endpointen i samma API med hjälp av det id som skrev inlägget (userId).
 -->
(T.ex om inläggets userId är 3, hämtar du data från https://jsonplaceholder.typicode.com/users/3)

I <UserInfo>-komponenten ska du skriva ut användarens användarnamn, email samt stad.

Extra: Varje <Post/> ska även automatiskt ladda in kommentarer med respektive postId från /comments-endpointen: https://jsonplaceholder.typicode.com/comments/
