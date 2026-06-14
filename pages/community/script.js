
// here above summery section is showing student doubt on webpage so it should be replaced with student name.
let posts = [];
let savedPosts =
sessionStorage.getItem("posts");

if(savedPosts){

    posts =
    JSON.parse(savedPosts);

}



let textChip =
document.getElementById("textChip");

let imageChip =
document.getElementById("imageChip");

let textSection =
document.getElementById("textSection");

let imageSection =
document.getElementById("imageSection");


textChip.addEventListener("click",function(){

    textSection.style.display="block";
    imageSection.style.display="none";

});


imageChip.addEventListener("click",function(){

    textSection.style.display="none";
    imageSection.style.display="block";

});

let uploadBtn =
document.getElementById("uploadBtn");

let count = 0;



uploadBtn.addEventListener("click",function(){

    let doubt =
    document.getElementById("doubtText").value;

    let imageFile =
    document.getElementById("imageInput").files[0];

    if(
        doubt === "" &&
        !imageFile
    ){
        return;
    }

    count++;

    let accordion =
    document.getElementById("communityPosts");

    // TEXT POST

    if(doubt !== "")
    {
        accordion.innerHTML += `

        <div class="accordion-item">

            <h2 class="accordion-header">

                <button
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#item${count}">

                    ${sessionStorage.getItem("userName")}

                </button>

            </h2>

            <div
            id="item${count}"
            class="accordion-collapse collapse">

                <div class="accordion-body">

                    ${doubt}

                </div>

            </div>

        </div>

        `;
        if(imageFile)
{
    let reader = new FileReader();

    reader.onload = function(){

        count++;

        accordion.innerHTML += `

        <div class="accordion-item">

            <h2 class="accordion-header">

                <button
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#item${count}">

                    Uploaded Image

                </button>

            </h2>

            <div
            id="item${count}"
            class="accordion-collapse collapse">

                <div class="accordion-body">

                    <img
                    src="${reader.result}"
                    class="img-fluid rounded">

                </div>

            </div>

        </div>

        `;
    };

    reader.readAsDataURL(imageFile);
}
    }

});

