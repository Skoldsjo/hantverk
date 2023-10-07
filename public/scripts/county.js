// County dropdown menu START

$(document).ready(function(){
    $("#subject").change(function(){
      var selectedValue = this.value;
  
      $('#county-choose').hide();
      $('#county-blekinge').hide();
      $('#county-dalarna').hide();
      $('#county-gottland').hide();
      $('#county-gavleborg').hide();
      $('#county-goteborg').hide();
      $('#county-halland').hide();
      $('#county-jamtland').hide();
      $('#county-jonkoping').hide();
      $('#county-kalmar').hide();
      $('#county-kronoberg').hide();
      $('#county-norrbotten').hide();
      $('#county-skaraborg').hide();
      $('#county-skane').hide();
      $('#county-stockholm').hide();
      $('#county-sodermanland').hide();
      $('#county-uppsala').hide();
      $('#county-varmland').hide();
      $('#county-vasterbotten').hide();
      $('#county-vasternorrland').hide();
      $('#county-vastmanland').hide();
      $('#county-alvsborg').hide();
      $('#county-orebro').hide();
      $('#county-ostergotland').hide();
    
  
      if (selectedValue === '.empty') {
        $('#county-choose').show();
      } else if (selectedValue === '.blekinge') {
        $('#county-blekinge').show();
      } else if (selectedValue === '.dalarna') {
        $('#county-dalarna').show();  
      } else if (selectedValue === '.gottland') {
        $('#county-gottland').show();  
      } else if (selectedValue === '.gavleborg') {
        $('#county-gavleborg').show();  
      } else if (selectedValue === '.goteborg') {
        $('#county-goteborg').show();  
      } else if (selectedValue === '.halland') {
        $('#county-halland').show();  
      } else if (selectedValue === '.jamtland') {
        $('#county-jamtland').show();  
      } else if (selectedValue === '.jonkoping') {
        $('#county-jonkoping').show();  
      } else if (selectedValue === '.kalmar') {
        $('#county-kalmar').show();  
      } else if (selectedValue === '.kronoberg') {
        $('#county-kronoberg').show();  
      } else if (selectedValue === '.norrbotten') {
        $('#county-norrbotten').show();  
      } else if (selectedValue === '.skaraborg') {
        $('#county-skaraborg').show();  
      } else if (selectedValue === '.skane') {
        $('#county-skane').show();
      } else if (selectedValue === '.stockholm') {
        $('#county-stockholm').show();
      } else if (selectedValue === '.sodermanland') {
        $('#county-sodermanland').show();
      } else if (selectedValue === '.uppsala') {
        $('#county-uppsala').show();
      } else if (selectedValue === '.varmland') {
        $('#county-varmland').show();
      } else if (selectedValue === '.vasterbotten') {
        $('#county-vasterbotten').show();
      } else if (selectedValue === '.vasternorrland') {
        $('#county-vasternorrland').show();
      } else if (selectedValue === '.vastmanland') {
        $('#county-vastmanland').show();
      } else if (selectedValue === '.alvsborg') {
        $('#county-alvsborg').show();
      } else if (selectedValue === '.orebro') {
        $('#county-orebro').show();
      } else if (selectedValue === '.ostergotland') {
        $('#county-ostergotland').show();
      }
    });
  });
  
  // County dropdown menu END