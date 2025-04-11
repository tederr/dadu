const storyLines = [
    "Kabhi kabhi ek awaaz... ek yaad ban jaati hai, hamesha ke liye.",
    "Simran – chhoti si bachchi, jiske liye duniya ka sabse bada hero tha... Dadaji.",
    "Dadaji ki god mein hi Simran ki duniya basi thi — unki hasi, unka pyar, unki kahaniyaan.",
    "2010 ki ek shaam... Delhi ki hawaon mein thandi mithaas thi.",
    "Dadaji ne buland awaaz mein kaha — ‘Geetaaa...’",
    "Aur tab... Simran ne apni sabse nannhi, sabse pyari awaaz mein cheekh lagayi —",
    `<span class='highlight'>"GIYAA..."</span>`,
    "Woh pal Dadaji ke chehre par ek alag hi chamak le aaya.",
    "Simran kuch nahi samajh paayi, par Dadaji ki muskaan se sab kuch keh diya gaya.",
    "Wo ek awaaz... ek yaad ban gayi. Simran ke dil ke ek kone mein hamesha ke liye.",
    "Dadaji har shaam Simran ko kahani sunate. Un kahaniyon mein Simran hoti thi — ek chhoti si sherni.",
    "Jab Simran thak jaati thi, to Dadaji ke kandhe par so jaati thi... jaise duniya ka sabse surakshit kona wahi ho.",
    "Samay beeta... aur Dadaji ab yaadon mein hain. Par unki muskaan, unka sparsh... sab Simran ke saath hai.",
    "Kabhi kabhi, aaj bhi jab Simran akele baithi hoti hai... ek awaaz dil se ubharti hai...",
    `<span class='highlight'>"GIYAA..."</span>`,
    "Aisa lagta hai jaise Dadaji ke haath ab bhi uske sar par hain.",
    "Simran muskurati hai... aankhon mein aansu hote hain, par dil mein ek sukoon hota hai.",
    `<span class='highlight'>Kyunki wo jaanti hai — Simran thi, hai... aur hamesha Dadaji ki chhoti ‘GIYAA’ rahegi 💛</span>`
  ];
  
  let index = 0;
  const storyDiv = document.getElementById('story');
  
  function nextLine() {
    if (index < storyLines.length) {
      typeText(storyLines[index]);
      index++;
    } else {
      document.getElementById("ending").style.opacity = 1;
    }
  }
  
  function typeText(text) {
    storyDiv.innerHTML = '';
  
    const hasHTML = /<\/?[a-z][\s\S]*>/i.test(text);
    if (hasHTML) {
      storyDiv.innerHTML = text;
      return;
    }
  
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        storyDiv.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 40);
  }
  
  window.onload = () => {
    document.getElementById('wrapper').addEventListener('click', nextLine);
    nextLine(); // Start with first line
  };
  