let imageurl;

function uploadingfile(){
    const fileInput=document.getElementById("filepicker");
    const image=fileInput.files[0];
    const formData=new FormData();
    formData.append("image_file",image);
    formData.append("size","auto");
    const apikey='sXkrG3bjzozr1p7Ppv37g1Jp';             //Place it your apikey(from remove.bg site)
    fetch("https://api.remove.bg/v1.0/removebg",{          //Getting removal image from removebg 
        method:"POST",
        headers:{
            'X-Api-Key': apikey,
        },
        body:formData
    })
    .then(function(response){
        return response.blob();
    })
    .then(function(blob){
        console.log(blob);
        
        const url=URL.createObjectURL(blob);        //Generating image as url
        imageurl=url;
        console.log(url);
        
        let imagesource=document.getElementById("imagesource");
        imagesource.src=url;        
    })
    .catch();
}


function downloadFile(){
    var anchorElement=document.createElement("a");          //Image Downloading process
    anchorElement.href=imageurl;
    anchorElement.download="removalbg.png";
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
}