function slp(a)
{
    return Math.round(-0.17*a+481);
}
function htcal()
{
    return Math.round(0.397*innerWidth-36.68);
}
function checkWidth()
{   
    filterSelection("");
    console.log(innerWidth)
    var x1=window.document.getElementById("insti");
    var z=document.getElementById("small-intro");
    var a=document.getElementById("about-me-text");
    var b=document.getElementById("about-me-crsl");
    var cb=document.getElementById("callbox");
    var x=window.innerWidth;
    if(x<992)
    {   cb.style.marginTop="50px";
        z.style.textAlign="center";
        
    }
    else{
        
        cb.style.marginTop="0px";
        
        var d=a.clientHeight;
        var e=Math.round((d-Math.round(b.clientWidth*0.666666)/2))-slp(innerWidth);
        b.style.top=e+"px";
        z.style.textAlign="left";
        
        document.getElementById('call-now').style.height=htcal()+"px";
    }
    var y=document.getElementById("btns");
    if(x<992){
        y.style.textAlign="center";
    }
    else{
        y.style.textAlign="left";

    }
    console.log(innerWidth);
    if(x<768)
    {
        var content = document.getElementById('fi');
        var parent = content.parentNode;
        parent.insertBefore(content, parent.firstChild);
        
        x1.style.textAlign="center";
    }
    else{
        x1.style.textAlign="Left";
       var content=document.getElementById("fi");
        var parent=content.parentNode;
        if(parent.firstChild.id=="fi")
        { //console.log("yes");
            parent.insertBefore(content,parent.lastChild);
        }
    }
}
function modalFunctio(idt)
{
    console.log(idt);
    var x=document.getElementById("modalBody");
    if(idt=="np")
    {
        x.innerHTML="<p>I have done this internship during my winter vacation in 3rd year, I have a decent score of more than 90% in of the courses in NPTEL and through that score I have made a contact with the mentor of the course Sudarshan Iyengar sir and he approved my internship in IIT Ropar, in this internship I have mainly done work on wikipedia data analysis and I learned a lot about data science and published a journal paper after that, it was over all a wonderful experience.</p>";
    }
    else if(idt=="bh")
    {
        x.innerHTML="<p>I have done this internship during my summer vacation of 3rd year, as we all know BHEL is a Govt. of India undertaken company it has its own benefit, the work was mostly based on web development, where me and my team mate made a website for viewing, updating, deleting details of some employees of BHEL, from here I have learnt a lot about web development and it was overall a wonderful journey.</p>";
    }
    else if(idt=="js")
    {
        x.innerHTML="<p>As we all know JavaScript is a wonderful language for web developer currently all the backend and frontend works are directly shift to a single language that is javascript I have started learning this while my internship in bhel, the language is easy to learn and there are lots of predefined function for it which makes it easy for work. </p>";
    }
    else if(idt=="nit")
    {
        x.innerHTML="<p>I have done this internship during the end of my 2nd year, this was the beginning in my era of learning machine learning I have done some work on face recognition based on haar cascade and used it to implement in the NIT Durgapur attendance system for capturing attendance of the students.</p>";
    }
    else if(idt=="dm")
    {
        x.innerHTML="<p>Discrete Mathematics is a wonderful subject I have started learning this subject via a course in NPTEL, my understanding of the subject improved a lot in the meantime I have applied for a internship to a professor and by seeing at my course he has approved my internship and there I learned about wikipedia data analysis.</p>";
    }
    else if(idt=="py")
    {
        x.innerHTML="<p>I have started learning python while I was in 1st year only but I didn’t progress much but in second year I have made a determination to work hard on it and I enrolled a course in python in NPTEL and scored a decent percentage through which I was eligible for earning a gold medal in it and I also got my name in a local newspaper of my college area.</p>";
    }
    else if(idt=="nd")
    {
        x.innerHTML="<p>Node.js is an open-source, cross-platform, JavaScript runtime environment (Framework) that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a \"JavaScript everywhere\" paradigm, unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.</p>";
    }
    else if(idt=="react")
    {
        x.innerHTML="<p>React (also known as React.js or ReactJS) is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router are respective examples of such libraries.</p>";
    }
    else if(idt=="cpp")
    {
        x.innerHTML="<p>As we all know C++ is the best language for competitive coding, every undergraduate student is expected to have a very deep knowledge of it, I had decent knowledge of it before joining my college and utilised it for learning further technologies of it. Every computer programmer must learn it as it is highly essential for getting any placement.</p>";
    }
    

}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  
  if (c == "all") c = "";
  
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}


function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
  
}


function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
  
}

function dwnl(){
    window.location.href = "files/cv_2 (1).pdf";
}
function addCSS(a)
{
    var element = document.getElementById(a);
    element.classList.add("animate__animated", "animate__swing");
    
}
function out(a)
{ 
    console.log("yes");
    var element = document.getElementById(a);
    element.classList.remove("animate__swing");
    element.classList.remove("animate__animated");

}
function out1(a)
{
    var element = document.getElementById(a);
    element.classList.remove("animate__pulse");
    element.classList.remove("animate__animated");
}
function addStyle(a)
{ 
    
    var ele=document.getElementById(a);
    ele.classList.add("animate__animated","animate__pulse");
}
function scr(a)
{ 
    //console.log('dfbdf');
    var element = document.getElementById(a);

    element.scrollIntoView({behavior:"smooth"});
}