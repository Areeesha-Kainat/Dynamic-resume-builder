// Adding a new Language field
function addNewLanField(): void {
    const newNode: HTMLInputElement = document.createElement("input");
    newNode.classList.add("form-control", "laField", "mt-2");
    newNode.setAttribute("placeholder", "Enter here");
  
    const aqOb: HTMLElement = document.getElementById("la")!;
    const aqAddButtonOb: HTMLElement = document.getElementById("laAddButton")!;
    
    aqOb.insertBefore(newNode, aqAddButtonOb);
  }
  
  // Adding a new Education field
  function addNewEdField(): void {
    const newNode: HTMLTextAreaElement = document.createElement("textarea");
    newNode.classList.add("form-control", "edField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");
  
    const aqOb: HTMLElement = document.getElementById("ed")!;
    const aqAddButtonOb: HTMLElement = document.getElementById("aqAddButton")!;
    
    aqOb.insertBefore(newNode, aqAddButtonOb);
  }
  
  // Adding a new Title field
  function addNewTiField(): void {
    const x: HTMLInputElement = document.createElement("input");
    x.classList.add("form-control", "tiField", "mt-2");
    x.setAttribute("placeholder", "Enter title");
  
    const aqOb: HTMLElement = document.getElementById("we")!;
    const aqAddButtonOb: HTMLElement = document.getElementById("weAddButton")!;
    
    aqOb.insertBefore(x, aqAddButtonOb);
  }
  
  // Adding a new Work Experience field
  function addNewWEField(): void {
    const newNode: HTMLTextAreaElement = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter Experience");
  
    const weOb: HTMLElement = document.getElementById("we")!;
    const weAddButtonOb: HTMLElement = document.getElementById("weAddButton")!;
    
    weOb.insertBefore(newNode, weAddButtonOb);
  }
  
  // Adding a new Skill field
  function addNewAQField(): void {
    const newNode: HTMLInputElement = document.createElement("input");
    newNode.classList.add("form-control", "skField", "mt-2");
    newNode.setAttribute("placeholder", "Enter here");
  
    const aqOb: HTMLElement = document.getElementById("sk")!;
    const aqAddButtonOb: HTMLElement = document.getElementById("skAddButton")!;
    
    aqOb.insertBefore(newNode, aqAddButtonOb);
  }
  
  // Generating the CV
  function generateCV(): void {
    // Personal Information
    document.getElementById("nName")!.innerHTML = (
      document.getElementById("nameField")! as HTMLInputElement
    ).value;
  
    document.getElementById("jJob")!.innerHTML = (
      document.getElementById("jobFiled")! as HTMLInputElement
    ).value;
  
    document.getElementById("cContact")!.innerHTML = (
      document.getElementById("contactField")! as HTMLInputElement
    ).value;
  
    document.getElementById("gGmail")!.innerHTML = (
      document.getElementById("gmailFiled")! as HTMLInputElement
    ).value;
  
    document.getElementById("fFacebook")!.setAttribute(
      "href",
      (document.getElementById("fbField")! as HTMLInputElement).value
    );
  
    document.getElementById("lLinkedin")!.setAttribute(
      "href",
      (document.getElementById("linkedField")! as HTMLInputElement).value
    );
  
    // Languages
    const languages = document.getElementsByClassName("laField") as HTMLCollectionOf<HTMLInputElement>;
    let lanF: string = "";
    for (const e of languages) {
      lanF += `<li><span>${e.value}</span></li>`;
    }
    document.getElementById("lan")!.innerHTML = lanF;
  
    // Objective
    document.getElementById("objectiveT")!.innerHTML = (
      document.getElementById("objectiveField")! as HTMLTextAreaElement
    ).value;
  
    // Education
    const educationF = document.getElementsByClassName("edField") as HTMLCollectionOf<HTMLTextAreaElement>;
    let resEdu: string = "";
    for (const e of educationF) {
      resEdu += `<li><p>${e.value}</p></li>`;
    }
    document.getElementById("edu")!.innerHTML = resEdu;
  
    // Work Experience
    const wes = document.getElementsByClassName("weField") as HTMLCollectionOf<HTMLTextAreaElement>;
    let str: string = "";
    for (const e of wes) {
      str += `<li class="squar"><h4>${e.value}</h4></li>`;
    }
    document.getElementById("weT")!.innerHTML = str;
  
    // Professional Skills
    const aqs = document.getElementsByClassName("skField") as HTMLCollectionOf<HTMLInputElement>;
    let str1: string = "";
    for (const e of aqs) {
      str1 += `<li class="squar"><h4>${e.value}</h4></li>`;
    }
    if (str1.length) document.getElementById("skills")!.innerHTML = str1;
  
    // Profile Picture
    const file = (document.getElementById("imgField")! as HTMLInputElement).files![0];
    const reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    reader.onloadend = function () {
      (document.getElementById("imgTemplate")! as HTMLImageElement).src = reader.result as string;
    };
  }
  
  // Print the CV
  function printCV(): void {
    document.getElementById("cv-form")!.style.display = "none";
    document.getElementById("cv-template")!.style.display = "block";
    document.getElementById("btnN")!.style.display = "none";
    window.print();
  }
  