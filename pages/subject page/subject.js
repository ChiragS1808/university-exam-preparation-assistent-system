const subjects = {

    dbms: {

        name: "Database Management System",

        description:
        "DBMS helps manage and organize data.",

        notes:[
{
    title:"Unit 1 Notes",
    link:"https://docs.google.com/document/d/12q7db-yp8AwcrNeSeQDz_qkkfEt3CDKr/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
},

{
    title:"Unit 2 Notes",
    link:"https://docs.google.com/document/d/10riAi0P15lV0mzeA8l42d12yyi0ikXAk/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
},
{
    title:"Unit 3 Notes",
    link:"https://docs.google.com/document/d/1V5yUYPHwWk7D25XwxGq_MFl4RaMEAHiI/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
},
{
    title:"Unit 4 Notes",
    link:"https://docs.google.com/document/d/1JgCrvsZ-GhBnUAhP1lLAR60J6UBMqTF8/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
},
{
    title:"Unit 5 Notes",
    link:"https://docs.google.com/document/d/1uZxB57_zTqrmhUOu6AZODKeVBQCFYE39/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
}
],

       pyqs:[
{
title:"RGPV 2024 Regular",
link:"https://docs.google.com/document/d/1n9z-JLYgqUmrm-kmC89MKgFEJ296W2jg/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
},

{
title:"RGPV 2025 Regular",
link:"https://docs.google.com/document/d/1UB-_BqMpsUphEq8wnRth2gLgJNE7Jo5v/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
}
],

        youtube:[
{
title:"Gate Smashers Playlist",
link:"https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&si=HFi9hbxwiEsingJe"
},

{
title:"Knowledge Gate Playlist",
link:"https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=tyHzliQbjbUL2nVE"
}
],

        modelPapers:[
{
title:"Model Paper 1",
link:"https://docs.google.com/document/d/18f7nxG7RSETMfjBgdP1gbgCHa1v0VGrK/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
},

{
title:"Model Paper 2",
link:"https://docs.google.com/document/d/1-QJ95YZkzLbtrPLFI2BziPPLCj3ZCq0P/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
}
]
    },

    de: {

        name: "Digital Electronics",

        description:
        "Study of logic gates and circuits.",

               notes:[
{
    title:"Unit 1 Notes",
    link:"https://docs.google.com/document/d/1Ym1gh2vm1D2BU_55XqnAOteU15pIfFrU/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
},

{
    title:"Unit 2 Notes",
    link:"https://docs.google.com/document/d/1x9-lMWcl5MEGOBezqJ_u2kHTpaKFH3tF/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
},
{
    title:"Unit 3 Notes",
    link:"https://docs.google.com/document/d/1Cgqrs-yMuVdVTB0C4MGEETOnWyBQ9dlw/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
},
{
    title:"Unit 4 Notes",
    link:"https://docs.google.com/document/d/1VRAAJSm1IQLN1y2zuEuQOj199jZD_d_O/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
},
{
    title:"Unit 5 Notes",
    link:"https://docs.google.com/document/d/1SZA-mQz_I5rIVeBEamhzn-IucOtQEXXg/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
}
],

            pyqs:[
{
title:"RGPV 2024 Regular",
link:"https://docs.google.com/document/d/1oCEwOd5ISGuIFElzgmN4-SnHw8OUcm7j/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
},

{
title:"RGPV 2025 Regular",
link:"https://docs.google.com/document/d/1qEJMElkfuHYwzA50h6tOevV4mQoVatJ2/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
}
],

        youtube:[
{
title:"Gate Smashers Playlist",
link:"https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&si=qBCrkaJ2HpIBR6Mj"
},

{
title:"Knowledge Gate Playlist",
link:"https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=JvS483vcBT7r5jZM"
}
],

        modelPapers:[
{
title:"Model Paper 1",
link:"https://docs.google.com/document/d/1q82B2n8q0BJm-vaRVoaT3vUoJkEJGbE7/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
},

{
title:"Model Paper 2",
link:"https://docs.google.com/document/d/1icCaOa9lsZundI_Akf_pPYkhN44ZEMvQ/edit?usp=sharing&ouid=106380457165604670926&rtpof=true&sd=true"
}
]

    }

};

let params =
new URLSearchParams(window.location.search);

let subjectId =
params.get("subject");

let subject =
subjects[subjectId];

if(!subject){
    alert("Subject not found");
}

document.getElementById(
"subjectName"
).textContent =
subject.name;

document.getElementById(
"subjectDescription"
).textContent =
subject.description;

let notesHTML = "";

for(let note of subject.notes)
{
    notesHTML += `

    <a
    href="${note.link}"
    download
    class="d-block mb-2">

        ${note.title}

    </a>

    `;
}

document.getElementById(
"notesSection"
).innerHTML =
notesHTML;

let pyqHTML = "";

for(let pyq of subject.pyqs)
{
    pyqHTML += `

    <a
    href="${pyq.link}"
    download
    class="d-block mb-2">

        ${pyq.title}

    </a>

    `;
}

document.getElementById(
"pyqSection"
).innerHTML =
pyqHTML;

let youtubeHTML = "";

for(let video of subject.youtube)
{
    youtubeHTML += `

    <a
    href="${video.link}"
    target="_blank"
    class="d-block mb-2">

        ${video.title}

    </a>

    `;
}

document.getElementById(
"youtubeSection"
).innerHTML =
youtubeHTML;


let modelHTML = "";

for(let paper of subject.modelPapers)
{
    modelHTML += `

    <a
    href="${paper.link}"
    download
    class="d-block mb-2">

        ${paper.title}

    </a>

    `;
}

document.getElementById(
"modelPaperSection"
).innerHTML =
modelHTML;