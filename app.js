
//create socials 
const socialSection = document.querySelector(".socials");
const socialList = ["instagram", "linkedin", "twitter"];
const urlList = ["https://www.instagram.com/patrickpaddypacman/",
"https://www.linkedin.com/in/patrick-tang-60a70a1a/",
"https://twitter.com/MrPatrickPCT/"
]

for(let i=0; i<socialList.length; i++){
    let container = document.createElement("div");
    container.className="social-container";
    container.innerHTML =
    `
    <a href="${urlList[i]}" target="_blank"><img src="svgs/${socialList[i]}.svg" alt="${socialList[i]} logo"></a>
    `
    socialSection.appendChild(container);
}

//function to create a card
function createCard(cards, languages, img, url, text, alt, projectTitle){
    let cardDiv = document.createElement("div");
    cardDiv.className = "card reveal";
    
    cardDiv.innerHTML =
    `
    ${createImageWithUrlButton(url, img, alt)}
    <h3>${projectTitle}</h3>
    <div class= cardText>
        <p>${text}</p>
    </div>                    
    `
    let languageList = document.createElement("ul");
    languageList.className="languages";
    for(let i = 0; i<languages.length; i++){
        let li = document.createElement("li")
        li.textContent = languages[i];
        languageList.appendChild(li);
    }
    
    cardDiv.appendChild(languageList);   
    cards.push(cardDiv);
}

function createImageWithUrlButton(url, img, alt){
    let image;   
    image =
    `
    <img src="images/${img}" alt="${alt}">

    <a class="project-button "href="${url}"  target="_blank">See Project     
    </a>
            
    `
    return image;
}

//function to set the cards on a page
function setCards(div, cards){
    for(let i = 0; i<cards.length; i++){
        if(i==0){
            div.appendChild(cards[i]);
        }else{
            div.insertBefore(cards[i], div.childNodes[0]);
        }        
    }
}


//create cards with content for Web development page
let webDevCards = [];
let webDevDiv = document.querySelector(".webDevCards")


    createCard(webDevCards, ["HTML", "CSS"], "responsive-website_desktop1024.png", 
    "https://PakChiTang.github.io/mytechdegreeproject2/", 
    "Using CSS and media queries, I made a site that is responsive for three different screen sizes (mobile, tablet and desktop).", 
    "Screenshot of Responsive design project", "Responsive design project");

    createCard(webDevCards, ["CSS", "SASS"], "sass.PNG", 
    "https://pakchitang.github.io/Techdegreeproject4/Techdegreeproject4/index.html", 
    "Using Sass to create an awesome styled site", 
    "Screenshot of Sass Styling project", "Sass styling project");
    
    createCard(webDevCards,["HTML", "CSS", "Javascript"], "photogallery.PNG", 
    "https://PakChiTang.github.io/techdegreeproject5/", 
    "In this project we had to implement an existing javascript feature called 'baguetteBox'.I also wrote Javascript code to make a custom search bar.", 
    "Screenshot of Photo gallery project", "Photo gallery project");
    
    createCard(webDevCards,["HTML", "CSS", "Javascript"], "wheelofsuccess.PNG", 
    "https://PakChiTang.github.io/techdegreeproject6/",
    "For this project I used Javascript to build a working guessing game, called Wheel of Success",
    "Screenshot of Wheel of Success project", "Wheel of Success");
    
    createCard(webDevCards,["HTML", "CSS", "Javascript"], "webapp.PNG", 
    "https://PakChiTang.github.io/techdegreeproject7/", 
    "Writing lots of CSS and using Javascript to make the page function like a dashboard", 
    "screenshot of the WebApp project", "WebApp project"); 

    createCard(webDevCards,["HTML", "CSS", "Javascript"], "startuplibrary.PNG", 
    "https://PakChiTang.github.io/techdegreeproject8/", 
    "I made this employee directory with Javascript. The directory is filled with random users, which are fetched from an API, and then displayed on the site. ", 
    "screenshot of the API project", "Using an API to build a page"); 
    
    
setCards(webDevDiv, webDevCards);

// Awesome site features

webDevDiv.addEventListener('mouseover', (e)=>{
    if(e.target !== webDevDiv){
        showOrHideButton(e.target, true);
    }

});

webDevDiv.addEventListener('mouseout', (e)=>{
    if(e.target !== webDevDiv){
        showOrHideButton(e.target, false)
    }

});

function showOrHideButton(target, hover){
    const card = target.closest(".card");
    const button = card.querySelector(".project-button")
    const img = card.querySelector("img");
   if(hover){
    img.style.opacity = "0.3";
    button.style.display = "block";
   }else{
    img.style.opacity = "1";
    button.style.display = "none";
   }
   
}

window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll(".reveal");
    for(let i=0; i< reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowHeight - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}

//credit for scroll reveal: https://www.youtube.com/watch?v=VplDlwLTR50&t=541s