console.log("Hacker script loaded");
const titleElement = document.getElementById("title");
if (titleElement) {
  const newTitleElement = document.createElement("pre");
  newTitleElement.textContent = `  
 _______  _______  ___      ___   __   _______    __   __  _______  _______  _______  _______  _______  _______    _______  _______  _______  ______    ______  
|  _    ||       ||   |    |   | |  | |       |  |  |_|  ||       ||       ||       ||   _   ||       ||       |  |  _    ||       ||   _   ||    _ |  |      | 
| |_|   ||    ___||   |    |   | |__| |  _____|  |       ||    ___||  _____||  _____||  |_|  ||    ___||    ___|  | |_|   ||   _   ||  |_|  ||   | ||  |  _    |
|       ||   |___ |   |    |   |      | |_____   |       ||   |___ | |_____ | |_____ |       ||   | __ |   |___   |       ||  | |  ||       ||   |_||_ | | |   |
|  _   | |    ___||   |___ |   |      |_____  |  |       ||    ___||_____  ||_____  ||       ||   ||  ||    ___|  |  _   | |  |_|  ||       ||    __  || |_|   |
| |_|   ||   |___ |       ||   |       _____| |  | ||_|| ||   |___  _____| | _____| ||   _   ||   |_| ||   |___   | |_|   ||       ||   _   ||   |  | ||       |
|_______||_______||_______||___|      |_______|  |_|   |_||_______||_______||_______||__| |__||_______||_______|  |_______||_______||__| |__||___|  |_||______| 
                                                                                                              
                                                                                                               
`;

  const artElement = document.createElement("pre");
  artElement.textContent = `
⠄⣾⣿⡇⢸⣿⣿⣿⠄⠈⣿⣿⣿⣿⠈⣿⡇⢹⣿⣿⣿⡇⡇⢸⣿⣿⡇⣿⣿⣿
⢠⣿⣿⡇⢸⣿⣿⣿⡇⠄⢹⣿⣿⣿⡀⣿⣧⢸⣿⣿⣿⠁⡇⢸⣿⣿⠁⣿⣿⣿
⢸⣿⣿⡇⠸⣿⣿⣿⣿⡄⠈⢿⣿⣿⡇⢸⣿⡀⣿⣿⡿⠸⡇⣸⣿⣿⠄⣿⣿⣿
⢸⣿⡿⠷⠄⠿⠿⠿⠟⠓⠰⠘⠿⣿⣿⡈⣿⡇⢹⡟⠰⠦⠁⠈⠉⠋⠄⠻⢿⣿
⢨⡑⠶⡏⠛⠐⠋⠓⠲⠶⣭⣤⣴⣦⣭⣥⣮⣾⣬⣴⡮⠝⠒⠂⠂⠘⠉⠿⠖⣬
⠈⠉⠄⡀⠄⣀⣀⣀⣀⠈⢛⣿⣿⣿⣿⣿⣿⣿⣿⣟⠁⣀⣤⣤⣠⡀⠄⡀⠈⠁
⠄⠠⣾⡀⣾⣿⣧⣼⣿⡿⢠⣿⣿⣿⣿⣿⣿⣿⣿⣧⣼⣿⣧⣼⣿⣿⢀⣿⡇⠄
⡀⠄⠻⣷⡘⢿⣿⣿⡿⢣⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣜⢿⣿⣿⡿⢃⣾⠟⢁⠈
⢃⢻⣶⣬⣿⣶⣬⣥⣶⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣿⣷⣾⣾⢣
⡄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠘
⣿⡐⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢠⢃
⣿⣷⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⠆⣼
⣿⣿⣷⡀⠄⠈⠛⢿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⠿⠋⠠⠂⢀⣾⣿
⣿⣿⣿⣧⠄⠄⢵⢠⣈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⡁⢰⠏⠄⠄⣼⣿⣿
⢻⣿⣿⣿⡄⢢⠨⠄⣯⠄⠄⣌⣉⠛⠻⠟⠛⢋⣉⣤⠄⢸⡇⣨⣤⠄⢸⣿⣿⣿
  `;

  newTitleElement.after(artElement);
  const newGroupElement = document.createElement("div");
  newGroupElement.classList.add("title-group");
  newTitleElement.classList.add("title");
  newGroupElement.appendChild(newTitleElement);
  artElement.classList.add("art");
  newGroupElement.appendChild(artElement);
  titleElement.replaceWith(newGroupElement);
} else {
  console.error("Element with ID 'title' not found.");
}

const nameThemeElement = document.getElementById("nameTheme");
if (nameThemeElement) {
  nameThemeElement.textContent = `/ ${nameThemeElement.textContent}`;
} else {
  console.error("Element with ID 'nameTheme' not found.");
}

const themeLinks = document.querySelectorAll(".themeLink");
themeLinks.forEach((link) => {
  link.textContent = `/ ${link.textContent}`;
});
