let btn = document.getElementById('CvBtn');
let btn2 = document.getElementById('CvBtn2');
let CV = document.getElementById('cv');
let FileBtn = document.getElementById('Files');
let FilesFolder = document.getElementById('FFolder');

btn.addEventListener('click', () => {
    if(CV.style.display === "none"){
        CV.style.display = "block";
    }else {
        CV.style.display = "block";
    }
})

btn2.addEventListener('click', () => {
    if(CV.style.display === "none"){
        CV.style.display = "block";
    }else {
        CV.style.display = 'none';
    }

})
///Files
    FileBtn.addEventListener('click', () => {
        if(FilesFolder.style.display === "none"){
            FilesFolder.style.display = "block";
        }else {
            FilesFolder.style.display = "none";
        }
    });


    /// Change color of File onclick

    FileBtn.addEventListener('click', () => {
        if(FileBtn.style.color === 'black'){
            FileBtn.style.color = '#d9d9d9';
        }else {
            FileBtn.style.color = 'black';
        }
    })

    FileBtn.addEventListener('click', () => {
        if(FileBtn.style.backgroundColor === 'rgb(217, 217, 217)'){
            FileBtn.style.backgroundColor = 'black';
        }else {
            FileBtn.style.backgroundColor = 'rgb(217, 217, 217)';
        }
    })

    let HoverFiles = document.getElementById('HiddenFiles');

    HoverFiles.addEventListener('mouseover', (event) =>{
        event.target.style.backgroundColor = "black";
        
        event.target.style.color = "#d9d9d9";   
    });

    HoverFiles.addEventListener('mouseout', (event) =>{
        event.target.style.backgroundColor = '';
        event.target.style.color = '';
    });


    let Milli = document.getElementById('MiliIcon');

    HoverFiles.addEventListener('click', () => {
        if(Milli.style.display === "none"){
            Milli.style.display = "block";
        }else {
            Milli.style.display = "none";
        }
    });

    HoverFiles.addEventListener('click', () => {
        if(FilesFolder.style.display === "none"){
            FilesFolder.style.display = "block";
        }else {
            FilesFolder.style.display = "none";
        }
    });

    HoverFiles.addEventListener('click', () => {
        if(FileBtn.style.backgroundColor === 'rgb(217, 217, 217)'){
            FileBtn.style.backgroundColor = 'black';
        }else {
            FileBtn.style.backgroundColor = 'rgb(217, 217, 217)';
        }
    });

    HoverFiles.addEventListener('click', () => {
        if(FileBtn.style.color === 'black'){
            FileBtn.style.color = '#d9d9d9';
        }else {
            FileBtn.style.color = 'black';
        }
    })


    let error = document.getElementById('error') 
    let errorClose = document.getElementById('ErrorClose')

    Milli.addEventListener('click', () => {
        if(error.style.display === "none"){
            error.style.display = "block";
        }else {
            error.style.display = "block";
        }
    });

    errorClose.addEventListener('click', () => {
        if(error.style.display === "none"){
            error.style.display = "block";
        }else {
            error.style.display = "none";
        }
    });

let WindowsBtn = document.getElementById('Windows');
let WindowsFolder = document.getElementById('WFolder');  



WindowsBtn.addEventListener('click', () => {
    if(WindowsFolder.style.display === "none"){
        WindowsFolder.style.display = "block";
    }else {
        WindowsFolder.style.display = "none";
    }
});

WindowsBtn.addEventListener('click', () => {
    if(WindowsBtn.style.color === 'black'){
        WindowsBtn.style.color = '#d9d9d9';
    }else {
        WindowsBtn.style.color = 'black';
    }
});


let About = document.getElementById('About');

About.addEventListener('mouseover', (event) =>{
    event.target.style.backgroundColor = "black";
    
    event.target.style.color = "#d9d9d9";   
});


About.addEventListener('mouseout', (event) =>{
    event.target.style.backgroundColor = '';
    event.target.style.color = '';
});


let EditFolder = document.getElementById('EFolder');
let EditBtn = document.getElementById('Edit');
let PrintBtn = document.getElementById('Print');

