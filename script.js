/* -------For mobile menu --------*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".nav-bar");
const navLink = document.querySelector(".nav-link");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navBar.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navBar.classList.remove("active");
    navLink.classList.remove("active");
  })
);

/*  ---------Dynamic Html for home page ----------*/
const speakerData = [
  {
    speaker_img: "./src/speaker-1.jpeg",
    speaker_name: "Walt Whitman",
    speaker_info: "an American poet, essayist and journalist. A humanist",
    speaker_detail:
      "he was a part of the transition between transcendentalism and realism. Whitman is among the most influential poets in the American canon",
  },
  {
    speaker_img: "./src/speaker-2.jpeg",
    speaker_name: "Allen Ginsberg",
    speaker_info: "an American poet, essayist and writer. A Rebel",
    speaker_detail:
      'Ginsberg is best known for his poem "Howl", in which he denounced what he saw as the destructive forces of capitalism and conformity',
  },
  {
    speaker_img: "./src/speaker-1.jpeg",
    speaker_name: "Walt Whitman",
    speaker_info: "an American poet, essayist and journalist. A humanist",
    speaker_detail:
      "he was a part of the transition between transcendentalism and realism. Whitman is among the most influential poets in the American canon",
  },
  {
    speaker_img: "./src/speaker-2.jpeg",
    speaker_name: "Allen Ginsberg",
    speaker_info: "an American poet, essayist and writer. A Rebel",
    speaker_detail:
      'Ginsberg is best known for his poem "Howl", in which he denounced what he saw as the destructive forces of capitalism and conformity',
  },
  {
    speaker_img: "./src/speaker-1.jpeg",
    speaker_name: "Walt Whitman",
    speaker_info: "an American poet, essayist and journalist. A humanist",
    speaker_detail:
      "he was a part of the transition between transcendentalism and realism. Whitman is among the most influential poets in the American canon",
  },
  {
    speaker_img: "./src/speaker-2.jpeg",
    speaker_name: "Allen Ginsberg",
    speaker_info: "an American poet, essayist and writer. A Rebel",
    speaker_detail:
      'Ginsberg is best known for his poem "Howl", in which he denounced what he saw as the destructive forces of capitalism and conformity',
  },
];

let dynamicSpeakerContent = "";
for (let i = 0; i < speakerData.length; i += 1) {
  dynamicSpeakerContent = `
    <div class="speaker-list">
    <img class="speaker-img" src="${speakerData[i].speaker_img}" alt = "Whalt Whitman" />
    <div>
    <p class="speaker-name">${speakerData[i].speaker_name}</p>
    <p class = "speaker-info">${speakerData[i].speaker_info}</p>
    <div class = "sm-line">
    </div>
    <p class = "speaker-detail">${speakerData[i].speaker_detail}</p>
    </div>
    </div>
  `;
  document.getElementsByClassName("speaker-list-wrap")[0].innerHTML +=
    dynamicSpeakerContent;
}

const programData = [
  {
    program_icon: "./src/program-intro-icon.png",
    program_event: "Introduction",
    event_detail: "Introduction about the event and the poets",
  },
  {
    program_icon: "./src/program-exibition-icon.png",
    program_event: "Exibition",
    event_detail:
      "Informative session about invited poets works and publication",
  },
  {
    program_icon: "./src/program-workshop-icon.png",
    program_event: "Workshop",
    event_detail: "Try express your ideas.",
  },
  {
    program_icon: "./src/program-pannel-discussion-icon.png",
    program_event: "Pannel discussion",
    event_detail: "Discussion about contemporary poetry and its influence",
  },
];
let dynamicProgramContent = "";
for (let i = 0; i < programData.length; i += 1) {
  dynamicProgramContent = `
                     <div class="program-info">
                <img src="${programData[i].program_icon}" alt = "Introduction"">
                    <h4>${programData[i].program_event}</h4>
                    <p>${programData[i].event_detail}</p>
                    </div>
  `;
  document.getElementsByClassName("program-info-wrap")[0].innerHTML +=
    dynamicProgramContent;
}
