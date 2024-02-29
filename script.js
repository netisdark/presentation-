 var englishOption=document.getElementById("oEnglish");
      var nepaliOption=document.getElementById("oNepali");
        var englishLabel=document.getElementById("englishLabel");
      var nepaliLabel=document.getElementById("nepaliLabel");
      
      englishLabel.addEventListener('click', function (){
          englishLabel.setAttribute('class','btn btn-primary');
          nepaliLabel.removeAttribute('class');
          nepaliOption.style.display="none";
          englishOption.style.display="block";
      });
      nepaliLabel.addEventListener('click', function (){
          nepaliLabel.setAttribute('class','btn btn-primary');
          englishLabel.removeAttribute('class');
          nepaliOption.style.display="block";
          englishOption.style.display="none";
      });