EditBtn.addEventListener('click', () => {
    if(EditFolder.style.display === "none"){
        EditFolder.style.display = "block";
    }else {
        EditFolder.style.display = "none";
    }
});

EditBtn.addEventListener('click', () => {
    if(EditBtn.style.color === 'black'){
        EditBtn.style.color = '#d9d9d9';
    }else {
        EditBtn.style.color = 'black';
    }
});


EditBtn.addEventListener('click', () => {
    if(EditBtn.style.backgroundColor === 'rgb(217, 217, 217)'){
        EditBtn.style.backgroundColor = 'black';
    }else {
        EditBtn.style.backgroundColor = 'rgb(217, 217, 217)';
    }
});


PrintBtn.addEventListener('mouseover', (event) =>{
    event.target.style.backgroundColor = "black";
    
    event.target.style.color = "#d9d9d9";   
});

PrintBtn.addEventListener('mouseout', (event) =>{
    event.target.style.backgroundColor = '';
    event.target.style.color = '';
});


/// Social Folder

let SocialFolder = document.getElementById('SFolder');
let SocialBtn = document.getElementById('Social');
let GitBtn = document.getElementById('Github');
let LinkBtn = document.getElementById('Linkedin');

SocialBtn.addEventListener('click', () => {
    if(SocialFolder.style.display === "none"){
        SocialFolder.style.display = "block";
    }else {
        SocialFolder.style.display = "none";
    }
});

SocialBtn.addEventListener('click', () => {
    if(SocialBtn.style.color === 'black'){
        SocialBtn.style.color = '#d9d9d9';
    }else {
        SocialBtn.style.color = 'black';
    }
});

SocialBtn.addEventListener('click', () => {
    if(SocialBtn.style.backgroundColor === 'rgb(217, 217, 217)'){
        SocialBtn.style.backgroundColor = 'black';
    }else {
        SocialBtn.style.backgroundColor = 'rgb(217, 217, 217)';
    }
});

GitBtn.addEventListener('mouseover', (event) =>{
    event.target.style.backgroundColor = "black";
    
    event.target.style.color = "#d9d9d9";   
});

GitBtn.addEventListener('mouseout', (event) =>{
    event.target.style.backgroundColor = '';
    event.target.style.color = '';
});

LinkBtn.addEventListener('mouseover', (event) =>{
    event.target.style.backgroundColor = "black";
    
    event.target.style.color = "#d9d9d9";   
});

LinkBtn.addEventListener('mouseout', (event) =>{
    event.target.style.backgroundColor = '';
    event.target.style.color = '';
});

let GameBtn = document.getElementById('GameBtn');
let GFolder = document.getElementById('GFolder');
let GameBtn2 = document.getElementById('GameBtn2');

GameBtn.addEventListener('click', () => {
    if(GFolder.style.display === "none"){
        GFolder.style.display = "block";
    }else {
        GFolder.style.display = "block";
    }
})

GameBtn2.addEventListener('click', () => {
    if(GFolder.style.display === "none"){
        GFolder.style.display = "block";
    }else {
        GFolder.style.display = 'none';
    }

})


/// About folder

let AboutBtn2 = document.getElementById('AboutBtn2');
let AbFolder = document.getElementById('AbFolder')


About.addEventListener('click', () => {
    if(AbFolder.style.display === "none"){
        AbFolder.style.display = "block";
    }else {
        AbFolder.style.display = "block";
    }
})

AboutBtn2.addEventListener('click', () => {
    if(AbFolder.style.display === "none"){
        AbFolder.style.display = "block";
    }else {
        AbFolder.style.display = 'none';
    }

})

About.addEventListener('click', () => {
    if(WindowsFolder.style.display === "none"){
        WindowsFolder.style.display = "block";
    }else {
        WindowsFolder.style.display = "none";
    }
});


let user = document.getElementById('user');
let mainPage = document.getElementById('mainPage')


user.addEventListener('click', () => {
    if(mainPage.style.display === "none"){
        mainPage.style.display = "block";
    }else {
        mainPage.style.display = "none";
    }
})

